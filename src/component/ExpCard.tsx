import Image from "next/image";
import React from "react";
import logo from "/public/ASADEnterpriseLOGO-01.png";
import { motion } from "framer-motion";

type Props = {};

function ExpCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] min-w-max snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]  object-cover object-center"
      >
        <Image src={logo} alt="" className="object-cover" />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO Asad Enterprise</h4>
        <p className="text-2xl font-bold mt-1">Asad Enterprise</p>
        <div className="flex space-x-2 my-2">
          {/* techstack */}{" "}
          <Image
            src={logo}
            alt=""
            className="object-cover"
            height="50px"
            width="50px"
          />
          <Image
            src={logo}
            alt=""
            className="object-cover"
            height="50px"
            width="50px"
          />
          <Image
            src={logo}
            alt=""
            className="object-cover"
            height="50px"
            width="50px"
          />
          <Image
            src={logo}
            alt=""
            className="object-cover"
            height="50px"
            width="50px"
          />
          {/* techstack */}
          {/* techstack */}
        </div>
        <p>starts at : ## ends at : ##</p>
        <ul className="list-disc space-y-4 ml-5 text-lg ">
          <li>Test Summary Points</li>
          <li>Test Summary Points</li>
          <li>Test Summary Points</li>
          <li>Test Summary Points</li>
          <li>Test Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExpCard;
