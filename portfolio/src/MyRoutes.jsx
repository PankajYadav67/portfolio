import { Route, Routes } from "react-router-dom/dist/umd/react-router-dom.development"
import { Home } from "./Components/Home";

export const MyRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    )
}