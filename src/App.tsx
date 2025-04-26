import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { StyledComponents } from "./pages/styled-components";
import { TailwindCSS } from "./pages/tailwindcss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/styled-components" element={<StyledComponents />} />
        <Route path="/tailwindcss" element={<TailwindCSS />} />
      </Routes>
    </BrowserRouter>
  );
}
