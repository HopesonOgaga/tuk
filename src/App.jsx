import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import ArtistDetail from "./constants/artistdetils";
import { ThemeProvider } from "@material-tailwind/react";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Changed :slug to :id to match ArtistDetail logic */}
          <Route path="/artist/:id" element={<ArtistDetail />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
