"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type Todo = { id: string; text: string; done: boolean };

export interface PlayfulTodoListProps {
  className?: string;
}

export default function PlayfulTodoList({ className }: PlayfulTodoListProps) {
  const [text, setText] = React.useState("");
  const [todos, setTodos] = React.useState<Todo[]>([
    { id: "1", text: "Ship the component", done: false },
    { id: "2", text: "Write docs", done: false },
  ]);

  const add = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random()}`, text: trimmed, done: false },
    ]);
    setText("");
  };

  return (
    <div
      className={cn(
        "w-full max-w-[520px] rounded-2xl border border-[var(--sb-border-2)] bg-[var(--sb-card)] p-6",
        className,
      )}
    >
      <div className="text-[14px] font-black text-[var(--sb-text-strong)]">
        Playful Todo List
      </div>
      <div className="mt-3 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") add();
          }}
          placeholder="Add a task"
          className="h-10 flex-1 rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-bg)] px-3 text-[13px] font-medium text-[var(--sb-text-strong)] outline-none"
        />
        <button
          type="button"
          className="h-10 rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-selected)] px-4 text-[12px] font-black text-[var(--sb-text-strong)]"
          onClick={add}
        >
          Add
        </button>
      </div>
      <div className="mt-4 space-y-2">
        {todos.map((t) => (
          <label
            key={t.id}
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-[var(--sb-border-2)] bg-[var(--sb-bg)] px-3 py-2"
          >
            <input
              type="checkbox"
              checked={t.done}
              onChange={() =>
                setTodos((prev) =>
                  prev.map((x) =>
                    x.id === t.id ? { ...x, done: !x.done } : x,
                  ),
                )
              }
            />
            <span
              className={cn(
                "text-[13px] font-semibold text-[var(--sb-text-strong)]",
                t.done && "line-through opacity-60",
              )}
            >
              {t.text}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
