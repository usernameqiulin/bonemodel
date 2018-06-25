import {
    keySymbol,
    statusSymbol,
    indexSymbol,
    textSymbol,
    iconSymbol,
    valueSymbol
} from './constant';

// 保留 ^1.0.0 版本的接口
export default class Item {

    constructor({key, status, index, text, icon, value}) {

        this[keySymbol] = key;

        this[statusSymbol] = status;

        this[indexSymbol] = index;

        this[textSymbol] = text;

        this[iconSymbol] = icon;

        this[valueSymbol] = value;
    }

    // getters
    get key() {

        return this[keySymbol];
    }

    get status() {

        return this[statusSymbol];
    }

    get index() {

        return this[indexSymbol];
    }

    get text() {

        return this[textSymbol];
    }

    get icon() {

        return this[iconSymbol];
    }

    get value() {

        return this[valueSymbol];
    }

    // boolean funtions
    // 忽略了 disabled 属性，和 ^1.0.0 版本保持一致
    isDisable() {

        return this.status === -1;
    }

    isNormal() {

        return this.status === 0;
    }

    isHighlight() {

        return this.status === 1;
    }

    // action functions
    // 提供通道，直接修改组件内部状态，而不去同步外部状态
    // 接口不太合理，和 ^1.0.0 版本保持一致，但不实现
    disabled() {


    }

    normal() {


    }

    highlight() {


    }
}
