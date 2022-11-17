import * as React from 'react';
import classnames from 'classnames';
import '../../css/Box.css'

export const Box = props => {
  const {
    className,
    height,
    width,
    style,
  } = props;

  const resovledClassName = classnames(
    'bf-ui-box',
    className,
  );

  return (
    <div
      className={resovledClassName}
      style={{
        height,
        width,
        ...style,
      }}
    >
      {props.children}
    </div>
  );
};
