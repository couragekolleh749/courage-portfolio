export default function Head() {
  return (
    <>
      {/* Basic SEO */}
      <title>Courage M. Kolleh Jr | Portfolio</title>
      <meta
        name="description"
        content="Personal portfolio of Courage M. Kolleh Jr — Aspiring Developer, Designer, and Creative Thinker. Explore my projects, resume, and contact me."
      />
      <meta name="keywords" content="Courage Kolleh, Developer, Portfolio, Next.js, Liberia" />
      <meta name="author" content="Courage M. Kolleh Jr" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
      <meta property="og:title" content="Courage M. Kolleh Jr | Portfolio" />
      <meta
        property="og:description"
        content="Explore my projects, learn about me, and get in touch. Passionate about tech and creativity."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://your-vercel-link.vercel.app" />
      <meta property="og:image" content="https://your-vercel-link.vercel.app/hero.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Courage M. Kolleh Jr | Portfolio" />
      <meta
        name="twitter:description"
        content="Explore my projects, learn about me, and get in touch. Passionate about tech and creativity."
      />
      <meta name="twitter:image" content="https://your-vercel-link.vercel.app/hero.jpg" />
    </>
  );
}

