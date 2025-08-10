import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const commonAllergies: string[] = [
  'Pollen',
  'Dust mites',
  'Peanuts',
  'Shellfish',
  'Penicillin',
  'Bee stings',
  'Latex',
];

export default function SettingsScreen() {
  const [selectedAllergies, setSelectedAllergies] = useState<string[]>([]);
  const [customAllergy, setCustomAllergy] = useState<string>('');
  const [showAllergySection, setShowAllergySection] = useState<boolean>(false);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordSuccess, setPasswordSuccess] = useState('');

  const toggleAllergy = (allergy: string) => {
    if (selectedAllergies.includes(allergy)) {
      setSelectedAllergies(selectedAllergies.filter((a) => a !== allergy));
    } else {
      setSelectedAllergies([...selectedAllergies, allergy]);
    }
  };

  const addCustomAllergy = () => {
    if (customAllergy && !selectedAllergies.includes(customAllergy)) {
      setSelectedAllergies([...selectedAllergies, customAllergy]);
      setCustomAllergy('');
    }
  };

  const removeAllergy = (allergy: string) => {
    setSelectedAllergies(selectedAllergies.filter((a) => a !== allergy));
  };

  const handlePasswordChange = () => {
    setPasswordError('');
    setPasswordSuccess('');

    const lengthOk = newPassword.length >= 5;
    const hasUpper = /[A-Z]/.test(newPassword);
    const hasLower = /[a-z]/.test(newPassword);
    const hasDigit = /[0-9]/.test(newPassword);

    if (!oldPassword || !newPassword || !confirmPassword) {
      setPasswordError('Please fill in all fields.');
    } else if (newPassword !== confirmPassword) {
      setPasswordError('New passwords do not match.');
    } else if (oldPassword === newPassword) {
      setPasswordError('New password must be different from the old password.');
    } else if (!lengthOk || !hasUpper || !hasLower || !hasDigit) {
      setPasswordError('Password does not meet the required criteria.');
    } else {
      setPasswordSuccess('Password changed successfully.');
      setOldPassword('');
      setNewPassword('');
      setConfirmPassword('');
    }
  };

  const checkmark = (condition: boolean) => (condition ? '✅' : '❌');

  const lengthOk = newPassword.length >= 5;
  const hasUpper = /[A-Z]/.test(newPassword);
  const hasLower = /[a-z]/.test(newPassword);
  const hasDigit = /[0-9]/.test(newPassword);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>

      <Text style={styles.sectionTitle}>Change Username Information</Text>
      <Text style={styles.subTitle}>Change Password</Text>

      <TextInput
        style={styles.input}
        placeholder="old password"
        secureTextEntry
        placeholderTextColor="#555"
        value={oldPassword}
        onChangeText={setOldPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="new password"
        secureTextEntry
        placeholderTextColor="#555"
        value={newPassword}
        onChangeText={setNewPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="new password again"
        secureTextEntry
        placeholderTextColor="#555"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <View style={styles.rulesContainer}>
        <Text style={styles.ruleText}>{checkmark(lengthOk)} At least 5 characters</Text>
        <Text style={styles.ruleText}>{checkmark(hasUpper)} Contains uppercase letter</Text>
        <Text style={styles.ruleText}>{checkmark(hasLower)} Contains lowercase letter</Text>
        <Text style={styles.ruleText}>{checkmark(hasDigit)} Contains a number</Text>
      </View>

      {passwordError !== '' && (
        <Text style={styles.errorText}>{passwordError}</Text>
      )}
      {passwordSuccess !== '' && (
        <Text style={styles.successText}>{passwordSuccess}</Text>
      )}

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.smallButton} onPress={handlePasswordChange}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Add / Delete an Allergy</Text>

      <View style={styles.row}>
        <Text style={styles.allergyLabel}>Allergies</Text>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => setShowAllergySection(!showAllergySection)}
        >
          <Text>{showAllergySection ? '－' : '＋'}</Text>
        </TouchableOpacity>
      </View>

      {showAllergySection && (
        <>
          <Text style={styles.subTitle}>Select common allergies:</Text>
          {commonAllergies.map((allergy) => (
            <TouchableOpacity
              key={allergy}
              style={[
                styles.allergyItem,
                selectedAllergies.includes(allergy) && styles.selectedAllergy,
              ]}
              onPress={() => toggleAllergy(allergy)}
            >
              <Text style={styles.allergyText}>{allergy}</Text>
            </TouchableOpacity>
          ))}

          <Text style={styles.subTitle}>Add a custom allergy:</Text>
          <View style={styles.row}>
            <TextInput
              style={[styles.input, { flex: 1 }]}
              placeholder="Enter custom allergy"
              placeholderTextColor="#555"
              value={customAllergy}
              onChangeText={setCustomAllergy}
            />
            <TouchableOpacity style={styles.icon} onPress={addCustomAllergy}>
              <Text style={{ fontWeight: 'bold' }}>＋</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      <Text style={styles.subTitle}>Your selected allergies:</Text>
      <View style={styles.textBox}>
        {selectedAllergies.length === 0 ? (
          <Text style={{ padding: 10, color: '#555' }}>No allergies added.</Text>
        ) : (
          selectedAllergies.map((allergy, index) => (
            <View key={index} style={styles.selectedRow}>
              <Text style={{ flex: 1 }}>{allergy}</Text>
              <TouchableOpacity onPress={() => removeAllergy(allergy)}>
                <Text style={{ color: 'red', fontWeight: 'bold' }}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.smallButton}>
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7BA7A1',
    flexGrow: 1,
    padding: 20,
    paddingTop: 60,
  },
  header: {
    marginBottom: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  sectionTitle: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  subTitle: {
    color: 'black',
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  smallButton: {
    backgroundColor: '#4B8E89',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  allergyItem: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 6,
    marginVertical: 4,
  },
  selectedAllergy: {
    backgroundColor: '#A5C3BF',
  },
  allergyText: {
    color: '#333',
  },
  textBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  allergyLabel: {
    color: 'black',
    fontWeight: 'bold',
    flex: 1,
  },
  icon: {
    backgroundColor: '#A5C3BF',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 6,
    marginLeft: 10,
  },
  selectedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  errorText: {
    color: 'red',
    marginTop: 8,
    fontWeight: 'bold',
  },
  successText: {
    color: 'green',
    marginTop: 8,
    fontWeight: 'bold',
  },
  rulesContainer: {
    marginTop: 6,
    marginBottom: 8,
  },
  ruleText: {
    fontSize: 12,
    color: '#222',
    marginLeft: 4,
  },
});
