import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 1 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex justify-center ">
                      <motion.img
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        src={aboutImg}
                        alt="Khushi Neema picture"
                        style={{ width: "400px", height: "500px" }}
                      />
                    </div>

        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
          <p className="my-2 maxw-xl py-6">
            {ABOUT_TEXT.split('\n').map((paragraph, index) => (
              <span key={index} className="block mb-4">
                {paragraph}
              </span>
            ))}
          </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
