// AirQualityModerateScreen.tsx

import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PollenHighScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Logo */}
        <Image source={require('../assets/logo.png')} style={styles.logo} />

        {/* Geri Ok */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>

        {/* Kutu */}
        <View style={styles.card}>
          <Text style={styles.header}>Recommendation for today</Text>
          <Text style={styles.uvIndex}>Today's Pollen Level: High (9–12)</Text>
          <Text style={styles.warning}>
            Pollen levels are high today and may cause symptoms in individuals with allergies. Please consider the following precautions:
          </Text>

          {/* Tikli Liste */}
          <View style={styles.bulletContainer}>
            <Text style={styles.bullet}>✔️ Limit outdoor activities, especially in the morning and on windy days.</Text>
            <Text style={styles.bullet}>✔️ Change clothes and shower after being outdoors to remove pollen.</Text>
            <Text style={styles.bullet}>✔️ Keep windows closed to prevent pollen from entering indoors.</Text>
            <Text style={styles.bullet}>✔️ Use air purifiers or HVAC systems with proper filters.</Text>
            <Text style={styles.bullet}>✔️ Wear sunglasses and a hat to reduce pollen contact with eyes and hair.</Text>
            <Text style={styles.bullet}>✔️ Take allergy medications as prescribed by your doctor.</Text>
            <Text style={styles.bullet}>✔️ Monitor symptoms such as sneezing, runny nose, itchy eyes, or congestion.</Text>
          </View>
        </View>
      </ScrollView>

      {/* Alt Menü */}
      <View style={styles.bottomBar}>
        <TouchableOpacity>
          <Text style={styles.iconText}>👤</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7DAAA5',
  },
  scrollContainer: {
    alignItems: 'center',
    padding: 20,
    paddingTop: 0,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
  },
  backArrow: {
    fontSize: 24,
    color: '#000',
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 6,
    padding: 18,
    width: '100%',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1f3e39',
  },
  uvIndex: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1f3e39',
  },
  warning: {
    fontSize: 12,
    marginBottom: 12,
    color: '#1f3e39',
  },
  bulletContainer: {
    gap: 12,
    paddingTop: 8,
    alignItems: 'flex-start',
  },
  bullet: {
    fontSize: 16,
    color: '#1f3e39',
    lineHeight: 24,
  },
  bottomBar: {
    backgroundColor: '#5E958A',
    paddingVertical: 10,
    alignItems: 'center',
  },
  iconText: {
    fontSize: 22,
  },
});
