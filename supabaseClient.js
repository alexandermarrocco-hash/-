// Import the Supabase client from the CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Replace these with your actual Supabase project URL and anon key
// In a real production environment, you should use environment variables
const supabaseUrl = 'https://gxhwwsmqwkpvvcnaiiea.supabase.co'
const supabaseAnonKey = 'sb_publishable_9BJCpd_-1XV7yeeDbxphGQ_YUFgVwjp'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
