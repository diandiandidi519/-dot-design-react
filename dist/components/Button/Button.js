var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import classNames from "classnames";
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize["Large"] = "lg";
    ButtonSize["Small"] = "sm";
})(ButtonSize || (ButtonSize = {}));
export var ButtonType;
(function (ButtonType) {
    ButtonType["Primary"] = "primary";
    ButtonType["Link"] = "link";
    ButtonType["Danger"] = "danger";
    ButtonType["Default"] = "default";
})(ButtonType || (ButtonType = {}));
/**
 * Button component description
 */
var Button = function (props) {
    var _a;
    var disabled = props.disabled, size = props.size, btnType = props.btnType, children = props.children, href = props.href, className = props.className, rest = __rest(props, ["disabled", "size", "btnType", "children", "href", "className"]);
    var cls = classNames("btn", className, (_a = {},
        _a["btn-".concat(btnType)] = btnType,
        _a["btn-".concat(size)] = size,
        _a.disabled = btnType === ButtonType.Link && disabled,
        _a));
    if (ButtonType.Link === btnType && href) {
        return (React.createElement("a", __assign({ className: cls, href: href }, rest), children));
    }
    return (React.createElement("button", __assign({ className: cls, disabled: disabled }, rest), children));
};
export default Button;
