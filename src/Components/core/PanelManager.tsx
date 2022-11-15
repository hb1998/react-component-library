import * as React from "react";
import { inject, observer } from "mobx-react";
import { Drawer } from "./Drawer";
import { Box } from "../layout/Box";

interface IPanelManager {
  router?: any;
  panels?: any;
}

const PanelManagerComponent = (props: IPanelManager) => {
  const { router, panels } = props;
  const { active, history } = router;

  const closeDrawer = () => {
    const { router } = props;
    router.back();
  };

  return (
    <Box>
      {panels.map((panel) => {
        const open = panel.key === active;
        return (
          <Drawer
            key={panel.key}
            panel={panel}
            open={open}
            onClose={closeDrawer}
          />
        );
      })}
    </Box>
  );
};

export const PanelManager: IPanelManager = inject('router')(observer(PanelManagerComponent));