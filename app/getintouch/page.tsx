import React from "react";
import { BsArrowDownShort } from "react-icons/bs";
import FormGetInTouch from "../components/getintouch/form";
import Link from "next/link";

export default function GetInTouch() {
  return (
    <div className="w-full container mx-auto">
      <div className="flex flex-col lg:p-14 p-7">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col text-white">
            <div className="lg:text-7xl text-3xl">Get in touch</div>
            {/* <div className="lg:text-7xl text-3xl font-bold">
              contactATterragram.com
            </div> */}
            <section className="mt-[80px]">
              <div className="flex flex-col text-xl ">
                <div>
                  <p>Terragram AG</p>
                </div>
                <div>
                  <p>Bodenacherring 7</p>
                </div>
                <div>
                  <p>8303 Bassersdorf</p>
                </div>
              </div>
              <div className="flex flex-col mt-5 text-xl">
                <div>
                  <p>+41 79 327 83 71</p>
                </div>
                <div>
                  <p>contact@terragram.com</p>
                </div>
              </div>


            </section>
          </div>
          <div className="flex items-center gap-4 pt-10 lg:pb-40 pb-20">
            <Link href='' className='flex items-center gap-3 hover:translate-y-1 duration-500'>
              <div className="text-lg font-normal text-white hover:text-gray-400">
                Send us a message
              </div>
              <div className="bg-[#f2a900] hover:bg-[hsla(36,100%,47%,1)]  w-[40px] h-[40px] rounded-full p-2">
                <BsArrowDownShort className="text-white w-6 h-6" />
              </div>
            </Link>
          </div>
        </div>
        {/* /// Form start /// */}
        <div className="w-full bg-white pt-24">
          <div className="flex justify-between flex-wrap lg:flex-nowrap gap-5 lg:gap-0 p-14">
            <div className="w-full lg:w-3/12 text-gray-500">
              <div className="flex flex-col gap-10 ">
                <div className="text-4xl text-black">Request a Demo</div>
                <p className="text-lg text-gray-500">
                  Now is the time to take that decisive step towards a brighter,
                  more efficient future for your business. We're here to guide
                  you on this transformative journey.
                </p>
                {/* <div className="flex flex-col">
                  <div>
                    <p>+41 79 327 83 71</p>
                  </div>
                  <div>
                    <p>contact@terragram.com</p>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <p>
                      Alternatively, you are welcome to contact us by phone or
                      by
                    </p>
                  </div>
                  <div>
                    <p>mail:</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div>
                    <p>Terragram AG</p>
                  </div>
                  <div>
                    <p>Bodenacherring 7</p>
                  </div>
                  <div>
                    <p>8303 Bassersdorf</p>
                  </div>
                  <div>
                    <p>Schweiz</p>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="w-full lg:w-8/12">
              <div className="flex flex-col">
                <FormGetInTouch />
              </div>
            </div>
          </div>
        </div>
        {/* /// forms end /// */}
      </div>
    </div>
  );
}
