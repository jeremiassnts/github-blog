import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { MainLayoutContainer } from "./style";

export function MainLayout() {
    return (
        <MainLayoutContainer>
            <Header />
            <Outlet />
        </MainLayoutContainer>
    )
}