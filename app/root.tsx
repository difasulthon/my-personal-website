import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes"
import clsx from "clsx";
 
import { themeSessionResolver } from "./sessions.server"
import "./tailwind.css";
import Navbar from "./components/shared/navbar";
import BottomMenu from "./components/shared/bottom-menu";
import Footer from "./components/shared/footer";

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request)
  
  return {
    theme: getTheme(),
  }
}

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Limelight&display=swap",
  },
];

export function App({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>()
  const [theme] = useTheme()

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        <Links />
      </head>
      <body className="font-lexendDeca">
        <Navbar />
        {children}
        <Outlet />
        <BottomMenu />
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function AppWithProviders({ children }: { children: React.ReactNode }) {
  const data = useLoaderData<typeof loader>()
  return (
    <ThemeProvider 
      specifiedTheme={data.theme} 
      themeAction="/action/set-theme"
      defaultTheme="dark"
      themeStorageKey="theme"
    >
      <App>{children}</App>
    </ThemeProvider>
  )
}
