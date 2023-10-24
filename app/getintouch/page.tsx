import React from "react";
import { BsArrowDownShort } from "react-icons/bs";
import FormGetInTouch from "../components/getintouch/form";
import Link from "next/link";

export default function GetInTouch() {
  return (
    <div className="w-full container mx-auto">
      <div className="flex flex-col lg:p-14 p-7">

        {/* /// Form start /// */}
        <div className="w-full bg-white pt-24">
          <div className="flex justify-between flex-wrap lg:flex-nowrap gap-5 lg:gap-0 p-14">
            <div className="w-full lg:w-3/12 text-gray-500">
              <div className="flex flex-col gap-10 ">
                <div className="text-5xl text-black">Get in touch</div>
                <p className="text-lg text-gray-500">
                  At Terragram, your success is our priority. Let's embark on this journey together!.
                </p>
                <p className="text-lg text-gray-500">
                  Please leave us a message and we will get back to you as soon as possible.
                </p>
                <section className="mt-[20px]">
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
