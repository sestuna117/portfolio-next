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
          className={`fixed top-0 left-0 w-screen h-screen font-sans bg-black text-alto flex flex-col`}
          id={"designModal"}
        >
          <div
            className={`relative m-auto max-w-[1400px] w-fit h-fit
             before:h-full before:w-full before:content-[''] before:absolute before:-z-10 before:m-auto before:corner-border-white before:max-w-[1400px] before:block`}
          >
            <div className={"py-40 px-10 text-4xl font-bold"}>
              The design for this portfolio was inspired by{" "}
              <a
                className={"text-heliotrope"}
                href={"https://pleasecallmechamp.com/"}
              >
                Champ Panupong Techawongthawon
              </a>{" "}
              and{" "}
              <a className={"text-heliotrope"} href={"https://massive.work/"}>
                Massive Assembly&apos;s
              </a>{" "}
              multiple works for the popular games League of Legends and
              Valorant from Riot Games with their use of a lot of bold fonts and
              animations transitions. Make sure to check out the other works
              they have done.
            </div>
          </div>
          <button className={`absolute top-5 right-5`} onClick={close}>
            <IoMdClose className={"h-16 w-16"} />
          </button>
        </div>
      </DelayedGlitchTransitionScreen>
    )
  );
};
