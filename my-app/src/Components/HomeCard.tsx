import Nav from "./Nav";

export default function HomeCard() {
  return (
    <>
      <div className="sm:w-11/12 md:w-3/4 lg:w-1/2 bg-pink-50 mt-24 border border-4 border-pink-400 flex justify-center flex-wrap p-4 w-11/12 rounded m-auto mb-10">
        <div className="sm:w-full border border-4 bg-white border-pink-300 flex justify-between flex-wrap w-full rounded m-auto p-1">
          <h6 className="small-text">https://www.joolie.codes</h6>
          <div className="relative w-3 h-6 mx-2">
            <div className="w-2 h-0.5 bg-white border border-black right-5 absolute p-2 top-0.5 m-0.5"></div>

            <div className="absolute inset-0 bg-black w-0.5 h-11/12 mx-auto rotate-45"></div>
            <div className="absolute inset-0 bg-black w-0.5 h-11/12 mx-auto -rotate-45"></div>
          </div>
        </div>
        <div className="sm:w-full border border-4 border-pink-300 flex justify-center flex-wrap p-4 w-full rounded m-auto">
          <Nav />
          <img
            src="/images/pixelgif.gif"
            alt=""
            className="rounded-3xl md:w-11/12 mt-12 w-full"
          />
          <div className="flex flex-col justify-center pt-8 items-center">
            <img
              src="/images/me.jpg"
              alt="julie profile image"
              className="md:w-1/4 w-1/2 rounded-full border-pink-400 border-solid border-2 mb-4"
            />
            <div className="text-center p-2">
              <h1 className="text-3xl p-2 font-bold">Julie L</h1>
              <h3 className="text-xl p-4">Front-End Developer</h3>
              <div className="bg-white rounded">
                <h4 className="text-left p-4">
                  After establishing multiple small businesses in my past,
                  honing my marketing expertise on social media for over a
                  decade, acheived Twitch Partner, and founding my own makeup
                  brand generating over 6 figures, I am now leveraging my
                  diverse skill set to pursue software development.
                </h4>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <div className="p-4 flex gap-2">
              <a
                href="https://www.linkedin.com/in/jooliecodes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src="/images/linkedinblue.png"
                    className="max-w-xs transition duration-300 ease-in-out hover:scale-110 w-16"
                    alt=""
                  />
                  <h3>LinkedIn</h3>
                </div>
              </a>

              <a
                href="https://www.github.com/jooliecodes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src="/images/github.png"
                    className="max-w-xs transition duration-300 ease-in-out hover:scale-110 w-16"
                    alt=""
                  />
                  <h3>GitHub</h3>
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@jooliekawaii/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src="/images/tiktok.png"
                    className="max-w-xs transition duration-300 ease-in-out hover:scale-110 w-16"
                    alt=""
                  />
                  <h3>TikTok</h3>
                </div>
              </a>
              <a
                href="https://www.youtube.com/joolie"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                  <img
                    src="/images/YouTube.png"
                    className="max-w-xs transition duration-300 ease-in-out hover:scale-110 w-16"
                    alt=""
                  />
                  <h3>YouTube</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
