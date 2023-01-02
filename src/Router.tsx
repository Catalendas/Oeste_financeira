import { Route, Routes } from "react-router-dom";
import { Defautllayout } from "./layouts/DefautlLayout";
import { Fgts } from "./Pages/Fgts";
import { Home } from "./Pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Defautllayout/>}>
                <Route path="/" element={<Home/>} />
                <Route path="/fgts" element={<Fgts/>} />
            </Route>
        </Routes>
    )
}