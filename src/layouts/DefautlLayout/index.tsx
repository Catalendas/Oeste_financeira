import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { DefaultLayoutContainer } from "./styled";

export function Defautllayout() {
    return (
        <DefaultLayoutContainer>
            <Header/>
            <Outlet/>
        </DefaultLayoutContainer>
    )
}