import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { Header, List, Modal, NavBar, TouchableOpacity } from '@bone/bone-mobile-ui';

const ModalContent = ({ style, title, onPress }) => (
  <View style={[styles.modal, style]}>
    <View style={styles.modalHeader}>
      <Text style={styles.modalHeaderText}>{title}</Text>
      <TouchableOpacity style={styles.modalHeaderTouch} onPress={onPress}>
        <Image style={styles.modalHeaderImage} source={{ uri: 'https://img.alicdn.com/tfs/TB1l2idf46I8KJjy0FgXXXXzVXa-54-48.png' }} />
      </TouchableOpacity>
    </View>
  </View>
);

export default class extends Component {
  state = {
    visibilities: {
      'modal1': false,
      'modal2': true,
      'modal3': false,
      'modal4': false,
    },
  };

  componentWillUnmount() {
    this.close();
  }

  changeVisibility(index, visible) {
    const visibilities = {...this.state.visibilities};
    visibilities[`modal${index}`] = visible;
    this.setState({ visibilities });
  }

  close() {
    if (this.modal) {
      this.modal.close();
    }
  }

  openDefaultModal() {
    this.modal = Modal.open({
      children: <ModalContent
        style={{ position: 'absolute', right: 0, bottom: 0, left: 0 }}
        title="关闭默认弹窗"
        onPress={() => this.close()}
      />,
    });
  }

  openPopupModal() {
    this.modal = Modal.open({
      type: 'popup',
      children: <ModalContent
        title="关闭底部弹出弹窗"
        onPress={() => this.close()}
      />,
    });
  }

  openAlertModal() {
    this.modal = Modal.open({
      type: 'alert',
      children: <ModalContent
        style={{ width: 270, height: 200 }}
        title="关闭对话框弹窗"
        onPress={() => this.close()}
      />
    });
  }

  openToastModal() {
    this.modal = Modal.open({
      type: 'toast',
      children: <ModalContent
        style={{ width: 270, height: 100 }}
        title="关闭轻提示弹窗"
        onPress={() => this.close()}
      />
    });
  }

  render() {
    const { visibilities } = this.state;
    return (
      <View style={styles.body}>
        <NavBar style={styles.navBar} title="弹窗容器" onLeftPress={() => Bone.navigation.pop()} />
        <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>

          <Header title="Modal 作为弹窗容器组件：<Modal></Modal>" />
          <List>
            <List.Item
              title="打开默认弹窗"
              extra="type：default"
              extraStyle={{ color: '#f00', fontWeight: 'bold' }}
              arrow="right"
              onPress={() => this.changeVisibility(1, true)}
            />
            <List.Item
              title="打开底部弹出弹窗"
              extra="type：popup"
              extraStyle={{ color: '#f00', fontWeight: 'bold' }}
              arrow="right"
              onPress={() => this.changeVisibility(2, true)}
            />
            <List.Item
              title="打开对话框弹窗"
              extra="type：alert"
              extraStyle={{ color: '#f00', fontWeight: 'bold' }}
              arrow="right"
              onPress={() => this.changeVisibility(3, true)}
            />
            <List.Item
              title="打开轻提示弹窗"
              extra="type：toast"
              extraStyle={{ color: '#f00', fontWeight: 'bold' }}
              arrow="right"
              onPress={() => this.changeVisibility(4, true)}
            />
          </List>

          <Modal
            visible={visibilities.modal1}
            onClose={() => this.changeVisibility(1, false)}
          >
            <ModalContent
              style={{ position: 'absolute', right: 0, bottom: 0, left: 0 }}
              title="关闭默认弹窗"
              onPress={() => this.changeVisibility(1, false)}
            />
          </Modal>
          <Modal
            type="popup"
            visible={visibilities.modal2}
            onClose={() => this.changeVisibility(2, false)}
          >
            <ModalContent
              title="关闭底部弹出弹窗"
              onPress={() => this.changeVisibility(2, false)}
            />
          </Modal>
          <Modal
            type="alert"
            visible={visibilities.modal3}
            onClose={() => this.changeVisibility(3, false)}
          >
            <ModalContent
              style={{ width: 270, height: 200 }}
              title="关闭对话框弹窗"
              onPress={() => this.changeVisibility(3, false)}
            />
          </Modal>
          <Modal
            type="toast"
            visible={visibilities.modal4}
            onClose={() => this.changeVisibility(4, false)}
          >
            <ModalContent
              style={{ width: 270, height: 100 }}
              title="关闭轻提示弹窗"
              onPress={() => this.changeVisibility(4, false)}
            />
          </Modal>

          <Header title="Modal 静态方法调用：Modal.open" />
          <List>
            <List.Item
              title="打开默认弹窗"
              extra="type：default"
              extraStyle={{ color: '#f00', fontWeight: 'bold' }}
              arrow="right"
              onPress={() => this.openDefaultModal()}
            />
            <List.Item
              title="打开底部弹出弹窗"
              extra="type：popup"
              extraStyle={{ color: '#f00', fontWeight: 'bold' }}
              arrow="right"
              onPress={() => this.openPopupModal()}
            />
            <List.Item
              title="打开对话框弹窗"
              extra="type：alert"
              extraStyle={{ color: '#f00', fontWeight: 'bold' }}
              arrow="right"
              onPress={() => this.openAlertModal()}
            />
            <List.Item
              title="打开轻提示弹窗"
              extra="type：toast"
              extraStyle={{ color: '#f00', fontWeight: 'bold' }}
              arrow="right"
              onPress={() => this.openToastModal()}
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
  modal: {
    height: 300,
    backgroundColor: '#fff',
  },
  modalHeader: {
    height: 50,
    paddingRight: 5,
    paddingLeft: 16,
    backgroundColor: '#ededed',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  modalHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  modalHeaderTouch: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalHeaderImage: {
    width: 18,
    height: 16,
  },
});
