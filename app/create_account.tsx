import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function RegisterScreen() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("red");

  // Şifre kriter kontrolü
  const lengthOk = password.length >= 5;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasDigit = /[0-9]/.test(password);

  const checkmark = (condition: boolean) => (condition ? "✅" : "❌");

  const handleContinue = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      setMessageColor("red");
      setMessage("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setMessageColor("red");
      setMessage("Passwords do not match");
      return;
    }
    if (!lengthOk || !hasUpper || !hasLower || !hasDigit) {
      setMessageColor("red");
      setMessage("Password does not meet the required criteria");
      return;
    }

    // Başarılı mesaj
    setMessageColor("green");
    setMessage("✅ Account created successfully!");

    console.log({
      fullName,
      email,
      password,
    });

    setTimeout(() => {
      router.push("/mainpagee");
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
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

        {/* Title */}
        <Text style={styles.title}>Create Your Account</Text>

        <TextInput
          style={styles.input}
          placeholder="full name"
          placeholderTextColor="#555"
          value={fullName}
          onChangeText={setFullName}
        />

        <TextInput
          style={styles.input}
          placeholder="email@domain.com"
          placeholderTextColor="#555"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor="#555"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="confirm password"
          placeholderTextColor="#555"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        {/* Şifre kriterleri */}
        <View style={styles.rulesContainer}>
          <Text style={styles.ruleText}>{checkmark(lengthOk)} At least 5 characters</Text>
          <Text style={styles.ruleText}>{checkmark(hasUpper)} Contains uppercase letter</Text>
          <Text style={styles.ruleText}>{checkmark(hasLower)} Contains lowercase letter</Text>
          <Text style={styles.ruleText}>{checkmark(hasDigit)} Contains a number</Text>
        </View>

        {/* Hata / Başarı mesajı */}
        {message ? (
          <Text style={{ color: messageColor, textAlign: "center", marginBottom: 10 }}>
            {message}
          </Text>
        ) : null}

        {/* Continue button */}
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>

        {/* Login link */}
        <View style={styles.loginRow}>
          <Text style={{ color: "white" }}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/sign_in")}>
            <Text style={{ color: "#ff4081" }}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom profile icon */}
      <View style={styles.bottomBar}>
        <Ionicons name="person-circle" size={50} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7DAAA5",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginTop: 8,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    color: "#000",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  continueButton: {
    backgroundColor: "#448f88",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  continueText: {
    color: "white",
    fontWeight: "bold",
  },
  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 14,
  },
  bottomBar: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  rulesContainer: {
    marginTop: 6,
    marginBottom: 8,
  },
  ruleText: {
    fontSize: 12,
    color: "#222",
    marginLeft: 4,
  },
});
