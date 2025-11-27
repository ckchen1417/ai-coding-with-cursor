"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Home,
  LayoutDashboard,
  Users,
  Settings,
  FileText,
  BarChart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

interface SidebarProps {
  isCollapsed: boolean
  onToggle: () => void
}

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, href: "#" },
  { name: "Home", icon: Home, href: "#" },
  { name: "Analytics", icon: BarChart, href: "#" },
  { name: "Users", icon: Users, href: "#" },
  { name: "Documents", icon: FileText, href: "#" },
  { name: "Settings", icon: Settings, href: "#" },
]

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={cn(
        "relative flex flex-col border-r bg-sidebar transition-all duration-300",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo Section */}
      <div className="flex h-16 items-center border-b px-4">
        {isCollapsed ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <LayoutDashboard className="h-6 w-6" />
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <LayoutDashboard className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg">Dashboard</span>
              <span className="text-xs text-muted-foreground">Pro</span>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-2">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              isCollapsed && "justify-center"
            )}
          >
            <item.icon className="h-5 w-5 shrink-0" />
            {!isCollapsed && <span className="text-sm font-medium">{item.name}</span>}
          </a>
        ))}
      </nav>

      {/* Toggle Button */}
      <div className="border-t p-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggle}
          className={cn(
            "w-full",
            isCollapsed && "px-2"
          )}
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <>
              <ChevronLeft className="h-5 w-5 mr-2" />
              <span>Collapse</span>
            </>
          )}
        </Button>
      </div>
    </aside>
  )
}

