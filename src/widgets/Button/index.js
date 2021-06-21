import React from "react";
import PropTypes from "prop-types";

import "./styles.css";

class Button extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
    zIndex: PropTypes.number,
    width: PropTypes.string,
    height: PropTypes.string,
    disabled: PropTypes.bool,
    padding: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    margin: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onClick: PropTypes.func,
    shadowOnHover: PropTypes.string,
    border: PropTypes.string,
    borderRadius: PropTypes.string,
    color: PropTypes.string,
  };

  static defaultProps = {
    className: "",
    disabled: false,
    width: "fit-content",
    height: "auto",
    padding: "10px",
    margin: "0",
    onClick: () => {},
    shadowOnHover: "",
    border: "",
    borderRadius: "",
    color: "white",
    text: "",
  };

  render() {
    const {
      id,
      className,
      zIndex,
      width,
      height,
      disabled,
      padding,
      margin,
      onClick,
      shadowOnHover,
      color,
      border,
      borderRadius,
      text,
    } = this.props;

    return (
      <button
        className="buttonWidget"
        style={{
          width: !width ? Button.defaultProps.width : width,
          height: !height ? Button.defaultProps.height : height,
          zIndex: !zIndex ? Button.defaultProps.zIndex : zIndex,
          disabled: !disabled ? Button.defaultProps.disabled : disabled,
          padding: !padding ? Button.defaultProps.padding : padding,
          margin: !margin ? Button.defaultProps.margin : margin,
          shadowOnHover: !shadowOnHover
            ? Button.defaultProps.shadowOnHover
            : shadowOnHover,
          color: !color ? Button.defaultProps.color : color,
          border: !border ? Button.defaultProps.border : border,
          borderRadius: !borderRadius
            ? Button.defaultProps.borderRadius
            : borderRadius,
        }}
        onClick={!onClick ? Button.defaultProps.onClick : onClick}
      >
        {text}
      </button>
    );
  }
}

export default Button;
