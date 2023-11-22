import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/pages/Home/Home";

import AddMusic from "./views/pages/AddMusic/AddMusic";
import SongDetails from "./views/pages/SongDetail/SongDetail";

function App() {
  return (
    <BrowserRouter>
      <AddMusic />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/songs/:id' element={<SongDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
