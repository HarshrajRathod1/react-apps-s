import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FakestoreHome } from "./fakestoreHome";


export function FakestoreIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="p-4 fs-3 fw-bold bg-light">
                <div className="bi bi-bag-fill text-center"> FakeStore</div>
            </header>
            <Routes>
                <Route path="/" element={<FakestoreHome/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}