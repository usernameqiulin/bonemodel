import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Blank, Flex, NavBar } from '@bone/bone-mobile-ui';

export default () => (
  <View style={styles.body}>
    <NavBar style={styles.navBar} title="弹性布局" onLeftPress={() => Bone.navigation.pop()} />
    <ScrollView style={styles.body} automaticallyAdjustContentInsets={false}>
      <Blank size="lg" />
      <Flex style={styles.horizontal} direction="row">
        <Flex.Item style={styles.item}>
          <Text>A</Text>
        </Flex.Item>
        <Flex.Item style={styles.item}>
          <Text>B</Text>
        </Flex.Item>
        <Flex.Item style={styles.item}>
          <Text>C</Text>
        </Flex.Item>
      </Flex>
      <Blank size="lg" />
      <Flex style={styles.vertical}>
        <Flex.Item style={styles.item}>
          <Text>D</Text>
        </Flex.Item>
        <Flex.Item style={styles.item}>
          <Text>E</Text>
        </Flex.Item>
        <Flex.Item style={styles.item}>
          <Text>F</Text>
        </Flex.Item>
      </Flex>
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
  horizontal: {
    height: 50,
  },
  vertical: {
    height: 150,
  },
  item: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
