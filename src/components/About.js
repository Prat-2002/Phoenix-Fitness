import React from "react";
import styled from "styled-components";
import bg from "../assets/img_9.webp";
import Button from "./reusable/Button";
import H1 from "./reusable/H1";
import H2 from "./reusable/H2";
import Paragraph from "./reusable/Paragraph";
import WithBarTitle from "./reusable/WithBarTitle";

export default function About() {
  return (
    <Container>
      <Left>
        <Image src={bg} />
      </Left>
      <Right>
        <WithBarTitle title="About Our Gym" />
        <H1 color="#2c234d">
          SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!
        </H1>
        <H2>Phoenix Fitness</H2>
        <Paragraph>
        Our goal is to make health and fitness attainable, affordable and approachable.
        Push your fitness further with our mix of facilities and we'll support you with advice on new and better ways to train.
        Choose from hundreds of workouts, healthy recipes, relaxing meditations, and expert articles, for a whole body and mind approach to feeling great.
        </Paragraph>

        <Button style={{ marginTop: 30 }}>Became a member</Button>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Right = styled.div`
  width: 45%;
`;
const Image = styled.img`
  width: 70%;
  height: 80%;
`;
