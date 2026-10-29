import "./globals.css";

export const metadata = {
  title: "Debaraj Malik | Application Developer & Full Stack Team Lead",
  description: "Portfolio of Debaraj Malik - React Native, Flutter, MERN Stack, and Next.js Developer with 25+ shipped production platforms and 4+ Google Play apps.",
  keywords: [
    "Debaraj Malik",
    "Application Developer",
    "Full Stack Developer",
    "React Native",
    "Flutter",
    "Next.js",
    "Node.js",
    "MERN Stack",
    "Mobile App Developer",
    "Team Lead",
    "Bhubaneswar",
    "Odisha"
  ],
  authors: [{ name: "Debaraj Malik" }],
  openGraph: {
    title: "Debaraj Malik | Application Developer & Full Stack Team Lead",
    description: "Explore production mobile apps, Next.js web applications, and enterprise systems delivered by Debaraj Malik.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#f8fafc] text-slate-900 antialiased selection:bg-sky-500 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
