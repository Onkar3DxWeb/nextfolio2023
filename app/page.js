import Main from "./components/pages/home/Main";
import Hero from "./components/pages/home/sections/Hero";
import Skills from "./components/pages/home/sections/Skills";
import About from "./components/pages/home/sections/About";
import Portfolio from "./components/pages/home/sections/Portfolio";
import Contact from "./components/pages/home/sections/Contact";
import Services from "./components/pages/home/sections/Services";

export const metadata = {
  title: 'Onkar Hirgude | Frontend Developer',
  description: 'I\'m Onkar Hirgude, a frontend developer who loves crafting unique and intuitive web experiences with a focus on clean code and user-centered design.',
  alternates: {
    canonical: `https://onkarhirgude.com`,
  },
  openGraph: {
    title: 'Onkar Hirgude | Frontend Developer',
    description: 'I\'m Onkar Hirgude, a frontend developer who loves crafting unique and intuitive web experiences with a focus on clean code and user-centered design.',
    url: 'https://onkarhirgude.com',
    siteName: 'Onkar Hirgude',
    images: [
      {
        url: 'https://www.dropbox.com/scl/fi/2k9nmpqvln1sty6z4ywjp/home.png?rlkey=dt8cd1wjb9fmzd5c4s28rww1g&raw=1',
        width: 900,
        height: 600,
        alt: 'developer coding',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onkar Hirgude | Frontend Developer',
    description: 'I\'m Onkar Hirgude, a frontend developer who loves crafting unique and intuitive web experiences with a focus on clean code and user-centered design.',
    domain: 'https://onkarhirgude.com',
    url: `https://onkarhirgude.com`,
    images: [
      {
        url: 'https://www.dropbox.com/scl/fi/2k9nmpqvln1sty6z4ywjp/home.png?rlkey=dt8cd1wjb9fmzd5c4s28rww1g&raw=1',
        width: 900,
        height: 600,
        alt: 'developer coding',
      },
    ],
  },
};

export default function Home() {
  return (
    <Main >
      <Hero />
      <About />
      <Skills />      
      <Services/>
      <Portfolio />
      <Contact />
    </Main>
  );
}
