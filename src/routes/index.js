import { Home } from "../pages"

const { BrowserRouter, Routes, Route } = require("react-router-dom")

const PagesRoutes = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />

        </Routes>
    </BrowserRouter>
}

export default PagesRoutes