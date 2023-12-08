import * as React from "react";

function Navbar() {
    return (
        <div className="justify-between items-stretch border-r-[color:var(--gray-gray-700,#3C3C3C)] shadow-2xl bg-zinc-800 flex w-[15%] flex-col ml-0 mr-auto pt-5 border-r border-solid max-md:mt-4">
            <div className="bg-zinc-800 self-center flex w-[174px] max-w-full flex-col justify-center pl-2.5 pr-16 py-2 items-start max-md:pr-5">
                <div className="items-stretch flex w-[70px] max-w-full gap-2">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea01d3bc051e945f3c238d93d8155625ecc4bbd3adfa4a3bc95c55a482a4f8eb?apiKey=53b6cf2a243f4cf5a987ec396007b61f&"
                        className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                    />
                    <div className="text-neutral-400 text-sm leading-5 self-center grow whitespace-nowrap my-auto">
                        Home
                    </div>
                </div>
            </div>
            <div className="items-center bg-zinc-800 flex flex-col justify-center px-5 py-1.5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a365649df09b545fd22e588b6f8ce71dfaec227d0564f92cb79825b5ce43174?apiKey=53b6cf2a243f4cf5a987ec396007b61f&"
                    className="aspect-[168] object-contain object-center w-[168px] stroke-[1px] stroke-neutral-700 overflow-hidden"
                />
            </div>
            <div className="justify-between items-stretch bg-zinc-800 self-center flex w-[174px] max-w-full gap-5 px-2.5 py-2">
                <div className="items-stretch flex justify-between gap-2">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/35361307152903c04a2f8ca85c5bf5304a0ede159c8a35e77a6d67a56df891a9?apiKey=53b6cf2a243f4cf5a987ec396007b61f&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-zinc-400 text-sm leading-5 self-center grow whitespace-nowrap my-auto">
                        Planning
                    </div>
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9efb6375675be67b792289856facd0c5a96e1895a071ce23e6efd22dda9b9df?apiKey=53b6cf2a243f4cf5a987ec396007b61f&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
            </div>
            <div className="items-stretch bg-zinc-700 self-center flex w-[174px] max-w-full flex-col justify-center pl-2.5 pr-8 py-2 max-md:pr-5">
                <div className="items-center flex justify-between gap-4 pl-2.5 pr-11 py-0.5 max-md:pr-5">
                    <div className="bg-white flex w-1.5 shrink-0 h-1.5 flex-col my-auto rounded-[50%]" />
                    <div className="text-white text-sm leading-5 self-stretch grow whitespace-nowrap">
                        Sessions
                    </div>
                </div>
            </div>
            <div className="items-stretch bg-zinc-800 self-center flex w-[174px] max-w-full flex-col justify-center pl-2.5 pr-8 py-2 max-md:pr-5">
                <div className="items-center flex justify-between gap-4 pl-2.5 pr-14 py-0.5 max-md:pr-5">
                    <div className="bg-neutral-600 flex w-1.5 shrink-0 h-1.5 flex-col my-auto rounded-[50%]" />
                    <div className="text-neutral-500 text-sm leading-5 self-stretch grow whitespace-nowrap">
                        Venues
                    </div>
                </div>
            </div>
            <div className="items-center bg-zinc-800 flex flex-col justify-center px-5 py-1.5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a365649df09b545fd22e588b6f8ce71dfaec227d0564f92cb79825b5ce43174?apiKey=53b6cf2a243f4cf5a987ec396007b61f&"
                    className="aspect-[168] object-contain object-center w-[168px] stroke-[1px] stroke-neutral-700 overflow-hidden"
                />
            </div>
            <div className="justify-between items-stretch bg-zinc-800 self-center flex gap-5 px-2.5 py-2">
                <div className="items-stretch flex justify-between gap-2">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a85fcf115c2a54140585847fd93f4f20d8ab4d1c8a274fe7f8c2fd779f1aa4e?apiKey=53b6cf2a243f4cf5a987ec396007b61f&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-neutral-400 text-sm leading-5 self-center grow whitespace-nowrap my-auto">
                        Attendees
                    </div>
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c00ed8d946f54d81b46ad9ec7cb8cceff21c4bf71bdea455616fa69bce72039?apiKey=53b6cf2a243f4cf5a987ec396007b61f&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
            </div>
            <div className="items-center bg-zinc-800 flex flex-col justify-center px-5 py-1.5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a365649df09b545fd22e588b6f8ce71dfaec227d0564f92cb79825b5ce43174?apiKey=53b6cf2a243f4cf5a987ec396007b61f&"
                    className="aspect-[168] object-contain object-center w-[168px] stroke-[1px] stroke-neutral-700 overflow-hidden"
                />
            </div>
            <div className="justify-between items-stretch bg-zinc-800 self-center flex gap-5 px-2.5 py-2">
                <div className="items-stretch flex justify-between gap-2">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/31136e87114879b90de5a3467fd5649d93ab919d9cbbd395918dc86d6e7a1019?apiKey=53b6cf2a243f4cf5a987ec396007b61f&"
                        className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-neutral-400 text-sm leading-5 self-center grow whitespace-nowrap my-auto">
                        Settings
                    </div>
                </div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c00ed8d946f54d81b46ad9ec7cb8cceff21c4bf71bdea455616fa69bce72039?apiKey=53b6cf2a243f4cf5a987ec396007b61f&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                />
            </div>
            <div className="items-center bg-zinc-800 flex flex-col justify-center px-5 py-1.5">
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a365649df09b545fd22e588b6f8ce71dfaec227d0564f92cb79825b5ce43174?apiKey=53b6cf2a243f4cf5a987ec396007b61f&"
                    className="aspect-[168] object-contain object-center w-[168px] stroke-[1px] stroke-neutral-700 overflow-hidden"
                />
            </div>
            <div className="text-neutral-400 text-xs leading-4 whitespace-nowrap justify-center mt-[516px] pl-2.5 pr-16 py-2.5 items-start max-md:mt-10 max-md:pr-5">
                Powered By Evently
            </div>
        </div>
    );
}

export default Navbar;
