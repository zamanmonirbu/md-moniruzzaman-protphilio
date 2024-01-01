import React from 'react';
import { Link } from 'react-router-dom';
// import Football from '../../images/football.PNG';
// import Teacher from '../../images/teacher.PNG';
import portfolio from '../../images/portfolio.PNG'

const RecentWorks = () => {
    return (
        <>
            <div className="mt-20">
                <h1 className="font-bold text-3xl">
                    My <span className="text-[#F97316]">Works</span>
                </h1>
                <p className="font-mono text-xl pt-4">Recent Projects</p>
            </div>

            <section class="py-24 px-4 lg:px-16">
                <div class="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] ">
                    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">

                        <div class="relative group h-72 flex   flex-col rounded-xl bg-[#F97316] bg-clip-border text-gray-700 shadow-md mt-16">
                            <Link to="#" class="block">
                                <div class="h-50">
                                    <div
                                        class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-70%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-72 bg-gray-700 rounded-xl justify-items-center align-middle">
                                        <img src={portfolio}
                                            class="w-72 h-60  mt-6 m-auto" alt="Automotive" title="Automotive" loading="lazy"
                                            width="200" height="200" />
                                    </div>
                                </div>
                                <div class="p-6 mt-20  z-40 w-full   ">
                                    <Link to='/hello'
                                        class="  inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500">
                                        Live site
                                    </Link>
                                    <Link to='/hello'
                                        class=" inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500">
                                        Fronend code
                                    </Link>
                                    <Link to='/hello'
                                        class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500">
                                        Backend code
                                    </Link>
                                </div>
                            </Link>
                        </div>
                        <div class="relative group h-72 flex   flex-col rounded-xl bg-[#B3E0D2] bg-clip-border text-gray-700 shadow-md mt-28">
                            <Link to="#" class="block">
                                <div class="h-50">
                                    <div
                                        class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-70%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-72 bg-[#104374] rounded-xl justify-items-center align-middle">
                                        <img src={portfolio}
                                            class="w-72 h-60  mt-6 m-auto" alt="Automotive" title="Automotive" loading="lazy"
                                            width="200" height="200" />
                                    </div>
                                </div>
                                <div class="p-6 mt-20  z-40 w-full   ">
                                    <Link to='/hello'
                                        class="  inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500">
                                        Live site
                                    </Link>
                                    <Link to='/hello'
                                        class=" inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500">
                                        Fronend code
                                    </Link>
                                    <Link to='/hello'
                                        class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500">
                                        Backend code
                                    </Link>
                                </div>
                            </Link>
                        </div>
                        <div class="relative group h-72 flex   flex-col rounded-xl bg-[#0A0A0A] bg-clip-border text-gray-700 shadow-md mt-40">
                            <Link to="#" class="block">
                                <div class="h-50">
                                    <div
                                        class="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-70%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-72 bg-[#FF9C00] rounded-xl justify-items-center align-middle">
                                        <img src={portfolio}
                                            class="w-72 h-60  mt-6 m-auto" alt="Automotive" title="Automotive" loading="lazy"
                                            width="200" height="200" />
                                    </div>
                                </div>
                                <div class="p-6 mt-20  z-40 w-full   ">
                                    <Link to='/hello'
                                        class="  inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500">
                                        Live site
                                    </Link>
                                    <Link to='/hello'
                                        class=" inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500">
                                        Fronend code
                                    </Link>
                                    <Link to='/hello'
                                        class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500">
                                        Backend code
                                    </Link>
                                </div>
                            </Link>
                        </div>

                    </div>
                </div>
                <Link to='/view/projects'> <button className="mt-20 bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl ">
                    More Projects
                </button></Link>

            </section>
        </>
    );
};

export default RecentWorks;