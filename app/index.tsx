import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to BioBeat!</Text>
      <Text style={styles.subText}>Your personal health monitoring system</Text>
      
      <Link href="/monitor" style={styles.button}>
        <Text style={styles.buttonText}>Go to Monitoring</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  text: {
    fontSize: 28,
    color: '#007AFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
