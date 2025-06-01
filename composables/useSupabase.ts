import { createClient } from '@supabase/supabase-js'

export const useSupabase = () => {
  const config = useRuntimeConfig()

  const supabaseUrl = config.public.supabaseUrl as string
  const supabaseAnonKey = config.public.supabaseAnonKey as string

  const supabase = createClient(supabaseUrl, supabaseAnonKey)

  return {
    supabase
  }
}
