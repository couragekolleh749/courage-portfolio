// app/layout.js
import "./globals.css";

export const metadata = {
  title: "Courage M. Kolleh Jr | Portfolio",
  description:
    "Welcome to the personal portfolio of Courage M. Kolleh Jr — showcasing my projects, skills, education, and faith journey. Built with Next.js and deployed on Vercel.",
  openGraph: {
    title: "Courage M. Kolleh Jr | Portfolio",
    description:
      "Explore my portfolio — projects, skills, education, faith, and ways to connect.",
    url: "https://courage-portfolio-five.vercel.app",
    siteName: "Courage M. Kolleh Jr Portfolio",
    images: [
      {
        url: "/hero.jpg", // ✅ make sure hero.jpg exists in public folder
        width: 1200,
        height: 630,
        alt: "Courage M. Kolleh Jr Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Courage M. Kolleh Jr | Portfolio",
    description:
      "Discover Courage M. Kolleh Jr's projects, education, and journey of faith.",
    images: ["/hero.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="lnuGfw3s93mXRYup1eLm7FEJzReZhtT-awsZLx-pNVM"
        />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* ✅ Basic SEO */}
        <meta name="author" content="Courage M. Kolleh Jr" />
        <meta
          name="keywords"
          content="Courage Kolleh, portfolio, cybersecurity, software engineering, US Army, projects, Next.js, web developer, Christian, Freedomite"
        />
        <meta name="robots" content="index, follow" />

        {/* ✅ Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}


