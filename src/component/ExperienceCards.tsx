import React from "react";
import { motion } from "framer-motion";
import ExpCard from "./ExpCard";

type Props = {};

const ExperienceCards = (props: Props) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll px-10 snap-x snap-mandatory   ">
        <ExpCard></ExpCard>
        <ExpCard></ExpCard>
        <ExpCard></ExpCard>
        <ExpCard></ExpCard>
        <ExpCard></ExpCard>
        <ExpCard></ExpCard>
        <ExpCard></ExpCard>
        <ExpCard></ExpCard>
        <ExpCard></ExpCard>
        <ExpCard></ExpCard>
      </div>
    </motion.article>
  );
};

export default ExperienceCards;
