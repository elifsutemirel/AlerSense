import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function App() {
  const [location, setLocation] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [allergy, setAllergy] = useState<string>("");
  const [condition, setCondition] = useState<string>("");

  return (
    <ScrollView
      contentContainerStyle={styles.container} // ✅ Burada prop doğru
    >
      {/* Logo */}
      <View style={styles.logoContainer}>
  <Image
    source={require("../assets/logo.png")}
    style={styles.logo}
    resizeMode="contain"
  />
  <Text style={styles.logoText}>AlerSense</Text>
</View>


      {/* Location */}
      <TextInput
        style={styles.input}
        placeholder="location"
        placeholderTextColor="#888"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />

      {/* Age */}
      <TextInput
        style={styles.input}
        placeholder="age"
        placeholderTextColor="#888"
        value={age}
        onChangeText={(text) => setAge(text)}
        keyboardType="numeric"
      />

      {/* Allergy Picker */}
      <Text style={styles.label}>I am allergic to ...</Text>
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={allergy}
          onValueChange={(value) => setAllergy(value)}
        >
          <Picker.Item label="Pick an option" value="" />
          <Picker.Item label="Pollen" value="pollen" />
          <Picker.Item label="Dust" value="dust" />
          <Picker.Item label="Peanuts" value="peanuts" />
        </Picker>
      </View>

      {/* Condition Picker */}
      <Text style={styles.label}>I have...</Text>
      <View style={styles.pickerWrapper}>
       <Picker
  selectedValue={allergy}
  onValueChange={(value) => setAllergy(value)}
  style={{ color: "black" }} // iOS/Android yazı rengi
>
  <Picker.Item label="Pick an option" value="" />
  <Picker.Item label="Pollen" value="pollen" />
  <Picker.Item label="Dust" value="dust" />
  <Picker.Item label="Peanuts" value="peanuts" />
</Picker>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#7daaa5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logoContainer: {
  alignItems: "center",
  marginBottom: 20,
},

logoText: {
  fontSize: 18,
  fontWeight: "bold",
  color: "white",
  marginTop: 8,
},

  logo: {
  width: 100,
  height: 100,
},
  input: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },
  label: {
    alignSelf: "flex-start",
    color: "white",
    fontSize: 14,
    marginTop: 8,
    marginBottom: 4,
  },
  pickerWrapper: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 12,
  },
});
