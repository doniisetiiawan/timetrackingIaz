import React from 'react';
import { StyleSheet, View } from 'react-native';
import TimerForm from './TimerForm';
import TimerButton from './TimerButton';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
});

function ToggleableTimerForm({ isOpen }) {
  return (
    <View
      style={[
        styles.container,
        !isOpen && styles.buttonPadding,
      ]}
    >
      {isOpen ? (
        <TimerForm />
      ) : (
        <TimerButton title="+" color="black" />
      )}
    </View>
  );
}

export default ToggleableTimerForm;
