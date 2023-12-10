"use client";
import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Paginate, PaginationLink } from "react-paginate";

function SessionsPage() {
    return (
        <>
            <MyTable />
        </>
    );
}

function MyTable() {
    const [currentPage, setCurrentPage] = useState(0);
    const data = [
        {
            name: "1",
            date: "Se[/08/22",
            venue: "1st",
        },
        {
            name: "2",
            date: "Se[/08/22",
            venue: "2st",
        },
    ];
    const itemsPerPage = 10;
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const paginatedData = data.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    return (
        <>
            <div
                id="RootRoot"
                className="flex flex-col justify-between w-full h-[888px] items-start"
            >
                <div className="flex flex-row w-full items-start">
                    <div
                        id="TitleHeading"
                        className="border-solid border-b border-[#484848] bg-[#2e2e2e] flex flex-row justify-center mr-[-670px] pt-3 gap-1 w-3/5 h-12 items-start"
                    >
                        <div
                            id="Company"
                            className="text-center text-xs font-sans leading-[18px] text-[#bababa] mt-px"
                        >
                            Session Name
                        </div>
                        <img
                            src="https://file.rendit.io/n/GSajiPetcNYb9m0L7sGM.svg"
                            alt="Frame1"
                            className="mt-px w-4"
                        />
                    </div>
                    <div
                        id="TabelCells"
                        className="border-solid border-b border-[#484848] flex flex-row w-3/5 items-start mt-12 mb-16 mr-[-670px]"
                    >
                        <div className="bg-[#2e2e2e] flex flex-row mb-0 w-full items-start">
                            <div
                                id="CompositeLight"
                                className="opacity-50 bg-[#3c3c3c] flex flex-row gap-2 w-full h-16 items-start pt-4 px-6"
                            >
                                <img
                                    src="https://file.rendit.io/n/R6AUxGJXHxlzx4MIFmxa.png"
                                    alt="Rectangle1"
                                    className="w-8"
                                />
                                <div
                                    id="WorldCup"
                                    className="text-sm font-sans leading-[19.6px] text-white mt-2"
                                >
                                    QAT vs ECU
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="TabelCells1"
                        className="border-solid border-b border-[#484848] flex flex-row mt-[113px] w-3/5 items-start"
                    >
                        <div className="bg-[#2e2e2e] flex flex-row mb-0 w-full items-start">
                            <div
                                id="CompositeLight1"
                                className="opacity-50 bg-[#3c3c3c] flex flex-row gap-2 w-full h-16 items-start pt-4 px-6"
                            >
                                <img
                                    src="https://file.rendit.io/n/G11GGqmftP1IM35bVPrQ.png"
                                    alt="Rectangle3"
                                    className="w-8"
                                />
                                <div
                                    id="WorldCup1"
                                    className="text-sm font-sans leading-[19.6px] text-white mt-2"
                                >
                                    Opening Ceremony{" "}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="TitleHeading1"
                        className="border-solid border-b border-[#484848] bg-[#2e2e2e] flex flex-row justify-center mr-[-140px] pt-3 gap-1 w-1/6 h-12 items-start"
                    >
                        <div
                            id="Company1"
                            className="text-center text-xs font-sans leading-[18px] text-[#bababa] mt-px"
                        >
                            Date
                        </div>
                        <img
                            src="https://file.rendit.io/n/IgoYWQYzeQQSTvNfh3k0.svg"
                            alt="Frame2"
                            className="mt-px w-4"
                        />
                    </div>
                    <div
                        id="Component"
                        className="border-solid border-b border-[#484848] flex flex-row w-1/6 items-start mt-12 mr-[-140px]"
                    >
                        <div className="bg-[#2e2e2e] flex flex-row mb-0 w-full items-start">
                            <div
                                id="CompositeLight2"
                                className="opacity-50 bg-[#3c3c3c] flex flex-row justify-center pt-6 gap-2 w-full h-16 items-start"
                            >
                                <img
                                    src="https://file.rendit.io/n/uf0NrXyd7i1ySBrtvGKL.svg"
                                    alt="IconDashboardItinerary"
                                    className="w-5"
                                />
                                <div
                                    id="Element1"
                                    className="text-xs font-sans leading-[18px] text-[#bababa] mt-px"
                                >
                                    Sep/08/2022
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="Component1"
                        className="border-solid border-b border-[#484848] flex flex-row mt-[113px] w-1/6 items-start"
                    >
                        <div className="bg-[#2e2e2e] flex flex-row mb-0 w-full items-start">
                            <div
                                id="CompositeLight3"
                                className="opacity-50 bg-[#3c3c3c] flex flex-row justify-center pt-6 gap-2 w-full h-16 items-start"
                            >
                                <img
                                    src="https://file.rendit.io/n/i2beyNnqPixQKqt2cTeB.svg"
                                    alt="IconDashboardItinerary1"
                                    className="w-5"
                                />
                                <div
                                    id="Element2"
                                    className="text-xs font-sans leading-[18px] text-[#bababa] mt-px"
                                >
                                    Sep/08/2022
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="TitleHeading2"
                        className="border-solid border-b border-[#484848] bg-[#2e2e2e] flex flex-row justify-center mr-[-140px] pt-3 gap-1 w-1/6 h-12 items-start"
                    >
                        <div
                            id="Company2"
                            className="text-center text-xs font-sans leading-[18px] text-[#bababa] mt-px"
                        >
                            Time
                        </div>
                        <img
                            src="https://file.rendit.io/n/IgoYWQYzeQQSTvNfh3k0.svg"
                            alt="Frame3"
                            className="mt-px w-4"
                        />
                    </div>
                    <div
                        id="TabelCells2"
                        className="border-solid border-b border-[#484848] flex flex-row w-1/6 items-start mt-12 mr-[-140px]"
                    >
                        <div className="bg-[#2e2e2e] flex flex-row mb-0 w-full items-start">
                            <div
                                id="CompositeLight4"
                                className="opacity-50 bg-[#3c3c3c] flex flex-row justify-center pt-6 gap-2 w-full h-16 items-start"
                            >
                                <img
                                    src="https://file.rendit.io/n/us20vg6kxXNgFOZyp5ff.svg"
                                    alt="IconDashboardclocktime"
                                    className="w-5"
                                />
                                <div className="text-xs font-sans leading-[18px] text-[#bababa] mt-px">
                                    00:00 - 00:00
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="TabelCells3"
                        className="border-solid border-b border-[#484848] flex flex-row mt-[113px] w-1/6 items-start"
                    >
                        <div className="bg-[#2e2e2e] flex flex-row mb-0 w-full items-start">
                            <div
                                id="CompositeLight5"
                                className="opacity-50 bg-[#3c3c3c] flex flex-row justify-center pt-6 gap-2 w-full h-16 items-start"
                            >
                                <img
                                    src="https://file.rendit.io/n/mTmqEYJVEqS0Ujs619MR.svg"
                                    alt="IconDashboardclocktime1"
                                    className="w-5"
                                />
                                <div className="text-xs font-sans leading-[18px] text-[#bababa] mt-px">
                                    00:00 - 00:00
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="TitleHeading3"
                        className="border-solid border-b border-[#484848] bg-[#2e2e2e] flex flex-row justify-center mr-[-140px] pt-3 gap-1 w-1/6 h-12 items-start"
                    >
                        <div
                            id="Company3"
                            className="text-center text-xs font-sans leading-[18px] text-[#bababa] mt-px"
                        >
                            Venue
                        </div>
                        <img
                            src="https://file.rendit.io/n/GSajiPetcNYb9m0L7sGM.svg"
                            alt="Frame4"
                            className="mt-px w-4"
                        />
                    </div>
                    <div
                        id="Component2"
                        className="border-solid border-b border-[#484848] flex flex-row w-1/6 items-start mt-12 mr-[-140px]"
                    >
                        <div className="bg-[#2e2e2e] flex flex-row mb-0 w-full items-start">
                            <div
                                id="CompositeLight6"
                                className="opacity-50 text-sm font-sans leading-[19.6px] text-[#bababa] bg-[#3c3c3c] flex flex-row justify-center pt-6 w-full h-16 items-start"
                            >
                                Lussail Std
                            </div>
                        </div>
                    </div>
                    <div
                        id="Component3"
                        className="border-solid border-b border-[#484848] flex flex-row mt-[113px] w-1/6 items-start"
                    >
                        <div className="bg-[#2e2e2e] flex flex-row mb-0 w-full items-start">
                            <div
                                id="CompositeLight7"
                                className="opacity-50 text-sm font-sans leading-[19.6px] text-[#bababa] bg-[#3c3c3c] flex flex-row justify-center pt-6 w-full h-16 items-start"
                            >
                                ESCAP
                            </div>
                        </div>
                    </div>
                    <div
                        id="TitleHeading4"
                        className="border-solid border-b border-[#484848] bg-[#2e2e2e] mr-[-90px] w-24 h-12"
                    />
                    <div
                        id="Component4"
                        className="border-solid border-b border-[#484848] flex flex-row w-24 items-start mt-12 mr-[-90px]"
                    >
                        <div className="bg-[#2e2e2e] flex flex-row mb-0 w-24 items-start">
                            <div
                                id="CompositeLight8"
                                className="opacity-50 bg-[#3c3c3c] flex flex-row justify-center pt-6 gap-6 w-24 h-16 items-start"
                            >
                                <img
                                    src="https://file.rendit.io/n/Wi7KvOexeN0TopcWnXqg.svg"
                                    alt="IconDashboardEdit"
                                    id="IconDashboardEdit"
                                    className="w-5"
                                />
                                <img
                                    src="https://file.rendit.io/n/1xv2GBNERV9rhvVOfmnt.svg"
                                    alt="IconDashboardChevronRight"
                                    className="w-5"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        id="Component5"
                        className="border-solid border-b border-[#484848] flex flex-row mt-[113px] w-24 items-start"
                    >
                        <div className="bg-[#2e2e2e] flex flex-row mb-0 w-24 items-start">
                            <div
                                id="CompositeLight9"
                                className="opacity-50 bg-[#3c3c3c] flex flex-row justify-center pt-6 gap-6 w-24 h-16 items-start"
                            >
                                <img
                                    src="https://file.rendit.io/n/RlcNNSVDCcHWT6f4D719.svg"
                                    alt="IconDashboardEdit1"
                                    id="IconDashboardEdit1"
                                    className="w-5"
                                />
                                <img
                                    src="https://file.rendit.io/n/1xv2GBNERV9rhvVOfmnt.svg"
                                    alt="IconDashboardChevronRight1"
                                    className="w-5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="PaginationDesktop"
                    className="bg-[#2d2d2d] bg-[linear-gradient(rgba(26,_26,_26,_0.4),_rgba(26,_26,_26,_0.4))] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-between w-full h-16 items-start pt-2 px-2"
                >
                    <div className="text-sm font-sans leading-[19.6px] text-white mt-2">
                        Showing 50 entires of 250
                    </div>
                    <div
                        id="IconwithText"
                        className="border-solid border-[#404040] shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] flex flex-row w-1/4 items-start border"
                    >
                        <div className="border-solid border-r border-[#3c3c3c] bg-[#252525] flex flex-row justify-center pt-2 w-10 h-10 items-start my-0">
                            <img
                                src="https://file.rendit.io/n/z0IA0BMwwAPSFgjPTat7.svg"
                                alt="IconDashboardChevronRight2"
                                className="w-5"
                            />
                        </div>
                        <div className="text-sm font-sans font-bold leading-[20px] text-white border-solid border-r border-[#3c3c3c] bg-[#252525] flex flex-row justify-center mt-0 pt-2 w-12 h-10 items-start">
                            ...
                        </div>
                        <div className="text-sm font-sans font-bold leading-[20px] text-white border-solid border-r border-[#3c3c3c] bg-[#252525] flex flex-row justify-center mt-0 pt-2 w-10 h-10 items-start">
                            1
                        </div>
                        <div className="text-sm font-sans font-bold leading-[20px] text-white border-solid border-r border-[#3c3c3c] bg-[#252525] flex flex-row justify-center mt-0 pt-2 w-10 h-10 items-start">
                            2
                        </div>
                        <div className="text-sm font-sans font-bold leading-[20px] text-white border-solid border-r border-[#3c3c3c] bg-[#252525] flex flex-row justify-center mt-0 pt-2 w-10 h-10 items-start">
                            3
                        </div>
                        <div className="text-sm font-sans font-bold leading-[20px] text-white border-solid border-r border-[#3c3c3c] bg-[#252525] flex flex-row justify-center mt-0 pt-2 w-12 h-10 items-start">
                            ...
                        </div>
                        <div className="border-solid border-r border-[#3c3c3c] bg-[#252525] flex flex-row justify-center mt-0 pt-2 w-10 h-10 items-start">
                            <img
                                src="https://file.rendit.io/n/XtTryEU8upWC1iVOK13j.svg"
                                alt="IconDashboardChevronRight3"
                                className="w-5"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <Paginate
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName="pagination justify-center"
                pageLinkClassName="page-link rounded-md px-3 py-2 border border-gray-300 hover:bg-gray-200"
                activeLinkClassName="bg-gray-100 text-gray-700"
            /> */}
        </>
    );
}

export default SessionsPage;
