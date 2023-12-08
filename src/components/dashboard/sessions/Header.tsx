import * as React from "react";

function Header() {
    return (
        <div
            id="PageBarRoot"
            className="bg-[#1a1a1a] flex flex-row justify-between w-full h-16 items-start pt-3 pl-8 pr-6"
        >
            <div
                id="UsersReport"
                className="text-right text-xl font-sans font-bold leading-[24px] capitalize text-white mt-2"
            >
                all Sessions
            </div>
            <div
                id="IconwithText"
                className="border-solid border-[#404040] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] flex flex-row w-1/6 items-start border"
            >
                <div className="border-solid border-r border-[#3c3c3c] bg-white flex flex-row justify-center pt-2 gap-2 w-full h-10 items-start my-0">
                    <img
                        src="https://file.rendit.io/n/TJhiRxf0CS0ZcESxT0lf.svg"
                        alt="IconDashboardadd"
                        id="IconDashboardadd"
                        className="w-5"
                    />
                    <div
                        id="Text1"
                        className="text-sm font-sans font-bold leading-[20px] text-[#252525]"
                    >
                        New Session
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
