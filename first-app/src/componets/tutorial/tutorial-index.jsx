import React from "react";
import { BrowserRouter, Router, Route,Link,Routes } from "react-router-dom";
import {TutorialHome} from './tutorial-home'
import {JavaTutorial} from './java-tutorial'
import {PythonTutorial} from './python-tutorial'
import {FakestoreIndex} from '../fakestore/fakestore-index'
export function TutorialIndex(){
    return(
        <div className="container-fluid">
            <BrowserRouter>
            <header className="d-flex justify-content-between align-items-center p-2 bg-light">
                <div className="fs-4 fw-bold">Routing</div>
                <div>
                    <span><Link to="/">Home</Link></span>
                    <span className="mx-3"><Link to="java">Java</Link></span>
                    <span><Link to="python">Python</Link></span>
                    <span className="mx-3"><Link to="shop">Shop</Link></span>
                </div>
                <button className="btn btn-warning bi bi-person"></button>
            </header>
            <Routes>
                <Route path="/" element={<TutorialHome/>} />
                <Route path="java" element={<JavaTutorial/>} />
                <Route path="python" element={<PythonTutorial/>} />
                <Route path="shop" element={<FakestoreIndex/>} />
            </Routes>
            </BrowserRouter>
        </div>
        
        
    )
}