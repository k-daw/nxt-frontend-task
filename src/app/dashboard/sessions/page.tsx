"use client";
import SortableTable from "@/components/dashboard/sessions/Table";
import React from "react";
import Header from "@/components/dashboard/sessions/Header";
import data from "@/components/dashboard/sessions/data.json";

function SessionsPage() {
    return (
        <>
            <Header />
            <SortableTable data={data} />
        </>
    );
}

export default SessionsPage;
