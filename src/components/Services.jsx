import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3 } from "../assets";
import {brainwaveServicesIcons } from "../constants";
import {Gradient } from "./design/Services"

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Immersive Content Library"
          text="Explore Endless Possibilities with ImmersiX"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover object-center md:object-right"
                width={800}
                height={730}
                src={service1}
                alt="Cinematic Experiences"
              />
            </div>
            <div className="relative z-1 max-w-[17rem] ml-auto">
                <h4 className="h4 mb-4">Cinematic Experiences</h4>
                <p className="body-2 mb-[3rem] text-n-3">Watch 3D movies and VR films as if you’re part of the scene, delivering a theater-like experience right from your home.</p>
               
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
                <div className="absolute inset-0">
                    <img src={service2} className="h-full w-full object-cover object-left md:object-left" width={630} height={750} alt="robot" />
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                     <h4 className="h4 mb-4">Virtual Travel</h4>
                     <p className="body-2 mb-[3rem] text-n-3">Travel to exotic locations, historical landmarks, or even outer space with VR travel apps that transport you instantly.</p>
                </div>

            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
                <div className="py-12 px-4 xl:px-8">
                    <h4 className="h4 mb-4">Gaming Adventures</h4>
                    <p className="body-2 mb-[2rem] text-n-3">Dive into epic gaming titles with cutting-edge VR gameplay, offering full immersion in action-packed worlds</p>
                    <ul className="flex items-center justify-between">
                        {brainwaveServicesIcons.map((item,index)=>(
                            <li key={index} className={`rounded-xl flex items-center justify-center w-[2.5rem] h-[2.5rem]  md:w-[4.5rem] md:h-[4.5rem]`}>
                                <div className={`flex  items-center justify-center w-full h-full bg-n-7`}>
                                    <img className="h-full object-fill rounded-2xl" src={item}  alt={item} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                    <img className="w-full h-full object-cover object-right md:object-center" src={service3} width={520} height={400} alt="Scary robot" />
                </div>
            </div>
          </div>

          <Gradient/>
        </div>
      </div>
    </Section>
  );
};

export default Services;
