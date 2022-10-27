import type { GetStaticProps, NextPage } from "next";
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
import { PageInfo, Experience, Skill, Project, Social } from "../typings";
import { fetchExperiences } from "../utils/fetchExperiences";
import { fetchPageInfos } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill;
  projects: Project[];
  social: Social;
};
const Home = ({ pageInfo, experiences, skills, projects, social }: Props) => {
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
        <Header social={social} />

        {/* hero */}
        <section id="hero" className="snap-start ">
          <Hero pageInfo={pageInfo} />
        </section>

        {/* About */}
        <section id="About" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>
        {/* #Experience*/}

        <section id="Experience" className="snap-center">
          <ExperienceCards experiences={experiences} />
        </section>
        {/* Skills */}
        <section id="Skills" className="snap-center">
          <Skills skills={skills} />
        </section>
        {/* Projects */}
        <section id="Projects" className="snap-center">
          <Projects projects={projects} />
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfos();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const social: Social[] = await fetchSocials();
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      social,
    },
  };
};
