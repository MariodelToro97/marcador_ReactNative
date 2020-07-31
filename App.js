/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import CustomButton from './components/button';
import ActionButtons from './components/actionButtons';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };

    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
  }

/*   shouldComponentUpdate(nextProps, nextState) {
    const {counter} = this.state;
    if (nextState.counter === counter) return false;
      
    return true;
  } */

  handleUp() {
    const { counter: ct } = this.state;
    this.setState({ counter: ct + 1 });
  }

  handleDown() {
    const { counter: ct } = this.state;
    this.setState({ counter: ct - 1 });
  }

  handleReset() {
    this.setState({ counter: 0 });
  }

  handlePlus() {
    const { counter: ct } = this.state;
    this.setState({ counter: ct + 10 });
  }

  render() {
    const { counter } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.subcontainer}>
          <CustomButton label="-" action={this.handleDown} />

          <View style={styles.counterContainer}>
            <Text style={styles.counter}>{counter}</Text>
          </View>

          <CustomButton label="+" action={this.handleUp} />
        </View>

        <View style={styles.subcontainerReset}>
          <ActionButtons reset={this.handleReset} plus={this.handlePlus} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
  },

  subcontainer: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },

  subcontainerReset: {
    height: 50,
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  counterContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  counter: {
    fontSize: 45,
    color: '#ecf0f1',
    fontWeight: 'bold'
  },

  btnText: {
    fontSize: 18,
    color: '#7f8c8d',
    fontWeight: 'bold'
  },

  btnReset: {
    height: 50,
    width: '80%',
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
