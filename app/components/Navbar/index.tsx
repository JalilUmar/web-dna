"use client";
import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { usePathname } from "next/navigation";
import RequestDemo from "../requestDemo/request-a-demo";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const textColorClass = pathname === "/features" || pathname === "/about" ? "text-black" : "text-white";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle the click event on a link
  const handleLinkClick = () => {
    setIsOpen(false); // Close the mobile navbar when a link is clicked
  };

  return (
    <div className="w-full container mx-auto">
      <div className="flex justify-between items-center lg:p-14 p-7 ">
        <div className="lg:w-[329.34px] w-[150px]">
          <Link href="/" className={textColorClass}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 426 41"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlSpace="preserve"
              style={{
                fill: "currentColor",
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinejoin: "round",
                strokeMiterlimit: 2
              }}            >
              <rect
                x="0"
                y="0"
                width="425.121"
                height="40.666"
                style={{ fill: "none" }}
              ></rect>
              <clipPath id="_clip1">
                <rect x="0" y="0" width="425.121" height="40.666"></rect>
              </clipPath>
              <g clipPath="url(#_clip1)">
                <path d="M67.815,7.563L55.452,7.563L55.452,0.582L87.973,0.582L87.973,7.563L75.639,7.563L75.639,40.084L67.815,40.084L67.815,7.563ZM122.958,40.084L94.422,40.084L94.422,0.582L122.522,0.582L122.522,7.388L102.276,7.388L102.276,16.493L119.846,16.493L119.846,23.3L102.276,23.3L102.276,33.306L122.958,33.306L122.958,40.084ZM139.007,25.714L139.007,40.055L131.124,40.055L131.124,0.582L148.548,0.582C152.824,0.582 156.227,1.745 158.816,4.072C161.405,6.399 162.685,9.454 162.685,13.264C162.685,18.268 159.951,22.427 155.326,24.405L164.256,40.084L155.646,40.084L147.588,25.714L139.007,25.714ZM148.054,7.388L139.007,7.388L139.007,18.907L148.054,18.907C150.119,18.907 151.748,18.355 152.911,17.279C154.046,16.202 154.628,14.864 154.628,13.264C154.628,9.803 152.242,7.388 148.054,7.388ZM179.432,25.714L179.432,40.055L171.549,40.055L171.549,0.582L188.973,0.582C193.249,0.582 196.652,1.745 199.241,4.072C201.83,6.399 203.11,9.454 203.11,13.264C203.11,18.268 200.376,22.427 195.751,24.405L204.681,40.084L196.071,40.084L188.013,25.714L179.432,25.714ZM188.478,7.388L179.432,7.388L179.432,18.907L188.478,18.907C190.544,18.907 192.173,18.355 193.336,17.279C194.471,16.202 195.052,14.864 195.052,13.264C195.052,9.803 192.667,7.388 188.478,7.388ZM218.461,32.346L215.523,40.084L207.145,40.084L223.086,0.582L232.103,0.582L248.073,40.084L239.695,40.084L236.786,32.346L218.461,32.346ZM227.623,8.785L220.671,26.092L234.517,26.092L227.623,8.785ZM270.841,40.666C267.059,40.666 263.598,39.764 260.485,37.99C257.344,36.215 254.871,33.772 253.068,30.659C251.264,27.547 250.363,24.114 250.363,20.333C250.363,16.522 251.235,13.09 253.01,9.977C254.784,6.865 257.198,4.421 260.311,2.647C263.394,0.873 266.827,-0 270.637,-0C274.099,-0 277.328,0.785 280.353,2.385C283.349,3.985 285.88,6.283 287.945,9.279L281.749,13.701C278.927,9.425 275.204,7.272 270.637,7.272C267.059,7.272 264.121,8.494 261.853,10.937C259.555,13.381 258.42,16.522 258.42,20.333C258.42,24.143 259.584,27.285 261.94,29.728C264.267,32.172 267.234,33.394 270.841,33.394C273.953,33.394 276.455,32.608 278.404,31.066C280.324,29.525 281.516,27.605 282.011,25.336L270.055,25.336L270.055,18.558L289.952,18.558C290.039,19.402 290.097,20.478 290.097,21.729C290.127,31.852 282.913,40.695 270.841,40.666ZM305.855,25.714L305.855,40.055L297.972,40.055L297.972,0.582L315.396,0.582C319.672,0.582 323.076,1.745 325.665,4.072C328.253,6.399 329.533,9.454 329.533,13.264C329.533,18.268 326.799,22.427 322.174,24.405L331.104,40.084L322.494,40.084L314.436,25.714L305.855,25.714ZM314.902,7.388L305.855,7.388L305.855,18.907L314.902,18.907C316.967,18.907 318.596,18.355 319.76,17.279C320.894,16.202 321.476,14.864 321.476,13.264C321.476,9.803 319.091,7.388 314.902,7.388ZM344.884,32.346L341.946,40.084L333.569,40.084L349.509,0.582L358.526,0.582L374.496,40.084L366.119,40.084L363.21,32.346L344.884,32.346ZM354.047,8.785L347.095,26.092L360.941,26.092L354.047,8.785ZM388.276,40.084L380.422,40.084L380.422,0.582L388.741,0.582L401.482,26.878L414.194,0.582L422.513,0.582L422.513,40.084L414.659,40.084L414.659,15.853L404.013,37.437L398.922,37.437L388.276,15.853L388.276,40.084ZM0.669,40.666L35.524,0L47.405,0L12.55,40.666L0.669,40.666ZM36.545,32.841L36.545,23.238L44.37,23.238L44.37,40.666L26.942,40.666L26.942,32.841L36.545,32.841ZM21.132,-0L21.132,7.825L11.529,7.825L11.529,17.428L3.704,17.428L3.704,-0L21.132,-0Z"></path>
                <path d="M13.689,-19.404L7.748,-24.497L-47.915,40.446L-41.974,45.538L13.689,-19.404Z"></path>
              </g>
            </svg>
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex justify-center items-center gap-10 text-white text-xl">
            <div className="flex justify-center items-center gap-3">
              <div>
                <Link href="/features" className={textColorClass}>Features</Link>
              </div>
              <div>
                <AiOutlinePlus className={textColorClass} />
              </div>
            </div>
            <div>
              <Link href="/about" className={textColorClass}> About </Link>
            </div>
            <div>
              <Link href="/getintouch" className={textColorClass}> Contact </Link>
            </div>
            {/* <div className="bg-[#f2a900] hover:bg-[hsla(36,100%,47%,1)] p-3 rounded-full ">
              <Link href="/getintouch" className="translate-y-2 transition-all duration-200 " >
                Request a demo
              </Link>
            </div> */}
            <RequestDemo />
          </div>
        </div>
        <div onClick={toggleMenu} className="md:hidden">
          <HiOutlineMenuAlt4 className={`w-8 h-8 ${textColorClass}`} />
        </div>
      </div>
      {/* /// mobile button /// */}
      {isOpen && (
        <div className="fixed top-20 left-0 w-full h-full bg-black bg-opacity-95 transition-all duration-300">
          <div className="flex flex-col pt-10 gap-5 text-[#fff] text-xl p-7">
            <div className="flex gap-3">
              <div className="border-b border-[#A09EA0] py-2 w-full">
                <Link href="/features" onClick={handleLinkClick}>
                  Features
                </Link>
              </div>
            </div>
            <div className="border-b border-[#A09EA0] py-2 w-full">
              <Link href="/about" onClick={handleLinkClick}>
                {" "}
                About{" "}
              </Link>
            </div>
            <div className="border-b border-[#A09EA0] py-2 w-full">
              <Link
                onClick={handleLinkClick}
                href="/getintouch"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
