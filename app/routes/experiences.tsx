import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Difa Sulthon | Experiences" },
    { name: "description", content: "Experiences of Difa Sulthon" },
  ];
};

export default function Experiences() {
  return (
    <div>Experiences</div>
  )
}