
import { BrowserRouter, Routes, Route } from "react-router-dom";
// @ts-ignore
import Home from "./page/home";
// @ts-ignore
import Search from "./page/search";


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />


        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
