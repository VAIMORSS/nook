import React from "react";
import { Text } from "react-native";
import { MainWrapper } from "../styles";

export default function JokeView(props) {
  const joke = props.route.params.joke.data.data;
  return (
    <MainWrapper>
      <Text>{joke.punchline}</Text>
    </MainWrapper>
  );
}
