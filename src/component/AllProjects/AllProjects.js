import React from 'react';
import { Link } from 'react-router-dom';
import cool from "../images/cool-media.PNG";
import rescue from "../images/rescue.PNG";
import pizza from "../images/pizza-house.PNG";
import mobile from "../images/mobile service center.PNG";
import football from "../images/football.PNG";
import panda from "../images/panda.PNG";
import rideShare from "../images/rideShare.PNG";

const AllProjects = () => {
    return (
       <div className=''>
          <div className="bg-gray-900 w-full h-52 ">
        <h1 className="text-2xl text-white  pt-12">Projects</h1>
      </div>
        <section class="py-24 px-4 lg:px-16">
          <div class="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] ">
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-16">
              <div class="relative group h-52 flex flex-col rounded-xl bg-[#F97316] bg-clip-border text-gray-700 shadow-md">
                <Link to="https://cool-media-client.vercel.app/home" class="block">
                  <div class="h-50">
                    <div class="absolute -top-5 lg:top-[-10%] left-[5%] z-40 group-hover:top-[-60%] group-hover:opacity-[0.9] duration-300 w-[90%] h-52 bg-gray-700 rounded-xl justify-items-center align-middle">
                      <img
                        src={cool}
                        class="w-72 h-44 mt-4 m-auto"
                        alt="Cool Media"
                        title="Cool Media"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div class="p-6 mt-14 z-40 w-full">
                    <Link
                      to="https://cool-media-client.vercel.app/home"
                      class="inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased hover:text-red-500"
                    >
                      Live site
                    </Link>
                    <Link
                      to="https://github.com/zamanmonirbu/cool-media-client"
                      class="inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased hover:text-red-500"
                    >
                      Frontend code
                    </Link>
                    <Link
                      to="https://github.com/zamanmonirbu/cool-media-backend"
                      class="inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased hover:text-red-500"
                    >
                      Backend code
                    </Link>
                    <Link
                      to="https://github.com/zamanmonirbu/cool-media-socket"
                      class="mb-2 inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased hover:text-red-500"
                    >
                      Socket code
                    </Link>
                  </div>
                </Link>
              </div>
              <div class="relative group h-52 flex flex-col rounded-xl bg-[#B3E0D2] bg-clip-border text-gray-700 shadow-md">
                <Link to="https://rescue-hospital-client.vercel.app" class="block">
                  <div class="h-50">
                    <div class="absolute -top-5 lg:top-[-10%] left-[5%] z-40 group-hover:top-[-55%] group-hover:opacity-[0.9] duration-300 w-[90%] h-52 bg-[#104374] rounded-xl justify-items-center align-middle">
                      <img
                        src={rescue}
                        class="w-72 h-44 mt-4 m-auto"
                        alt="Rescue Hospital"
                        title="Rescue Hospital"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div class="p-6 mt-20 z-40 w-full">
                    <Link
                      to="https://rescue-hospital-client.vercel.app/"
                      class="inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased hover:text-red-500"
                    >
                      Live site
                    </Link>
                    <Link
                      to="https://github.com/zamanmonirbu/rescue-hospital-client"
                      class="inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased hover:text-red-500"
                    >
                      Frontend code
                    </Link>
                    <Link
                      to="https://github.com/zamanmonirbu/rescue-hospital-backend"
                      class="mb-2 inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased hover:text-red-500"
                    >
                      Backend code
                    </Link>
                  </div>
                </Link>
              </div>
              <div class="relative group h-52 flex flex-col rounded-xl bg-[#0A0A0A] bg-clip-border text-gray-700 shadow-md">
                <Link to="https://pizza-house-client.vercel.app" class="block">
                  <div class="h-50">
                    <div class="absolute -top-5 lg:top-[-10%] left-[5%] z-40 group-hover:top-[-55%] group-hover:opacity-[0.9] duration-300 w-[90%] h-52 bg-[#FF9C00] rounded-xl justify-items-center align-middle">
                      <img
                        src={pizza}
                        class="w-72 h-44 mt-4 m-auto"
                        alt="Pizza House"
                        title="Pizza House"
                        loading="lazy"
                        width="200"
                        height="200"
                      />
                    </div>
                  </div>
                  <div class="p-6 mt-20 z-40 w-full">
                    <Link
                      to="https://pizza-house-client.vercel.app"
                      class="inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased hover:text-red-500"
                    >
                      Live site
                    </Link>
                    <Link
                      to="https://github.com/zamanmonirbu/pizza-house-client"
                      class="inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased hover:text-red-500"
                    >
                      Frontend code
                    </Link>
                    <Link
                      to="https://github.com/zamanmonirbu/pizza-house-backend"
                      class="mb-2 inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased hover:text-red-500"
                    >
                      Backend code
                    </Link>
                  </div>
                </Link>
              </div>
              {/* Repeat similar card structures */}
            </div>
          </div>
        </section>
        <section class="px-4 lg:px-16 ">
        <div class="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] ">      
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">
            <div class="relative group h-52 flex   flex-col rounded-xl bg-[#B3E0D2] bg-clip-border text-gray-700 shadow-md">
              <Link
                to="https://ridesharebd.netlify.app/"
                class="block"
              >
                <div class="h-50">
                  <div class="absolute -top-5 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-55%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-52 bg-[#104374] rounded-xl justify-items-center align-middle">
                    <img
                      src={rideShare}
                      class="w-72 h-44  mt-4 m-auto"
                      alt="Automotive"
                      title="Automotive"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6 mt-20  z-40 w-full   ">
                  <Link
                    to="https://ridesharebd.netlify.app/"
                    class="  inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500"
                  >
                    Live site
                  </Link>
                  <Link
                    to="https://github.com/zamanmonirbu/rideshare-client"
                    class=" inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500"
                  >
                    Frontend code
                  </Link>
                  <Link
                    to="https://github.com/zamanmonirbu/rideshare-backend"
                    class=" inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500"
                  >
                    Backend code
                  </Link>
                </div>
              </Link>
            </div>
         
            <div class="relative group h-52 flex   flex-col rounded-xl bg-[#B3E0D2] bg-clip-border text-gray-700 shadow-md">
              <Link
                to="https://zamanmonirbu.github.io/mobile-servicing-center/"
                class="block"
              >
                <div class="h-50">
                  <div class="absolute -top-5 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-55%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-52 bg-[#104374] rounded-xl justify-items-center align-middle">
                    <img
                      src={mobile}
                      class="w-72 h-44  mt-4 m-auto"
                      alt="Automotive"
                      title="Automotive"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6 mt-20  z-40 w-full   ">
                  <Link
                    to="https://zamanmonirbu.github.io/mobile-servicing-center/"
                    class="  inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500"
                  >
                    Live site
                  </Link>
                  <Link
                    to="https://github.com/zamanmonirbu/mobile-servicing-center"
                    class=" inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500"
                  >
                    Frontend code
                  </Link>
                </div>
              </Link>
            </div>
         

            <div class="relative group h-52 flex   flex-col rounded-xl bg-[#B3E0D2] bg-clip-border text-gray-700 shadow-md">
              <Link
                to="https://zamanmonirbu.github.io/sports-zone"
                class="block"
              >
                <div class="h-50">
                  <div class="absolute -top-5 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-55%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-52 bg-[#297410] rounded-xl justify-items-center align-middle">
                    <img
                      src={football}
                      class="w-72 h-44  mt-4 m-auto"
                      alt="Automotive"
                      title="Automotive"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6 mt-20  z-40 w-full   ">
                  <Link
                    to="https://zamanmonirbu.github.io/sports-zone"
                    class="  inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500"
                  >
                    Live site
                  </Link>
                  <Link
                    to="https://github.com/zamanmonirbu/sports-zone"
                    class=" inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500"
                  >
                    Frontend code
                  </Link>
                </div>
              </Link>
            </div>
           

            <div class="relative group h-52 flex   flex-col rounded-xl bg-[#B3E0D2] bg-clip-border text-gray-700 shadow-md">
              <Link
                to="https://zamanmonirbu.github.io/panda-mart-shoping-mall"
                class="block"
              >
                <div class="h-50">
                  <div class="absolute -top-5 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-55%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-52 bg-[#104374] rounded-xl justify-items-center align-middle">
                    <img
                      src={panda}
                      class="w-72 h-44  mt-4 m-auto"
                      alt="Automotive"
                      title="Automotive"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6 mt-20  z-40 w-full   ">
                  <Link
                    to="https://zamanmonirbu.github.io/panda-mart-shoping-mall/"
                    class="  inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500"
                  >
                    Live site
                  </Link>
                  <Link
                    to="https://github.com/zamanmonirbu/panda-mart-shoping-mall"
                    class=" inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500"
                  >
                    Frontend code
                  </Link>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
       </div>
    );
};

export default AllProjects;
