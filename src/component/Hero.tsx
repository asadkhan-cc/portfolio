import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircles";
import heroImage from "/public/asad.jpg";
type Props = {};

function Hero({}: Props) {
  const [words] = useTypewriter({
    words: [" Developer.", " Learner.", " Coder.", " SelfBeliever."],
    loop: 0,
    delaySpeed: 1000,
    typeSpeed: 80,
    deleteSpeed: 50,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackGroundCircles />
      <Image
        src={heroImage}
        width="175px"
        height="175px"
        className="rounded-full object-cover"
        alt="Profile Picture Asad Ali Khan"
      ></Image>
      <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
        Software Engineer
      </h2>
      <h1 className="text-5xl lg:text-6xl font-semibold px-10">
        <span className="mr-3">{words}</span>
        <Cursor cursorColor="#F7AB0a" />
      </h1>
      <div className="z-10">
        <Link href="#About">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#Experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#Skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#Projects">
          <button className="heroButton">Projects</button>
        </Link>
        <Link href="#button">
          <button className="heroButton"></button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
