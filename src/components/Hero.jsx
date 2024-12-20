import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.jpg";
import { delay, motion } from "framer-motion";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Albert Kirpach
            </motion.h1>

            <div className="flex flex-col items-center lg:flex-row lg:justify-center md:flex-row md:justify-center md:gap-4 w-full gap-4">
              <motion.span
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="flex-shrink-0 bg-gradient-to-r from-neutral-100 via-slate-200 to-pink-300 bg-clip-text text-4xl tracking-tight text-transparent"
              >
                Full-Stack Developer
              </motion.span>
              <motion.a
                variants={container(1.5)}
                initial="hidden"
                animate="visible"
                href="mailto:uakirpach@gmail.com"
                className="flex-shrink-0 md:ml-4 lg:ml-4"
              >
                <MagicButton
                  title="Get in Touch"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </motion.a>
            </div>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-2-xl py-6 font-light tracking-tigther"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Albert Kirpach"
              className="rounded-lg border-none bg-none shadow-lg object-cover"
            ></motion.img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
