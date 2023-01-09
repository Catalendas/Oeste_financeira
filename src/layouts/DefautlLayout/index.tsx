import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MenuBobile } from "../../components/MenuMobile";
import { DefaultLayoutContainer } from "./styled";

export function Defautllayout() {

    const [menuIsVisible, setMenuIsVisible] = useState(true)

    return (
        <DefaultLayoutContainer>
            <Header setMenuIsVisible={setMenuIsVisible}/>
            <MenuBobile
                menuIsVisible={menuIsVisible}
                setMenuIsVisible={setMenuIsVisible}
            />
            <Outlet/>
            <Footer/>
        </DefaultLayoutContainer>
    )
}