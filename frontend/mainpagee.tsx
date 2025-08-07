import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
      </View>

      {/* Hoş geldiniz mesajı */}
      <Text style={styles.welcomeText}>Welcome Back!</Text>

      {/* UV Index Kartı */}
      <IndexCard 
        title="UV Index" 
        image={require('../assets/uv-index.png')} 
        onRecommendationsPress={() => router.push('/uvindexrecommendations')}
        onDetailsPress={() => router.push('/uvindexdetails')}
      />

      {/* Air Quality Index Kartı */}
      <IndexCard 
        title="Air Quality Index" 
        image={require('../assets/air-quality.png')} 
        onRecommendationsPress={() => router.push('/airqualityrecommendations')}
        onDetailsPress={() => router.push('/airqualitydetails')}
      />

      {/* Pollen Index Kartı */}
      <IndexCard 
        title="Pollen Index" 
        image={require('../assets/pollen-index.png')} 
        onRecommendationsPress={() => router.push('/polenrecommendations')}
        onDetailsPress={() => router.push('/polendetails')}
      />

      {/* Günlük rapor butonu */}
      <TouchableOpacity
        style={styles.dailyReportButton}
        onPress={() => router.push('/dailyreports')}
      >
        <Text style={styles.dailyReportText}>See the daily report</Text>
      </TouchableOpacity>

      {/* Alt bar (profil simgesi) */}
      <View style={styles.bottomBar}>
        <Ionicons name="person-circle" size={36} color="white" />
      </View>
    </ScrollView>
  );
}


// IndexCard bileşeni güncellendi:
type IndexCardProps = {
  title: string;
  image: number;
  onRecommendationsPress: () => void;
  onDetailsPress: () => void;
};

function IndexCard({ title, image, onRecommendationsPress, onDetailsPress }: IndexCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Image
        source={image}
        style={styles.cardImage}
        resizeMode="contain"
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.subButton} onPress={onRecommendationsPress}>
          <Text style={styles.subButtonText}>Recommendations</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subButton} onPress={onDetailsPress}>
          <Text style={styles.subButtonText}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7DAAA5',
    paddingHorizontal: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 24,
  },
  logo: {
    width: 80,
    height: 80,
  },
  welcomeText: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    marginVertical: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#F2F2F2',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 12,
    fontWeight: '600',
    color: '#000',
  },
  cardImage: {
    width: '100%',
    height: 80,
    marginBottom: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subButton: {
    backgroundColor: '#E4F0EF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  subButtonText: {
    color: '#00796B',
    fontWeight: '500',
  },
  dailyReportButton: {
    backgroundColor: '#448f88',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  dailyReportText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
});
