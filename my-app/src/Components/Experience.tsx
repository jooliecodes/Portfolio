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
                <h3>Frontend Developer / Remote</h3>

                <a
                  href="
                  https://tangenta.net/"
                  className="font-semibold text-pink-400"
                >
                  Tangenta Inc.
                </a>

                <h3>Feb 2024 - Present </h3>
                <ul className="space-y-3 text-gray-700">
                  {/* Each li represents one bullet point from your original text */}
                  <li>
                    Directed frontend development for a real-time aerospace dashboard used by Baxter Aerospace,
                    focusing on user experience, security, and visual clarity
                  </li>

                  <li>
                    Built the entire UI in React, managing component architecture, styling, and dynamic data flows;
                    delivered regular demos directly to stakeholders
                  </li>

                  <li>
                    Integrated payment processing via Stripe, then migrated to QuickBooks, supporting backend
                    API modifications during the transition
                  </li>

                  <li>
                    Maintained Azure infrastructure, including Front Door, DNS routing, and CI/CD pipelines
                    to support secure, scalable deployments
                  </li>

                  <li>
                    Contributed to QA testing, bug resolution, and cross-functional reviews to ensure each
                    release met production standards
                  </li>

                  <li>
                    Assisted backend with shell deployment scripts, demonstrating cross-functional flexibility
                    and willingness to learn
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-700">
                  <li>
                    Developed an interactive 3D simulation interface using Three.js and custom Blender animations,
                    enabling real-time control of robotic hardware
                  </li>

                  <li>
                    Writing code that follows best practices in writing reliable and maintainable code that
                    other engineers may use
                  </li>

                  <li>
                    Created a 2D UI overlay system anchored to 3D coordinates using screen-space math,
                    embedding Ace Editor for live code editing
                  </li>

                  <li>
                    Built a React-based drag-and-drop uploader for 3D robot models, allowing users to scale,
                    rotate, and position assets on a live map
                  </li>

                  <li>
                    Integrated the Trellis API and contributed to Python backend scripts that processed and
                    deployed uploaded assets
                  </li>

                  <li>
                    Engineered custom reusable React components (dialogs, controls, sidebars) to improve dev
                    velocity and ensure interface consistency
                  </li>

                  <li>
                    Configured realistic scene elements: lighting, terrain, skyboxes, transparency for enhancing
                    visual fidelity, and immersion
                  </li>

                  <li>
                    Took initiative to debug, refactor, and optimize code; self-taught Typescript, Blender,
                    and Three.js to meet project needs
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
        </div>
      </div>
    </>
  );
}
