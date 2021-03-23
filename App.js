import React, { useState } from "react";
import { View } from "react-native";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ApptextInput from "./app/components/ApptextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothings", value: 2 },
  { label: "Cameras", value: 3 },
];

export default function App() {
  const [category, setCategory] = useState();
  return (
    <Screen>
      <AppPicker
        icon="apps"
        placeholder="Category"
        items={categories}
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      />
      <ApptextInput icon="email" placeholder="Email" />
    </Screen>
  );
}

{
  /* <Icon name="email" size={50} backgroundColor="red" iconColor="white" /> */
}
