import { Routes, Route } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import { Login, Dashboard } from "../pages";
import { HomeLayout, DashboardLayout } from "../layouts";

export const AppRoutes = () => (
    <Routes>
        <Route element={<HomeLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/login" element={<Login />} />
        </Route>


        <Route path="/" element={<DashboardLayout />}>
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>
                }
            />
        </Route>
    </Routes>
);
