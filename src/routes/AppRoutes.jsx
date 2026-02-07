import { Routes, Route } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

import { Login, Dashboard } from "../pages";
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
            <Route index element={<Dashboard />} />
        </Route>
    </Routes>
);
