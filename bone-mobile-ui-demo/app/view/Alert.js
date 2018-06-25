import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Alert, Header, List, NavBar, Toast } from '@bone/bone-mobile-ui';

export default class extends Component {
  componentDidMount() {
    this.openNormalAlert();
  }

  componentWillUnmount() {
    this.close();
  }

  openNormalAlert() {
    this.alert = Alert.open({
      title: 'Demo',
      message: 'Hello World!',
      actions: [
        { text: '取消' },
        { text: '确定', style: { color: '#f4333c' } },
      ],
    });
  }

  openStyleAlert() {
    this.alert = Alert.open({
      title: 'Demo',
      titleStyle: { color: '#f4333c' },
      message: 'Hello World!',
      messageStyle: { color: '#108ee9' },
      actions: [
        { text: '取消' },
        { text: '确定', style: { color: '#f4333c' } },
      ],
    });
  }

  openMultiAlert() {
    this.alert = Alert.open({
      title: '多个按钮',
      message: '按钮数量超过2个',
      actions: [
        { text: '取消' },
        { text: '确定', style: { color: '#f4333c' } },
        { text: '保存', style: { color: '#108ee9' } },
      ],
    });
  }

  openInputAlert() {
    this.alert = Alert.open({
      title: '内容是 Input',
      message: 'Input 组件待补充，可以嵌入 TextInput',
      actions: [
        { text: '取消' },
        { text: '确定', style: { color: '#f4333c' } },
      ],
    });
  }

  openPromiseAlert() {
    this.alert = Alert.open({
      title: 'Promise',
      message: '按钮 onPress 返回 Promise 对象',
      actions: [
        {
          text: '取消',
          onPress: () => (
            new Promise((resolve) => {
              this.toast = Toast.info({
                title: '取消中...',
                onClose: resolve,
              });
            })
          ),
        },
        {
          text: '确定',
          style: { color: '#f4333c' },
          onPress: () => (
            new Promise((resolve, reject) => {
              this.toast = Toast.info({
                title: '确定中...',
                onClose: () => {
                  this.toast = Toast.info({ title: '确定失败!' });
                  reject();
                },
              });
            })
          ),
        },
      ],
    });
  }

  close() {
    this.alert.close();
    this.toast && this.toast.close();
  }

  render() {
    return (
      <View style={styles.body}>
        <NavBar style={styles.navBar} title="对话框" onLeftPress={() => Bone.navigation.pop()} />
        <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>
          <Header title="对话框" />
          <List>
            <List.Item
              title="打开对话框"
              arrow="right"
              onPress={() => this.openNormalAlert()}
            />
            <List.Item
              title="主副标题样式定制"
              arrow="right"
              onPress={() => this.openStyleAlert()}
            />
            <List.Item
              title="多个按钮"
              arrow="right"
              onPress={() => this.openMultiAlert()}
            />
            <List.Item
              title="内容是 TextInput"
              arrow="right"
              onPress={() => this.openInputAlert()}
            />
            <List.Item
              title="Promise"
              subtitle="按钮 onPress 返回 Promise 对象"
              arrow="right"
              onPress={() => this.openPromiseAlert()}
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
