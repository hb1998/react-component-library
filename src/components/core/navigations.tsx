import * as React from "react";
import { inject, observer } from "mobx-react";
import classnames from "classnames";
import { Icon } from "../elements/Icon";
import "../../../css/Navigation.css";

interface INavigationProps {
  router?: any;
  nav?: any;
  store?: any;
  className?: string;
}

const NavigationComponent = (props: INavigationProps) => {
  const onNavigate = (item) => {
    if (!item.disabled) {
      const { router } = props;
      router.navigate(item.panelKey, { clear: true });
    }
  };

  let menuItem: string = props.nav.map((menuItem) => {
    return menuItem.label;
  });

  const onPanelButtonClick = (item) => {
    const { store, router } = props;
    if (!item.disabled) {
      item.onClick(store, router);
    }
  };

  const renderMenuItem = (item, index) => {
    const { router } = props;
    const { active } = router;

    const navPanelClassName = classnames(
      "nav-item",
      { disabled: item.disabled },
      { "nav-active": active === item.panelKey }
    );

    const navSubPanelClassName = classnames("menu-item", {
      "menu-active": active === item.panelKey,
    });

    const navMenuButtonClassName = classnames(
      "nav-item",
      { "dropdown-toggle": !item.disabled },
      { disabled: item.disabled }
    );

    const isActive = active === item.panelKey;

    switch (item.type) {
      case "panel":
        return (
          <button
            key={index}
            className={classnames(navPanelClassName)}
            onClick={() => onNavigate(item)}
            title={item.title}
          >
            {isActive && <div className="highlight" />}
            {item.icon && <Icon icon={item.icon} />}
            <span>{item.label}</span>
          </button>
        );
      case "button":
        return (
          <button
            className={navPanelClassName}
            key={index}
            onClick={() => onPanelButtonClick(item)}
          >
            {item.icon && <Icon icon={item.icon} />}
            <span>{item.label}</span>
          </button>
        );
      case "menu":
        return (
          <div
            key={index}
            className={classnames(navPanelClassName, "dropdown")}
          >
            <button className={navMenuButtonClassName}>
              {item.icon && <Icon icon={item.icon} />}
              <span>{item.label}</span>
            </button>
            <ul className="menu">
              {(item.nav || []).map((subNavItem, index) => (
                <li className="menu-item" key={index}>
                  <button onClick={() => onNavigate(subNavItem.panelKey)}>
                    {subNavItem.icon && <Icon icon={subNavItem.icon} />}
                    <span>{subNavItem.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        break;
    }
  };

  const resolvedClassName: string = classnames(
    "navigation",
    "bf-ui-navigation",
    props.className
  );

  return (
    <div className={resolvedClassName}>
      {props.nav.map((navItem, index) => renderMenuItem(navItem, index))}
    </div>
  );
};

export const Navigation: any = inject("store")(
  inject("router")(observer(NavigationComponent))
);
