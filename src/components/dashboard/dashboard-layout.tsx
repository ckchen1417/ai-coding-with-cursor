"use client"

import * as React from "react"
import { Sidebar } from "./sidebar"
import { DashboardHeader } from "./header"

interface DashboardLayoutProps {
  children: React.ReactNode
  title: string
  subtitle?: string
  userName?: string
  userEmail?: string
  userImage?: string
}

export function DashboardLayout({
  children,
  title,
  subtitle,
  userName,
  userEmail,
  userImage,
}: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar isCollapsed={isCollapsed} onToggle={toggleSidebar} />

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader
          title={title}
          subtitle={subtitle}
          userName={userName}
          userEmail={userEmail}
          userImage={userImage}
        />

        {/* Content */}
        <main className="flex-1 overflow-y-auto bg-background p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

