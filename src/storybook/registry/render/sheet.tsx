import React from 'react';
import * as Shared from '../shared-demos';

export default function Render(props: any) {
  return (
    <Shared.SheetDemo side={props?.side ?? "right"} />
  );
}