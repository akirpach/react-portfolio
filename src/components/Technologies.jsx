import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { AiOutlineDotNet } from "react-icons/ai";
import { TbBrandCSharp } from "react-icons/tb";
import { TbSql } from "react-icons/tb";
import { FaPython } from "react-icons/fa6";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b boderder-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl
        text-neutral-900
        dark:text-neutral-100"
      >
        Technologies
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounde-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounde-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandNextjs className="text-7xl text-neutral-600 dark:text-neutral-300" />
        </motion.div>
        <motion.div
          variants={iconVariants(4.6)}
          initial="initial"
          animate="animate"
          className="rounde-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandCSharp className="text-7xl bg-gradient-to-r from-[#9b4993] to-purple-600 text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounde-2xl border-4 border-neutral-800 p-4"
        >
          <AiOutlineDotNet className="text-7xl bg-gradient-to-r from-[#9b4993] to-purple-600 text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(5.2)}
          initial="initial"
          animate="animate"
          className="rounde-2xl border-4 border-neutral-800 p-4"
        >
          <TbSql className="text-7xl bg-gradient-to-r from-neutral-400 to-neutral-800 text-white" />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounde-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-7xl fill-slate-900 bg-gradient-to-r from-blue-600 to-yellow-200" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
