import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Header, List, NavBar } from '@bone/bone-mobile-ui';

export default class Home extends Component {
  state = {
    data: [
      [
        'Layout - 布局',
        [
          { title: 'Blank', extra: '上下留白', arrow: 'right', path: '/Blank' },
          { title: 'Block', extra: '两翼留白', arrow: 'right', path: '/Block' },
          { title: 'Flex', extra: '弹性布局', arrow: 'right', path: '/Flex' },
          { title: 'Header', extra: '区块标题', arrow: 'right', path: '/Header' },
        ],
      ],
      [
        'Navigation - 导航',
        [
          { title: 'NavBar', extra: '导航栏', arrow: 'right', path: '/NavBar' },
        ],
      ],
      [
        'Data Interaction - 数据交互',
        [
          { title: 'Checkbox', extra: '复选', arrow: 'right', path: '/Checkbox' },
          { title: 'Picker', extra: '选择器', arrow: 'right', path: '/Picker' },
          { title: 'Radio', extra: '单选', arrow: 'right', path: '/Radio' },
          { title: 'Switch', extra: '开关', arrow: 'right', path: '/Switch' },
        ],
      ],
      [
        'Data Display - 数据展示',
        [
          { title: 'Icon', extra: '图标', arrow: 'right', path: '/Icon' },
          { title: 'List', extra: '列表', arrow: 'right', path: '/List' },
        ],
      ],
      [
        'Feedback - 交互反馈',
        [
          { title: 'ActionSheet', extra: '选择列表', arrow: 'right', path: '/ActionSheet' },
          { title: 'Alert', extra: '对话框', arrow: 'right', path: '/Alert' },
          { title: 'Gesture', extra: '手势', arrow: 'right', path: '/Gesture' },
          { title: 'Modal', extra: '弹窗容器', arrow: 'right', path: '/Modal' },
          { title: 'Toast', extra: '轻提示', arrow: 'right', path: '/Toast' },
          { title: 'TouchableOpacity', extra: '触摸反馈，透明', arrow: 'right', path: '/TouchableOpacity' },
          { title: 'TouchableOverlay', extra: '触摸反馈，蒙层', arrow: 'right', path: '/TouchableOverlay' },
        ],
      ],
    ],
  };

  renderList() {
    return this.state.data.map((data, index) => (
      <List key={index}>
        <Header title={data[0]} />
        {data[1].map((item, index) => {
          const data = { ...item };
          const { path } = data;
          delete data.path;
          return (
            <List.Item
              key={index}
              {...data}
              onPress={() => Bone.navigation.push(path)}
            />
          );
        })}
      </List>
    ));
  }

  render() {
    return (
      <View style={styles.body}>
        <NavBar style={styles.navBar} title="组件列表" onLeftPress={() => Bone.navigation.pop()} />
        <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>
          {this.renderList()}
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
