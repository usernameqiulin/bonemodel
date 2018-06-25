import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Header, NavBar } from '@bone/bone-mobile-ui';

export default class extends Component {
  render() {
    return (
      <View style={styles.body}>
        <NavBar style={styles.navBar} title="区块标题" onLeftPress={() => Bone.navigation.pop()} />
        <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>
          <Header title="标题" />
          <Header
            style={{ backgroundColor: '#3a76d8' }}
            title="自定义标题样式"
            titleStyle={{ color: '#fff' }}
          />
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
});
