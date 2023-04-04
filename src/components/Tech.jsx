import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Skills developed during my journey</p>
        <h2 className={styles.sectionHeadText}>Overall Skills</h2>
      </motion.div>
      <div className='mt-12 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28 ' key={technology.name}>

            <BallCanvas icon={technology.icon} />
            <div className='text-center text-[14px] text-blue-50'>
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
