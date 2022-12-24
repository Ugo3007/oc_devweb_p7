import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";

export default function MainLayout () {
    return <main>
        <h1>Hello World! (Main Layout)</h1>
        <Outlet/>
        <Footer/>
    </main>
}