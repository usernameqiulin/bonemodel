import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Gesture, NavBar } from '@bone/bone-mobile-ui';
import ItemGrid from '../component/ItemGrid';

class Press extends Component {
  state = {
    value: 1,
    opacity: 1,
  };

  plusInterval = undefined;

  onPressIn = () => {
    this.setState({ opacity: 0.6 });
  };

  onLongPress = () => {
    this.onInterval();
    this.plusInterval = setInterval(this.onInterval, 100);
  };

  onPressOut = () => {
    clearInterval(this.plusInterval);
    this.setState({ opacity: 1 });
  };

  onPress = () => {
    this.onInterval();
  };

  onInterval = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    const { value, opacity } = this.state;
    return (
      <View>
        <Text style={{ textAlign: 'center' }}>{value}</Text>
        <Gesture
          style={{ opacity, width: 200, height: 100, backgroundColor: '#fc9b12', alignItems: 'center', justifyContent: 'center' }}
          onPressIn={this.onPressIn}
          onLongPress={this.onLongPress}
          onPressOut={this.onPressOut}
          onPress={this.onPress}
        >
          <Text>（长）按增加</Text>
        </Gesture>
      </View>
    );
  }
}

class Drag extends Component {
  state = {
    centerX: 40,
    centerY: 40,
  };

  onDragStart = (state) => {
    const { centerX, centerY } = this.state;
    this.centerX = centerX;
    this.centerY = centerY;
    this.onDrag(state);
  };

  onDrag = (state) => {
    const { dx, dy } = state;
    let { centerX, centerY } = this.state;

    centerX = this.centerX + dx;
    if (centerX < 40) {
      centerX = 40;
    } else if (centerX > 160) {
      centerX = 160;
    }

    centerY = this.centerY + dy;
    if (centerY < 40) {
      centerY = 40;
    } else if (centerY > 160) {
      centerY = 160;
    }

    this.setState({ centerX, centerY });
  };

  onDragEnd = (state) => {
    this.onDrag(state);
  };

  render() {
    const { centerX, centerY } = this.state;
    return (
      <View style={styles.dragContainer}>
        <Gesture
          style={{ position: 'absolute', top: centerY - 40, left: centerX - 40, width: 80, height: 80, borderRadius: 40, backgroundColor: '#7b56da' }}
          onDragStart={this.onDragStart}
          onDrag={this.onDrag}
          onDragEnd={this.onDragEnd}
        />
      </View>
    );
  }
}

class Joystick extends Component {
  state = {
    locationX: 0,
    locationY: 0,
    angle: 0,
    visible: false,
  };

  onJoystickStart = (state) => {
    this.onJoystick(state);
    this.setState({ visible: true });
  };

  onJoystick = (state) => {
    const {
      locationX, locationY,
      angle,
    } = state;
    this.setState({
      locationX,
      locationY,
      angle,
    });
  };

  onJoystickEnd = (state) => {
    this.onJoystick(state);
    this.setState({ visible: false });
  };

  render() {
    let { locationX, locationY } = this.state;
    const { angle, visible } = this.state;
    const distance = Math.sqrt(Math.pow(locationX - 100, 2) + Math.pow(locationY - 100, 2));
    if (distance > 60) {
      locationX = (locationX - 100) * 60 / distance + 100;
      locationY = (locationY - 100) * 60 / distance + 100;
    }
    return (
      <Gesture
        style={styles.joystickContainer}
        onJoystickStart={this.onJoystickStart}
        onJoystick={this.onJoystick}
        onJoystickEnd={this.onJoystickEnd}
      >
        {
          visible
            ? [
              (
                <View key={0} style={{ position: 'absolute', top: 0, left: 99, width: 2, height: 200, transform: [{ rotate: `${angle}deg` }] }}>
                  <View style={{ flex: 1, backgroundColor: '#fff' }} />
                  <View style={{ flex: 1, backgroundColor: 'transparent' }} />
                </View>
              ),
              <View key={1} style={{ position: 'absolute', top: locationY - 40, left: locationX - 40, width: 80, height: 80, borderRadius: 40, backgroundColor: '#7b56da' }} />
            ]
            : null
        }
      </Gesture>
    );
  }
}

class Zoom extends Component {
  state = {
    scale: 1,
  };

  onZoom = (state) => {
    const { scale } = state;
    this.setState({ scale });
  };

  render() {
    const { scale } = this.state;
    return (
      <Gesture
        style={[styles.zoomContainer, { transform: [{ scale }] }]}
        onZoom={this.onZoom}
      >
        <Text>缩放比例</Text>
        <Text>{scale}</Text>
      </Gesture>
    );
  }
}

class Rotate extends Component {
  state = {
    angle: 0,
  };

  onRotate = (state) => {
    const { angle } = state;
    this.setState({ angle });
  };

  render() {
    const { angle } = this.state;
    return (
      <Gesture
        style={[styles.rotateContainer, { transform: [{ rotate: `${angle}deg` }] }]}
        onRotate={this.onRotate}
      >
        <Text>旋转角度</Text>
        <Text>{angle}</Text>
      </Gesture>
    );
  }
}

class Composite extends Component {
  state = {
    scale: 1,
    angle: 0,
  };

  onZoom = (state) => {
    const { scale } = state;
    this.setState({ scale });
  };

  onRotate = (state) => {
    const { angle } = state;
    this.setState({ angle });
  };

  render() {
    const { scale, angle } = this.state;
    return (
      <Gesture
        style={[styles.compositeContainer, { transform: [{ scale }, { rotate: `${angle}deg` }] }]}
        onZoom={this.onZoom}
        onRotate={this.onRotate}
      >
        <Text>缩放比例</Text>
        <Text>{scale}</Text>
        <Text>&nbsp;</Text>
        <Text>旋转角度</Text>
        <Text>{angle}</Text>
      </Gesture>
    );
  }
}

export default class extends Component {
  state = {
    dataSource: [
      { text: 'Press - （长）按' },
      { text: 'Drag - 拖动' },
      { text: 'Joystick - 摇杆' },
      { text: 'Zoom - 双指缩放' },
      { text: 'Rotate - 双指旋转' },
      { text: 'Composite - 多手势' },
    ],
    components: [Press, Drag, Joystick, Zoom, Rotate, Composite],
    selectedIndex: 0,
  };

  onItemClick = item => this.setState({ selectedIndex: item.index });

  render() {
    const { dataSource, components, selectedIndex } = this.state;
    const Comp = components[selectedIndex];
    return (
      <View style={styles.body}>
        <NavBar style={styles.navBar} title="手势" onLeftPress={() => Bone.navigation.pop()} />
        <ItemGrid
          dataSource={dataSource}
          status={dataSource.map((data, index) => (index === selectedIndex ? 1 : 0))}
          onItemClick={this.onItemClick}
        />
        <View style={styles.container}>
          <Comp />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  dragContainer: {
    position: 'relative',
    width: 200,
    height: 200,
    backgroundColor: '#fc9b12',
    overflow: 'visible',
  },
  joystickContainer: {
    position: 'relative',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#fc9b12',
    overflow: 'visible',
  },
  zoomContainer: {
    width: 200,
    height: 200,
    backgroundColor: '#fc9b12',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rotateContainer: {
    width: 200,
    height: 200,
    backgroundColor: '#fc9b12',
    alignItems: 'center',
    justifyContent: 'center',
  },
  compositeContainer: {
    width: 200,
    height: 200,
    backgroundColor: '#fc9b12',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
