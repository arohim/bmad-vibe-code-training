import React from 'react'
import { BarChart3, Users, ClipboardList } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavigationItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

const navigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: BarChart3
  },
  {
    id: 'customers',
    label: 'ลูกค้า',
    icon: Users
  },
  {
    id: 'jobs',
    label: 'รายการงาน',
    icon: ClipboardList
  }
]

export function Sidebar() {
  return (
    <aside className="w-64 bg-card border-r border-border">
      <div className="flex flex-col h-screen">
        {/* Logo/Header Section */}
        <div className="p-6 border-b border-border">
          <h1 className="text-xl font-bold text-card-foreground">
            Logistics CRM
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            ระบบจัดการลูกค้า
          </p>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.id}>
                  <div
                    className={cn(
                      'flex items-center px-3 py-2 rounded-md cursor-not-allowed',
                      'text-muted-foreground hover:text-foreground',
                      'hover:bg-muted/50 transition-colors',
                      'border border-transparent hover:border-border'
                    )}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Footer/Status Section */}
        <div className="p-4 border-t border-border">
          <div className="text-xs text-muted-foreground">
            <p>เวอร์ชัน MVP 1.0</p>
            <p className="mt-1">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              ระบบพร้อมใช้งาน
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}