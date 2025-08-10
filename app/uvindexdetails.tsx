import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function UVInfoScreen() {
  const router = useRouter();

  return (
   <SafeAreaView style={styles.container}>
  {/* Geri Tuşu En Üstte */}
  <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
    <Ionicons name="arrow-back" size={28} color="#000" />
  </TouchableOpacity>

  <ScrollView contentContainerStyle={styles.contentContainer}>
    {/* Logo */}
    <Image
      source={require('../assets/logo.png')}
      style={styles.logo}
    />
    {/* Geri Tuşu */}
    <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
      <Ionicons name="arrow-back" size={28} color="#000" />
    </TouchableOpacity>

    {/* UV Details */}
    <View style={styles.card}>
      <Text style={styles.cardTitle}>UV Index Details</Text>

      <Text style={styles.uvTitle}>UV Index: 1–2</Text>
      <Text style={styles.uvText}>
        Minimal protection needed. You can safely enjoy being outside.
      </Text>

      <Text style={styles.uvTitle}>UV Index: 3–5</Text>
      <Text style={styles.uvText}>
        Moderate risk. Stay in the shade during midday hours and wear sunglasses and sunscreen.
      </Text>

      <Text style={styles.uvTitle}>UV Index: 6–7</Text>
      <Text style={styles.uvText}>
        High risk. Wear protective clothing, a wide-brimmed hat, and sunglasses. Apply SPF 30+ sunscreen every 2 hours.
      </Text>

      <Text style={styles.uvTitle}>UV Index: 8–10</Text>
      <Text style={styles.uvText}>
        Very high risk. Seek shade, especially around midday. Use sunscreen, wear protective clothing, and limit sun exposure.
      </Text>

      <Text style={styles.uvTitle}>UV Index: 11+</Text>
      <Text style={styles.uvText}>
        Extreme risk. Avoid being outside during midday hours. Use full sun protection and stay indoors when possible.
      </Text>
    </View>
  </ScrollView>
</SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7DAAA5',
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
    paddingBottom: 40,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
    marginTop: 10, // Logo tam en üstte olsun diye
  },
 backButton: {
  position: 'absolute',
  top: 10,
  left: 10,
  zIndex: 1, // Logo'nun üstünde kalması için
},

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
    color: '#000',
    textAlign: 'center',
  },
  uvTitle: {
    fontWeight: '700',
    fontSize: 16,
    marginTop: 30, // Boşluk artırıldı
    color: '#004c3f',
  },
  uvText: {
    fontSize: 15,
    color: '#333',
    marginTop: 6,
    lineHeight: 22,
  },
});


