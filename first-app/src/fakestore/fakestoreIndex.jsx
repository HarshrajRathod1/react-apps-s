import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FakestoreHome } from "./fakestoreHome";
import { FakestoreProducts } from "./fakestoreProducts";
import { lazy, Suspense } from "react";
import { FakestoreSearch } from "./fakestoreSearch";
import { FakestoreResult } from "./fakestoreResult";


export function FakestoreIndex(){
    let FakestoreDetails= lazy(()=>import('./fakestoreDetails'))
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="p-4 fs-3 fw-bold bg-light ">
                <Link to="/"><div className="bi bi-bag-fill text-center">FakeStore</div></Link>
            </header>
           <Suspense fallback={<div>...Loading</div>}>
            <Routes>
                <Route path="/" element={<FakestoreHome/>}>
                    <Route path=":category" element={<FakestoreProducts/>}/>
                </Route>
                <Route path="/details/:id" element={<FakestoreDetails/>}/>
                <Route path="search" element={<FakestoreSearch/>}/>
                <Route path="result" element={<FakestoreResult/>}/>
            </Routes>
            </Suspense>
            </BrowserRouter>
        </div>
    )
}