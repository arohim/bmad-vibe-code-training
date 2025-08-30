import React from 'react'
import { Sidebar } from './Sidebar'
import { cn } from '@/lib/utils'

interface MainLayoutProps {
  children: React.ReactNode
  className?: string
}

export function MainLayout({ children, className }: MainLayoutProps) {
  return (
    <div className={cn('min-h-screen bg-background', className)}>
      {/* Main Layout Grid */}
      <div className="flex">
        {/* Sidebar - Fixed width on the left */}
        <Sidebar />
        
        {/* Main Content Area */}
        <main className="flex-1 overflow-hidden">
          <div className="h-screen overflow-y-auto p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}