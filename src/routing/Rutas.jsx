import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Index } from "../components/pages/Index";
import { Mangas } from "../components/pages/Mangas";
import { Manga } from "../components/pages/Manga";
import { Crear } from "../components/pages/Crear";
import { Header } from "../components/layout/Header";
import { Nav } from "../components/layout/Nav";
import { Sidebar } from "../components/layout/Sidebar";
import { Footer } from "../components/layout/Footer";

export const Rutas = () => {
    return (
        <BrowserRouter>
            {/* Layout */}
            <Header />
            <Nav />

            {/* Contenido principal y rutas */}
            <section id="content" className="content">
                <Routes>
                    <Route path="/" element = {<Index />} />
                    <Route path="/index" element = {<Index />} />
                    <Route path="/mangas" element = {<Mangas />} />
                    <Route path="/manga" element = {<Manga />} />
                    <Route path="/crear-mangas" element = {<Crear />} />
                </Routes>
            </section>

            {/* Sidebar */}
            <Sidebar />

            {/* Footer */}
            <Footer />

        </BrowserRouter>
    )
}