'use client';
import React, {useState} from "react";
import {DesignModal} from "@/app/_components/DesignModal";

export const DesignModalButton = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(!showModal);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <button
                className={`fixed bottom-5 right-20 text-sm font-sans font-semibold text-white`}
                onClick={openModal}
            >
                design
            </button>
            <DesignModal isOpen={showModal} close={closeModal}/>
        </>
    );
};
