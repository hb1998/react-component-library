import * as React from 'react';
import classnames from 'classnames';
import './Box.css';
import '../Base.css'

const Box:React.FC<any> = (props)=> {
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
export default Box;