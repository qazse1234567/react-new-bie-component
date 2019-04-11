/*
 * Project: 官网
 * Created Date: Thursday April 11th 2019
 * Author: ZJ(zhengjiang151@qq.com)
 * -----
 * Last Modified: Thursday April 11th 2019 10:44:45 am
 * Modified By: the developer formerly known as zhengjiang at <you@you.you>
 * -----
 * Description:
 */
import React from "react";
import ReactDOM from "react-dom";

import { Test, FullPage } from "./index";

const handleSelect = selection => alert(`You selected ${selection}`);

const App = () => {
    return (
        <div>
            <FullPage>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
            </FullPage>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
