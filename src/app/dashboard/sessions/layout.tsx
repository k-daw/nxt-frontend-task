import Header from "@/components/dashboard/sessions/Header";

function SessionsLayout({
    children,
}: {
    children: React.ReactNode;
}): React.ReactNode {
    return (
        <>
            <Header />
            {children}
        </>
    );
}

export default SessionsLayout;
