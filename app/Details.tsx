import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const backgroundColor = '#7DAAA5';
const boxBackground = '#448F88';
const textColor = '#000';

const days = [
  { title: 'MONDAY', bullets: [ 'Humidity is expected to start high in the morning (around 80%) and gradually decrease by midday.', 'The day may feel muggy, especially during early hours.', 'Indoor ventilation might be necessary.', ]},
  { title: 'TUESDAY', bullets: [ 'A drier air mass may move in, keeping humidity levels moderate (55–65%).', 'Outdoor activities should feel more comfortable.', 'Low chance of moisture buildup indoors.', ]},
  { title: 'WEDNESDAY', bullets: [ 'Humidity will likely rise again in the afternoon due to warmer temperatures.', 'Evening might feel sticky and slightly uncomfortable.', 'Consider using a dehumidifier if indoors for long periods.', ]},
  { title: 'THURSDAY', bullets: [ 'Forecast suggest high humidity throughout the day, peaking at around 85%.', 'This can make feel muggy and oppressive.', 'Increased risk of mold or dampness in poorly ventilated areas.', ]},
  { title: 'FRIDAY', bullets: [ 'Possible thunderstorms or rain may push humidity above 90%.', 'Expect condensation on windows and humid indoor conditions.', 'Sensitive individuals may feel more tired or sluggish.', ]},
  { title: 'SATURDAY', bullets: [ 'A shift in wind patterns could bring drier conditions.', 'Humidity might drop into more comfortable levels (around 60%).', 'A good opportunity to air out rooms and dry laundry.', ]},
  { title: 'SUNDAY', bullets: [ 'Humidity is expected to remain stable and moderate.', 'No major discomfort is expected.', 'Ideal day for outdoor plans or exercise.', ]},
];

export default function HumidityScreen() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, backgroundColor }} contentContainerStyle={{ padding: 16 }}>
      
      {/* Geri Oku */}
      <TouchableOpacity onPress={() => router.back()} style={{ marginBottom: 10 }}>
        <Ionicons name="arrow-back" size={28} color={textColor} />
      </TouchableOpacity>

      {/* Logo */}
      <View style={{ alignItems: 'center', marginBottom: 12 }}>
        <Image
          source={require('../assets/logo.png')} // logo yolunu buraya göre ayarla
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
        />
      </View>

      {/* Başlık */}
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Text style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: textColor,
          backgroundColor: boxBackground,
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 0,
        }}>
          Weekly Humidity Analysis
        </Text>
      </View>

      {/* Günlük Kutu Yapısı */}
      {days.map((day, index) => (
        <View key={index} style={{ marginBottom: 16 }}>
          {/* Gün Başlığı Kutusu */}
          <View style={{
            backgroundColor: boxBackground,
            paddingVertical: 6,
            paddingHorizontal: 10,
            borderRadius: 0,
          }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 18,
              color: textColor,
            }}>
              {day.title}
            </Text>
          </View>

          {/* Açıklama Kutusu */}
          <View style={{
            backgroundColor: boxBackground,
            padding: 10,
            borderTopWidth: 1,
            borderTopColor: '#00000044',
            borderRadius: 0,
          }}>
            {day.bullets.map((bullet, idx) => (
              <Text key={idx} style={{ color: textColor, marginBottom: 4 }}>
                • {bullet}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}