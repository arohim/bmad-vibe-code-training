# การตั้งค่า Supabase สำหรับ Logistics CRM MVP

## ขั้นตอนการติดตั้งและตั้งค่า

### 1. ติดตั้ง Dependencies

```bash
# ติดตั้ง dependencies ทั้งหมด
npm install

# หรือติดตั้งเฉพาะ web app
npm install --workspace=web
```

### 2. ตั้งค่า Supabase Project

1. ไปที่ [Supabase Dashboard](https://app.supabase.com)
2. สร้างโปรเจกต์ใหม่
3. คัดลอก Project URL และ Anon Key

### 3. ตั้งค่า Environment Variables

```bash
# คัดลอกไฟล์ template
cp apps/web/.env.example apps/web/.env

# แก้ไขไฟล์ .env และใส่ข้อมูลจริง
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 4. รัน Development Server

```bash
npm run dev
```

## โครงสร้างไฟล์

```
apps/web/src/services/
├── supabase.ts      # Supabase client configuration
├── auth.ts          # Authentication service
├── database.ts      # Database CRUD operations
└── index.ts         # Export all services

apps/web/src/hooks/
└── useAuth.ts       # Authentication React hook

packages/shared/
└── types.ts         # Shared TypeScript types
```

## การใช้งาน

### Authentication

```tsx
import { useAuth } from '@/hooks/useAuth'

function MyComponent() {
  const { user, loading, signIn, signOut, isAuthenticated } = useAuth()
  
  if (loading) return <div>Loading...</div>
  
  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user?.email}</p>
          <button onClick={signOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={() => signIn('email', 'password')}>Sign In</button>
      )}
    </div>
  )
}
```

### Database Operations

```tsx
import { DatabaseService } from '@/services'

// Select data
const { data, error } = await DatabaseService.select('customers')

// Insert data
const { data, error } = await DatabaseService.insert('customers', {
  name: 'John Doe',
  email: 'john@example.com'
})

// Update data
const { data, error } = await DatabaseService.update('customers', 
  { name: 'Jane Doe' }, 
  { column: 'id', value: '123' }
)

// Delete data
const { error } = await DatabaseService.delete('customers', 
  { column: 'id', value: '123' }
)
```

## ข้อกำหนดความปลอดภัย

### Environment Variables
- ใช้ `VITE_` prefix สำหรับ client-side variables
- เก็บ Service Role Key ไว้ server-side เท่านั้น
- อย่า commit ไฟล์ `.env` เข้า version control

### Row Level Security (RLS)
- เปิดใช้งาน RLS บนทุกตาราง
- กำหนด policies ที่เหมาะสม
- ตรวจสอบ authentication ก่อนเข้าถึงข้อมูล

## การพัฒนาต่อ

### Database Schema
- ใช้ Supabase CLI สำหรับ migrations
- สร้าง types อัตโนมัติ: `supabase gen types typescript`
- ทดสอบ schema บน local environment ก่อน

### API Integration
- ใช้ PostgREST auto-generated API
- สร้าง custom functions สำหรับ business logic ที่ซับซ้อน
- ใช้ Edge Functions สำหรับ serverless functions

## การ Debug

### ตรวจสอบ Connection
```tsx
import { isSupabaseConfigured } from '@/services'

if (!isSupabaseConfigured()) {
  console.error('Supabase not configured properly')
}
```

### ดู Network Requests
- เปิด Developer Tools
- ตรวจสอบ Network tab สำหรับ API calls
- ดู Console สำหรับ error messages