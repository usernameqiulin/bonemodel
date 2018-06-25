import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Blank, Header, NavBar } from '@bone/bone-mobile-ui';

export default class extends Component {
  render() {
    return (
      <View style={styles.body}>
        <NavBar style={styles.navBar} title="导航栏" onLeftPress={() => Bone.navigation.pop()} />
        <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>
          <Header title="顶部会有留白，留白大小和机型相关，一般建议一个页面一个导航栏，这里只是演示使用" />
          <NavBar
            title="左部按钮文字"
            left="返回"
            onLeftPress={() => Bone.navigation.pop()}
          />
          <Blank />
          <NavBar
            title="右部按钮文字"
            right="编辑"
            onLeftPress={() => Bone.navigation.pop()}
          />
          <Blank />
          <NavBar
            title="自定样式"
            titleStyle={{ color: '#7d92bc' }}
            left="返回"
            leftStyle={{ color: '#7b56da' }}
            right={['编辑', '保存']}
            rightStyle={[
              { color: '#fc9b12' },
              { color: '#1c59a1' },
            ]}
            onLeftPress={() => Bone.navigation.pop()}
          />
          <Blank />
          <NavBar
            title="复合组件"
            left="取消"
            right={[
              <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: '#fc9b12' }} />,
              <View style={{ width: 30, height: 30, borderRadius: 15, borderWidth: 2, borderColor: '#1c59a1' }} />,
            ]}
            onLeftPress={() => Bone.navigation.pop()}
          />
          <Blank />
          <NavBar
            style={{ backgroundColor: '#3a76d8' }}
            title="背景主题色"
            titleStyle={{ color: '#fff' }}
            leftStyle={{ color: '#fff' }}
            right="保存"
            rightStyle={{ color: '#fff' }}
            onLeftPress={() => Bone.navigation.pop()}
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
