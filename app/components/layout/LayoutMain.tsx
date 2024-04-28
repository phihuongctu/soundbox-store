import TopBar from "~/components/Topbar";
import HeaderMain from "~/components/header/HeaderMain";

export default function LayoutMain({ children }: { children: React.ReactNode }) {
    return (
        <>
            <TopBar />
            <HeaderMain />
            {children}
        </>
    )

}