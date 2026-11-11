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
    <html lang="en" className="h-full scroll-smooth"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Caveat:wght@600&family=JetBrains+Mono:wght@500;700;800&family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap" rel="stylesheet" /></head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
