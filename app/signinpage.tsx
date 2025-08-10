import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function SignUp() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleContinue = () => {
    if (!fullName || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill all the blanks.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match. ');
      return;
    }

    // Buraya kayıt işlemini yazabilirsin (API, Firebase, vs)
    Alert.alert('Successfull', 'Account created!');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Create Your Account</Text>

      <TextInput
        style={styles.input}
        placeholder="full name"
        value={fullName}
        onChangeText={setFullName}
        placeholderTextColor="#ccc"
      />
      <TextInput
        style={styles.input}
        placeholder="email@domain.com"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#ccc"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="password"
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#ccc"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="confirm password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholderTextColor="#ccc"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.loginText}>
        Already have an account?{' '}
        <Text style={styles.loginLink} onPress={() => router.push('/login')}>
          Login
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#79A7A8',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
  },
  button: {
    backgroundColor: '#41807B',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 12,
    color: '#eee',
  },
  loginLink: {
    color: '#E0728E',
    fontWeight: 'bold',
  },
});