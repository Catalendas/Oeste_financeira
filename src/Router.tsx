import { Route, Routes } from "react-router-dom";
import { About } from "./Pages/About";
import { Defautllayout } from "./layouts/DefautlLayout";
import { CartaoConsignado } from "./Pages/cartaoConsignado";
import { CreditoConsignado } from "./Pages/creditoConsignado";
import { CreditoPessoal } from "./Pages/creditoPessoal";
import { Fgts } from "./Pages/Fgts";
import { Home } from "./Pages/Home";
import { PrivacyPolicy } from "./Pages/PrivacyPolicy";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Defautllayout/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/fgts" element={<Fgts/>} />
                <Route path="/creditoconsignado" element={<CreditoConsignado/>} />
                <Route path="/creditopessoal" element={<CreditoPessoal/>} />
                <Route path="/cartaoconsignado" element={<CartaoConsignado/>} />
                <Route path="/sobrenos" element={<About/>} />
                <Route path="/politicadeprivacidade" element={<PrivacyPolicy/>} />
            </Route>
        </Routes>
    )
}