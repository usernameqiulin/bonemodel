import React from 'react';

import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import GridView from './GridView';

// import IconFont from "../../IconFont";

import {RECT_VIEW_HEIGHT} from './constant';

export default class RectView extends GridView {

    render() {

        const {pressing} = this.state;

        const {style = {}, data, themeColor} = this.props;

        const disabled = this.disabled;

        return (
            <TouchableOpacity
                style={[style, styles.body]}
                activeOpacity={1}
                disabled={disabled}
                onPressIn={this.onPressIn}
                onPressOut={this.onPressOut}
                onPress={this.onPress}
            >
                <View style={styles.container}>
                    <View style={[styles.content, data.status === 1 ? {
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
                                : null
                        }
                        <Text style={[styles.text, data.status === 1 ? {color: '#fff'} : null]}>{data.text}</Text>
                    </View>
                    {
                        pressing || disabled
                            ? <View style={[
                                styles.cover,
                                pressing ? {backgroundColor: 'rgba(0, 0, 0, 0.1)'} : null,
                                disabled ? {backgroundColor: 'rgba(255, 255, 255, 0.6)'} : null
                            ]} />
                            : null
                    }
                </View>
            </TouchableOpacity>
        );

        return <View style={[style, {height: 85, backgroundColor: '#f00'}]} />;
    }
}

const styles = StyleSheet.create({
    body: {
        height: RECT_VIEW_HEIGHT
    },
    container: {
        position: 'relative',
        flex: 1
    },

    content: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ededed',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 28,
        height: 28,
        marginBottom: 8,
        fontSize: 28,
        color: '#999',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        height: 17,
        lineHeight: 17,
        fontSize: 12,
        color: '#333'
    },

    cover: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        borderRadius: 6
    }
});
