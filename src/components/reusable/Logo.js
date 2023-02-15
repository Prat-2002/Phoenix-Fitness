import React from "react";
import styled from "styled-components";

export default function Logo() {
  return (
    <Box>
      <Title>PHOENIX FITNESS</Title>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Title = styled.p`
  font-size: 70px;
  color: rgb(194, 194, 163);
`;
