import styled from "styled-components";

const Wrap = styled.div`
  width: 100%;
  max-width: 75%;
  height: 60px;
  background-color: #eee;
  border-radius: 10px;
  line-height: 60px;
  padding: 10px 5%;
  margin: 0 auto;
`;
const Container = styled.div``;
const Menu = styled.div`
  font-size: 30px;
  cursor: pointer;
`;
const Logo = styled.div`
  font-size: 30px;
  position: absolute;
  top: 15px;
  left: 45%;
`;

export const Header = () => {
  return (
    <Wrap>
      <Container>
        <Menu> = </Menu>
        <Logo> JGame </Logo>
      </Container>
    </Wrap>
  );
};
