import React from "react";
import { GlitchText } from "@/components/DesignModal/GlitchText";
import { DelayedGlitchTransitionScreen } from "@/components/DesignModal/DelayedGlitchTransitionScreen";

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
          className={`fixed top-0 left-0 w-screen h-screen p-40 font-sans bg-black text-alto m-auto `}
          id={"designModal"}
        >
          <div>Design </div>
          <button onClick={close}>X</button>
          <div className={"text-2xl"}>
            The design for this portfolio was inspired by{" "}
            <a href={"https://pleasecallmechamp.com/"}>
              Champ Panupong Techawongthawon
            </a>{" "}
            and <a href={"https://massive.work/"}>Massive Assembly&apos;s</a>{" "}
            multiple works for the popular games League of Legends and Valorant
            from Riot Games. Most of the inspiration came from their
            collaborative work for League of Legends promotional works for MSI
            2021 Championship.
          </div>
        </div>
      </DelayedGlitchTransitionScreen>
    )
  );
};
