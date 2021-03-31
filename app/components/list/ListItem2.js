import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import colors from "../../config/colors";

const ListItem2 = () => {
  return (
    <TouchableHighlight>
      <View style={styles.listItemContainer}>
        <Image style={styles.image} source={require("../../assets/mosh.jpg")} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Mosh</Text>
          <Text style={styles.subTitle}>5 Listings</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  listItemContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
    color: colors.dark,
    fontSize: 18,
  },
  subTitle: {
    color: colors.medium,
    fontSize: 18,
  },
});

export default ListItem2;
