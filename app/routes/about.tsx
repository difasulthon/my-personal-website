import type { MetaFunction } from "@remix-run/node";

import NotFound from "~/components/shared/not-found";

export const meta: MetaFunction = () => {
  return [
    { title: "Difa Sulthon | About" },
    { name: "description", content: "About Difa Sulthon" },
  ];
};

export default function About() {
  return (
    <NotFound />
  )
}