import React from 'react';
import * as Shared from '../shared-demos';
import { PlayfulTodolist as PlayfulTodoList } from "@/components/animate-ui/components/community/playful-todolist";

export default function Render(props: any) {
  return (
    <div
className="flex items-center justify-center"
style={{ height: 420 }}
>
<PlayfulTodoList />
</div>
  );
}