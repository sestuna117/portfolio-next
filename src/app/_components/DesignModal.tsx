import React from "react";

interface DesignModalProps {
  isOpen: boolean;
  close: () => void;
}

export const DesignModal = (props: DesignModalProps) => {
  const { isOpen, close } = props;

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen font-sans bg-opacity-50 text-alto bg-black-bars-vertical`}
    >
      <div className={"w-full h-full bg-opacity-40 bg-black"}>
        <div
          className={`fixed font-gunterz italic text-9xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center`}
        >
          Design
        </div>
        <svg
          className={"w-full h-full"}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <circle
            className={"animate-grow-infinite origin-center"}
            vectorEffect="non-scaling-stroke"
            cx="50%"
            cy="50%"
            r="96%"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          <circle
            className={
              "animate-grow-infinite origin-center animation-delay-[4s]"
            }
            vectorEffect="non-scaling-stroke"
            cx="50%"
            cy="50%"
            r="96%"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
    // isOpen && (
    //   <div
    //     className={`fixed top-0 left-0 w-screen h-screen p-10 font-sans bg-black text-alto`}
    //     id={"designModal"}
    //   >
    //     <button onClick={close}>X</button>
    //     <div className={""}>
    //       The design for this portfolio was inspired by{" "}
    //       <a href={"https://pleasecallmechamp.com/"}>
    //         Champ Panupong Techawongthawon
    //       </a>{" "}
    //       and <a href={"https://massive.work/"}>Massive Assembly&apos;s</a>{" "}
    //       multiple works for the popular games League of Legends and Valorant
    //       from Riot Games. Most of the inspiration came from their collaborative
    //       work for League of Legends promotional works for MSI 2021
    //       Championship.
    //     </div>
    //   </div>
    // )
  );
};
