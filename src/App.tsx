import { BrowserRouter, Routes, Route } from "react-router-dom";

import Game from './views/game/play';

function App() {
  return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Game />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
