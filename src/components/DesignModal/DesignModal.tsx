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
          className={`fixed top-0 left-0 w-screen h-screen p-40 font-sans bg-black text-alto m-auto flex flex-col`}
          id={"designModal"}
        >
          <button onClick={close}>
            <IoMdClose className={"h-16 w-16"} />
          </button>
          <div
            className={
              "before:corner-border-white before:w-[1400px] before:h-[400px] before:content-[''] before:absolute before:-z-10"
            }
          >
            <div className={"p-10 text-4xl font-bold max-w-[1400px]"}>
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
              Valorant from Riot Games. Most of the inspiration came from their
              collaborative work for League of Legends promotional works for MSI
              2021 Championship.
            </div>
          </div>
        </div>
      </DelayedGlitchTransitionScreen>
    )
  );
};
