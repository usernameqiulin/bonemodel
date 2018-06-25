import React, { Component } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Block, Header, List, NavBar, Switch } from '@bone/bone-mobile-ui';

export default class extends Component {
  state = {
    checks: [true, false, true, true],
  }

  onChange = (checked, index) => {
    const checks = [...this.state.checks];
    checks.splice(index, 1, !checked);
    this.setState({ checks });
  };

  render() {
    const { checks } = this.state;
    return (
      <View style={styles.body}>
        <NavBar style={styles.navBar} title="开关" onLeftPress={() => Bone.navigation.pop()} />
        <ScrollView style={styles.scrollBody} automaticallyAdjustContentInsets={false}>
          <Header title="裸使用" />
          <Block>
            <Switch checked={checks[0]} onChange={checked => this.onChange(checked, 0)} />
          </Block>
          <Header title="裸使用，禁用" />
          <Block>
            <Switch checked={checks[1]} onChange={checked => this.onChange(checked, 1)} disabled />
          </Block>
          <Header title="一般挂载在 List.Item 上使用" />
          <List>
            <List.Item
              title="开关"
              subtitle="说明"
              extra={<Switch checked={checks[2]} onChange={checked => this.onChange(checked, 2)} color="#3a76d8" />}
            />
            <List.Item
              title="禁用开关"
              subtitle="注意：最好 List.Item & Switch 一起禁用"
              extra={<Switch checked={checks[3]} onChange={checked => this.onChange(checked, 3)} disabled />}
              disabled
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
