import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import pic from "/public/ASADEnterpriseLOGO-01.png";
import { Project } from "../../typings";
import { urlFor } from "../../sanity";
type Props = {
  key?: number;
  Index?: number;
  Length?: number;
  Data?: any;
};

function ProjectCard({ Index, Length, Data }: Props) {
  const imageRef = urlFor(Data?.image);
  imageRef.options.baseUrl = "cdn.sanity.io/images/";
  console.log(imageRef);
  return (
    <>
      <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen ">
        <motion.div
          initial={{ opacity: 0, y: -300 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <Image
            src={imageRef.url()}
            width="100px"
            height="100px"
            alt="Case Study Image"
            className="object-cover"
          ></Image>
        </motion.div>

        <div className="space-y-10 px-0 md:px-10 max-w-6xl ">
          <h4 className="text-4xl font-semibold text-center font-serif">
            <span className="underline decoraton-[#F7AB0A]/50">
              Case Study {Index} of {Length}
            </span>
            {" : "}
            <span className="font-bold text-[#F7AB0A]">
              {Data?.title ? Data?.title : "Title"}
            </span>
          </h4>
          <p className="text-lg text-center md:text-left">
            {Data?.summary ? Data?.summary : "No Desc Given"}
          </p>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
