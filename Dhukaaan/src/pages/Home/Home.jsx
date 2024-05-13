import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import Hero from "../../assets/Png/cheerful.png";
import Hero4 from "../../assets/Png/full.png";
import Hero3 from "../../assets/Png/portrait-male.png";
import Hero2 from "../../assets/Png/portrait.png";

const Home = () => {

  return (
    <section className="grid grid-cols-2 h-full p-4 pb-[4.75rem] bg-gradient-to-r from-pink-100 to-rose-300">
      <motion.div
        initial={{ x: 100, opacity: 0, scale: 1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center relative items-center flex-col h-full"
      >
        <div className=" text-pink-950 text-5xl font-bold">
          <div className="mb-3 ">New</div>
          <div className="mb-3">Collections</div>
          <div className="mb-3 flex gap-3">
            Just
            <p className="">
              <ReactTyped
                className="md:text-4xl sm:text-3xl text-xl font-bold ease-in-out duration-200  pl-3 text-pink-800"
                strings={[" Dropped !"]}
                typeSpeed={120}
                backSpeed={140}
                loop
              />
            </p>
          </div>
          <button className=" text-base flex justify-center items-center text-center p-2 rounded-2xl w-[200px] font-normal bg-pink-800 hover:bg-pink-700 active:bg-pink-950 text-white">
            Latest Collection <FaArrowRight className="ml-4 mt-1" />
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -100, opacity: 0, scale: 1 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center relative h-full"
      >
        <img
          src={Hero3}
          alt="model"
          className="w-[300px] h-[425px] -mr-48 z-10"
        />
        <img src={Hero} alt="model" className="w-[350px] h-[525px]" />
        <img
          src={Hero4}
          alt="model"
          className="w-[200px] h-[325px] -ml-48 mt-40 z-10"
        />
        <img src={Hero2} alt="model" className="w-[350px] h-[525px] -ml-32" />
      </motion.div>
    </section>
  );
};

export default Home;
