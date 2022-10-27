import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import { Social } from "../../typings";
type Props = {
  social: Social[];
};

function Header({ social }: Props) {
  return (
    <header className="">
      <div className="flex flex-row justify-around flex-grow max-w-7xl mx-auto z-30 p-5 absolute top-0 ">
        <div>
          <motion.div
            initial={{ x: -500, opacity: 0, scale: 0.5 }}
            animate={{ x: -0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center "
          >
            {social.map((social) => {
              return (
                <SocialIcon
                  key={social._id}
                  url={social.url}
                  title={social.title}
                  fgColor="gray"
                  bgColor="transparent"
                />
              );
            })}
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ x: 500, opacity: 0, scale: 0.5 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-row items-center text-gray-300 cursor-pointer "
          >
            <Link href="#Contact">
              <div>
                <SocialIcon
                  className="cursor-pointer"
                  network="email"
                  fgColor="gray"
                  bgColor="transparent"
                ></SocialIcon>
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ">
                  get in touch
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Header;
