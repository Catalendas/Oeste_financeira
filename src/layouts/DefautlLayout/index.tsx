import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { DefaultLayoutContainer } from "./styled";

export function Defautllayout() {
    return (
        <DefaultLayoutContainer>
            <Header/>
            <Outlet/>
            <Footer/>
        </DefaultLayoutContainer>
    )
}