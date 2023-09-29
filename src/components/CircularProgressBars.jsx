import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

// Styles for your Circular Progress Bars
const styles = {
  carSpecs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  specs: {
    alignItems: 'center',
  },
  specsCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  specsValue: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  fixText: {
    fontSize: 14,
  },
  specsName: {
    marginTop: 10,
    textAlign: 'center',
  },
};

const CircularProgressBar = ({ value, max }) => {
  // Calculate the percentage of progress
  const progress = (value / max) * 100;

  // Calculate the circumference of the circle
  const circumference = 2 * Math.PI * 50; // 50 is the radius

  // Calculate the dash offset based on the progress
  const dashOffset = ((100 - progress) / 100) * circumference;

  return (
    <Svg height="100" width="100">
      <Circle
        cx="50"
        cy="50"
        r="50"
        stroke="blue" // Change this to the color you want for the progress bar
        strokeWidth="5"
        fill="transparent"
        strokeDasharray={circumference}
        strokeDashoffset={dashOffset}
      />
    </Svg>
  );
};

const CircularProgressBars = () => {
  return (
    <View style={[styles.carSpecs, { justifyContent: 'space-around' }]}>
      <View style={styles.specs}>
        <View style={styles.specsCircle}>
          <CircularProgressBar value={3993} max={5000} />
          <Text style={styles.specsValue}>3993</Text>
          <Text style={styles.fixText}>cc</Text>
        </View>
        <Text style={styles.specsName}>Engine Power</Text>
      </View>
      <View style={styles.specs}>
        <View style={styles.specsCircle}>
          <CircularProgressBar value={520} max={1000} />
          <Text style={styles.specsValue}>520</Text>
          <Text style={styles.fixText}>Nm</Text>
        </View>
        <Text style={styles.specsName}>Peak Torque</Text>
      </View>
      <View style={styles.specs}>
        <View style={styles.specsCircle}>
          <CircularProgressBar value={8250} max={9000} />
          <Text style={styles.specsValue}>8250</Text>
          <Text style={styles.fixText}>RPM</Text>
        </View>
        <Text style={styles.specsName}>Peak Power</Text>
      </View>
    </View>
  );
};

export default CircularProgressBars;
