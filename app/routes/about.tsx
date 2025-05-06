import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Difa Sulthon | About" },
    { name: "description", content: "About Difa Sulthon" },
  ];
};

export default function About() {
  return (
    <div>About</div>
  )
}