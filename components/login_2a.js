import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text>
      
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="black"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={!showPassword}
        />
        
      </View>
      
       <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
       <Text style={styles.showPass}>Show Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFD700', // Golden yellow
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE55C', // Lighter yellow
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
  loginButton: {
    backgroundColor: 'black',
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 15,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold'
  },
  showPass: {
    fontWeight: 'bold'
  }
});

export default LoginScreen;