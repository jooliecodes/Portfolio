import Nav from "./Nav";
import "../App.css";

export default function Projects() {
  return (
    <>
      <div className="sm:w-3/4 bg-pink-50 mt-20 border border-4 border-pink-400 flex justify-center flex-wrap p-4 w-11/12 rounded m-auto">
        <div className="sm:w-full border border-4 bg-white border-pink-300 flex justify-between flex-wrap w-11/12 rounded m-auto p-1">
          <h6 className="small-text">https://www.julie.codes</h6>
          <div className="relative w-3 h-6 mx-2">
            <div className="w-2 h-0.5 bg-white border border-black right-5 absolute p-2 top-0.5 m-0.5"></div>
            <div className="absolute inset-0 bg-black w-0.5 h-11/12 mx-auto rotate-45"></div>
            <div className="absolute inset-0 bg-black w-0.5 h-11/12 mx-auto -rotate-45"></div>
          </div>
        </div>

        <div className="sm:w-full border border-4 border-pink-300 flex justify-center flex-wrap p-2 w-11/12 rounded m-auto">
          <Nav />
          <div className="w-full flex gap-5 flex-wrap justify-center sm:p-8 p-2 lg:p-2 mb-20">
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-pink-200 mt-10">
              <a
                href="http://darling-doll-cosmetics-dev.us-west-1.elasticbeanstalk.com/"
                className="hover:bg-sky-200 text-xs"
              >
                http://darling-doll-cosmetics-dev.us-west-1.elasticbeanstalk.com/
                <img
                  className="w-full"
                  src="/images/darlingdollwebsite.png"
                  alt=""
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Darling Doll Cosmetics Eccomerce Website
                  </div>
                  <p className="text-gray-700 text-base">
                    A full stack application for my small business. I used
                    React, TypeScript, PostgreSQL, AWS Beanstalk, Node, and
                    Express.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #TypeScript
                  </span>
                  <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #React
                  </span>
                  <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #TailWindCSS
                  </span>
                </div>
              </a>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-pink-200 mt-10">
              <a
                href="https://jooliecodes.github.io/valorant-collections/"
                className="hover:bg-sky-200 text-xs"
              >
                https://jooliecodes.github.io/valorant-collections/
                <img
                  className="w-full"
                  src="/images/valorantcollections.png"
                  alt="valorant collections website image"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    VALORANT Collections AJAX Project
                  </div>
                  <p className="text-gray-700 text-base">
                    A website showcasing all the VALORANT Skins using the
                    unofficial VALORANT API. I used vanilla JavaScript, HTML,
                    and CSS.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #JavaScript
                  </span>
                  <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #HTML
                  </span>
                  <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #CSS
                  </span>
                </div>
              </a>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-pink-200 mt-10">
              <a
                href="https://joolie.codes/"
                className="hover:bg-sky-200 text-xs"
              >
                https://joolie.codes/
                <img
                  className="w-full"
                  src="/images/Gif.gif"
                  alt="julie's animated software engineer gif"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Portfolio Website
                  </div>
                  <p className="text-gray-700 text-base">
                    My portfolio website showcasing my experience, skills, and
                    projects. Created with React, TypeScript, and Tailwind CSS.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #TypeScript
                  </span>
                  <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #React
                  </span>
                  <span className="inline-block bg-pink-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #TailWindCSS
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
