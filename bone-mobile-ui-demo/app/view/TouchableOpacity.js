import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Blank, Block, NavBar, TouchableOpacity } from '@bone/bone-mobile-ui';

export default class extends Component {
  render() {
    return (
      <View style={styles.body}>
        <NavBar style={styles.navBar} title="触摸反馈，透明" onLeftPress={() => Bone.navigation.pop()} />
        <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>
          <Blank size="lg" />
          <Block size="lg">
            <TouchableOpacity style={styles.touch}>
              <Text style={styles.text}>启用</Text>
            </TouchableOpacity>
          </Block>
          <Blank size="lg" />
          <Block size="lg">
            <TouchableOpacity style={styles.touch} disabled>
              <Text style={styles.text}>禁用</Text>
            </TouchableOpacity>
          </Block>
        </ScrollView>
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
  touch: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#fc9b12',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
