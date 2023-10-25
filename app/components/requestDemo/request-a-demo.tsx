"use client"

import React, { useRef, useState } from 'react'
import FormGetInTouch from '../getintouch/form';
import RequestDemoForm from './requestDemoForm';

export default function RequestDemo() {

    const [showForm, setShowForm] = useState(false)
    const ref = useRef<any>(null)

    const handleOpenForm = () => {
        setShowForm(!showForm);
    };

    const handleOverlayClick = (e: React.MouseEvent) => {
        // Check if the click occurred outside the form
        if (ref.current && !ref.current.contains(e.target as Node)) {
            setShowForm(false);
        }
    };

    return (
        <>
            <button
                onClick={handleOpenForm}
                className="bg-[#f2a900] hover:bg-[hsla(36,100%,47%,1)] p-3 rounded-full hover:scale-105 transition-all duration-200 ">

                Request a demo
            </button>

            {
                showForm && (
                    <div className="flex items-center justify-center h-screen w-[500px]  absolute z-50 transition-all duration-150" onClick={handleOverlayClick}>
                        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50 " >
                            <div className="w-full container mx-auto">
                                <div className="flex flex-col lg:p-14 p-7">


                                    {/* /// Form start /// */}
                                    <div ref={ref} className="w-full bg-white rounded-xl shadow h-screen md:overflow-hidden overflow-y-auto scale-75 md:pt-24 pt-10">

                                        <div className="flex justify-between flex-wrap lg:flex-nowrap gap-5 lg:gap-0 md:p-14 px-5">
                                            <div className="w-full lg:w-3/12 text-gray-500">
                                                <div className="flex flex-col gap-10 ">
                                                    <div className="md:text-4xl text-2xl text-black ">Request a demo</div>

                                                    <span className='grid gap-y-5'>

                                                        <p className="text-lg text-gray-500">
                                                            Now is the time to take that decisive step towards a brighter, more efficient future for your business. We're here to guide you on this transformative journey.
                                                        </p>
                                                        <p className="text-lg text-gray-500">
                                                            Requesting a demo is simple! Just fill out the form on your right, and we'll take care of the rest. Don't let this opportunity pass you by. Your competitors are already moving forward – don't wait; your future success begins with one click. Request a demo now and empower your organization with the SAP automation advantage!
                                                        </p>
                                                    </span>

                                                </div>

                                            </div>
                                            <div className="w-full lg:w-8/12 md:mt-0 mt-[40px]">
                                                <div className="flex flex-col md:pb-0 pb-9">
                                                    <RequestDemoForm />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /// forms end /// */}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )

}
