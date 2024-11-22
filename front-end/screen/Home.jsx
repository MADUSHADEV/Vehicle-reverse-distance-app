import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Meter from "../ui/Meter";
import IndicateBulb from "../ui/IndicateBulb";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.title}>Vehicle Reverse Distance App</Text>
        <Text style={styles.subtitle}>Welcome to the Home</Text>
      </View>

      <View style={styles.indicatorSection}>
        <Meter value={100} />
        <IndicateBulb />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },

  headerView: {
    backgroundColor: "red",
    alignItems: "center",
  },

  indicatorSection: {
    backgroundColor: "yellow",
    alignItems: "center",
    //     justifyContent: "space-between",
    gap: 10,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
  },
});

export default Home;
