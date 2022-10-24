import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import pic from "/public/ASADEnterpriseLOGO-01.png";
type Props = {
  key?: number;
  Index?: number;
  Length?: number;
  Data?: object;
};

function Project({ Index, Length, Data }: Props) {
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
            src={pic}
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
            <span className="font-bold">
              {Data?.title ? Data?.title : "Title"}
            </span>
          </h4>
          <p className="text-lg text-center md:text-left">
            {Data?.Summary
              ? Data?.Summary
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis praesentium odio dolorem aut atque id, error fuga maiores magnam. Quaerat id exercitationem minus accusamus voluptatem voluptatibus laboriosam dolorem molestias deleniti!"}
          </p>
        </div>
      </div>
    </>
  );
}

export default Project;
