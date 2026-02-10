import React from "react";
import * as Shared from "../shared-demos";
import { RadialMenu } from "@/components/animate-ui/components/community/radial-menu";

export default function Render(props: any) {
  return (
    <div className="flex items-center justify-center" style={{ height: 340 }}>
      <RadialMenu
        menuItems={Shared.MENU_ITEMS}
        onSelect={(item) => {
          // eslint-disable-next-line no-console
          console.log(item);
        }}
      />
    </div>
  );
}
