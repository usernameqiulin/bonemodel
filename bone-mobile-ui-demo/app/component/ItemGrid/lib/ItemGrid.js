/**
 * shouldComponentUpdate 不实现，兼容历史原因，防止需要重新渲染的时候，无法重新渲染
 * */

import React, {Component} from 'react';

import {StyleSheet, View, Text, Dimensions} from 'react-native';

import PropTypes from 'prop-types';

import Item from './Item';

import RectView from './RectView';

import CircleView from './CircleView';

import {
    RECT, CIRCLE,
    RECT_VIEW_HEIGHT, CIRCLE_VIEW_WIDTH, CIRCLE_VIEW_HEIGHT
} from './constant';

const windowInnerWidth = Dimensions.get('window').width;

const getColumnCount = length => {

    if (length <= 2) {

        return length;
    }
    else if (length >= 10) {

        return 4;
    }
    else if (length === 3 || length === 5 || length === 6 || length === 9) {

        return 3;
    }
    else {

        return 4;
    }
};

export default class ItemGrid extends Component {

    static propTypes = {
        // props 只做初始化设置
        type: PropTypes.oneOf([
            RECT,
            CIRCLE
        ]),
        isMultiple: PropTypes.bool,
        dataSource: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            icon: PropTypes.string,
            key: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            status: PropTypes.oneOf([-1, 0, 1])
        })).isRequired,

        // props 持续可变
        themeColor: PropTypes.string,
        title: PropTypes.string,
        disabled: PropTypes.bool,
        status: PropTypes.arrayOf(PropTypes.oneOf([-1, 0, 1])),
        onClickBefore: PropTypes.func,
        onItemClick: PropTypes.func
    };

    static defaultProps = {
        type: RECT,
        isMultiple: false,

        themeColor: '#1fc8a2',
        title: '',
        disabled: false
        // onClickBefore & onItemClick 就不添加默认了，方便在点击时优化性能
    };

    constructor(props) {

        super(props);

        let {type, isMultiple, dataSource, status} = this.props;

        // 矩形模式下，只支持单选
        isMultiple = type === RECT ? false : isMultiple;

        dataSource = this.$getStatusUpdatedDataSource(dataSource, status, isMultiple);

        this.state = {
            type, // 初始化一次，不会后续再有变化
            isMultiple, // 初始化一次，不会后续再有变化
            dataSource, // 初始化，后续只有 status 会发生变化
            count: dataSource.length, // grid 个数，初始化一次，不会后续再有变化
            column: getColumnCount(dataSource.length) // 列数，初始化一次，不会后续再有变化
        };
    }

    componentWillReceiveProps(nextProps) {

        // 若开发者指定了 status 属性，则基于此属性，需要修改 state.dataSource 的 status 属性
        if ('status' in nextProps) {

            const {dataSource, isMultiple} = this.state;

            this.setState({
                dataSource: this.$getStatusUpdatedDataSource(dataSource, nextProps.status, isMultiple)
            });
        }
    }

    // 根据 dataSource，status，isMultiple，获取最新的 dataSource
    // status 属性，开发者未必会去指定，给默认空数组
    $getStatusUpdatedDataSource(dataSource, status = [], isMultiple) {

        let itemStatus, oneActivated = false,
            result = [];

        dataSource.forEach((item, index) => {

            // status 覆盖 dataSource 的 status，若都未指定，默认为 1
            if (status[index] !== undefined) {

                itemStatus = status[index];
            }
            else if (item.status !== undefined) {

                itemStatus = item.status;
            }
            else {

                itemStatus = 1;
            }

            // 单选情况下，只允许一个 status 为 1
            if (!isMultiple && oneActivated && itemStatus === 1) {

                itemStatus = 0;
            }

            // 标记已有 status 为 1 的项
            if (itemStatus === 1) {

                oneActivated = true;
            }

            result.push({
                ...item,
                key: item.key || index,
                status: itemStatus,
                index
            });
        });

        return result;
    }

    $renderTitle() {

        const {title} = this.props;

        if (title) {

            return <Text style={styles.title}>{title}</Text>;
        }

        return <View style={styles.placeholder} />;
    }

    $renderGrids() {

        const {type, count, column} = this.state;

        if (column === 0) {

            return null;
        }

        let gridRowEls = [];

        for (let gridIndex = 0; gridIndex < count; gridIndex += column) {

            let gridEls = [], endGridIndex = gridIndex + column;

            for (let startGridIndex = gridIndex; startGridIndex < endGridIndex; ++startGridIndex) {

                gridEls.push(this.$renderGrid(startGridIndex));
            }

            gridEls.length && gridRowEls.push((
                <View
                    key={gridIndex}
                    style={[
                        type === RECT ? styles.rectRow : styles.circleRow,
                        endGridIndex < count ? null : {marginBottom: type === RECT ? 0 : 6}
                    ]}
                >
                    {gridEls}
                </View>
            ));
        }

        return gridRowEls;
    }

    $renderGrid(index) {

        const {type, dataSource, count, column} = this.state;

        const {themeColor, disabled} = this.props;

        const data = dataSource[index];

        let GridView, gridStyle;

        if (type === RECT) {

            GridView = RectView;

            gridStyle = {
                flex: 1,
                height: RECT_VIEW_HEIGHT,
                marginLeft: 3
            };
        }
        else {

            GridView = CircleView;

            gridStyle = {
                width: CIRCLE_VIEW_WIDTH,
                height: CIRCLE_VIEW_HEIGHT,
                marginLeft: (windowInnerWidth - CIRCLE_VIEW_WIDTH * column) / (column + 1)
            };
        }

        if (index >= count) {

            return <View key={index} style={gridStyle} />
        }

        return <GridView
            key={index}
            style={gridStyle}
            data={data}
            disabled={disabled}
            themeColor={themeColor}
            onPress={this.$onGridPress}
        />;
    }

    $onGridPress = data => {

        const {disabled, onClickBefore, onItemClick} = this.props;

        // 其实在 RectView 和 CircleView 中，已经判断了是否禁用
        // 这里再做判断，这样以后如果换人维护，出错的可能性会降低些许
        if (disabled || data.status === -1) {

            return;
        }

        // 参数仿照 ^1.0.0 版本 数据结构
        // 询问是否要响应点击，并改变状态
        if (onClickBefore && onClickBefore(new Item(data), this.$getHighLightData()) === false) {

            return;
        }

        // 改变状态
        const newData = this.$getStatusUpdatedData(data);

        // 参数仿照 ^1.0.0 版本 数据结构
        onItemClick && onItemClick(new Item(newData), this.$getHighLightData());
    };

    // 根据点击块的数据，改变状态，并返回新数据
    $getStatusUpdatedData(data) {

        const {type, isMultiple, dataSource} = this.state;

        let newDataSource = [], newData = {...data},
            newItem;

        if (data.status === 0) {

            newData.status = 1;
        }
        else if (data.status === 1 && type !== RECT) {

            newData.status = 0;
        }

        dataSource.forEach(item => {

            if (item.index === newData.index) {

                newDataSource.push(newData);
            }
            else {

                let newItem = {...item};

                if (!isMultiple && newData.status === 1 && newItem.status !== -1) {

                    newItem.status = 0;
                }

                newDataSource.push(newItem);
            }
        });

        // 更新所有 grid 的 status
        this.setState({
            dataSource: newDataSource
        });

        return newData;
    }

    // 获取当前所有的高亮块的数据
    $getHighLightData() {

        const {dataSource} = this.state;

        let result = {};

        dataSource.forEach(item => {

            if (item.status === 1) {

                result[item.key] = new Item(item); // 仿照 ^1.0.0 版本 数据结构
            }
        });

        return result;
    }

    render() {

        // 组件容器样式，只支持有限定制
        const {
            marginTop = 0, marginBottom = 0,
            borderTopWidth = 0, borderBottomWidth = 0,
            borderColor, borderTopColor, borderBottomColor
        } = StyleSheet.flatten(this.props.style || {});

        return (
            <View style={[styles.body, {
                marginTop, marginBottom,
                borderTopWidth, borderBottomWidth,
                borderColor, borderTopColor, borderBottomColor
            }]}>
                {this.$renderTitle()}
                <View>
                    {this.$renderGrids()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        paddingTop: 12,
        paddingBottom: 16,
        backgroundColor: '#fff'
    },

    placeholder: {
        height: 4
    },
    title: {
        height: 20,
        lineHeight: 20,
        marginBottom: 12,
        paddingLeft: 16,
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333'
    },

    rectRow: {
        marginBottom: 3,
        paddingLeft: 13,
        paddingRight: 16,
        flexDirection: 'row'
    },
    circleRow: {
        marginTop: 2,
        marginBottom: 18,
        flexDirection: 'row'
    }
});
