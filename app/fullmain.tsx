import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WeatherQualityScreen() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Sadece Ok İkonu */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <Text style={styles.backArrow}>←</Text>
      </TouchableOpacity>

      {/* Logo */}
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      {/* Başlık */}
      <Text style={styles.title}>Weather Quality</Text>

      {/* Sıcaklık kutusu */}
      <TouchableOpacity
        style={styles.tempBox}
        onPress={() => router.push('/temperature')}
      >
        <View style={styles.tempBoxContent}>
          <Text style={styles.tempText}>🌡                      Temperature</Text>
          <Text style={styles.tempArrow}>▶</Text>
        </View>
      </TouchableOpacity>

      {/* Büyük sıcaklık dairesi */}
      <View style={styles.tempCircle}>
        <Text style={styles.tempValue}>36°</Text>
      </View>

      {/* Hava durumu açıklaması */}
      <View style={styles.conditionRow}>
        <Text style={styles.conditionLabel}>Expected Weather Condition:</Text>
        <Text style={styles.conditionIcon}>⛅</Text>
      </View>

      {/* Bilgi kutuları */}
      {[
        { icon: '       🌞', label: '                     UV Index', value: '8' },
        { icon: '       🌼', label: '                     Pollen', value: '8.1 / 12' },
        { icon: '       🌫️', label: '                     Fog', value: 'Light' },
        { icon: '       💧', label: '                      Humidity', value: '%72' },
        { icon: '       🏭', label: '                     Air Pollution', value: '65' },
      ].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.infoRow}
          onPress={() => {
            if (item.label.includes('Humidity')) {
              router.push('/Humidity');
            }
          }}
        >
          <Text style={styles.infoIcon}>{item.icon}</Text>
          <Text style={styles.infoLabel}>{item.label}</Text>
          <Text style={styles.infoValue}>{item.value}</Text>
          <Text style={styles.infoArrow}>▶</Text>
        </TouchableOpacity>
      ))}

      {/* Alt ikon */}
      <View style={styles.bottomIcon}>
        <Text style={{ fontSize: 24, color: 'white' }}>👤</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7AA7A0',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 14,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 10,
    padding: 8,
  },
  backArrow: {
    fontSize: 24,
    color: 'black',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 12,
  },
  tempBox: {
    backgroundColor: '#5C978D',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginBottom: 16,
    width: '80%',
    alignItems: 'center',
  },
  tempBoxContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  tempText: {
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
  },
  tempArrow: {
    color: 'black',
    fontSize: 16,
    marginLeft: 10,
  },
  tempCircle: {
    width: 130,
    height: 130,
    backgroundColor: '#BFD3CE',
    borderRadius: 65,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tempValue: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  conditionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  conditionLabel: {
    fontSize: 15,
    color: 'black',
    marginRight: 8,
    textAlign: 'center',
  },
  conditionIcon: {
    fontSize: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5C978D',
    paddingVertical: 14,
    paddingHorizontal: 12,
    marginVertical: 6,
    width: '100%',
    borderRadius: 8,
  },
  infoIcon: {
    fontSize: 20,
    color: 'black',
    marginRight: 10,
  },
  infoLabel: {
    flex: 1,
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
  },
  infoValue: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10,
  },
  infoArrow: {
    color: 'black',
    fontSize: 18,
    marginLeft: 10,
  },
  bottomIcon: {
    backgroundColor: '#5C8374',
    borderRadius: 25,
    padding: 10,
    marginTop: 30,
  },
});
