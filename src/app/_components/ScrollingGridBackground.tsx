import React from "react";

export default function ScrollingGridBackground() {
  return (
    <div className={"absolute top-0 bottom-0 right-0 left-0 m-auto h-[100vh] perspective-[800px] overflow-hidden shadow-[0_0_6px_0_white]"}>
      <div
        className={
          "animate-scrolling-grid-bg h-inherit opacity-75 bg-diagonal-grid bg-[length:30px_30px] origin-[top_center] rotate-x-[45deg]"
        }
      />
    </div>
  );
}
