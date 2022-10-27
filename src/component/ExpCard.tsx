import Image from "next/image";
import React from "react";
import logo from "/public/ASADEnterpriseLOGO-01.png";
import { motion } from "framer-motion";
import { Experience } from "../../typings";
import { urlFor } from "../../sanity";

type Props = {
  data: Experience;
};

function ExpCard({ data }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[600px] min-w-max snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]  object-cover object-center"
      >
        <img
          src={urlFor(data?.companyImage).url()}
          alt={`logo of ${data?.company}`}
          className="object-cover"
        />
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{data.JobTitle}</h4>
        <p className="text-2xl font-bold mt-1">{data.companyName}</p>
        <div className="flex space-x-2 my-2">
          {data.technologies.map((elem) => {
            return (
              <div key={elem._id} className="m-1">
                <Image
                  src={urlFor(elem.image)?.url()}
                  alt={elem.title}
                  className="object-cover rounded-full bg-slate-800  "
                  height="50px"
                  width="50px"
                />
              </div>
            );
          })}
        </div>
        <p>
          Started at :{data?.dateStarted} ended at :{" "}
          {data?.isCurrentlyWorkingHere || data?.isCurrentlyWorkingThere
            ? "Current"
            : data?.dateEnded}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg h-80 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A] ">
          {data?.points.map((elem, index) => {
            return <li key={index}>{elem}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}

export default ExpCard;
