import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import GetNotificationButton from "./GetNotificationButton";

export default function Drawer(props: any) {
  return (
    <DrawerWrapper>
      <CloseButtonRow></CloseButtonRow>
      <DrawerContentRow>
        <GetNotificationButton toggleDrawer={props.navigation.closeDrawer} />
      </DrawerContentRow>
    </DrawerWrapper>
  );
}

const DrawerWrapper = styled(View)<any>`
  color: white;
  z-index: 100;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding-top: 40px;
  flex: 1;
`;

const CloseButtonRow = styled(View)`
  font-size: 24px;
  flex-direction: row;
  margin: 15px;
  justify-content: flex-end;
  flex: 1;
`;

const DrawerContentRow = styled(View)`
  flex-direction: row;
  justify-content: center;
  flex: 16;
  align-items: center;
`;
