import styled from "styled-components";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const Wrap = styled.div``;

export const App = () => {
  return (
    <Wrap>
      <Header />
      <Footer />
    </Wrap>
  );
};
