import logo from "./logo.svg";
import CoutriesData from "./Components/CoutriesData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetail from "./Components/CardDetail";
import Demo from "./Components/Demo";

function App() {
  return (
    <div className="App">
      {/* <CoutriesData /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CoutriesData />} />
          <Route path="details" element={<CardDetail />} />
          <Route path="demo" element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
