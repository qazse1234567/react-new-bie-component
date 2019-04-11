/*
 * Project: 官网
 * Created Date: Thursday April 11th 2019
 * Author: ZJ(zhengjiang151@qq.com)
 * -----
 * Last Modified: Thursday April 11th 2019 5:30:45 pm
 * Modified By: the developer formerly known as zhengjiang at <you@you.you>
 * -----
 * Description:
 */
import React, { Component } from "react";
import { FullPage } from "../../src";
import "./styles.less";
const Colors = ["#1bbc9b", "#4bbfc3", "#7baabe", "#ff9901"];
export default class FullPageExample extends Component {
    pageChange = page => {
        console.log(page);
    };

    render() {
        return (
            <div>
                <FullPage onChange={this.pageChange}>
                    {Colors.map(item => (
                        <div
                            key={item}
                            className="page"
                            style={{ backgroundColor: item }}
                        >
                            {item}
                        </div>
                    ))}
                </FullPage>
            </div>
        );
    }
}
