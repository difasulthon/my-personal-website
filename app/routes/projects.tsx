import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Difa Sulthon | Projects" },
    { name: "description", content: "Projects by Difa Sulthon" },
  ];
};

export default function Projects() {
  return (
    <div>Projects</div>
  )
}