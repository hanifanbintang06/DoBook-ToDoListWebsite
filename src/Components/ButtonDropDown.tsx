import { DotsThreeVertical, Trash, X } from "@phosphor-icons/react";
import { useState } from "react";

export default function ButtonDropDown() {
    const [ open, setOpen ] = useState(false)
    return(
        <div className="relative">
            <button onClick={() => setOpen(prev => !prev)} className="p-3 rounded-2xl bg-[#3F51B5] hover:bg-[#F4F5FC] flex items-center
            text-white hover:text-black duration-300 transition-all cursor-pointer text-sm">
                {open ? <X size={18} /> : <DotsThreeVertical size={18} />}
            </button>
            {open ? 
                <>
                    <div className="absolute w-48 h-fit top-14 right-0 flex flex-col bg-white shadow-sm rounded-2xl overflow-hidden z-10">
                        <button className="px-4 py-3 hover:bg-[#F4F5FC] text-left cursor-pointer items-center
                        flex flex-row gap-3">
                            <Trash size={18} />
                            <span>Delete</span>
                        </button>
                        <button className="px-4 py-3 hover:bg-[#F4F5FC] text-left cursor-pointer">Delete</button>
                        <button className="px-4 py-3 hover:bg-[#F4F5FC] text-left cursor-pointer">Delete</button>
                    </div>
                    <div onClick={() => setOpen(prev => !prev)} className="fixed top-0 right-0 w-full h-full z-5" /> 
                </>
            : <></>}
        </div>
    )
}