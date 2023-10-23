import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="w-full container mx-auto text-white lg:pt-24 pt-0">
      <div className="flex flex-col gap-28 lg:p-14 p-7">
        <div className="w-full border-b-2 border-white dark:border-white lg:pt-14 pt-0"></div>
        <div className="flex flex-col gap-6 lg:pt-24 pt-0">
          <div className="flex justify-between flex-wrap lg:flex-nowrap gap-5 lg:gap-0">
            <div className="flex flex-col">
              <div className=" lg:text-3xl text-2xl font-semibold">
                Start the
              </div>
              <div className=" lg:text-5xl text-3xl">
                Conversation
              </div>
            </div>
            <Link
              href="/getintouch"
              className="w-[80px] h-[80px] bg-[#f2a900] hover:bg-[hsla(36,100%,47%,1)] hover:-translate-y-1 transition-all duration-300 rounded-full p-3 flex justify-center items-center "
            >
              <BsArrowRight className="text-white w-10 h-10" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-24">
          <div className="flex justify-between flex-wrap lg:flex-nowrap gap-5 lg:gap-0 lg:pt-24 pt-0">
            <div className="flex flex-col gap-5 ">

              <p>Terragram AG</p>
              <p>Bodenacherring 7&#44; 8303 Basserdorf&#44; Switzerland</p>


            </div>
            <div className="flex flex-col gap-5">
              <div>
                <p>+41793278371</p>
              </div>
              <div>
                <p>contact&#64;terragram.com</p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="hover:-translate-y-1 transition-all duration-500 hover:text-[#f2a900]">
                <RiTwitterXFill className="w-6 h-6" />
              </div>

              <div className="hover:-translate-y-1 transition-all duration-500 hover:text-[#f2a900]">
                <BiLogoLinkedin className="w-7 h-7" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
