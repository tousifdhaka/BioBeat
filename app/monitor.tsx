import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';

export default function Monitor() {
  // Mock states for real-time data
  const [hrm, setHrm] = useState(76);
  const [spo2, setSpo2] = useState(98);

  // Simulating live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setHrm(60 + Math.floor(Math.random() * 40)); // Random HRM value between 60-100
      setSpo2(95 + Math.floor(Math.random() * 5)); // Random SPO2 value between 95-100
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="bluetooth" size={24} color="white" />
        </TouchableOpacity>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <TouchableOpacity>
          <Ionicons name="information-circle" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* PPG Graph */}
      <View style={styles.ppgContainer}>
        <Text style={styles.ppgText}>PPG</Text>
        <Svg height="100" width="300">
          <Path
            d="M0 50 Q 25 20, 50 50 T 100 50 T 150 50 T 200 50 T 250 50 T 300 50"
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        </Svg>
      </View>

      {/* HRM and SPO2 */}
      <View style={styles.dataContainer}>
        <View style={styles.dataCard}>
          <Text style={styles.dataTitle}>Heart Rate</Text>
          <Text style={styles.dataValue}>{hrm} <Text style={styles.unit}>BPM</Text></Text>
        </View>
        <View style={styles.dataCard}>
          <Text style={styles.dataTitle}>SpO₂</Text>
          <Text style={styles.dataValue}>{spo2} <Text style={styles.unit}>%</Text></Text>
        </View>
      </View>

      {/* Statistics */}
      <View style={styles.statsContainer}>
        <View style={styles.statsColumn}>
          <Text style={styles.statsTitle}>Average</Text>
          <Text style={styles.statsValue}>{hrm} BPM</Text>
          <Text style={styles.statsValue}>{spo2}%</Text>
        </View>
        <View style={styles.statsColumn}>
          <Text style={styles.statsTitle}>Minimum</Text>
          <Text style={styles.statsValue}>64 BPM</Text>
          <Text style={styles.statsValue}>96%</Text>
        </View>
        <View style={styles.statsColumn}>
          <Text style={styles.statsTitle}>Maximum</Text>
          <Text style={styles.statsValue}>98 BPM</Text>
          <Text style={styles.statsValue}>100%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  ppgContainer: {
    backgroundColor: '#444',
    padding: 100,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  ppgText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  dataCard: {
    flex: 1,
    backgroundColor: '#444',
    padding: 30,
    marginHorizontal: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  dataTitle: {
    color: '#999',
    fontSize: 16,
  },
  dataValue: {
    color: '#fff',
    fontSize: 36,
    fontWeight: 'bold',
  },
  unit: {
    fontSize: 18,
    color: '#999',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  statsColumn: {
    alignItems: 'center',
  },
  statsTitle: {
    color: '#999',
    fontSize: 14,
    marginBottom: 5,
  },
  statsValue: {
    color: '#fff',
    fontSize: 18,
  },
});
