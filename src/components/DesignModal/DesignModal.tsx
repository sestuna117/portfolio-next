import React from "react";
import { DelayedGlitchTransitionScreen } from "@/components/DesignModal/DelayedGlitchTransitionScreen";
import { IoMdClose } from "react-icons/io";

interface DesignModalProps {
  isOpen: boolean;
  close: () => void;
}

export const DesignModal = (props: DesignModalProps) => {
  const { isOpen, close } = props;

  return (
    isOpen && (
      <DelayedGlitchTransitionScreen text={"Design"} delay={2000}>
        <div
          className={`fixed top-0 left-0 w-screen h-screen font-sans bg-black text-alto flex flex-col
          
                      before:content-empty before:absolute before:top-[46.5%] before:left-[46.5%] before:m-auto 
                      before:block before:h-[100px] before:w-[100px] before:z-1 before:w-[75%]`}
          id={"designModal"}
        >
          <div
            className={`relative m-auto max-w-[1400px] w-fit h-fit md:w-[90%] before:animate-flicker-in
                        before:h-full before:w-full before:content-empty before:absolute before:-z-10 
                        before:m-auto before:corner-border-white before:max-w-[1560px] before:block`}
          >
            <div
              className={
                "animate-fade-in animation-delay-500 opacity-0 py-10 px-10 md:py-14 md:text-2xl lg:py-40 lg:text-4xl font-bold"
              }
            >
              The design for this portfolio was inspired by&nbsp;
              <a
                className={"text-heliotrope"}
                href={"https://pleasecallmechamp.com/"}
                target={"_blank"}
              >
                Champ Panupong Techawongthawon
              </a>
              &nbsp;and&nbsp;
              <a
                className={"text-heliotrope"}
                href={"https://massive.work/"}
                target={"_blank"}
              >
                Massive Assembly&apos;s
              </a>
              &nbsp;various works for the popular games League of Legends and
              Valorant by Riot Games of which I took inspiration from their use
              of bold fonts and animations transitions.&nbsp;
              <span className={"font-semibold"}>
                I do think the other works they&apos;ve done are deserving of
                being checked out as they are all visually stunning and dynamic
              </span>
              .
            </div>
          </div>
          <button
            className={`absolute top-5 right-5 md:top-2 md:right-2 lg:top-5 lg:right-top-5`}
            onClick={close}
          >
            <IoMdClose className={"h-8 w-8 md:h-12 md:w-12"} />
          </button>
        </div>
      </DelayedGlitchTransitionScreen>
    )
  );
};
