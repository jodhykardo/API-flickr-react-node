import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";
import Author from "./components/Author";

function App() {
  return (
      <BrowserRouter>
      {<Navbar />}
      <div className="flex justify-center w-full">
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/author/:id" element={<Author />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
