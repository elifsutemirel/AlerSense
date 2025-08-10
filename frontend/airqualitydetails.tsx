import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AirQualityInfoScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Geri ok */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Logo */}
        <Image source={require('../assets/logo.png')} style={styles.logo} />

        {/* Kart */}
        <View style={styles.card}>
          <Text style={styles.title}>Details</Text>

          <View style={styles.section}>
            <Text style={styles.level}>
              <Text style={styles.bold}>Good (0–50): </Text>
              Air quality is satisfactory. No precautions needed.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.level}>
              <Text style={styles.bold}>Fair (51–100): </Text>
              Acceptable air quality. Unusually sensitive individuals should consider limiting outdoor activity.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.level}>
              <Text style={styles.bold}>Moderate (101–150): </Text>
              Sensitive groups may experience health effects. Reduce prolonged outdoor exertion.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.level}>
              <Text style={styles.bold}>Poor (151–200): </Text>
              Everyone may begin to feel effects. Sensitive groups should avoid outdoor activity.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.level}>
              <Text style={styles.bold}>Very Poor (201–300): </Text>
              Health warnings of emergency conditions. Avoid all outdoor activity.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.level}>
              <Text style={styles.bold}>Extremely Poor (301+): </Text>
              Serious health effects for everyone. Stay indoors and seek medical attention if symptoms appear.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Sayfanın en altına sabit profil simgesi */}
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
    paddingBottom: 140, // Alt ikonla çakışmaması için
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    zIndex: 10,
  },
  backArrow: {
    fontSize: 28,
    color: '#000',
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 22,
    width: '100%',
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1f3e39',
  },
  section: {
    marginBottom: 20, // Her başlık arasına boşluk
  },
  level: {
    fontSize: 15,
    lineHeight: 24,
    color: '#1f3e39',
  },
  bold: {
    fontWeight: 'bold',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#5E958A',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 5,
  },
  iconText: {
    fontSize: 24,
    color: '#fff',
  },
});
