import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Index } from "../components/pages/Index";
import { Mangas } from "../components/pages/Mangas";
import { Manga } from "../components/pages/Manga";
import { Editar } from "../components/pages/Editar";
import { Crear } from "../components/pages/Crear";
import { Header } from "../components/layout/Header";
import { Nav } from "../components/layout/Nav";
import { Sidebar } from "../components/layout/Sidebar";
import { Footer } from "../components/layout/Footer";
import { Busqueda } from "../components/pages/Busqueda";

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
                    <Route path="/manga/:id" element = {<Manga />} />
                    <Route path="/editar/:id" element = {<Editar />} />
                    <Route path="/crear-mangas" element = {<Crear />} />
                    <Route path="/buscar/:busqueda" element = {<Busqueda />} />



                    <Route path="*" element = {
                        <div className="jumbo">
                            <h1>Error 404: Page Not Found</h1>
                        </div>
                    } />


                </Routes>
            </section>

            {/* Sidebar */}
            <Sidebar />

            {/* Footer */}
            <Footer />

        </BrowserRouter>
    )
}