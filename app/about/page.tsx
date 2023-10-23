import React from "react";
import {FaQuoteLeft} from "react-icons/fa"

export default function About() {
  return (
    <div className="w-full container mx-auto">
      <div className="flex flex-col lg:p-14 p-7">
        <div className="flex flex-col">
          <div className="lg:text-7xl text-3xl">What makes</div>
          <div className="lg:text-7xl text-3xl font-bold">us tick</div>
        </div>
        <div className="flex flex-col gap-12 pt-40">
          <div className="flex flex-col gap-10">
            <div>
              <p>Goal Harmony</p>
            </div>
            <div className="w-full lg:w-[1011.66px] lg:text-5xl text-2xl font-light">
              <span className="lg:text-5xl text-2xl font-semibold">
                {" "}
                Our clients' success is our success.
              </span>{" "}
              We are a tight-knit team who work in harmony with our clients to
              help them achieve their goals.
            </div>
          </div>
          <p className="w-full lg:w-[940.66px] text-lg text-gray-500">
            Our team has been built from people with deep expertise in several
            areas, and a broader expertise in other areas such as communication,
            marketing or digital skills. With experts in digital design and user
            experience, development and performance marketing, we have the
            perfect mix to help our clients grow.
          </p>
        </div>
        <div className="flex gap-32 pt-40">
          <div className="flex flex-col gap-2">
            <div className="lg:text-6xl text-2xl font-normal">19</div>
            <p className="text-lg text-gray-500">Years Established</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="lg:text-6xl text-2xl font-normal">16</div>
            <p className="text-lg text-gray-500">Dedicated People</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="lg:text-6xl text-2xl font-normal">100+</div>
            <p className="text-lg text-gray-500">Happy Clients</p>
          </div>
        </div>
        <div className="flex justify-between flex-wrap lg:flex-nowrap pt-40">
          <div className="flex flex-col gap-10">
            <div className="border-t-2 border-black"></div>
            <div className="lg:text-6xl text-2xl font-normal">Our History</div>
            <p className="w-full lg:w-[401.33px] text-lg text-gray-500">
              Like many start up agencies, our first clients were friends. We
              learned early that our clients' success is also our success, and
              as we have grown we have made sure that our focus on helping our
              clients succeed is at the centre of what we do.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="border-t-2 border-black"></div>
            <div className="lg:text-6xl text-2xl font-normal">Our Team</div>
            <p className="w-full lg:w-[401.33px] text-lg text-gray-500">
              We are really proud of our team. We have great designers,
              developers and marketers with the skills and pragmatism to get the
              results our clients need.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="border-t-2 border-black"></div>
            <div className="lg:text-6xl text-2xl font-normal">Our Beliefs</div>
            <p className="w-full lg:w-[401.33px] text-lg text-gray-500">
              Over the years we have built up a set of beliefs that form the
              basis of our culture. That culture underpins how we deal with each
              other and with our clients.
            </p>
          </div>
        </div>
        <div className="flex justify-between flex-wrap lg:flex-nowrap pt-40">
          <p className="text-lg text-gray-500">Testimonial</p>
          <div className="flex flex-col gap-5">
          <div className="w-full lg:w-[1011.66px] lg:text-5xl text-2xl font-light">
            <span className="lg:text-5xl text-2xl font-semibold">
              {" "}
              webdna have been incredible to work with,
            </span>{" "}
            their work on the brand and our new website is amazing and we're
            looking forward to the next few years. Who knows how far we can go.
          </div>
          <div className="flex gap-2 items-center">
            <div className="w-[48px] h-[48px] bg-[#f2a900] hover:bg-[hsla(36,100%,47%,1)] justify-center items-center flex rounded-full p-2">
              <FaQuoteLeft className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <p className="text-lg text-gray-500 font-semibold">Ashley Fry</p>
              <p className="text-lg text-gray-500">Owner, Paws In Work</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
