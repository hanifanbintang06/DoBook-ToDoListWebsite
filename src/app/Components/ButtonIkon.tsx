type ButtonIkonProps = {
    children: React.ReactNode,
}

export default function ButtonIkon({children}: ButtonIkonProps) {
    return(
        <button className="p-4 rounded-2xl bg-[#3F51B5] hover:bg-[#F4F5FC] 
        text-white hover:text-black duration-300 transition-all cursor-pointer">
            {children}
        </button>
    )
}