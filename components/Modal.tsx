"use client"

import ModalDisplay from '@/components/ModalDisplay'
import {useState} from "react";

export default function Modal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <section>
            <div className="p-10 text-center">
                <button className="text-white bg-cyan-900 px-5 py-5 rounded-lg"
                onClick={()=>setShowModal(true)}>
                    button
                </button>
            </div>

            <ModalDisplay isVisible={showModal} onClose={()=>setShowModal(false)}/>
        </section>
    )
}
