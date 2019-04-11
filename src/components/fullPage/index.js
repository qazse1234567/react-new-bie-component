/*
 * Project: react-new-bie
 * Created Date: Thursday April 11th 2019
 * Author: ZJ(zhengjiang151@qq.com)
 * -----
 * Last Modified: Thursday April 11th 2019 1:50:58 pm
 * Modified By: the developer formerly known as zhengjiang at <you@you.you>
 * -----
 * Description: FullPage
 */
import React, { Component } from "react";
import "./styles.less";
export default class FullPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            clientHeight: 1080
        };
    }

    wheelControl = 0;

    componentDidMount() {
        this.screenChange();
        this.setState({
            clientHeight: document.documentElement.clientHeight,
            current: this.props.initCurrent || 0
        });
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resize);
    }

    //监听window窗口变化
    screenChange() {
        window.addEventListener("resize", this.resize);
    }

    resize = event => {
        const clientHeight = document.documentElement.clientHeight;
        this.setState({
            clientHeight
        });
    };

    handleWheel = event => {
        const { children } = this.props;
        let len = children ? children.length : 0;
        if (this.wheelControl == 0) {
            //判断鼠标滚轮的上下滑动
            let data = event.deltaY;
            const { current } = this.state;
            this.wheelControl = 1;
            if (data > 0 && current < len - 1) {
                let page = current + 1;
                this.setState({
                    current: page
                });
                this.pageChange(page);
            }
            if (data < 0 && current > 0) {
                let page = current - 1;
                this.setState({
                    current: page
                });
                this.pageChange(page);
            }

            setTimeout(() => {
                this.wheelControl = 0;
            }, 600);
        }
    };

    pageChange = current => {
        const { onChange } = this.props;
        if (onChange) {
            onChange(current);
        }
    };

    render() {
        const { children } = this.props;
        const { current = 0, clientHeight = 0 } = this.state;
        return (
            <div className="bie-page-content" onWheel={this.handleWheel}>
                <div
                    className="bie-pages"
                    style={{
                        transform: `translate3d(0px, -${current *
                            clientHeight}px, 0px)`
                    }}
                >
                    {children &&
                        children.map((item, index) => {
                            return (
                                <div key={index} className="bie-page">
                                    {item}
                                </div>
                            );
                        })}
                </div>
            </div>
        );
    }
}
