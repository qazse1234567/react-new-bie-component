/*
 * Project: 官网
 * Created Date: Thursday April 11th 2019
 * Author: ZJ(zhengjiang151@qq.com)
 * -----
 * Last Modified: Thursday April 11th 2019 10:45:07 am
 * Modified By: the developer formerly known as zhengjiang at <you@you.you>
 * -----
 * Description:
 */
import React, { Component } from "react";
import "./styles.less";
export default class Text extends Component {
    render() {
        return (
            <div className="test" onClick={this.click}>
                test
                <div className="test1" />
            </div>
        );
    }
    set = () => {
        let a = 2;
        console.log(a);
    };
    click = () => {
        this.set();
    };
}
