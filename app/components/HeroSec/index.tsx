import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function HeroSec() {
  return (
    <div className="w-full container mx-auto ">
      <div className="flex flex-col gap-10 lg:p-14 p-7">
        <div className="flex flex-col lg:pt-32 pt-10 text-white">
          <div className="lg:text-6xl  text-3xl pt-6">
            Something <b>very special</b>  is on the way
          </div>
        </div>

        <div className="w-full lg:w-[713.41px] text-2xl text-white mt-[50px]">
          Our mission
        </div>
        <div className="text-white w-full lg:w-[913.41px] font-extralight text-3xl">
          An automation platform designed and developed to support the demands
          of today's digital transformation. Redefining what you’ve come to
          expect from SAP Systems Management as a MSP or Enterprise company. We
          will soon offer an agentless and secure way to monitor, manage and
          orchestrate SAP systems with their application servers, databases,
          hosts and peripheral IT components. We are revolutionizing the way you
          can simplify the day-to-day management, operational and maintenance
          tasks of complex system environments, whether they are on-premises or
          in the cloud. As our partner, you can participate in the selection and
          design of all the upcoming features.
        </div>
        <Link href="/about" className="flex items-center gap-3 text-white hover:-translate-y-1 transition-all duration-500">
          <div className="text-lg font-normal">More about us</div>
          <div className="bg-[#f2a900] w-[40px] h-[40px] rounded-full p-2">
            <BsArrowRight className="text-white w-6 h-6" />
          </div>
        </Link>

        <hr className="text-black bg-black h-[1px] mt-[80px] border-black" />

        <div className="flex flex-col gap-10 ">
          <div className="flex flex-col gap-7">
            <div className="lg:pt-24 pt-0">
              <p className="text-4xl ">Unleash the Potential of Hyperautomation</p>
            </div>
            <div className="w-full lg:w-[1011.66px] lg:text-3xl text-2xl font-light ">
              <p className="leading-tight">Experience the future of SAP automation with our cutting-edge
                software, designed to transform your operations and streamline
                your SAP landscape. From enhancing security with seamless system
                hardening to optimizing efficiency through real-time monitoring
                and flexible access management, our software offers a
                comprehensive suite of tools to empower your business. Explore our
                core features below to see how we can revolutionize your SAP
                automation journey.</p>
            </div>
          </div>
          <div className="w-full border-b border-black pt-14"></div>
        </div>
      </div>
    </div>
  );
}
