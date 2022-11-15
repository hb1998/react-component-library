import React from 'react'
import '../../../css/Drawer.css';

interface IDrawerProps {
    open: boolean
    panel: any
    onClose: Function
    className?: string
}

function Drawer(props:IDrawerProps) {
    const { open, panel, onClose, className } = props;
    const { component } = panel || { component: null, props: null };
    const panelClassName = panel.props;

    // const resolvedClassName = classNames(
    //   'off-canvas', 
    //   'bf-ui-drawer',
    //   className, 
    //   panelClassName
    // ); 

    return (
        <div className={""}>
            <div className={`off-canvas-sidebar ${open ? 'active' : ''}`}>
                {open && React.createElement(component, { onClose, ...props })}
            </div>
        </div>
    )
}

export default Drawer