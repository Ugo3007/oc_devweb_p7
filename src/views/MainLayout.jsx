import {Outlet} from "react-router-dom";

export default function MainLayout () {
    return <main>
        <h1>Hello World! (Main Layout)</h1>
        <Outlet/>
        <h2>This is the footer</h2>
    </main>
}