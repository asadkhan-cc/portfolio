import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import About from "../src/component/About";
import ContactSection from "../src/component/ContactSection";
import ExperienceCards from "../src/component/ExperienceCards";
import Header from "../src/component/Header";
import Hero from "../src/component/Hero";
import Projects from "../src/component/Projects";
import Skills from "../src/component/Skills";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Asad Khan Portfolio</title>
        <meta
          name="description"
          content="Asad Ali Khan is A professional MERN stack Developer with extensive knowledge about Tailwind css and firebase and worked with ANT Design and material UI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-30 
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
      >
        <Header />

        {/* hero */}
        <section id="hero" className="snap-start ">
          <Hero />
        </section>

        {/* About */}
        <section id="About" className="snap-center">
          <About />
        </section>
        {/* #Experience*/}

        <section id="Experience" className="snap-center">
          <ExperienceCards />
        </section>
        {/* Skills */}
        <section id="Skills" className="snap-center">
          <Skills />
        </section>
        {/* Projects */}
        <section id="Projects" className="snap-center">
          <Projects />
        </section>
        {/* Contact || Contact me */}
        <section id="Contact" className="snap-center">
          <ContactSection />
        </section>
      </main>

      <footer className="fixed bottom-0 right-1/2 cursor-pointer  translate-x-1/2 ">
        <div className=" w-full mx-auto">
          <Link href="#hero">
            <div className="flex items-center">
              <span>Powered by Asad </span>
              <span className="">
                <Image
                  src="/ASADEnterpriseLOGO-01.png"
                  alt="Asad Logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </span>
            </div>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
