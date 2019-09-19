import React from "react";
import PropTypes from "prop-types";
import cs from "classnames";
import { prefixCls } from "../common/variables";

const Button = ({
  className,
  style,
  children,
  size = "default",
  type = "default",
  loading = false,
  disabled = false,
  fill = false,
  onClick
}) => {
  return (
    <button
      className={cs(
        `${prefixCls}-btn`,
        `${prefixCls}-btn__type--${type}`,
        `${prefixCls}-btn__size--${size}`,
        className,
        {
          [`${prefixCls}-btn__status--loading`]: loading,
          [`${prefixCls}-btn__status--disabled`]: disabled,
          [`${prefixCls}-btn__status--fill`]: fill
        }
      )}
      style={style}
      onClick={e => {
        !loading &&
          !disabled &&
          onClick &&
          typeof onClick === "function" &&
          onClick(e);
      }}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["default", "large", "small"]),
  type: PropTypes.oneOf(["default", "success", "warning", "error", "text"]),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  fill: PropTypes.bool,
  onClick: PropTypes.func
};

export default Button;
