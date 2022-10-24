import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
type Props = {};

function Header({}: Props) {
  return (
    <header className="flex flex-row  justify-between max-w-7xl mx-auto z-30 p-5 fixed top-0 ">
      <div>
        <motion.div
          initial={{ x: -500, opacity: 0, scale: 0.5 }}
          animate={{ x: -0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center"
        >
          <SocialIcon
            url="https://www.youtube.com/channel/UCY6cJbcuRWgtjiJy6yjfb5A"
            fgColor="gray"
            bgColor="transparent"
          ></SocialIcon>

          <SocialIcon
            url="https://www.youtube.com/channel/UCY6cJbcuRWgtjiJy6yjfb5A"
            fgColor="gray"
            bgColor="transparent"
          ></SocialIcon>
          <SocialIcon
            url="https://www.youtube.com/channel/UCY6cJbcuRWgtjiJy6yjfb5A"
            fgColor="gray"
            bgColor="transparent"
          ></SocialIcon>
          <SocialIcon
            url="https://www.youtube.com/channel/UCY6cJbcuRWgtjiJy6yjfb5A"
            fgColor="gray"
            bgColor="transparent"
          ></SocialIcon>
        </motion.div>
      </div>
      <div>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer "
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          ></SocialIcon>
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ">
            get in touch
          </p>
        </motion.div>
      </div>
    </header>
  );
}

export default Header;
