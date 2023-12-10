import * as React from "react";

function Header() {
    return (
        <form className="justify-between items-stretch border-b-[color:var(--dashboard-dark-components-lighter,#404040)] bg-zinc-800 flex gap-5 pl-5 pr-7 py-2 border-b border-solid max-md:flex-wrap max-md:justify-center max-md:pr-5">
            <header className="justify-between flex gap-5 pr-5 py-3 items-start">
                <h1 className="text-white text-2xl grow whitespace-nowrap">
                    Evently
                </h1>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f741f0b045ff7e7ddc28efa53936379362913402f9fd3ad09311ebe49f5c331b?apiKey=53b6cf2a243f4cf5a987ec396007b61f&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
                    alt="Evently Logo"
                />
            </header>
            <div className="justify-center items-stretch bg-neutral-700 self-center flex grow basis-[0%] flex-col my-auto px-4 py-1.5">
                <div className="justify-between items-stretch flex w-full gap-5">
                    <div className="items-stretch flex justify-between gap-1.5">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1b479e211fdb9fb648b3a94cca09c73ffb838c70fdcd1aae77828b49072be7c3?apiKey=53b6cf2a243f4cf5a987ec396007b61f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b479e211fdb9fb648b3a94cca09c73ffb838c70fdcd1aae77828b49072be7c3?apiKey=53b6cf2a243f4cf5a987ec396007b61f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b479e211fdb9fb648b3a94cca09c73ffb838c70fdcd1aae77828b49072be7c3?apiKey=53b6cf2a243f4cf5a987ec396007b61f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b479e211fdb9fb648b3a94cca09c73ffb838c70fdcd1aae77828b49072be7c3?apiKey=53b6cf2a243f4cf5a987ec396007b61f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b479e211fdb9fb648b3a94cca09c73ffb838c70fdcd1aae77828b49072be7c3?apiKey=53b6cf2a243f4cf5a987ec396007b61f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b479e211fdb9fb648b3a94cca09c73ffb838c70fdcd1aae77828b49072be7c3?apiKey=53b6cf2a243f4cf5a987ec396007b61f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b479e211fdb9fb648b3a94cca09c73ffb838c70fdcd1aae77828b49072be7c3?apiKey=53b6cf2a243f4cf5a987ec396007b61f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1b479e211fdb9fb648b3a94cca09c73ffb838c70fdcd1aae77828b49072be7c3?apiKey=53b6cf2a243f4cf5a987ec396007b61f&"
                            className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
                            alt="Champions' League Logo"
                        />
                        <div className="text-white text-sm font-bold leading-5 self-center grow whitespace-nowrap my-auto">
                            Champions’ League 2023
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/494f4f279b0e3b3adfb313e1a0ea7ed6de8757565733cb811e8ccab26134995a?apiKey=53b6cf2a243f4cf5a987ec396007b61f&"
                        className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
                        alt="Champions' League Logo"
                    />
                </div>
            </div>
            <div className="justify-end items-stretch self-center flex gap-1.5 my-auto">
                <div className="justify-center items-center border border-[color:var(--dashboard-dark-components-lighter,#404040)] shadow-sm bg-neutral-700 flex aspect-square flex-col w-10 h-10 px-2.5 border-solid">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1181a8947230c8f8394d63fa6c5cac7f48006e93ddaeaec65def254a5f486b3?apiKey=53b6cf2a243f4cf5a987ec396007b61f&"
                        className="aspect-square object-contain object-center w-full overflow-hidden"
                        alt="Profile Picture"
                    />
                </div>
                <div className="justify-center items-stretch border border-[color:var(--dashboard-dark-components-lighter,#404040)] shadow-sm bg-neutral-700 flex gap-2 px-4 py-2.5 border-solid">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cc747c5b2f8c3af16f25e3d5fdb6991d5d91ce7e907cbd6c24de6aa87613a2f7?apiKey=53b6cf2a243f4cf5a987ec396007b61f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc747c5b2f8c3af16f25e3d5fdb6991d5d91ce7e907cbd6c24de6aa87613a2f7?apiKey=53b6cf2a243f4cf5a987ec396007b61f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc747c5b2f8c3af16f25e3d5fdb6991d5d91ce7e907cbd6c24de6aa87613a2f7?apiKey=53b6cf2a243f4cf5a987ec396007b61f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc747c5b2f8c3af16f25e3d5fdb6991d5d91ce7e907cbd6c24de6aa87613a2f7?apiKey=53b6cf2a243f4cf5a987ec396007b61f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc747c5b2f8c3af16f25e3d5fdb6991d5d91ce7e907cbd6c24de6aa87613a2f7?apiKey=53b6cf2a243f4cf5a987ec396007b61f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc747c5b2f8c3af16f25e3d5fdb6991d5d91ce7e907cbd6c24de6aa87613a2f7?apiKey=53b6cf2a243f4cf5a987ec396007b61f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc747c5b2f8c3af16f25e3d5fdb6991d5d91ce7e907cbd6c24de6aa87613a2f7?apiKey=53b6cf2a243f4cf5a987ec396007b61f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc747c5b2f8c3af16f25e3d5fdb6991d5d91ce7e907cbd6c24de6aa87613a2f7?apiKey=53b6cf2a243f4cf5a987ec396007b61f&"
                        className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                        alt="Notification Icon"
                    />
                    <div className="text-white text-sm leading-5">Jane Doe</div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5db69bd0dce75ad05ea33d2e93e6f3d3487d4c10a48aa24f1738827e0d3ca90d?apiKey=53b6cf2a243f4cf5a987ec396007b61f&"
                        className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                        alt="Logout Icon"
                    />
                </div>
            </div>
        </form>
    );
}

export default Header;
