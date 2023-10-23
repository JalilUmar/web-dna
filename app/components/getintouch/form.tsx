"use client"

import { handleContactUs } from '@/controllers/get-in-touch/get-in-touch'
import { useRouter } from 'next/navigation'
import React, { useRef } from 'react'

export default function FormGetInTouch() {

    const router = useRouter()
    const ref = useRef<HTMLFormElement>(null)

    return (
        <form
            ref={ref}
            action={async (formData: FormData) => {
                ref.current?.reset()
                handleContactUs(formData)
            }}
            className="flex flex-col gap-12">

            <div className="relative z-0 mb-6 w-full group">
                <input
                    type="name"
                    name="fullName"
                    className="block text-black font-sans py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                />
                <label
                    htmlFor="fullname"
                    className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Full Name
                </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input
                    type="email"
                    name="email"
                    className="block py-2.5 font-sans  px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                />
                <label
                    htmlFor="floating_email"
                    className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Email address
                </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <input
                    type="tel"
                    name="phone"
                    className="block py-2.5 px-0 font-sans  w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                />
                <label
                    htmlFor="number"
                    className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Phone Number
                </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
                <textarea

                    name="message"
                    className="block py-20 px-0 font-sans  w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                ></textarea>
                <label
                    htmlFor="message"
                    className="absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Your Message
                </label>
            </div>
            <div className="flex ">
                <button
                    type="submit"
                    className="bg-[#f2a900] hover:translate-y-1 duration-500 text-white hover:bg-[hsla(36,100%,47%,1)] p-2 w-[150px] rounded-full ml-auto">
                    Send a request
                </button>
            </div>
        </form>
    )
}
