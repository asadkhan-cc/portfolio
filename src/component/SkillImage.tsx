import React from "react";
import logo from "/public/ASADEnterpriseLOGO-01.png";
import { motion } from "framer-motion";
import Image from "next/image";
import { Skill } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  directionLeft?: boolean;
  data: Skill;
};

function SkillImage({ directionLeft, data }: Props) {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, x: directionLeft ? -200 : 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="  w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px]   object-cover object-center border-gray-500 fliter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <img
          src={urlFor(data?.image)?.url()}
          alt={data.title}
          title={data.title}
          className="object-cover  w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] "
        />
        <div className="absolute  w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px]  top-1  opacity-0 border-gray-500  group-hover:opacity-80 group-hover:bg-white transition duration-300 ease-in-out">
          <div className="flex  items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">
              {data.progress}%
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default SkillImage;
