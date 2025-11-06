import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Row from './components/Row';
import Footer from './components/Footer';

function App() {
  const featured = [
    { title: 'Realtime Dashboard', desc: 'Streaming analytics with websockets and server-sent events.', href: 'https://example.com' },
    { title: 'Design System', desc: 'A scalable UI kit with tokens and theming.', href: 'https://example.com' },
    { title: 'E‑commerce UX', desc: 'Conversion‑focused storefront with headless CMS.', href: 'https://example.com' },
    { title: 'AI Assistant', desc: 'Chat UX with RAG pipeline and observability.', href: 'https://example.com' },
    { title: 'Video Pipeline', desc: 'Transcoding, thumbnails, and CDN delivery.', href: 'https://example.com' },
  ];

  const experience = [
    { title: 'Senior Frontend Engineer · Fintech', desc: 'Led migration to micro‑frontends, cut bundle 35%, improved lighthouse to 95+' },
    { title: 'Product Engineer · SaaS', desc: 'Shipped usage‑based billing, onboarding flows, and multi‑tenant features' },
    { title: 'Founding Engineer · Startup', desc: 'Greenfield MVP to Series A; built design system and release pipeline' },
    { title: 'Open Source', desc: 'Maintainer of several libraries, speaker, and mentor' },
  ];

  const skills = [
    { title: 'React & TypeScript', desc: 'Hooks, performance, testing, accessibility' },
    { title: 'Node & FastAPI', desc: 'APIs, queues, auth, observability' },
    { title: 'Cloud & DevOps', desc: 'AWS, Docker, CI/CD, infra as code' },
    { title: 'Design & UX', desc: 'Design systems, prototyping, motion' },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <Hero />
      <main className="space-y-8">
        <div id="projects">
          <Row title="Featured Projects" items={featured} />
        </div>
        <div id="experience">
          <Row title="Experience" items={experience} />
        </div>
        <div id="skills">
          <Row title="Skills & Tools" items={skills} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
