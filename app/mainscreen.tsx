import { useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LineChart } from "react-native-chart-kit";

const humidityData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [60, 65, 63, 70, 72, 68, 66],
    },
  ],
};

export default function HumidityScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />

        <Text style={styles.title}>Weekly Predictions</Text>
        <Text style={styles.subtitle}>Humidity</Text>

        <View style={styles.tempCircles}>
          {humidityData.datasets[0].data.map((value, index) => (
            <View key={index} style={styles.circle}>
              <View style={styles.circleBackground}>
                <Text style={styles.circleText}>{value}%</Text>
              </View>
              <Text style={styles.dayLabel}>{humidityData.labels[index]}</Text>
            </View>
          ))}
        </View>

        <LineChart
          data={humidityData}
          width={Dimensions.get("window").width - 40}
          height={220}
          withDots={false}
          withInnerLines={false}
          withOuterLines={false}
          withShadow={false}
          chartConfig={{
            backgroundGradientFrom: "#ffffff",
            backgroundGradientTo: "#ffffff",
            decimalPlaces: 0,
            color: () => `#000`,
            labelColor: () => "#000",
            propsForBackgroundLines: {
              strokeWidth: 0,
            },
            fillShadowGradient: "#ffffff",
            fillShadowGradientOpacity: 0,
            propsForDots: {
              r: "0",
            },
            propsForLabels: {
              fontSize: 12,
            },
          }}
          style={styles.chart}
        />

        <Text style={styles.summaryTitle}>Weekly Humidity Summary</Text>
        <Text style={styles.summaryText}>
          The week began with moderate humidity and saw a gradual increase toward
          Friday, peaking at over 70%. Slight drops over the weekend brought more
          comfortable conditions.
        </Text>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => router.push("/temperature")}
          >
            <Text style={{ color: "#fff", fontSize: 12 }}>Temperature</Text>
          </TouchableOpacity>

          {["Fog", "Air Pollution", "Pollen", "UV Index"].map((label, index) => (
            <TouchableOpacity
              key={index}
              style={styles.footerButton}
              onPress={() => console.log(`${label} pressed`)}
            >
              <Text style={{ color: "#fff", fontSize: 12 }}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: "#7DAAA5",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
    marginTop: -10,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 10,
    color: "#000",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 15,
    color: "#000",
  },
  tempCircles: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "100%",
    marginBottom: 10,
  },
  circle: {
    alignItems: "center",
    width: "14%",
    marginVertical: 10,
  },
  circleBackground: {
    backgroundColor: "#ffffff",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 30,
    width: 54,
    height: 54,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  circleText: {
    fontWeight: "600",
    fontSize: 14,
    color: "#000",
  },
  dayLabel: {
    fontSize: 12,
    color: "#000",
  },
  chart: {
    marginVertical: 8,
    borderRadius: 0,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 10,
    color: "#000",
  },
  summaryText: {
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 10,
    color: "#000",
    marginBottom: 20,
  },
  footer: {
    marginTop: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  footerButton: {
    backgroundColor: "#d46a6a",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 10,
    margin: 4,
    fontSize: 12,
  },
});
