import * as React from 'react';

export const Flex = props => {
  const {
    flexDirection,
    alignItems,
    justifyContent,
    flexWrap,
    className,
  } = props;

  return (
    <div
      className={`bf-ui-flex ${className ? className: ""}`}
      style={{
        display: 'flex',
        alignItems,
        flexDirection,
        justifyContent,
        flexWrap,
      }}
    >
      {props.children}
    </div>
  );
};
