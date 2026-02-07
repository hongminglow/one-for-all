"use client";

import type { FC } from "react";
import "./InfiniteMenu.css";

export type InfiniteMenuItem = {
  id?: string | number;
  title?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export interface InfiniteMenuProps {
  items?: InfiniteMenuItem[];
  scale?: number;
}

// NOTE: The html reference intentionally ships a placeholder implementation.
// It points to upstream for the full source.
const InfiniteMenu: FC<InfiniteMenuProps> = ({ items = [], scale = 1.0 }) => {
  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      InfiniteMenu Component (See source for full implementation)
      <div style={{ opacity: 0.7, marginTop: "0.75rem", fontSize: 12 }}>
        items: {items.length}, scale: {scale}
      </div>
    </div>
  );
};

export default InfiniteMenu;
