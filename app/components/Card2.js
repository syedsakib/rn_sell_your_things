import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import colors from "../config/colors";

const Card2 = () => {
  return (
    <>
      <View style={styles.cardHolder}>
        <Image style={styles.image} source={require("../assets/jacket.jpg")} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Red Jacet For Sale</Text>
          <Text style={styles.subTitle}>$100</Text>
        </View>
      </View>
      <View style={styles.cardHolder}>
        <Image style={styles.image} source={require("../assets/couch.jpg")} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Couch For Sale</Text>
          <Text style={styles.subTitle}>$250</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardHolder: {
    borderRadius: 15,
    backgroundColor: colors.white,
    overflow: "hidden",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    color: colors.dark,
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 18,
    color: colors.secondary,
    fontWeight: "bold",
  },
});

export default Card2;
