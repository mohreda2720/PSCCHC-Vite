/* eslint-disable no-unused-vars */
import CountUp from "react-countup";
import React from "react";
import ScrollTrigger from "react-scroll-trigger";
import "./NumbersCounter.css";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { Lia500Px } from "react-icons/lia";
import { GiCrane } from "react-icons/gi";
import { TbLiveView } from "react-icons/tb";
import { BiMapPin } from "react-icons/bi";
import { LuContainer } from "react-icons/lu";
import { GoContainer } from "react-icons/go";
import { GrMap } from "react-icons/gr";
import { TbRulerMeasure } from "react-icons/tb";
import { RxWidth } from "react-icons/rx";





const CountUpNumbers = ({statistics}) => {
  console.log("statistics from NumbersCounter::::" , statistics);
  const [count1, setCount1] = React.useState(false);
  const [count2, setCount2] = React.useState(false);
  const [count3, setCount3] = React.useState(false);
  const [count4, setCount4] = React.useState(false);

  return (
    <div className="d-flex justify-content-center">
      <div class="container d-flex flex-wrap CountUpBoxes">
        {/* _____________________________ Box 1 _____________________________*/}
        <div class="myflexbox">
        <GiCrane size={60} />
          <ScrollTrigger
            onEnter={() => {
              setCount1(true);
            }}
            onExit={() => {
              setCount1(false);
            }}
          >
            <h3>{statistics[0]?.contentTitle}</h3>
            <h5>
              {count1 && <CountUp start={0} end={statistics[0]?.details} duration={2} delay={0} />}
            </h5>
          </ScrollTrigger>
        </div>
        {/* _________________________________________________________________ */}

        {/* _____________________________ Box 2 _____________________________*/}
        <div class="myflexbox">
        {/* <BiMapPin size={60} /> */}
        <GrMap size={60} />
          <ScrollTrigger
            onEnter={() => {
              setCount2(true);
            }}
            onExit={() => {
              setCount2(false);
            }}
          >
            <h3>{statistics[1]?.contentTitle}</h3>
            <h5>
              {count2 && <CountUp start={0} end={statistics[1]?.details} duration={2} delay={0} />} m<sup>2</sup>
            </h5>
          </ScrollTrigger>
        </div>
        {/* _________________________________________________________________ */}

        {/* _____________________________ Box 3 _____________________________*/}
        <div class="myflexbox">
        <RxWidth size={60} />
          <ScrollTrigger
            onEnter={() => {
              setCount3(true);
            }}
            onExit={() => {
              setCount3(false);
            }}
          >
            <h3>{statistics[2]?.contentTitle}</h3>
            <h5>
              {count3 && <CountUp start={0} end={statistics[2]?.details} duration={2} delay={0} />} m
            </h5>
          </ScrollTrigger>
        </div>
        {/* _________________________________________________________________ */}

        {/* _____________________________ Box 4 _____________________________*/}
        <div class="myflexbox">
        <GoContainer size={60} />
          <ScrollTrigger
            onEnter={() => {
              setCount4(true);
            }}
            onExit={() => {
              setCount4(false);
            }}
          >
            <h3>{statistics[3]?.contentTitle}</h3>
            <h5>
              {count4 && <CountUp start={0} end={statistics[3]?.details} duration={2} delay={0} />} TEU
            </h5>
          </ScrollTrigger>
        </div>
        {/* _________________________________________________________________ */}
      </div>
    </div>
  );
};

export default CountUpNumbers;
