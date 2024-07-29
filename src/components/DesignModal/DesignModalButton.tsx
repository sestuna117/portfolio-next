"use client";
import React, { useState } from "react";
import { DesignModal } from "@/components/DesignModal/DesignModal";
import { sleep } from "@/utils";

export const DesignModalButton = () => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = async () => {
    const designModal = document.getElementById("design-modal");
    const designText = document.getElementById("design-text");
    const designLine1 = document.getElementById("design-line-1");
    const designLine2 = document.getElementById("design-line-2");
    designText?.classList.add("animate-squish-vertical");
    designLine1?.classList.add("animate-slide-line-1-exit");
    designLine2?.classList.add("animate-slide-line-2-exit");
    await sleep(1250);
    designModal?.classList.add("animate-fade-out");
    await sleep(500)

    setShowModal(false);
  };

  return (
    <>
      <button
        className={`fixed bottom-5 right-5 md:right-16 lg:right-20 text-sm font-sans font-semibold text-white`}
        onClick={openModal}
      >
        design
      </button>
      <DesignModal isOpen={showModal} close={closeModal} />
    </>
  );
};
