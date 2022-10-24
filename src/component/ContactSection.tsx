import React from "react";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
type Props = {};

const ContactSection = (props: Props) => {
  return (
    <article className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div>
        <h4 className="text-4xl font-semibold text-center font-serif">
          <span className="font-bold">I've Got Just What You Need. </span>
          <span className="underline decoraton-[#F7AB0A]/50">lets Talk</span>
        </h4>
        <br />
        <div>
          <div className="flex items-center justify-center">
            <PhoneIcon className=" text-[#F7ab0A] h-7 w-7" />
            <p className="text-2xl ">+92 308 0027899</p>
          </div>
          <div className="flex items-center justify-center">
            <EnvelopeIcon className=" text-[#F7ab0A] h-7 w-7" />
            <p className="text-2xl ">Khanaliasad.aak@gmail.com</p>
          </div>
          <div className="flex items-center justify-center">
            <MapPinIcon className=" text-[#F7ab0A] h-7 w-7" />
            <p className="text-2xl ">Karachi,Pakistan</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ContactSection;

{
  /* <h3 className="max-w-6xl text-2xl">
    asdasdasdasd Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    At tempore labore mollitia nihil obcaecati accusamus quos magnam animi
    atque optio? Corporis, cumque vitae! Doloribus beatae est ratione velit
    tempora pariatur?Lorem ipsum, dolor sit amet consec tetur adipisicingbr{" "}
    <br />
    elit. Nostrum ipsa voluptates, tempora blanditiis quis animi maiores cum
    laboriosam, dolor amet recusandae id inventore earum natus adipisci
    exercitationem dolorem quia ducimus? Lorem ipsum dolor sit amet
    consectetur adipisicing elit. Tempore illo vel reprehenderit illum
    mollitia aspernatur! Qui et odit corporis totam temporibus! Voluptatem
    reprehenderit atque officiis dolor expedita, iure ipsam obcaecati?
    Contact Me
  </h3> */
}
