import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const backgroundColor = '#7DAAA5';
const cardBackground = '#F2F2F2';
const textColor = '#000';

const screenWidth = Dimensions.get('window').width;

const recommendations = [
  [
    'High pollen count today. Consider wearing a mask when outside.',
    'Limit outdoor activities during 8:00–10:00. Keep windows closed to prevent pollens from entering your home.',
  ],
  [
    'Humidity is above 70%. Stay hydrated and avoid heavy fabrics.',
    'High humidity may cause discomfort, avoid intense outdoor activities.',
  ],
  [
    'It’s a sunny day! You should apply sunscreen minimum in 50 spf.',
    'Protect your skin and eyes. Seek shade during midday hours to reduce UV exposure.',
  ],
  [
    'Thick fog expected! Drive carefully and use low beam headlights.',
    'Fog can make surfaces slippery! Watch your step when walking outside. Reduced oxygen levels may affect your asthma.',
  ],
];

export default function DailyReportScreen() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, backgroundColor }} contentContainerStyle={{ padding: 16 }}>
      
      {/* Geri oku ve logo */}
      <View style={{ position: 'relative', height: 80, marginBottom: 16 }}>
        {/* Geri oku - sol üst */}
        <TouchableOpacity onPress={() => router.back()} style={{ position: 'absolute', left: 0, top: 0 }}>
          <Ionicons name="arrow-back" size={28} color={textColor} />
        </TouchableOpacity>

        {/* Logo - ortada */}
        <View style={{ alignItems: 'center', justifyContent: 'center', height: '100%' }}>
          <Image
            source={require('../assets/logo.png')} // logo dosya yolu
            style={{ width: 80, height: 80, resizeMode: 'contain' }}
          />
        </View>
      </View>

      {/* Başlık */}
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#3B7D74',
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}>
          Daily Report
        </Text>
      </View>

      {/* Tavsiyeler */}
      {recommendations.map((lines, index) => (
        <View
          key={index}
          style={{
            backgroundColor: cardBackground,
            padding: 12,
            marginBottom: 16,
            borderRadius: 10,
          }}
        >
          {lines.map((line, idx) => (
            <Text key={idx} style={{ color: textColor, marginBottom: 4 }}>
              • {line}
            </Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}
