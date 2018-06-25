import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Checkbox, Header, List, NavBar } from '@bone/bone-mobile-ui';

export default class extends Component {
  state = {
    values: [4, 5],
    data: [
      { value: 0, title: '不重复' },
      { value: 1, title: '周一' },
      { value: 2, title: '周二' },
      { value: 3, title: '周三' },
      { value: 4, title: '周四' },
      { value: 5, title: '周五' },
      { value: 6, title: '周六' },
      { value: 7, title: '周日' },
    ],
  }

  onChange = (value) => {
    const values = [...this.state.values];
    const index = values.indexOf(value);
    if (index === -1) {
      values.push(value);
    } else {
      values.splice(index, 1);
    }
    this.setState({ values });
  };

  render() {
    const { values, data } = this.state;
    return (
      <View style={styles.body}>
        <NavBar style={styles.navBar} title="复选" onLeftPress={() => Bone.navigation.pop()} />
        <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>
          <Header title="一般嵌套在 List.Item 中使用" />
          <List>
            {data.map((item, index) => (
              <List.Item
                key={index}
                title={item.title}
                extra={<Checkbox checked={values.indexOf(item.value) !== -1} />}
                onPress={() => this.onChange(item.value)}
              />
            ))}
          </List>
          <Header title="其它样式状态示例" />
          <List>
            <List.Item
              title="样式定制，选中状态"
              subtitle="Checkbox 颜色定制"
              extra={<Checkbox checked color="#3a76d8" />}
            />
            <List.Item
              title="样式定制，未选中状态"
              subtitle="Checkbox 颜色定制"
              extra={<Checkbox color="#3a76d8" />}
            />
            <List.Item
              title="禁用，选中状态"
              subtitle="请将 List.Item & Checkbox 一起禁用"
              disabled
              extra={<Checkbox checked color="#3a76d8" disabled />}
            />
            <List.Item
              title="禁用，未选中状态"
              subtitle="请将 List.Item & Checkbox 一起禁用"
              disabled
              extra={<Checkbox color="#3a76d8" disabled />}
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
