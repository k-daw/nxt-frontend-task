import * as React from "react";
import Link from "next/link";

function Header(props) {
    const { handleSubmit } = props;
    return (
        <div className="w-[100%] justify-between items-stretch flex gap-5 px-7 max-md:flex-wrap max-md:px-5">
            <div className="justify-center items-stretch flex grow basis-[0%] flex-col mt-1.5 py-2">
                <div>
                    <div className="flex flex-row justify-center  gap-0.5 pr-20 max-md:pr-5">
                        <Link href="/dashboard/sessions">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1affd8c572da61b3ea0f61af7d66a05438e32ee8fb87a7846a8e9b76110d6404?apiKey=53b6cf2a243f4cf5a987ec396007b61f&"
                                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full my-auto"
                                alt="Logo"
                            />
                        </Link>

                        <div className="text-neutral-400 text-sm leading-5 self-stretch grow whitespace-nowrap">
                            <span>All Sessions</span>
                        </div>
                    </div>
                    <span className="text-right text-xl font-sans font-bold leading-[24px] capitalize text-white ml-4">
                        New Sessions
                    </span>
                </div>
            </div>
            <div className="items-stretch border border-[color:var(--dashboard-dark-components-lighter,#404040)] shadow-sm self-center flex gap-0 my-auto border-solid">
                <Link href="/dashboard/sessions">
                    <button
                        className="text-white text-sm font-bold leading-5 whitespace-nowrap justify-center items-stretch border-r-[color:var(--gray-gray-700,#3C3C3C)] bg-neutral-800 grow px-7 py-2.5 border-r border-solid max-md:px-5"
                        type="button"
                    >
                        Cancel
                    </button>
                </Link>
                <button
                    className="text-neutral-800 text-sm font-bold leading-5 whitespace-nowrap justify-center items-stretch border-r-[color:var(--gray-gray-700,#3C3C3C)] bg-white grow px-9 py-2.5 border-r border-solid max-md:px-5"
                    type="button"
                    onClick={handleSubmit((data) =>
                        console.log("Form submitted!", data)
                    )}
                    form="newSessionForm"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Header;
