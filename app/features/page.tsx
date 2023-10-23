"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import {
  EscalatorUp, Globe, ShieldCheck, Vault, SketchLogo, IdentificationBadge, ChartLine
  , RocketLaunch, Target, MapTrifold
} from "@phosphor-icons/react";

const ServiceData = [
  {
    id: 1,
    icon: <EscalatorUp weight="thin" className="text-black hover:text-[hsla(36,100%,47%,1)]  w-[100px]  h-[128px]" />,
    title: "Uninvolved Updates",
    description:
      "Experience seamless IT management with our cutting-edge automation solution for OS, SAP Kernel & SAP Hana updates. Say goodbye to manual updates and ensure your systems are always up-to-date with the latest enhancements, security patches, and optimizations, boosting performance and reliability effortlessly.",
    arrow: <BsArrowRight className=" w-6 h-6" />,
    text: "Read more",
  },
  {
    id: 2,
    icon: <SketchLogo weight="thin" className="text-black hover:text-[hsla(36,100%,47%,1)]  w-[100px]  h-[128px]" />,
    title: "Seamless System Hardening",
    description:
      "Our software ensures the security of your SAP systems and the underlying OS by effortlessly implementing critical hardening measures, safeguarding your data and operations.",
    arrow: <BsArrowRight className=" w-6 h-6" />,
    text: "Read more",
  },
  {
    id: 3,
    icon: <Globe weight="thin" className="text-black hover:text-[hsla(36,100%,47%,1)]  w-[100px]  h-[128px]" />,
    title: "Your SAP Landscape Central",
    description:
      "levate your SAP system management with robust SAP Parameter management and centralized deployments using full-featured Ansible playbooks. Harness the power to streamline changes across your SAP landscape, while enjoying enhanced auditing capabilities that provide transparency and control over system configurations.",
    arrow: <BsArrowRight className=" w-6 h-6" />,
    text: "Read more",
  },
  {
    id: 4,
    icon: <ShieldCheck weight="thin" className="text-black hover:text-[hsla(36,100%,47%,1)]  w-[100px]  h-[128px]" />,
    title: "Secret Management",
    description:
      "Unlock the potential of seamless secret management with our robust, Vault-based solution. Includes automated SSL certificate issuance and renewal, along with secure storage of all your essential credentials within your SAP landscape. Safeguard your sensitive information and enjoy effortless, worry-free management, ensuring your systems are always protected and compliant.",
    arrow: <BsArrowRight className=" w-6 h-6" />,
    text: "Read more",
  },
  {
    id: 5,
    icon: <Target weight="thin" className="text-black hover:text-[hsla(36,100%,47%,1)]  w-[100px]  h-[128px]" />,
    title: "Smooth Orchestration",
    description:
      "Enjoy streamlined SAP automation through seamless integration with Ansible, simplifying complex workflows and enhancing efficiency in your IT operations.",
    arrow: <BsArrowRight className=" w-6 h-6" />,
    text: "Read more",
  },
  {
    id: 6,
    icon: <MapTrifold weight="thin" className="text-black hover:text-[hsla(36,100%,47%,1)]  w-[100px]  h-[128px]" />,
    title: "Realtime Landscape Overview",
    description:
      "Gain immediate insights into your SAP landscape's health and performance with real-time monitoring, empowering you to make informed decisions and prevent potential issues.",
    arrow: <BsArrowRight className=" w-6 h-6" />,
    text: "Read more",
  },
  {
    id: 7,
    icon: <Vault weight="thin" className="text-black hover:text-[hsla(36,100%,47%,1)]  w-[100px]  h-[128px]" />,
    title: "Solid Backup Management",
    description:
      "Safeguard your SAP data and configurations with robust backup management, ensuring quick recovery in case of unexpected data loss or system failures.",
    arrow: <BsArrowRight className=" w-6 h-6" />,
    text: "Read more",
  },
  {
    id: 8,
    icon: <RocketLaunch weight="thin" className="text-black hover:text-[hsla(36,100%,47%,1)]  w-[100px]  h-[128px]" />,
    title: "Automagic Discovery",
    description:
      "Gettings started is super simple with our Landscape Discovery Tool. Just point it to an IP range and we'll figure out your system. Have an up-to-date overview of your systems in less than 5 minutes!",
    arrow: <BsArrowRight className=" w-6 h-6" />,
    text: "Read more",
  },
  {
    id: 9,
    icon: <ChartLine weight="thin" className="text-black hover:text-[hsla(36,100%,47%,1)]  w-[100px]  h-[128px]" />,
    title: "Rigorous Reporting",
    description:
      "Access comprehensive and customizable reports to analyze SAP system performance, compliance, and utilization, enabling data-driven decision-making and accountability.",
    arrow: <BsArrowRight className=" w-6 h-6" />,
    text: "Read more",
  },
  {
    id: 10,
    icon: <IdentificationBadge weight="thin" className="text-black hover:text-[hsla(36,100%,47%,1)] w-[100px]  h-[128px]" />,
    title: "Flexible Access Management",
    description:
      "Take control of user access to your SAP systems effortlessly, ensuring the right people have the right permissions, enhancing security, and compliance.",
    arrow: <BsArrowRight className="  w-6 h-6" />,
    text: "Read more",
  },
];

export default function Services() {
  return (
    <div className="w-full container mx-auto">
      <div className="flex flex-col lg:p-14 p-7">
        <div className="lg:text-5xl text-3xl">Features</div>
        <div className="grid lg:grid-cols-1 xl:grid-cols-2 grid-cols-1  gap-8 lg:gap-0">
          {ServiceData.map((data) => (
            <div
              key={data.id}
              className="flex gap-x-4 lg:p-8 p-0 flex-wrap lg:flex-nowrap"
            >
              <div className="" >{data.icon}</div>
              <div className="flex flex-col gap-5 mt-[12px]">
                <div className="lg:text-5xl text-2xl">{data.title}</div>
                <p className="w-full lg:w-[388.33px] text-lg text-gray-500">
                  {data.description}
                </p>
                <div className="flex items-center gap-3 hover:text-[hsla(36,100%,47%,1)]">
                  <div className="">{data.arrow}</div>
                  <div className="text-lg font-normal">{data.text}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
