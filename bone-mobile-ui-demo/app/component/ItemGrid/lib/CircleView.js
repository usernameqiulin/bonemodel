import React from 'react';

import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

import GridView from './GridView';

// import IconFont from "../../IconFont";

import {CIRCLE_VIEW_WIDTH, CIRCLE_VIEW_HEIGHT} from './constant';

export default class CircleView extends GridView {

    render() {

        const {pressing} = this.state;

        const {style = {}, data, themeColor} = this.props;

        const disabled = this.disabled;

        return (
            <View style={[style, styles.body]}>
                <TouchableOpacity
                    style={styles.touch}
                    activeOpacity={1}
                    disabled={disabled}
                    onPressIn={this.onPressIn}
                    onPressOut={this.onPressOut}
                    onPress={this.onPress}
                >
                    <View style={styles.container}>
                        <View style={[styles.outerCircle, data.status === 1 ? {borderColor: themeColor} : null]} />
                        <View style={[styles.middleCircle, data.status === 1 ? {borderColor: themeColor} : null]} />
                        <View style={[styles.innerCircle, data.status === 1 ? {
                            borderWidth: 0,
                            backgroundColor: themeColor
                        } : null]}>
                            {
                                data.icon
                                    // ? <IconFont
                                    //     style={[styles.icon, data.status === 1 ? {color: '#fff'} : null]}
                                    //     iconFont={data.icon}
                                    // />
                                    ? null
                                    : <Text style={[styles.text, data.status === 1 ? {color: '#fff'} : null]}>{data.text}</Text>
                            }
                        </View>
                        {
                            pressing || disabled
                                ? <View style={[
                                    styles.cover,
                                    data.status === 1 ? {
                                        top: 0,
                                        left: 0,
                                        width: CIRCLE_VIEW_WIDTH,
                                        height: CIRCLE_VIEW_WIDTH,
                                        borderRadius: CIRCLE_VIEW_WIDTH / 2
                                    } : null,
                                    pressing ? {backgroundColor: 'rgba(0, 0, 0, 0.1)'} : null,
                                    disabled ? {backgroundColor: 'rgba(255, 255, 255, 0.6)'} : null
                                ]} />
                                : null
                        }
                    </View>
                </TouchableOpacity>
                {
                    data.icon
                        ? <Text style={[styles.text, disabled ? {opacity: 0.6} : null]}>{data.text}</Text>
                        : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        width: CIRCLE_VIEW_WIDTH,
        height: CIRCLE_VIEW_HEIGHT,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    touch: {
        width: CIRCLE_VIEW_WIDTH,
        height: CIRCLE_VIEW_WIDTH
    },
    container: {
        position: 'relative',
        flex: 1
    },
    outerCircle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: CIRCLE_VIEW_WIDTH,
        height: CIRCLE_VIEW_WIDTH,
        borderWidth: 1,
        borderRadius: CIRCLE_VIEW_WIDTH / 2,
        borderColor: 'rgba(0, 0, 0, 0)',
        opacity: 0.15
    },
    middleCircle: {
        position: 'absolute',
        top: 2,
        left: 2,
        width: CIRCLE_VIEW_WIDTH - 4,
        height: CIRCLE_VIEW_WIDTH - 4,
        borderWidth: 1,
        borderRadius: (CIRCLE_VIEW_WIDTH - 4) / 2,
        borderColor: 'rgba(0, 0, 0, 0)',
        opacity: 0.3
    },
    innerCircle: {
        position: 'absolute',
        top: 4,
        left: 4,
        width: CIRCLE_VIEW_WIDTH - 8,
        height: CIRCLE_VIEW_WIDTH - 8,
        borderWidth: 1,
        borderRadius: (CIRCLE_VIEW_WIDTH - 8) / 2,
        borderColor: '#ededed',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 32,
        height: 32,
        fontSize: 32,
        color: '#999',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 12,
        color: '#333'
    },
    cover: {
        position: 'absolute',
        top: 4,
        left: 4,
        width: CIRCLE_VIEW_WIDTH - 8,
        height: CIRCLE_VIEW_WIDTH - 8,
        borderRadius: (CIRCLE_VIEW_WIDTH - 8) / 2
    }
});
