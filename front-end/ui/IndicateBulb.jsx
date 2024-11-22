import React from "react";
import Bulb from "../components/Bulb";
import { StyleSheet, View } from "react-native";

const IndicateBulb = () => {
  return (
    <View style={styles.bulbContainer}>
      <Bulb color={"red"} />
      <Bulb color={"green"} />
    </View>
  );
};

const styles = StyleSheet.create({
  bulbContainer: {
    justifyContent: "space-between",
    backgroundColor: "blue",
    paddingInline: 20,
  },
});                    
export default IndicateBulb;
