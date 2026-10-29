import fs from "fs";
import path from "path";

// A clean, standard PDF 1.4 generator without any external dependencies
class SimplePdfWriter {
  constructor() {
    this.objects = [];
    this.pages = [];
  }

  addObject(content) {
    this.objects.push(content);
    return this.objects.length; // 1-indexed ID
  }

  createPage(streamContent) {
    const streamBuffer = Buffer.from(streamContent, "utf-8");
    const streamLen = streamBuffer.length;

    const streamObjId = this.addObject(
      `<< /Length ${streamLen} >>\nstream\n${streamContent}\nendstream`
    );

    const pageObjId = this.addObject(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /Font << /F1 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> /F2 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> /F3 << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >> >> >> /Contents ${streamObjId} 0 R >>`
    );

    this.pages.push(pageObjId);
    return pageObjId;
  }

  build() {
    // We reserve objects 1 and 2 for Catalog and Pages
    // So let's re-assemble
    let finalObjects = [];
    
    // Obj 1: Catalog
    finalObjects.push(`<< /Type /Catalog /Pages 2 0 R >>`);
    
    // Obj 2: Pages list
    const kidsStr = this.pages.map((id) => `${id + 2} 0 R`).join(" ");
    finalObjects.push(`<< /Type /Pages /Kids [${kidsStr}] /Count ${this.pages.length} >>`);
    
    // Remaining objects
    for (const obj of this.objects) {
      finalObjects.push(obj);
    }

    let pdf = "%PDF-1.4\n";
    let offsets = [0]; // offset 0
    let currentOffset = Buffer.byteLength(pdf, "ascii");

    for (let i = 0; i < finalObjects.length; i++) {
      offsets.push(currentOffset);
      const objStr = `${i + 1} 0 obj\n${finalObjects[i]}\nendobj\n`;
      pdf += objStr;
      currentOffset += Buffer.byteLength(objStr, "ascii");
    }

    const startXref = currentOffset;
    pdf += "xref\n";
    pdf += `0 ${finalObjects.length + 1}\n`;
    pdf += "0000000000 65535 f \n";
    for (let i = 1; i <= finalObjects.length; i++) {
      const off = offsets[i].toString().padStart(10, "0");
      pdf += `${off} 00000 n \n`;
    }

    pdf += "trailer\n";
    pdf += `<< /Size ${finalObjects.length + 1} /Root 1 0 R >>\n`;
    pdf += "startxref\n";
    pdf += `${startXref}\n`;
    pdf += "%%EOF\n";

    return Buffer.from(pdf, "ascii");
  }
}

function escapePdf(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function generateResumePdf() {
  const writer = new SimplePdfWriter();

  // PAGE 1 Content
  let p1 = `
q
% Background banner
0.03 0.45 0.72 rg
36 788 523 2 re f

% Title
BT
/F2 20 Tf
0.05 0.1 0.2 rg
36 800 Td
(${escapePdf("DEBARAJ MALIK")}) Tj
ET

BT
/F2 11 Tf
0.02 0.48 0.75 rg
36 774 Td
(${escapePdf("Application Developer | Full Stack Developer (Team Lead)")}) Tj
ET

BT
/F1 9 Tf
0.25 0.3 0.35 rg
36 760 Td
(${escapePdf("debarajmalik07@gmail.com   |   +91 9348043462   |   linkedin.com/in/debaraj07   |   github.com/Devraj070")}) Tj
ET

BT
/F1 9 Tf
0.25 0.3 0.35 rg
36 748 Td
(${escapePdf("Location: Bhubaneswar, Odisha, India")}) Tj
ET

% SECTION: PROFESSIONAL SUMMARY
BT
/F2 10 Tf
0.02 0.48 0.75 rg
36 724 Td
(${escapePdf("PROFESSIONAL SUMMARY")}) Tj
ET

q
0.8 0.85 0.9 rg
36 720 523 0.5 re f
Q

BT
/F1 9 Tf
0.2 0.25 0.3 rg
36 706 Td
(${escapePdf("React Native, Flutter, MERN Stack and Next.js developer with hands-on experience building and shipping")}) Tj
T*
(${escapePdf("production web and mobile applications from client-facing marketing sites to full-stack platforms with")}) Tj
T*
(${escapePdf("authentication, role-based access control (RBAC), and CMS/admin dashboards. Skilled at translating business")}) Tj
T*
(${escapePdf("requirements into scalable, high-performance solutions across the full development lifecycle.")}) Tj
ET

% SECTION: SKILLS
BT
/F2 10 Tf
0.02 0.48 0.75 rg
36 648 Td
(${escapePdf("TECHNICAL SKILLS")}) Tj
ET

q
0.8 0.85 0.9 rg
36 644 523 0.5 re f
Q

BT
/F2 9 Tf
0.1 0.15 0.2 rg
36 630 Td
(${escapePdf("Frameworks & Libraries: ")}) Tj
/F1 9 Tf
(${escapePdf("React Native, Flutter, Next.js, React.js, Node.js, Express.js, Tailwind CSS, ThreeJS")}) Tj
T*
/F2 9 Tf
(${escapePdf("Languages & Core: ")}) Tj
/F1 9 Tf
(${escapePdf("JavaScript (ES6+), Dart, JAVA, HTML5, CSS3, OOP Architecture")}) Tj
T*
/F2 9 Tf
(${escapePdf("Databases & APIs: ")}) Tj
/F1 9 Tf
(${escapePdf("MongoDB, REST APIs, Socket.IO, Git/GitHub, Payment Gateways (Razorpay), JWT & RBAC")}) Tj
T*
/F2 9 Tf
(${escapePdf("Deployment & Architecture: ")}) Tj
/F1 9 Tf
(${escapePdf("VPS Server Deployment, Google Play Store Deployment, Vercel, Microservices, Learning GEN AI")}) Tj
ET

% SECTION: WORK EXPERIENCE
BT
/F2 10 Tf
0.02 0.48 0.75 rg
36 564 Td
(${escapePdf("WORK EXPERIENCE")}) Tj
ET

q
0.8 0.85 0.9 rg
36 560 523 0.5 re f
Q

% Job 1
BT
/F2 9.5 Tf
0.05 0.1 0.2 rg
36 544 Td
(${escapePdf("Software Developer (Team Lead) - OdiTech Global Pvt Ltd")}) Tj
/F1 8.5 Tf
0.4 0.45 0.5 rg
340 0 Td
(${escapePdf("Jan 2026 - Present")}) Tj
ET

BT
/F1 8.5 Tf
0.2 0.25 0.3 rg
46 530 Td
(${escapePdf("- Managing core development team and spearheading production Android and web application features.")}) Tj
T*
(${escapePdf("- Architecting maintainable codebases using React Native, MERN stack, and Next.js, ensuring clean standards.")}) Tj
T*
(${escapePdf("- Collaborating with cross-functional teams to integrate new technologies, improving navigation & UX.")}) Tj
ET

% Job 2
BT
/F2 9.5 Tf
0.05 0.1 0.2 rg
36 480 Td
(${escapePdf("Full Stack Developer - SpiderVision Systems")}) Tj
/F1 8.5 Tf
0.4 0.45 0.5 rg
378 0 Td
(${escapePdf("Jun 2024 - Dec 2025")}) Tj
ET

BT
/F1 8.5 Tf
0.2 0.25 0.3 rg
46 466 Td
(${escapePdf("- Owned end-to-end delivery of 25+ client platforms (Next.js, React, MongoDB) for healthcare, real estate & education.")}) Tj
T*
(${escapePdf("- Built and deployed marketing proposals, dynamic service pricing pages, and business development tools.")}) Tj
T*
(${escapePdf("- Handled server architecture, VPS Linux deployments, SSL certificates, and Vercel hosting.")}) Tj
ET

% Job 3
BT
/F2 9.5 Tf
0.05 0.1 0.2 rg
36 416 Td
(${escapePdf("Web Developer Intern - WebBocket Pvt Ltd")}) Tj
/F1 8.5 Tf
0.4 0.45 0.5 rg
380 0 Td
(${escapePdf("Nov 2023 - Mar 2024")}) Tj
ET

BT
/F1 8.5 Tf
0.2 0.25 0.3 rg
46 402 Td
(${escapePdf("- Assisted in developing and maintaining web features, improving code quality and interface consistency.")}) Tj
T*
(${escapePdf("- Contributed to MERN stack application design and REST API integrations.")}) Tj
ET

% Job 4
BT
/F2 9.5 Tf
0.05 0.1 0.2 rg
36 364 Td
(${escapePdf("Advanced Java Trainee - OCAC Training Center")}) Tj
/F1 8.5 Tf
0.4 0.45 0.5 rg
374 0 Td
(${escapePdf("Apr 2023 - Jun 2023")}) Tj
ET

BT
/F1 8.5 Tf
0.2 0.25 0.3 rg
46 350 Td
(${escapePdf("- Improved application efficiency through targeted, performance-enhancing code changes.")}) Tj
T*
(${escapePdf("- Contributed to team that architected and deployed microservices-based system, boosting maintainability by 30%.")}) Tj
ET

% SECTION: KEY PROJECTS
BT
/F2 10 Tf
0.02 0.48 0.75 rg
36 312 Td
(${escapePdf("KEY PRODUCTION PROJECTS")}) Tj
ET

q
0.8 0.85 0.9 rg
36 308 523 0.5 re f
Q

% Project 1
BT
/F2 9.5 Tf
0.05 0.1 0.2 rg
36 292 Td
(${escapePdf("Career Counselling App (React Native, MongoDB, Node.js)")}) Tj
/F2 8.5 Tf
0.02 0.5 0.3 rg
280 0 Td
(${escapePdf("Google Play: com.careervedas.app")}) Tj
ET

BT
/F1 8.5 Tf
0.2 0.25 0.3 rg
46 278 Td
(${escapePdf("- Built Node.js APIs with secure CRUD operations, MongoDB schemas, JWT authentication, and role-based access.")}) Tj
T*
(${escapePdf("- Integrated Razorpay payment gateway for instant counseling bookings; deployed live to Google Play Store.")}) Tj
ET

% Project 2
BT
/F2 9.5 Tf
0.05 0.1 0.2 rg
36 242 Td
(${escapePdf("Gym Management App (Flutter, Dart, MongoDB, Node.js)")}) Tj
ET

BT
/F1 8.5 Tf
0.2 0.25 0.3 rg
46 228 Td
(${escapePdf("- Developing full-stack fitness management app for member check-in, memberships, attendance, and workout plans.")}) Tj
T*
(${escapePdf("- Engineered offline-first caching, recurring payment tracking, and role-based dashboards.")}) Tj
ET

% Project 3
BT
/F2 9.5 Tf
0.05 0.1 0.2 rg
36 192 Td
(${escapePdf("Waitinger (3 Apps Suite) - Restaurant Ordering & Live Delivery Platform")}) Tj
ET

BT
/F1 8.5 Tf
0.2 0.25 0.3 rg
46 178 Td
(${escapePdf("- Built multi-app ecosystem: Waitinger (Diner), Waitinger Partner (Restaurant), Waitinger Delivery (Rider).")}) Tj
T*
(${escapePdf("- Implemented sub-second live order tracking via Socket.IO, Razorpay online payments, and an AI ordering assistant.")}) Tj
T*
(${escapePdf("- Published to Google Play Store; delivered 25+ production client web portals across restaurant and booking niches.")}) Tj
ET

% SECTION: EDUCATION & CERTIFICATIONS
BT
/F2 10 Tf
0.02 0.48 0.75 rg
36 130 Td
(${escapePdf("EDUCATION & CERTIFICATIONS")}) Tj
ET

q
0.8 0.85 0.9 rg
36 126 523 0.5 re f
Q

BT
/F2 9 Tf
0.05 0.1 0.2 rg
36 110 Td
(${escapePdf("Master of Computer Applications (MCA)")}) Tj
/F1 9 Tf
0.2 0.25 0.3 rg
180 0 Td
(${escapePdf("- GIFT Autonomous College (2022 - 2024)   |   CGPA: 8.3 / 10")}) Tj
ET

BT
/F2 9 Tf
0.05 0.1 0.2 rg
36 94 Td
(${escapePdf("Bachelor of Computer Applications (BCA)")}) Tj
/F1 9 Tf
0.2 0.25 0.3 rg
180 0 Td
(${escapePdf("- A.M.I.T College (2019 - 2022)   |   CGPA: 7.1 / 10")}) Tj
ET

BT
/F2 8.5 Tf
0.1 0.15 0.2 rg
36 74 Td
(${escapePdf("Certifications: ")}) Tj
/F1 8.5 Tf
(${escapePdf("Advanced Java Project (OCAC Training Centre)   |   MERN Stack Project (WebBocket Pvt Ltd)")}) Tj
ET

Q
  `.trim();

  writer.createPage(p1);
  return writer.build();
}

const userPdfPath = path.resolve("./public/Software_Developer_Debaraj.pdf");
const outputPath = path.resolve("./public/Debaraj_Malik_Resume.pdf");

if (fs.existsSync(userPdfPath)) {
  fs.copyFileSync(userPdfPath, outputPath);
  console.log(`Using authentic user resume from ${userPdfPath} -> ${outputPath}`);
} else {
  const pdfBuffer = generateResumePdf();
  fs.writeFileSync(outputPath, pdfBuffer);
  console.log(`Successfully generated resume PDF at: ${outputPath} (${pdfBuffer.length} bytes)`);
}
