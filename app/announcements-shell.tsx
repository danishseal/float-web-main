"use client";

import { usePathname } from "next/navigation";
import HomeShell from "./home-shell";

export default function AnnouncementsShell() {
  const pathname = usePathname();
  return <HomeShell view={pathname === "/top200" ? "top200" : "markets"} />;
}
