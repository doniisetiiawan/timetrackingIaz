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

class ToggleableTimerForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  render() {
    const { isOpen } = this.state;

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
          <TimerButton
            title="+"
            color="black"
            onPress={this.handleFormOpen}
          />
        )}
      </View>
    );
  }
}

export default ToggleableTimerForm;
