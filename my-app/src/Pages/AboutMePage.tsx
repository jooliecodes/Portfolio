import Nav from "../Components/Nav";

export default function AboutMePage() {
  return (
    <>
      <div className="sm:w-3/4 bg-pink-50 mt-20 border border-4 border-pink-400 flex justify-center flex-wrap w-10/12 pt-4 rounded m-auto">
        <div className="sm:w-full border border-4 bg-white border-pink-300 flex justify-between flex-wrap w-10/12 rounded m-auto p-1">
          <h6 className="small-text">https://www.joolie.codes</h6>
          <div className="relative w-3 h-6 mx-2">
            <div className="w-2 h-0.5 bg-white border border-black right-5 absolute p-2 top-0.5 m-0.5"></div>
            <div className="absolute inset-0 bg-black w-0.5 h-11/12 mx-auto rotate-45"></div>
            <div className="absolute inset-0 bg-black w-0.5 h-11/12 mx-auto -rotate-45"></div>
          </div>
        </div>

        <div className="sm:w-full border border-4 border-pink-300 flex justify-center flex-wrap p-4 w-10/12 rounded m-auto">
          <Nav />
          <div className="md:w-1/2 w-full">
            <img
              src="/images/softwaregirly.png"
              alt="anime girl on computer"
              className="w-full flex justify-center pt-4 p-8"
            />
          </div>
          <div className="sm:w-1/2 w-full m-auto pt-4 line-height bg-white rounded p-4">
            <p className="line-height">
              Hi, My name is Julie! I'm a versatile professional with diverse
              experiences spanning digital content creation, live streaming on
              Twitch, and even venturing into the beauty industry with my own
              makeup brand. Recently, I've embarked on an exciting journey into
              software engineering. My fascination with the inner workings of
              our digital world sparked my interest in tech. Inspired by the
              talent in the industry, I dove into software development through a
              rigorous coding bootcamp. This journey has not only broadened my
              skill set but also fueled my passion for continuous learning and
              growth.
            </p>
            <p>
              When I'm not coding, you'll often find me exploring virtual realms
              in PC games. Whether it's the thrill of FPS games or the
              tranquility of simulation games, I'm always on the lookout for my
              next gaming adventure. Currently, Overwatch 2 and Palworld are at
              the top of my list.
            </p>
            <p>
              Beyond gaming, I have a deep appreciation for culinary exploration
              and fashion, drawing inspiration from the world around me. Looking
              ahead, I envision embracing the dynamic lifestyle of New York
              City, with its vibrant energy and endless opportunities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
