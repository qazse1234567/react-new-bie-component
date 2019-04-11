/*
 * Project: react-new-bie
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
import FullPageExample from "../examples/fullPage";

const App = () => {
    return (
        <div>
            <FullPageExample />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
