import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Clouds: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Thunderstorm: {
    iconName: "",
    gradient: []
  },
  Drizzle: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Rain: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Snow: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Atmosphere: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Haze: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Mist: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Smoke: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Dust: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Fog: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Sand: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Ash: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Squall: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"]
  },
  Tornado: {
    iconName: "weather-sunny",
    gradient: ["#4DA0B0", "#D39D38"]
  }
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          name={weatherOptions[condition].iconName}
          size={85}
          color="white"
        />
        <Text style={styles.temp}>{temp}°C</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
}

Weather.proptypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
    "Haze",
    "Mist",
    "Smoke",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado"
  ]).isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  temp: {
    fontSize: 42,
    color: "white"
  },

  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
