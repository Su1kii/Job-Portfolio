"use client";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HtmlIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GitHubIcon from '@/assets/icons/github.svg';
import Python from '@/assets/icons/python.svg';
import MongoDB from '@/assets/icons/mongodb.svg';
import { TechIcon } from "@/components/TechIcon";
import mapImage from '@/assets/images/map.png';
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

// add Python and MongoDB
const toolboxItems = [
  {
    title: 'Javascript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'GitHub',
    iconType: GitHubIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Python',
    iconType: Python,
  },
  {
    title: 'MongoDB',
    iconType: MongoDB,
  },
]

const hobbies = [
  {
    title: 'English',
    emoji: '😎',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Spanish',
    emoji: '🙂',
    left: '50%',
    top: '5%',
  },
  {
    title: 'PhotoShop',
    emoji: '📷',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '3%',
    top: '33%',
  },
  {
    title: 'Adobe After Effects',
    emoji: '✂️',
    left: '30%',
    top: '37%',
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♂️',
    left: '55%',
    top: '70%',
  }
];


export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <section id="about">
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="Information about me"
          desciption="Learn about me and my background."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols- gap-8 md:grid md:grid-cols-3 md:gap-8">
          <Card className="md:col-span-1">
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2">
              <StarIcon className="size-9 text-emerald-300" />
              <h3 className="font-serif text-3xl ">Education</h3>
            </div>
            <ul className="mt-4 mb-2">
              <li>
                <p className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent lg:text-lg">Murray High School</p>
                <p className="text-sm text-white/60 md:text-base lg:text-lg">High School Diploma 06/24/2024 </p>
              </li>
              <li>
                <p className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent md:pt-5 lg:text-lg lg:pt-3">Salt Lake Community College</p>
                <p className="text-sm text-white/60 md:text-base lg:text-lg">B.S. Computer Science, Exp. 06/2028 </p>
              </li>
              </ul>
             </div>
          </Card>
          <Card className="h-[320px] p-0 md:col-span-2">
          <CardHeader
            title="Skills"
            derscription="Explore the tools and technologies I use to bring my projects to life."
            className="px-6 pt-6"
          />
            <div>
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems 
              items={toolboxItems} 
              className="mt-6" 
              itemsWrapperClassName="animate-move-right [animation-duration:15s]" 
            />
            </div>
          </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <Card className="flex flex-col md:col-span-2">
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2">
              <StarIcon className="size-9 text-emerald-300" />
              <h3 className="font-serif text-3xl">Past Experience</h3>
            </div>
            <ul className="mt-4 mb-2">
              <li>
                <p className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent lg:text-lg">Family Business
                </p>
                <p className="text-sm text-white/60 md:text-base lg:text-base">Computer Mangement 01/2022 - 08/2024 </p>
              </li>
              <li>
                <p className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent lg:text-lg">Salt Lake Community College</p>
                <p className="text-sm text-white/60 md:text-base lg:text-base">Lab Aide / Spanish Tutor 08/2024 - 03/2025</p>
              </li>
              <li>
                <p className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent lg:text-lg">Morgan Stanley</p>
                <p className="text-sm text-white/60 lg:text-base md:text-base">Help Desk Analyst 03/2025 - Current</p>
              </li>
              </ul>
             </div>
          </Card>
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3">
          <CardHeader
            title="Extra"
            derscription="Explore my extra skills and intrest beyond coding. Try to drag them around."
            className="px-6 py-6"
          />
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map((hob) => (
                <motion.div
                 key={hob.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                style={{
                  left: hob.left,
                  top: hob.top,
                }}
                drag
                dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">{hob.title}</span>
                  <span>{hob.emoji}</span>
                  </motion.div>
              ))}
            </div>
          </Card>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};