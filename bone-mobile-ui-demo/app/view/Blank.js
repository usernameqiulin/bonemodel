import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Blank, NavBar } from '@bone/bone-mobile-ui';

const Content = () => (
  <View style={styles.container}>
    <Text style={styles.content}>Block</Text>
  </View>
);

export default () => (
  <View style={styles.body}>
    <NavBar style={styles.navBar} title="上下留白" onLeftPress={() => Bone.navigation.pop()} />
    <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>
      <Blank size="lg" />
      <Content />
      <Blank size="md" />
      <Content />
      <Blank size="md" />
      <Content />
      <Blank size="lg" />
      <Content />
      <Blank size="lg" />
      <Content />
      <Blank size="lg" />
      <Content />
    </ScrollView>
  </View>
);

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
  container: {
    height: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    fontSize: 14,
    color: '#bbb',
  },
});
