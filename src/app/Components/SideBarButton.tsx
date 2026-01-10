type ButtonSideBarProps = {
    children: React.ReactNode,
    active: boolean
};

export default function SideBarButton({children, active = false}: ButtonSideBarProps) {
    return(
        <a href="/" className={`w-auto h-fit text-sm px-4 py-4 flex flex-row rounded-2xl items-center
        ${active ? `bg-[#3F51B5] text-white hover:text-black` : `bg-white text-black` } 
        hover:bg-[#F4F5FC] transition-all duration-300`}>
            <div className="w-fit h-fit flex flex-row gap-4 mr-auto font-medium items-center">
                {children}
            </div>
            <p>12</p>
        </a>
    )
}