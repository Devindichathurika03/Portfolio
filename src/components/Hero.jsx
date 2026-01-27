import { motion } from "framer-motion";
import {Github, Linkedin, Mail } from "lucide-react";
import { styles } from "../styles";


const Hero = () => {
  return (
    
    <section className={`relative w-full mx-auto`}>
      <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 pt-[120px] pb-10`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        
         {/* text */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Devindi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A full-stack software engineer, passionate about building <br className='sm:block hidden' />
            modern and interactive web experiences.
          </p>

          {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex mt-5 gap-6"
        >
          <a
            href="https://github.com/Devindichathurika03"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-purple-500/50 transition-all hover:scale-110"
          >
            <Github className="w-5 h-5 text-gray-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/devindi-chathurika-17459b237/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-cyan-500/50 transition-all hover:scale-110"
          >
            <Linkedin className="w-5 h-5 text-gray-300" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=devindichathurika03@gmail.com&su=Hello&body=Hi%20Devindi"
            target="_blank"
             rel="noopener noreferrer"
            className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-purple-500/50 transition-all hover:scale-110"
          >
            <Mail className="w-5 h-5 text-gray-300" />
          </a>
        </motion.div>

         {/* Download cv */}
        <motion.a
         href="/Devindi_CV.pdf"
         download
         whileHover={{ scale: 1.05 }}
         whileTap={{ scale: 0.95 }}
         className="mt-6 inline-block px-6 py-3 bg-purple-700 text-white font-medium rounded-lg transition-all"
          >
         Download CV
         </motion.a>


        </div>  
      </div>
    </section>
  );
};

export default Hero;
