import { BrowserRouter, Routes, Route } from "react-router-dom";

import Game from './views/game/play';
import Draw from "./views/draw/create";

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Game />} />
            <Route path="/draw" element={<Draw />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
