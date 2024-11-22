import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Meter = ({ value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 100,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    color: "#0f0",
    fontSize: 48,
    fontFamily: "Digital-7", // Make sure you have a digital font installed
  },
});

export default Meter;
