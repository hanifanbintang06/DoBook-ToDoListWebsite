type ButtonTextProps = {
    children: React.ReactNode
}

export default function ButtonText({children}: ButtonTextProps) {
    return(
        <button className="w-fit h-fit px-4 py-3 rounded-2xl bg-[#2196F3] hover:bg-[#F4F5FC] flex flex-row gap-3 text-sm
        items-center text-white hover:text-black duration-300 transition-all cursor-pointer">
            {children}
        </button>
    )
}