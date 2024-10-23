import type { ComponentType, JSX } from "react";

import { IndexPage } from "@/pages/IndexPage";
import { EarnPage } from "@/pages/EarnPage";
import { InvitePage } from "@/pages/InvitePage";

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: "/", Component: IndexPage },
  { path: "/earn", Component: EarnPage },
  { path: "/invite", Component: InvitePage },
];
