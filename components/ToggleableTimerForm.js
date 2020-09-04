import PropTypes from 'prop-types';
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

  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  handleFormSubmit = (timer) => {
    const { onFormSubmit } = this.props;

    onFormSubmit(timer);
    this.setState({ isOpen: false });
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
          <TimerForm
            onFormSubmit={this.handleFormSubmit}
            onFormClose={this.handleFormClose}
          />
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

ToggleableTimerForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
