import { Routes, Route } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

import { Login, Dashboard, PriceList } from "../pages";
import { HomeLayout, DashboardLayout } from "../layouts";

export const AppRoutes = () => (
    <Routes>
        <Route element={
            <PublicRoute>
                <HomeLayout />
            </PublicRoute>
        }>
            <Route
                path="/login"
                element={<Login />}
            />
        </Route>

        <Route
            path="/"
            element={
                <ProtectedRoute>
                    <DashboardLayout />
                </ProtectedRoute>
            }
        >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="priceList" element={<PriceList />} />
        </Route>
    </Routes>
);
