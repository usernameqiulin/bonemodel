import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Header, List, NavBar, Toast } from '@bone/bone-mobile-ui';

export default class extends Component {
  componentDidMount() {
    this.openInfo();
  }

  componentWillUnmount() {
    this.close();
  }

  openInfo() {
    this.toast = Toast.info({ title: 'Hello World!' });
  }

  openLoading() {
    this.toast = Toast.loading({ title: '加载中' });
  }

  close() {
    this.toast.close();
  }

  render() {
    return (
      <View style={styles.body}>
        <NavBar style={styles.navBar} title="轻提示" onLeftPress={() => Bone.navigation.pop()} />
        <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>
          <Header title="轻提示" />
          <List>
            <List.Item
              title="打开 Info 提示"
              extra="Toast.info"
              extraStyle={{ color: '#f00', fontWeight: 'bold' }}
              arrow="right"
              onPress={() => this.openInfo()}
            />
            <List.Item
              title="打开 Loading 提示"
              extra="Toast.loading"
              extraStyle={{ color: '#f00', fontWeight: 'bold' }}
              arrow="right"
              onPress={() => this.openLoading()}
            />
          </List>
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
