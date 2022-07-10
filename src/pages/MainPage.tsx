import React from "react";
import styled from "@emotion/styled";

import Header from "../components/Header";
import Footer from "../components/Footer";

import LatestMovieSection from "../features/movie/latest";
import NowPlayingSection from "../features/movie/nowPlaying";

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

export default function MainPage() {
  return (
    <>
      <Header />
      <Main>
        <LatestMovieSection />
        <NowPlayingSection />
      </Main>
      <Footer />
    </>
  );
}
