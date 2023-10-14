import { useState } from "react";

import Description from "./pages/Description";
import Qurban from "./pages/Qurban";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import data from "./data.js";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  const allCategories = [
    "semua",
    ...new Set(data.map((item) => item.category)),
  ];
  const [menues, setMenues] = useState(data);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qurban">
            <Route
              index
              element={
                <Qurban
                  data={data}
                  menues={menues}
                  setMenues={setMenues}
                  allCategories={allCategories}
                />
              }
            />
            <Route
              path=":qurbanId"
              element={<Description menues={menues} setMenues={setMenues} />}
            />
            <Route
              path="checkout/:qurbanId"
              element={<Checkout menues={menues} />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
