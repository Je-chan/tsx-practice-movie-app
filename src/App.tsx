import React from "react";
import styled from "@emotion/styled";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import MovieDetail from "./pages/MovieDetail";
import TvPage from "./pages/TvPage";
import TvDetail from "./pages/TvDetail";

import LoginModal from "./features/app/LoginModal";
import SignupModal from "./features/app/SignupModal";

const Base = styled.div``;

function App() {
  return (
    <Base>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/tv" element={<TvPage />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/tv/:id" element={<TvDetail />} />
        </Routes>
      </Router>
      <LoginModal />
      <SignupModal />
    </Base>
  );
}

export default App;
