import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Header, List, NavBar, Radio } from '@bone/bone-mobile-ui';

export default class extends Component {
  state = {
    value: 0,
    data: [
      { value: 0, title: '开启' },
      { value: 1, title: '关闭' },
      { value: 2, title: '睡眠' },
    ],
  }

  onChange = value => this.setState({ value });

  render() {
    const { value, data } = this.state;
    return (
      <View style={styles.body}>
        <NavBar style={styles.navBar} title="单选" onLeftPress={() => Bone.navigation.pop()} />
        <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>
          <Header title="一般嵌套在 List.Item 中使用" />
          <List>
            {data.map((item, index) => (
              <List.Item
                key={index}
                title={item.title}
                extra={<Radio checked={item.value === value} />}
                onPress={() => this.onChange(item.value)}
              />
            ))}
          </List>
          <Header title="其它样式状态示例" />
          <List>
            <List.Item
              title="样式定制"
              subtitle="Radio 颜色定制"
              extra={<Radio checked color="#3a76d8" />}
            />
            <List.Item
              title="禁用"
              subtitle="请将 List.Item & Radio 一起禁用"
              disabled
              extra={<Radio checked color="#3a76d8" disabled />}
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
