import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    ActivityIndicator,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function SignInScreen() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.replace("/mainpagee");
    }, 1000);
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.logoText}>AlerSense</Text>
      </View>

      {/* Başlık */}
      <Text style={styles.title}>Log in to your Account</Text>

      {/* Email */}
      <TextInput
        style={styles.input}
        placeholder="email@domain.com"
        placeholderTextColor="#555"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      {/* Password */}
      <TextInput
        style={styles.input}
        placeholder="password"
        placeholderTextColor="#555"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Giriş butonu */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={handleSignIn}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.continueText}>Sign in</Text>
        )}
      </TouchableOpacity>

      {/* Kayıt ol linki */}
      <View style={styles.loginRow}>
        <Text style={{ color: "white" }}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/create_account")}>
          <Text style={{ color: "#ff4081" }}>Sign up</Text>
        </TouchableOpacity>
      </View>

      {/* Yasal metin */}
      <Text style={styles.legal}>
        By clicking continue, you agree to our{" "}
        <Text style={styles.legalLink}>Terms of Service</Text> and{" "}
        <Text style={styles.legalLink}>Privacy Policy</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7DAAA5",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingBottom: 40,
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
  legal: {
    fontSize: 12,
    color: "white",
    textAlign: "center",
    marginTop: 20,
  },
  legalLink: {
    color: "#ff4081",
    textDecorationLine: "underline",
  },
});
