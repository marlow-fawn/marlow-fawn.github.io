import {personalInfo} from "@/lib/data";
import {Mail, Github, MapPin, Linkedin} from "lucide-react";
import {motion} from "framer-motion";
import MotionWrapper from "./MotionWrapper";

export default function HeroSection() {
  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const childVariants = {
    hidden: {opacity: 0, y: 20},
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden bg-green-900/10 ">
      <div className="container max-w-4xl mx-auto px-6 md:px-4 relative z-10">
        <motion.div
          className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl font-bold mb-2"
              variants={childVariants}
            >
              {personalInfo.name}{" "}
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-6"
              variants={childVariants}
            >
              Robotics Software Engineer
            </motion.p>

            <motion.div
              className="flex flex-col gap-2 items-center md:items-start"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center text-sm text-muted-foreground"
                variants={childVariants}
                whileHover={{scale: 1.05, color: "#4b5563"}}
              >
                <MapPin className="h-4 w-4 mr-2"/>
                {personalInfo.location}
              </motion.div>

              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{scale: 1.05, color: "#4b5563"}}
              >
                <Mail className="h-4 w-4 mr-2"/>
                {personalInfo.email}
              </motion.a>

              <motion.a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{scale: 1.05, color: "#4b5563"}}
              >
                <Github className="h-4 w-4 mr-2"/>
                GitHub
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                variants={childVariants}
                whileHover={{scale: 1.05, color: "#4b5563"}}
              >
                <Linkedin className="h-4 w-4 mr-2"/>
                LinkedIn
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="mt-6 md:mt-0 flex justify-center"
            variants={childVariants}
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
          >
            <div className="relative">
              <div
                className="absolute -inset-1 bg-amber-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-2000 group-hover:duration-2000"></div>
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-60 md:w-120 rounded-full relative ring-1 ring-amber-500/70"
                style={{objectFit: "cover"}}
              />
            </div>
          </motion.div>
        </motion.div>

        <MotionWrapper>
          <div>
            <p className="text-muted-foreground pl-4 py-2 mb-4 relative">
              <span className="absolute left-0 top-0 h-full w-1 bg-amber-500 rounded-full"></span>
              Welcome! I'm a multidisciplinary engineer with a focus on robotics, AI, and human-robot interaction. Be it neuro-symbolic
              architectures to low-compute ML deployment, my drive is finding elegant ways these fields are connected, leveraging cutting
              edge technology to bring my research to life.
            </p>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
