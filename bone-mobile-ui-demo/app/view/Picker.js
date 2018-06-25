import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { NavBar, Picker } from '@bone/bone-mobile-ui';

const getNumbers = (count) => {
  const result = [];
  for (const index = 0; index < count; ++index) {
    result.push({
      value: index,
      label: index.toString(),
    });
  }
  return result;
};

export default class extends Component {
  state = {
    value1: [15, 30],
    value2: [25],
  };

  render() {
    const { value1, value2 } = this.state;
    return (
      <View style={styles.body}>
        <NavBar style={styles.navBar} title="选择器" onLeftPress={() => Bone.navigation.pop()} />
        <Picker
          data={[getNumbers(24), getNumbers(60)]}
          value={value1}
          unit={['时', '分']}
          onChange={(...values) => this.setState({ value1: values })}
        />
        <View style={styles.navBar} />
        <Picker
          data={[getNumbers(60)]}
          value={value2}
          bodyHeight={80 * 5}
          lineHeight={80}
          labelStyle={{ fontSize: 36, color: '#333' }}
          frontLabelStyle={{ fontSize: 53, color: '#3a76d8' }}
          onChange={(...values) => this.setState({ value2: values })}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  navBar: {
    borderBottomWidth: 1,
    borderColor: '#ededed',
  },
  scrollBody: {
    flex: 1,
  },
});
