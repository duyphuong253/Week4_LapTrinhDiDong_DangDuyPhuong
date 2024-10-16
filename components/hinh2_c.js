import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, CheckBox, TouchableOpacity } from 'react-native';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState('');
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,./<>?';

    let characters = '';
    if (includeLowerCase) characters += lowerCase;
    if (includeUpperCase) characters += upperCase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let password = '';
    for (let i = 0; i < parseInt(passwordLength); i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    setGeneratedPassword(password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PASSWORD<br/> GENERATOR</Text>
      
      <View style={styles.passwordContainer}>
        <Text style={styles.generatedPassword}>{generatedPassword || ".."}</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.setText}>Password length</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={passwordLength}
          onChangeText={setPasswordLength}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.setText}>Include lower case letters</Text>
        <CheckBox style={styles.setCheck}
          value={includeLowerCase}
          onValueChange={setIncludeLowerCase}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.setText}>Include upper case letters</Text>
         <CheckBox style={styles.setCheck}
          value={includeUpperCase}
          onValueChange={setIncludeUpperCase}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.setText}>Include numbers</Text>
         <CheckBox style={styles.setCheck1}
          value={includeNumbers}
          onValueChange={setIncludeNumbers}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.setText}>Include special symbols</Text>
        <CheckBox style={styles.setCheck2}
          value={includeSymbols}
          onValueChange={setIncludeSymbols}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>GENERATE PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2C2F5C',
    justifyContent: 'center',
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  passwordContainer: {
    backgroundColor: '#1C1D3C',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  generatedPassword: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    width: '100%',
    marginTop: 5,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#5C6BC0',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  setText: {
    color:'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  setCheck:{
    left: 40,
  },
  setCheck1:{
    left: 107,
  },
  setCheck2:{
    left: 55,
  },
});

export default PasswordGenerator;



