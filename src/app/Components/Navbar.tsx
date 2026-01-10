'use client'

import { X } from "@phosphor-icons/react";
import ButtonIkon from "./ButtonIkon";

export default function Navbar() {
    return(
        <div className="w-full h-fit bg-white rounded-2xl p-4 flex flex-row gap-3 items-center">
            <ButtonIkon>
                <X size={18} />
            </ButtonIkon>
            <div className="w-full h-fit flex flex-col gap-1">
                <p className="text-lg font-medium">Welcome Back Hanifan!</p>
                <p className="text-sm text-[#767676]">Ready to take your note?</p>
            </div>
            <ButtonIkon>
                <X size={18} />
            </ButtonIkon>
            <ButtonIkon>
                <X size={18} />
            </ButtonIkon>
            <ButtonIkon>
                <X size={18} />
            </ButtonIkon>
        </div>
    )
}