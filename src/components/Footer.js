import styled from "styled-components";

const Wrap = styled.div`
  position: absolute;
  bottom: 0;
`;

const Line = styled.div``;

export const Footer = () => {
  return (
    <Wrap>
      <Line> &copy; eden27 </Line>
    </Wrap>
  );
};
