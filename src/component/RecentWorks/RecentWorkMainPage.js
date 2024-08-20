import React from "react";
import { Link } from "react-router-dom";
import cool from "../images/cool-media.PNG";
import rescue from "../images/rescue.PNG";
import pizza from "../images/pizza-house.PNG";

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
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-28 lg:gap-y-16">
            <div class="relative group h-52 flex   flex-col rounded-xl bg-[#F97316] bg-clip-border text-gray-700 shadow-md mt-16">
              <Link to="https://cool-media-client.vercel.app/home" class="block">
                <div class="h-50">
                  <div class="absolute -top-5 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-60%]  group-hover:opacity-[0.9]   duration-300 w-[90%] h-52 bg-gray-700 rounded-xl justify-items-center align-middle">
                    <img
                      src={cool}
                      class="w-72 h-44  mt-4 m-auto"
                      alt="Automotive"
                      title="Automotive"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div class="p-6 mt-14  z-40 w-full   ">
                  <Link
                    to="https://cool-media-client.vercel.app/home"
                    class="  inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500"
                  >
                    Live site
                  </Link>
                  <Link
                    to="https://github.com/zamanmonirbu/cool-media-client"
                    class=" inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500"
                  >
                    Frontend code
                  </Link>
                  <Link
                    to="https://github.com/zamanmonirbu/cool-media-backend"
                    class=" inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500"
                  >
                    Backend code
                  </Link>
                  <Link
                    to="https://github.com/zamanmonirbu/cool-media-socket"
                    class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500"
                  >
                    Socket code
                  </Link>
                </div>
              </Link>
            </div>
            <div class="relative group h-52 flex   flex-col rounded-xl bg-[#B3E0D2] bg-clip-border text-gray-700 shadow-md mt-28">
              <Link to="https://rescue-hospital-client.vercel.app" class="block">
                <div class="h-50">
                  <div class="absolute -top-5 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-55%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-52 bg-[#104374] rounded-xl justify-items-center align-middle">
                    <img
                      src={rescue}
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
                    to="https://rescue-hospital-client.vercel.app/"
                    class="  inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500"
                  >
                    Live site
                  </Link>
                  <Link
                    to="https://github.com/zamanmonirbu/rescue-hospital-client"
                    class=" inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500"
                  >
                    Frontend code
                  </Link>
                  <Link
                    to="https://github.com/zamanmonirbu/rescue-hospital-backend"
                    class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500"
                  >
                    Backend code
                  </Link>
                </div>
              </Link>
            </div>
            <div class="relative group h-52 flex   flex-col rounded-xl bg-[#0A0A0A] bg-clip-border text-gray-700 shadow-md mt-40">
              <Link to="https://pizza-house-client.vercel.app" class="block">
                <div class="h-50">
                  <div class="absolute -top-5 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-55%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-52 bg-[#FF9C00] rounded-xl justify-items-center align-middle">
                    <img
                      src={pizza}
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
                    to="https://pizza-house-client.vercel.app"
                    class="  inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500"
                  >
                    Live site
                  </Link>
                  <Link
                    to="https://github.com/zamanmonirbu/pizza-house-client"
                    class=" inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500"
                  >
                    Frontend code
                  </Link>
                  <Link
                    to="https://github.com/zamanmonirbu/pizza-house-backend"
                    class="mb-2 inline-block text-tg text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased hover:text-red-500"
                  >
                    Backend code
                  </Link>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Link to="/view/projects">
          {" "}
          <button className="mt-20 bg-gray-700 hover:bg-emerald-500 text-white font-bold py-2 px-6 border border-emerald-500 rounded-3xl ">
            More Projects
          </button>
        </Link>
      </section>
    </>
  );
};

export default RecentWorks;
