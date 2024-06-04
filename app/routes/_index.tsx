/* eslint-disable @typescript-eslint/no-explicit-any */
import type { MetaFunction } from "@remix-run/node";
import MDEditor from '@uiw/react-md-editor';
import { useState } from "react";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [value, setValue] = useState("**Hello world!!!**");

  return (
    <div>
      <MDEditor
        value={value}
        onChange={setValue as any}
      />
      <MDEditor.Markdown source={value} style={{ whiteSpace: 'pre-wrap' }} />
    </div>
  );
}
