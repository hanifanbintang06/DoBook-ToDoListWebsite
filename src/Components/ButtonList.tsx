type ButtonListProps = {
    children: React.ReactNode,
}

export default function ButtonList({children}: ButtonListProps) {
    return(
        <div className="w-auto h-fit text-sm px-4 py-3 flex flex-row rounded-2xl items-center
        bg-white text-black hover:text-black
        hover:bg-[#F4F5FC] transition-all duration-300 cursor-pointer">
            {children}
        </div>
    )
}