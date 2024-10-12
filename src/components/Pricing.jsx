import React, { useEffect, useRef, useState } from "react";
import Section from "./Section";
import { smallSphere } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "../components/design/Pricing";
import { ScrollParallax } from "react-just-parallax";

const Pricing = () => {

  const shadowElement = useRef();
  const [shadowEffect,setShadowEffect] = useState("shadow-[0px_0px_100px_30px_rgba(0,0,0,0.3)]");

  useEffect(()=>{
    setTimeout(()=>{
      if(shadowEffect == "shadow-[0px_0px_100px_30px_rgba(0,0,0,0.3)]"){
        setShadowEffect("shadow-[0px_0px_100px_7px_rgba(0,0,0,0.3)]");
      }else{
        setShadowEffect("shadow-[0px_0px_100px_30px_rgba(0,0,0,0.3)]")
      }
    },1200)
  })

  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <ScrollParallax>
        <div className="hidden items-center justify-center lg:flex">
            <div className="flex items-center justify-center relative">
            <img className=" z-10" src={smallSphere} alt="Sphere" />
             <div ref={shadowElement} className={`${shadowEffect} transition duration-[1200ms]  delay-75 absolute translate-y-11 shadow-[#bf00ff] bg-gradient-to-tr from-[#bf00ff] to-[#1b1b80] w-[40%] h-[32%]`}>
            </div>
          </div>
        </div>
        </ScrollParallax>

        <Heading
          tag="Value Meets Innovation"
          title="Unlock Your Virtual Journey"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
            href="/pricing"
          >
            Explore other products
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
