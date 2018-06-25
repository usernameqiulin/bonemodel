import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { ActionSheet, Header, List, NavBar, Toast } from '@bone/bone-mobile-ui';

export default class extends Component {
  componentDidMount() {
    this.open();
  }

  componentWillUnmount() {
    this.close();
  }

  open() {
    this.actionSheet = ActionSheet.open({
      title: '确认删除场景？设备任务无法正常运行',
      options: [
        { text: 'Hello World!' },
        { text: '删除 - Promise', style: { color: '#ff3838' } },
        { text: '调试 - Promise', style: { color: '#1fc88b' } },
      ],
      onPress: (index) => {
        switch (index) {
          case 0:
            return;
          case 1:
            return new Promise((resolve) => {
              this.toast = Toast.info({
                title: '删除中...',
                onClose: resolve,
              });
            });
          case 2:
            return new Promise((resolve, reject) => {
              this.toast = Toast.info({
                title: '调试中...',
                onClose: () => {
                  this.toast = Toast.info({ title: '调试失败！' });
                  reject();
                },
              });
            });
          default:
            return;
        }
      },
      closeable: true,
      cancelText: '取消',
    });
  }

  close() {
    this.actionSheet.close();
    this.toast && this.toast.close();
  }

  render() {
    return (
      <View style={styles.body}>
        <NavBar style={styles.navBar} title="选择列表" onLeftPress={() => Bone.navigation.pop()} />
        <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>
          <Header title="选择列表" />
          <List>
            <List.Item
              title="打开选择列表"
              arrow="right"
              onPress={() => this.open()}
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
