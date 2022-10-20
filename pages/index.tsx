import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../src/component/Header";
import Hero from "../src/component/Hero";

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
      <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
        <Header />

        {/* hero */}
        <section id="hero" className="snap-center">
          <Hero />
        </section>

        {/* about */}

        {/* experience */}

        {/* skills */}

        {/* projects */}

        {/* contact me */}
      </main>

      <footer className="fixed bottom-0 right-1/2  translate-x-1/2 ">
        <div className=" w-full mx-auto">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Asad{" "}
            <span className="">
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
