// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Nav from "./Nav";

export default function Experience() {

  return (
    <>
      <div className="sm:w-3/4 bg-pink-50 mt-20 border border-4 border-pink-400 flex justify-center flex-wrap p-4 w-10/12 rounded m-auto mb-20">
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
          <h1 className="p-4">Timeline</h1>

          <section className="bg-pink-50 dark:bg-gray-900 border-b border-solid border-pink-200">
            <div className="gap-16 items-center py-4 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light text-gray-500 dark:text-gray-400">
                <h3>Client Solutions Engineer / Remote</h3>

                <a
                  href="
                  https://tangenta.net/"
                  className="font-semibold text-pink-400"
                >
                  Tangenta Inc.
                </a>

                <h3>Feb 2024 - Present </h3>
                <ul>
                  <li>
                    Conducted engaging product demos online, effectively
                    communicating features to boost client acquisition.
                  </li>
                  <li>
                    Assist UI updates and fixes using TypeScript, React and
                    Material-UI, enhancing website functionality and design.
                  </li>
                  <li>
                    Trained AI chatbots with OpenAI, improving response accuracy
                    and customer service efficiency.
                  </li>
                  <li>
                    Updated website content in collaboration with marketing,
                    aligning with SEO and brand strategy.
                  </li>
                  <li>
                    Performed rigorous testing of code changes and AI
                    instructions, ensuring optimal performance and quality.
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img
                  className="w-full rounded-lg"
                  src="/images/softwaregirly.png"
                  alt="cyberbabe led eyeshadow palette image"
                />
                <img
                  className="mt-4 w-full lg:mt-10 rounded-lg"
                  src="/images/demos.png"
                  alt="office content 2"
                />
              </div>
            </div>
          </section>
          <section className="bg-pink-50 dark:bg-gray-900 border-b border-solid border-pink-200">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light text-gray-500 dark:text-gray-400">
                <h3>Ecommerce Business Owner / Part-Time</h3>
                <a
                  href="
                  https://darlingdollcosmetics.com/"
                  className="font-semibold text-pink-400"
                >
                  Darling Doll Cosmetics
                </a>
                <h3>Oct 2020 - Present </h3>
                <ul>
                  <li>
                    Leveraged paid social and organic content marketing
                    strategies on Shopify, contributing to revenue growth
                    surpassing $104K+ while growing 70,000+ followers online
                  </li>
                  <li>
                    Customized existing themes on Shopify, meticulously
                    integrating brand-specific elements and refining user
                    experience components
                  </li>
                  <li>
                    Collaborated closely with freelancers and manufacturers
                    overseas on product design and branding initiatives to
                    uphold quality and brand consistency
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img
                  className="w-full rounded-lg"
                  src="/images/cyberbabepalette.png"
                  alt="cyberbabe led eyeshadow palette image"
                />
                <img
                  className="mt-4 w-full lg:mt-10 rounded-lg"
                  src="/images/darling1.png"
                  alt="darling doll image"
                />
              </div>
            </div>
          </section>

          <section className="bg-pink-50 dark:bg-gray-900 border-b border-solid border-pink-200">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h3>Social Media Specialist / Hybrid</h3>
                <div className="text-sm">
                  <a
                    href="
                    https://culinarylabschool.com/"
                    className="font-semibold text-pink-400"
                  >
                    CulinaryLab Cooking School
                  </a>
                  <h3>Feb 2022 - Apr 2023</h3>
                  <ul>
                    <li>
                      Achieved exceptional growth of 494% on the TikTok account,
                      expanding the following from 1.9K to 11.6K, and garnered
                      significant brand exposure through a highly viewed video
                      with over 1.8 million views
                    </li>
                    <li>
                      Developed content calendars, effectively coordinating the
                      scheduling and publication of content across multiple
                      platforms using Hootsuite in a dynamic startup environment
                    </li>
                    <li>
                      Collaborated seamlessly with my manager to execute
                      projects with precision and exemplified a track record of
                      consistently meeting project deadlines
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img
                  className="w-full rounded-lg"
                  src="/images/clab.jpg"
                  alt="cyberbabe led eyeshadow palette image"
                />
                <img
                  className="mt-4 w-full lg:mt-10 rounded-lg"
                  src="/images/cookingschool.png"
                  alt="culinarlab cooking school image"
                />
              </div>
            </div>
          </section>
          <section className="bg-pink-50 dark:bg-gray-900 border-b border-solid border-pink-200">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
              <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h3>Content Creator</h3>
                <div className="text-sm">
                  <span className="font-semibold text-pink-400">
                    Self-Employed / Part-Time
                    <h3>Aug 2014 - Present </h3>
                  </span>
                  <ul>
                    <li>
                      Leveraged multi-platform content creation skills to
                      cultivate a dedicated following across Twitch, Instagram,
                      and YouTube, amassing a total audience of over 78,000
                      followers/subscribers
                    </li>
                    <li>
                      Streamed FPS games on Twitch as a partner, engaging with a
                      community of 17,000 followers and participating in Twitch
                      Rivals events to showcase gaming prowess and entertain
                      viewers
                    </li>
                    <li>
                      Curated visually stunning content on Instagram, showcasing
                      fashion and lifestyle content to an audience of 50,000
                      followers, while collaborating with fashion brands and
                      lifestyle products to create sponsored content and
                      promotional campaigns
                    </li>
                    <li>
                      Produced and edited videos on Final Cut Pro for a YouTube
                      channel with 11,000 subscribers, crafting engaging vlogs,
                      fashion hauls, and style guides to captivate audiences and
                      drive subscriber growth
                    </li>
                    <li>
                      Established partnerships with various brands, negotiating
                      terms and contracts to produce sponsored content across
                      platforms, ensuring alignment with personal brand values
                      and audience interests
                    </li>
                    <li>
                      Maintained professionalism and delivered high-quality
                      content while meeting brand objectives and deadlines,
                      resulting in successful collaborations and continued
                      audience engagement
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <img
                  className="w-full rounded-lg"
                  src="/images/contentcreator.jpg"
                  alt="instagram feed"
                />
                <img
                  className="mt-4 w-full lg:mt-10 rounded-lg"
                  src="/images/pubg.jpg"
                  alt="twitch stream joolie"
                />
              </div>
            </div>
          </section>

          {/* <div className="m-auto">
            <div className="bg-white border-gray-300 w-96 border rounded-3xl mb-16 mt-12">
              <header className="grid grid-cols-6 items-center p-3 border-b border-b-gray-300">
                <div>
                  <img
                    src="/images/darlinglogo.png"
                    className="rounded-full w-10 h-10"
                    alt="Avatar"
                  />
                </div>
                <div className="col-span-4 text-sm font-semibold">
                  E-ccomerece Business Owner
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </div>
              </header>
              <div>
                <Slider {...settings}>
                  {images.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt={`Photo ${index + 1}`} />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="flex flex-col p-4 gap-3">
                <div className="flex flex-row gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </div>
                <div className="text-sm font-semibold">11,552 Likes</div>
                <div className="text-sm">
                  <span className="font-semibold">
                    E-ccomerce Business Owner
                  </span>
                  <ul>
                    <li>
                      • Leveraged paid social and organic content marketing
                      strategies on Shopify, contributing to revenue growth
                      surpassing $103K+ while growing 70,000+ followers online
                    </li>
                    <li>
                      • Customized existing themes on Shopify, meticulously
                      integrating brand-specific elements and refining user
                      experience components
                    </li>
                    <li>
                      • Collaborated closely with freelancers and manufacturers
                      overseas on product design and branding initiatives to
                      uphold quality and brand consistency
                    </li>
                  </ul>
                </div>
                <div className="text-gray-500 text-sm">
                  View all 877 comments
                </div>
                <div className="text-gray-400 text-xs"> Oct 2020 - Present</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-white border-gray-300 w-96 border rounded-3xl">
              <header className="grid grid-cols-6 items-center p-3 border-b border-b-gray-300">
                <div>
                  <img
                    src="/images/darlinglogo.png"
                    className="rounded-full w-10 h-10"
                    alt="Avatar"
                  />
                </div>
                <div className="col-span-4 text-sm font-semibold">
                  Social Media Specialist
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    />
                  </svg>
                </div>
              </header>
              <div>
                <Slider {...settings}>
                  {images2.map((image, index) => (
                    <div key={index}>
                      <img src={image} alt={`Photo ${index + 1}`} />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="flex flex-col p-4 gap-3">
                <div className="flex flex-row gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </div>
                <div className="text-sm font-semibold">11,552 Likes</div>
                <div className="text-sm">
                  <span className="font-semibold">
                    CulinaryLab Cooking School
                  </span>
                  <ul>
                    <li>
                      Achieved exceptional growth of 494% on the TikTok account,
                      expanding the following from 1.9K to 11.6K, and garnered
                      significant brand exposure through a highly viewed video
                      with over 1.8 million views
                    </li>
                    <li>
                      Developed content calendars, effectively coordinating the
                      scheduling and publication of content across multiple
                      platforms using Hootsuite in a dynamic startup environment
                    </li>
                    <li>
                      Collaborated seamlessly with my manager to execute
                      projects with precision and exemplified a track record of
                      consistently meeting project deadlines
                    </li>
                  </ul>
                </div>
                <div className="text-gray-500 text-sm">
                  View all 877 comments
                </div>
                <div className="text-gray-400 text-xs">
                  {" "}
                  Feb 2022 - Apr 2023
                </div> */}
          {/* </div>
            </div> */}
        </div>
      </div>
    </>
  );
}
