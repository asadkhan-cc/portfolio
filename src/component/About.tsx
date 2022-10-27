import React from "react";
import aboutImage from "/public/as3.jpeg";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageInfo } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  pageInfo: PageInfo;
};
const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      {/* <Image></Image> */}
      <div className="flex flex-col items-center justify-center md:flex-row  md:justify-around md:items-start">
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          transition={{ duration: 1.5 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]   "
        >
          {/* Provided "contain" should be one of fill,fixed,intrinsic,responsive,undefined. */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={urlFor(pageInfo?.profilePic)}
              alt="AboutImage"
              className="rounded-full object-cover md:rounded-lg "
            ></img>
          </div>
        </motion.div>
        <div className="space-y-10 px-0 md:p-10 mt-28 md:mt-0 ">
          <h4 className="text-4xl font-semibold">
            Here Is A little{" "}
            <span className="underline decoration-[#F7AB0A]/50">
              Background!
            </span>
          </h4>
          <p>{pageInfo?.backgroundInformation}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
