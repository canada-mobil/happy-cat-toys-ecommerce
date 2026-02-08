import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://rhzlqfmzguglcqsemwmg.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_4G6G538cvhgEzfnd-6kPhA_li71tNhl'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
