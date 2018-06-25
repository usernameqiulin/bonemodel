import React, {Component} from 'react';

import PropTypes from 'prop-types';

import Immutable from 'immutable';

import {NOOP} from './constant';

export default class GridView extends Component {

    static propTypes = {
        data: PropTypes.shape({
            key: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]).isRequired,
            status: PropTypes.oneOf([-1, 0, 1]).isRequired,
            index: PropTypes.number.isRequired, // 只用于记录
            text: PropTypes.string.isRequired,
            icon: PropTypes.string,
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        }).isRequired,
        disabled: PropTypes.bool,
        themeColor: PropTypes.string,
        onPress: PropTypes.func
    };

    static defaultProps = {
        disabled: false,
        themeColor: '#1fc8a2',
        onPress: NOOP
    };

    state = {
        pressing: false
    };

    shouldComponentUpdate(nextProps, nextState) {

        return !Immutable.is(Immutable.fromJS(this.props), Immutable.fromJS(nextProps))
        || !Immutable.is(Immutable.fromJS(this.state), Immutable.fromJS(nextState));
    }

    get disabled() {

        const {data, disabled} = this.props;

        return disabled || data.status === -1;
    }

    onPressIn = () => {

        if (this.disabled) {

            return;
        }

        this.setState({
            pressing: true
        });
    };

    onPressOut = () => {

        if (this.disabled) {

            return;
        }

        this.setState({
            pressing: false
        });
    };

    onPress = () => {

        if (this.disabled) {

            return;
        }

        const {data, onPress} = this.props;

        onPress(data);
    };
}
