import React from "react";

interface DesignModalProps {
  isOpen: boolean;
  close: () => void;
}

export const DesignModal = (props: DesignModalProps) => {
  const { isOpen, close } = props;

  return isOpen && (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-40 p-10`}
      id={'designModal'}
    >
      <button onClick={close}>
        X
      </button>
      <div
        className={""}
      >
        ASDA
      </div>
    </div>
  );
};
