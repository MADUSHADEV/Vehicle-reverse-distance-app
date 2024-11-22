import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Bulb = ({ color = "green", sound = "null" }) => {
  return (
    <View style={[styles.BulbContainer, { backgroundColor: color }]}>
      <Text style={styles.text}>Bulb</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  BulbContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 35,
    color: "white",
  },
});

export default Bulb;
