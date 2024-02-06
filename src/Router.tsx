import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MainLayout } from "./layouts/MainLayout";
import { Post } from "./pages/Post";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/post/:id" element={<Post />} />
            </Route>
        </Routes>
    )
}