import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Layout from "./Layout";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />
            }
        ]
    }
])