import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon, NavBar } from '@bone/bone-mobile-ui';

// Web only, useless on iOS & Android
Icon.source = '//at.alicdn.com/t/font_624171_36d30h41ba0b2o6r.ttf';

export default class extends Component {
  render() {
    return (
      <View style={styles.body}>
        <NavBar style={styles.navBar} title="图标" onLeftPress={() => Bone.navigation.pop()} />
        <View style={styles.container}>
          <Icon style={styles.icon} icon="&#xe62e;" />
          <Icon style={styles.icon} icon="&#xe623;" />
          <Icon style={styles.icon} icon="&#xe622;" />
        </View>
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
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginRight: 16,
    marginLeft: 16,
    fontSize: 36,
    color: '#fc9b12',
  },
});
