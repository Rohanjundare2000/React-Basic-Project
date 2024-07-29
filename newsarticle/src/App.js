import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigationbar } from "./Component/Navigationbar";
import { TopHeadlines } from "./Component/TopHeadlines";
import { Allnews } from "./Component/AllNew";
import { Weather } from "./Component/Weather";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Navigationbar />
      <Routes>
        {/* Error: Incorrect path */}
        <Route path="/" element={<TopHeadlines />} />
        {/* Error: Missing component prop */}
        <Route path="/all-news"element={<Allnews />} />
        {/* Error: Non-existent component */}
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
