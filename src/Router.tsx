import { Route, Routes } from "react-router-dom";
import { Defautllayout } from "./layouts/DefautlLayout";
import { CreditoConsignado } from "./Pages/creditoConsignado";
import { Fgts } from "./Pages/Fgts";
import { Home } from "./Pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Defautllayout/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/fgts" element={<Fgts/>} />
                <Route path="/creditoconsignado" element={<CreditoConsignado/>} />
            </Route>
        </Routes>
    )
}