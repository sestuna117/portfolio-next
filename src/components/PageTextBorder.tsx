import React from "react";

interface PageTextBorderProps {
  texts: string[];
}

export const PageTextBorder = (props: PageTextBorderProps) => {
  const { texts } = props;

  return (
    <>
      <div
        className={`h-screen fixed left-0 transform -rotate-90 font-sans font-semibold text-sm w-100vh text-cod-gray`}
      >
        <div
          className={"w-full absolute flex flex-row justify-between py-4 px-10"}
        >
          {texts.map((text, index) => (
            <div key={`border-text-left-${index}`}>{text}</div>
          ))}
        </div>
      </div>
      <div
        className={`h-screen fixed right-0 transform rotate-90 font-sans font-semibold text-sm w-100vh text-heavy-metal`}
      >
        <div
          className={"w-full absolute flex flex-row justify-between py-4 px-10"}
        >
          {texts.map((text, index) => (
            <div key={`border-text-right-${index}`}>{text}</div>
          ))}
        </div>
      </div>
    </>
  );
};
