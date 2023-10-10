'use client';

import graduatedDeveloperImage from "@/public/graduatedDeveloper.svg";
import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  // References of the elements needed for animation
  const sectionRef = useRef(null),
    headerRef = useRef(null),
    desktopImageRef = useRef(null),
    mobileImageRef = useRef(null),
    subsectionsRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const headerOffsetHeight = document.querySelector('header').offsetHeight,
      isMobileScreen = window.screen.width < window.screen.height,
      isScreenTooSmall = (window.screen.width < 350) || (window.screen.height < 800),
      isMobileScreenTooSmall = isMobileScreen && isScreenTooSmall,
      isDesktop = window.screen.width >= 1280,
      // Get the elements needed for animation from their references
      sectionElement = sectionRef.current,
      textElements = [headerRef.current.children, subsectionsRef.current.children],
      imageElement = isDesktop ? desktopImageRef.current : mobileImageRef.current,
      headingUnderlineElement = headerRef.current.firstChild.firstChild;

    const ctx = gsap.context(() => {
      // Initialize the timeline for on-scroll reveal animation (when the section comes into view)
      const tl = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
          trigger: isMobileScreenTooSmall ? '#home' : sectionElement,
          start: `top-=${headerOffsetHeight} center`,
          end: `bottom-=${headerOffsetHeight} center`,
          toggleActions: 'restart reset restart reset',
        },
        defaults: { autoAlpha: 0, duration: 0.5, ease: 'power1.out' },
      });

      // The on-scroll reveal animation in timeline
      tl.set(sectionElement, { autoAlpha: 1 })
        .from(textElements, { y: 25, stagger: { amount: 0.5 } })
        .from(imageElement, { y: 50 }, '<')
        .from(headingUnderlineElement, { transformOrigin: 'center left', scaleX: 0 }, '<0.35');
    });

    return () => ctx.revert(); // Clean up the GSAP animations when the component unmounts
  }, []);

  return (
    <section id="about" ref={sectionRef} className="home-section invisible flex flex-col justify-center items-center gap-y-4 min-h-[calc(100dvh_-_80px)] px-6 py-12 xs:min-h-0 xs:h-[calc(100dvh_-_80px)] xs:py-0 sm:gap-y-12 sm:px-12 md:px-16 lg:gap-y-24 lg:h-[calc(100dvh_-_86px)] lg:px-20 xl:flex-row xl:gap-y-0 xl:pr-0 xl:pl-36 2xl:pl-56 2xl:gap-x-12 3xl:pl-[28rem] 3xl:gap-x-20 landscape:min-h-0 landscape:py-0">
      {/* Desktop Section Image */}
      <Image
        ref={desktopImageRef}
        className="hidden w-full h-auto xl:block xl:order-2 xl:grow xl:w-0"
        src={graduatedDeveloperImage}
        alt="graduated developer"
      />
      <div className="space-y-6 sm:space-y-8 lg:space-y-10 xl:basis-[48%] xl:pr-16 2xl:basis-[42%] 3xl:basis-[35%]">
        {/* Section Header */}
        <div ref={headerRef} className="section-header">
          <h3><span />About</h3>
          <p> As a software developer, Im fueled by a passion for continual learning and the art of crafting exceptional web experiences.</p>
        </div>
        {/* Mobile Section Image */}
        <Image
          ref={mobileImageRef}
          className="w-full h-auto sm:pb-6 lg:pb-12 xl:hidden"
          src={graduatedDeveloperImage}
          alt="graduated developer"
        />
        <div ref={subsectionsRef} className="space-y-4 [&>div]:about-subsection lg:space-y-10 xl:space-y-6 2xl:space-y-7 3xl:space-y-9">
          
          <div className="section-header">
          <h3 ><span />Work Experience</h3>
          </div>
          
          
<ol class="relative border-l border-gray-200 dark:border-gray-700">                  
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">August 2023 - Present</time>
        <h3 class="text-lg font-semibold text-gray-900"> Software Developer</h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Freelance</p>
        
    </li>
    <li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">July 2022 - August 2023</time>
        <h3 class="text-lg font-semibold text-gray-900">Frontend Developer</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Loud Mob Media</p>
    </li>
    <li class="ml-4">
        <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">December 2020 - May 2021</time>
        <h3 class="text-lg font-semibold text-gray-900">Full Stack Developer Intern</h3>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Edureka</p>
    </li>
</ol>

        </div>
      </div>
    </section>
  );
}
