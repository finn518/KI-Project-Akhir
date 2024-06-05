import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Pelanggan from "../pages/Pelanggan";
import Login from "../pages/Login";
import Admin from "../pages/Admin";

const createRouter = createBrowserRouter([
    {
        path:'/',
        element:(
            <Pelanggan />
        )
    },
    {
        path:'/login',
        element:(
            <Login />
        )
    },
    {
        path:'/admin',
        element:(
            <Admin />
        )
    }
])

const Routes = () => {
    return  <RouterProvider router={createRouter} />
}

export default Routes