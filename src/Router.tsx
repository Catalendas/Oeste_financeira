import { Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Defautllayout } from "./layouts/DefautlLayout";
import { CartaoConsignado } from "./Pages/cartaoConsignado";
import { CreditoConsignado } from "./Pages/creditoConsignado";
import { CreditoPessoal } from "./Pages/creditoPessoal";
import { Fgts } from "./Pages/Fgts";
import { Home } from "./Pages/Home";

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
            </Route>
        </Routes>
    )
}