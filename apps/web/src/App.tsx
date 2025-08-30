import { MainLayout } from '@/components/layout/MainLayout'

function App() {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            ยินดีต้อนรับสู่ Logistics CRM MVP
          </h1>
          <p className="text-muted-foreground text-lg">
            ระบบจัดการลูกค้าและการขนส่งสินค้า
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              Dashboard
            </h3>
            <p className="text-sm text-muted-foreground">
              ภาพรวมข้อมูลและสถิติการดำเนินงาน
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              จัดการลูกค้า
            </h3>
            <p className="text-sm text-muted-foreground">
              ข้อมูลลูกค้าและประวัติการใช้บริการ
            </p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              รายการงาน
            </h3>
            <p className="text-sm text-muted-foreground">
              งานขนส่งและติดตามสถานะ
            </p>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-card-foreground mb-4">
            สถานะระบบ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              React 18.x with TypeScript
            </div>
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Vite 5.x build tool
            </div>
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Tailwind CSS 3.x styling
            </div>
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              shadcn/ui components
            </div>
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Supabase integration
            </div>
            <div className="flex items-center">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Monorepo structure
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default App