import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const MarketData = [
  {
    id: 1,
    title: "Uninvolved Updates",
    description:
      "Experience seamless IT management with our cutting-edge automation solution for OS, SAP Kernel & SAP Hana updates. Say goodbye to manual updates and ensure your systems are always up-to-date with the latest enhancements, security patches, and optimizations, boosting performance and reliability effortlessly.      ",
    images: {
      title: "Supports",
      imagesData: [
        {
          id: 1,
          src: "/redhat.svg",
          alt: "redhat",
          height: 100,
          width: 100
        },
        {
          id: 2,
          src: "/windows.svg",
          alt: "windows",
          height: 100,
          width: 100
        },
        {
          id: 3,
          src: "/sap.svg",
          alt: "sap",
          height: 100,
          width: 100
        },
      ]
    }
  },
  {
    id: 2,
    title: "Your SAP Landscape Central",
    description:
      "Elevate your SAP system management with robust SAP Parameter management and centralized deployments using full-featured Ansible playbooks. Harness the power to streamline changes across your SAP landscape, while enjoying enhanced auditing capabilities that provide transparency and control over system configurations.",
    arrowtext: "Explore all core features",
    arrowicon: <div className="bg-[#f2a900] hover:bg-[hsla(36,100%,47%,1)] w-[40px] h-[40px] rounded-full p-2"><BsArrowRight className="text-white w-6 h-6" />  </div>,
    images: {
      title: "Powered by",
      imagesData: [
        {
          id: 1,
          src: "/ansible.svg",
          alt: "ansible",
          height: 100,
          width: 100
        },

      ]
    }
  },
  {
    id: 3,
    title: "Secret Management",
    description:
      "Unlock the potential of seamless secret management with our robust, Vault-based solution. Includes automated SSL certificate issuance and renewal, along with secure storage of all your essential credentials within your SAP landscape. Safeguard your sensitive information and enjoy effortless, worry-free management, ensuring your systems are always protected and compliant.",
    images:
    {
      title: "Powered by",
      imagesData: [
        {
          id: 1,
          src: "/vault.svg",
          alt: "vault",
          height: 100,
          width: 100
        },
      ]
    }
  }
];

export default function Marketing() {
  return (
    <div className="w-full container mx-auto">
      <div className="text-4xl  pl-14">Top Three Core Features</div>
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-9 lg:p-14 p-7">

        {MarketData.map((data) => (

          <div key={data.id} className="flex flex-col ">

            <div className="flex flex-col gap-5">
              <span className="flex text-gray-400 text-sm justify-end mr-[50px] items-center gap-x-[10px] ">
                <p>{data.images.title}</p>
                {
                  data.images.imagesData.map((image) => (
                    <span key={image.id}>
                      <Image src={image.src} alt={image.alt} height={image.height} width={image.width} />
                    </span>
                  ))
                }
              </span>

              <div className="lg:text-3xl text-xl ">{data.title}</div>
              <p className="w-full lg:w-[401.33px] text-lg text-gray-500">
                {data.description}

              </p>

            </div>
          </div>
        ))}
      </div>

      <Link href="/features" className="flex items-center justify-center gap-3 hover:translate-y-1 duration-500 mx-auto">

        <div className="text-lg text-gray-500 font-normal">{MarketData[1].arrowtext}</div>
        <div className="">
          {MarketData[1].arrowicon}
        </div>
      </Link>
    </div>
  );
}
