import React from "react";
import logo from "/public/ASADEnterpriseLOGO-01.png";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  directionLeft?: boolien;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, x: directionLeft ? -200 : 200 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="  w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px]   object-cover object-center border-gray-500 fliter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image src={logo} alt="logo" className="object-cover" />
        <div className="absolute w-24 h-24 rounded-full xl:w-[100px] xl:h-[100px] top-1 left-[25px]  opacity-0 border-gray-500  group-hover:opacity-80 group-hover:bg-white transition duration-300 ease-in-out">
          <div className="flex  items-center justify-center h-full">
            <p className="text-xl font-bold text-black opacity-100">100%</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Skill;
