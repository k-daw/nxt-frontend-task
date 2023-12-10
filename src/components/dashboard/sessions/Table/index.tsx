import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import data from "../data.json";

const getImgSrcFromId = (id: number) => {
    return data.filter((e) => e.id == id)[0].cover_image;
};

const renderHeader = (params) => {
    const { headerName } = params.colDef;
    const sortImage =
        headerName !== "" ? (
            <img
                src="https://file.rendit.io/n/GSajiPetcNYb9m0L7sGM.svg"
                alt="Frame1"
                className="mt-px w-4 ml-2"
            />
        ) : null;
    return (
        <div className="w-[100] flex grow justify-center text-center text-[#BABABA]">
            {headerName}
            {sortImage}
        </div>
    );
};
const columns: GridColDef[] = [
    {
        field: "title",
        headerName: "Session Name",
        width: 670,
        headerClassName: "",
        headerAlign: "center",
        disableColumnMenu: true,
        sortable: false,
        renderCell: (params) => {
            return (
                <div
                    id="CompositeLight"
                    className="opacity-50 bg-[#3C3C3C] flex flex-row w-full items-start"
                >
                    <div className=" flex flex-row gap-2 w-full h-16 items-start pt-4 px-6">
                        <img
                            src={getImgSrcFromId(params.id)}
                            alt="Rectangle1"
                            className="w-8"
                        />
                        <div
                            id="WorldCup"
                            className="text-sm font-sans leading-[19.6px] text-white mt-2"
                        >
                            {params.value}
                        </div>
                    </div>
                </div>
            );
        },
        align: "left",
        renderHeader: renderHeader,
    },
    {
        field: "date",
        headerName: "Date",
        width: 140,
        headerClassName: "",
        headerAlign: "center",
        renderHeader,
        disableColumnMenu: true,
        sortable: false,
        renderCell: (params) => {
            return (
                <div
                    id="CompositeLight"
                    className="opacity-50 bg-[#3C3C3C] flex flex-row w-full items-start p-0"
                >
                    <div className=" flex flex-row justify-center pt-6 gap-2 w-full h-16 items-start">
                        <img
                            src="https://file.rendit.io/n/uf0NrXyd7i1ySBrtvGKL.svg"
                            alt="IconDashboardItinerary"
                            className="w-5"
                        />
                        <div
                            id="Element1"
                            className="text-xs font-sans leading-[18px] text-[#bababa] mt-px"
                        >
                            {params.value}
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        field: "till",
        headerName: "Time",
        type: "time",
        width: 140,
        headerClassName: "",
        headerAlign: "center",
        renderHeader,
        disableColumnMenu: true,
        sortable: false,
        renderCell: (params) => {
            return (
                <div
                    id="CompositeLight"
                    className="opacity-50 bg-[#3C3C3C] flex flex-row w-full items-start p-0"
                >
                    <div className=" flex flex-row justify-center pt-6 gap-2 w-full h-16 items-start">
                        <img
                            src="https://file.rendit.io/n/us20vg6kxXNgFOZyp5ff.svg"
                            alt="IconDashboardclocktime"
                            className="w-5"
                        />
                        <div className="text-xs font-sans leading-[18px] text-[#bababa] mt-px">
                            {params.value}
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        field: "venue",
        headerName: "Venue",
        description: "This column has a value getter and is not sortable.",
        width: 140,
        headerClassName: "",
        headerAlign: "center",
        renderHeader,
        disableColumnMenu: true,
        sortable: false,

        renderCell: (params) => {
            return (
                <div
                    id="NewRootRoot"
                    className="flex flex-row w-full items-start p-0"
                >
                    <div
                        id="CompositeLight"
                        className="opacity-50 bg-[#3C3C3C] flex flex-row w-full items-start"
                    >
                        <div className="text-sm font-sans leading-[19.6px] text-[#bababa]  flex flex-row justify-center pt-6 w-full h-16 items-start">
                            {params.value.name}
                        </div>
                    </div>
                </div>
            );
        },
    },
    {
        field: "id",
        headerName: "",
        description: "This column has a value getter and is not sortable.",
        width: 140,
        headerClassName: "",
        headerAlign: "center",
        sortable: false,
        renderHeader,
        disableColumnMenu: true,
        renderCell: (params) => {
            return (
                <div
                    id="NewRootRoot"
                    className="flex flex-row w-24 items-start"
                >
                    <div
                        id="CompositeLight"
                        className="opacity-50 bg-[#3C3C3C] flex flex-row w-24 items-start"
                    >
                        <div className=" flex flex-row justify-center pt-6 gap-6 w-24 h-16 items-start">
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
            );
        },
    },
];

function Table() {
    return (
        <div
            style={{
                height: "100%",
                textAlign: "center",
            }}
        >
            <DataGrid
                rows={data}
                columns={columns}
                disableRowSelectionOnClick
                sx={{
                    width: "100%",

                    backgroundColor: "#2E2E2E",
                    "& .MuiDataGrid-columnHeaders": {
                        padding: 0,
                        border: 0,
                        borderBottom: "1px solid var(--gray-gray-600, #484848)",
                    },
                    "& .MuiDataGrid-cell": {
                        padding: 0,
                        borderLeft: "none",
                        borderRight: "none",
                        borderBottom: "1px solid var(--gray-gray-600, #484848)",
                    },
                    "& .MuiDataGrid-columnSeparator": {
                        display: "none",
                    },
                }}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                    },
                }}
                pageSizeOptions={[10, 20]}
            />
        </div>
    );
}

export default Table;
