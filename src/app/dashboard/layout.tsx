import Header from "@/components/dashboard/header/page";
import Navbar from "@/components/dashboard/navbar/page";
import SessionLayout from "@/components/dashboard/sessions/Header";

function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactNode {
    return (
        <>
            <Header />
            <div className="flex flex-row bg-[#1A1A1A]">
                <Navbar />
                <div className="flex-1 pt-2 p-10 text-2xl font-bold">
                    {children}
                </div>
            </div>
        </>
    );
}

export default DashboardLayout;
