import { createBrowserRouter, RouterProvider } from "react-router";
import { Login } from "../pages";
import { HomeLayout } from "../layouts";

const route = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <Login />,
            },
        ],
    },
])

export default function ReactRouterProvider() {
    return (
        <RouterProvider router={route} />
    );
}
