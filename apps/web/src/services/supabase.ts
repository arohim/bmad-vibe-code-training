import { createClient } from '@supabase/supabase-js'

// These will be set up in future stories with actual environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Export for type checking and future use
export type SupabaseClient = typeof supabase