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

const temperatureData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      data: [24, 26, 27, 28, 30, 29, 25],
    },
  ],
};

export default function TemperatureScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Geri Ok Tuşu */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        <Image source={require("../assets/logo.png")} style={styles.logo} />

        <Text style={styles.title}>Weekly Predictions</Text>
        <Text style={styles.subtitle}>Temperature</Text>

        <View style={styles.tempCircles}>
          {temperatureData.datasets[0].data.map((value, index) => (
            <View key={index} style={styles.circle}>
              <View style={styles.circleBackground}>
                <Text style={styles.circleText}>{value}°C</Text>
              </View>
              <Text style={styles.dayLabel}>{temperatureData.labels[index]}</Text>
            </View>
          ))}
        </View>

        <LineChart
          data={temperatureData}
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

        <View style={styles.summaryHeader}>
  <Text style={styles.summaryTitle}>Weekly Temperature Summary</Text>
  <TouchableOpacity style={styles.moreInfoButton} onPress={() => console.log("More information pressed")}>
    <Text style={styles.moreInfoText}>More Information</Text>
  </TouchableOpacity>
</View>

        <Text style={styles.summaryText}>
          The temperature started off mild and climbed gradually throughout the
          week, peaking around Friday. The weekend brought slightly cooler
          conditions again.
        </Text>

        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={() => router.push("/Humidity")}
          >
            <Text style={{ color: "#fff", fontSize: 12 }}>Humidity</Text>
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
  backButton: {
    alignSelf: "flex-start",
    marginBottom: 10,
    padding: 8,
    marginTop: -10,
  },
  backArrow: {
    fontSize: 24,
    color: "black",
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
  summaryHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#6fbf73", // Yeşil kutu
  paddingHorizontal: 10,
  paddingVertical: 8,
  borderRadius: 10,
  width: "100%",
  marginTop: 20,
},

moreInfoButton: {
  backgroundColor: "#4e944f", // Daha koyu yeşil
  paddingVertical: 4,
  paddingHorizontal: 8,
  borderRadius: 6,
},

moreInfoText: {
  color: "white",
  fontSize: 12,
  fontWeight: "500",
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
