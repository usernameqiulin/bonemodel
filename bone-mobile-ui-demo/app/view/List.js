import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Checkbox, Header, Icon, List, NavBar, Radio, Switch, TouchableOpacity } from '@bone/bone-mobile-ui';

const noop = () => {};

export default class extends Component {
  state = {
    switchChecked: true,
    radioChecked: true,
    checkboxChecked: true,
  };

  render() {
    const { switchChecked, radioChecked, checkboxChecked } = this.state;
    return (
      <View style={styles.body}>
        <NavBar style={styles.navBar} title="列表" onLeftPress={() => Bone.navigation.pop()} />
        <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>
          <Header title="列表，高扩展性" />
          <List>
            <List.Item
              title="标题"
              subtitle="副标题"
              extra="右边内容"
              arrow="right"
              onPress={noop}
            />
            <List.Item
              image="https://img.alicdn.com/tfs/TB1Vdsph1uSBuNjy1XcXXcYjFXa-93-93.png"
              title="睡眠模式"
              subtitle="执行失败"
              subtitleStyle={{ color: '#f00' }}
              extra="23:16"
              arrow="right"
              onPress={noop}
            />
            <List.Item
              title="iOS 左划，Android 长按"
              arrow="right"
              actions={[
                { text: '置顶', style: { color: '#fff', backgroundColor: '#108ee9' } },
                { text: '移除', style: { color: '#fff', backgroundColor: '#f4333c' } },
              ]}
              actionTitle="操作"
              actionCancelText="取消"
              onPress={noop}
            />
            <List.Item
              title="左划 & 长按"
              subtitle="Cool"
              extra="Excellent"
              arrow="right"
              actions={[
                { text: '置顶', style: { color: '#fff', backgroundColor: '#108ee9' } },
                { text: '移除', style: { color: '#fff', backgroundColor: '#f4333c' } },
              ]}
              actionTitle="操作"
              actionCancelText="取消"
              onPress={this.noop}
            />
            <List.Item
              image="https://img.alicdn.com/tfs/TB1Vdsph1uSBuNjy1XcXXcYjFXa-93-93.png"
              imageStyle={{ width: 20, height: 20 }}
              title="样式随意定制"
              titleStyle={{ color: '#fc9b12' }}
              subtitle="副标题"
              subtitleStyle={{ color: '#1c59a1' }}
              extra="右边内容"
              extraStyle={{ color: '#7b56da' }}
              arrow="right"
              onPress={noop}
            />
            <List.Item
              title="右边内容是组件"
              extra={(
                <View style={{ width: 50, height: 50, borderRadius: 25, borderWidth: 2, borderColor: '#1fc88b', alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ fontSize: 12, color: '#1fc88b' }}>动作</Text>
                </View>
              )}
            />
            <List.Item
              title="如果满足以下任一条件"
              titleStyle={{ color: '#1fc88b', fontWeight: 'normal' }}
              extra={(
                <TouchableOpacity style={{ position: 'relative', width: 30, height: 30 }}>
                  <View style={{ position: 'absolute', top: 5, right: 9, bottom: 5, width: 2, backgroundColor: '#1fc88b' }} />
                  <View style={{ position: 'absolute', top: 14, right: 0, bottom: 14, width: 20, backgroundColor: '#1fc88b' }} />
                </TouchableOpacity>
              )}
            />
            <List.Item
              title="右边是 icon"
              extra={<Icon style={{ fontSize: 20, color: '#898d9c' }} icon="&#xe62f;" />}
              arrow="right"
              onPress={noop}
            />
          </List>
          <Header title="挂载数据交互组件" />
          <List>
            <List.Item
              title="开关"
              subtitle="说明"
              extra={<Switch checked={switchChecked} onChange={checked => this.setState({ switchChecked: !checked })} />}
            />
            <List.Item
              title="单选框"
              subtitle="说明"
              extra={<Radio checked={radioChecked} />}
              onPress={() => this.setState({ radioChecked: !radioChecked })}
            />
            <List.Item
              title="复选框"
              subtitle="说明"
              extra={<Checkbox checked={checkboxChecked} />}
              onPress={() => this.setState({ checkboxChecked: !checkboxChecked })}
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
