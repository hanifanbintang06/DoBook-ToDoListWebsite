'use client'

import { Bell, Gear, Plus, X } from "@phosphor-icons/react";
import ButtonIkon from "./ButtonIkon";
import ButtonText from "./ButtonText";

export default function Navbar() {
    return(
        <div className="w-full h-fit bg-white rounded-2xl pl-5 pr-4 py-4 flex flex-row gap-3 items-center">
            <div className="w-full h-fit flex flex-col gap-[2px]">
                <p className="text-lg font-medium">Welcome Back Hanifan!</p>
                <p className="text-sm text-[#767676]">Ready to take your note?</p>
            </div>
            <ButtonText>
                <Plus size={18} />
                <span className="whitespace-nowrap">New Task</span>
            </ButtonText>
            <ButtonIkon>
                <Bell size={18} />
            </ButtonIkon>
            <ButtonIkon>
                <Gear size={18} />
            </ButtonIkon>
        </div>
    )
}