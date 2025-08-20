import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function CreateAccountContinue() {
  const router = useRouter();

  const [location, setLocation] = useState("");
  const [age, setAge] = useState("");

  // Allergy dropdown
  const [allergyOpen, setAllergyOpen] = useState(false);
  const [allergyValue, setAllergyValue] = useState([]);
  const [allergyItems, setAllergyItems] = useState([
    { label: "Pollen", value: "pollen" },
    { label: "Dust", value: "dust" },
    { label: "Peanuts", value: "peanuts" },
    { label: "Milk", value: "milk" },
    { label: "Eggs", value: "eggs" },
    { label: "Fish", value: "fish" },
    { label: "Shellfish", value: "shellfish" },
    { label: "Soy", value: "soy" },
    { label: "Wheat", value: "wheat" },
    { label: "Mold", value: "mold" },
  ]);

  // Condition dropdown
  const [conditionOpen, setConditionOpen] = useState(false);
  const [conditionValue, setConditionValue] = useState([]);
  const [conditionItems, setConditionItems] = useState([
    { label: "Asthma", value: "asthma" },
    { label: "Sinusitis", value: "sinusitis" },
    { label: "Eczema", value: "eczema" },
    { label: "Hay Fever", value: "hay_fever" },
    { label: "Bronchitis", value: "bronchitis" },
    { label: "Rhinitis", value: "rhinitis" },
    { label: "Conjunctivitis", value: "conjunctivitis" },
    { label: "Food Allergy", value: "food_allergy" },
    { label: "Dust Allergy", value: "dust_allergy" },
    { label: "Skin Rash", value: "skin_rash" },
  ]);

  const handleContinue = () => {
    const numericAge = parseInt(age, 10);

    if (isNaN(numericAge) || numericAge < 1 || numericAge > 120) {
      Alert.alert("Invalid Age", "Please enter a valid age between 1 and 120.");
      return;
    }

    router.push("/mainpagee");
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
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
        placeholder="Location"
        placeholderTextColor="#888"
        value={location}
        onChangeText={setLocation}
      />

      {/* Age */}
      <TextInput
        style={styles.input}
        placeholder="Age"
        placeholderTextColor="#888"
        value={age}
        onChangeText={(text) => setAge(text.replace(/[^0-9]/g, ""))} // sadece rakam
        keyboardType="numeric"
        maxLength={3} // 3 haneli sınırlama
      />

      {/* Allergy dropdown */}
      <View style={{ zIndex: 3000, width: "100%", marginBottom: 12 }}>
        <Text style={styles.label}>I am allergic to ...</Text>
        <DropDownPicker
          open={allergyOpen}
          value={allergyValue}
          items={allergyItems}
          setOpen={setAllergyOpen}
          setValue={setAllergyValue}
          setItems={setAllergyItems}
          placeholder="Pick options"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          multiple={true}
          mode="BADGE"
        />
      </View>

      {/* Condition dropdown */}
      <View style={{ zIndex: 2000, width: "100%", marginBottom: 12 }}>
        <Text style={styles.label}>I have...</Text>
        <DropDownPicker
          open={conditionOpen}
          value={conditionValue}
          items={conditionItems}
          setOpen={setConditionOpen}
          setValue={setConditionValue}
          setItems={setConditionItems}
          placeholder="Pick options"
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          multiple={true}
          mode="BADGE"
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7daaa5",
    padding: 20,
    justifyContent: "center",
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
    color: "white",
    fontSize: 14,
    marginBottom: 4,
  },
  dropdown: {
    width: "100%",
    borderColor: "#ccc",
    borderRadius: 8,
  },
  dropdownContainer: {
    borderColor: "#ccc",
  },
  continueButton: {
    width: "100%",
    backgroundColor: "#448f88",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  continueButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
