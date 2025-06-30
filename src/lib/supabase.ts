import { createClient } from '@supabase/supabase-js'

// Direct Supabase configuration for deployment
const supabaseUrl = 'https://rwggiglfxgcxblvnyvsg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3Z2dpZ2xmeGdjeGJsdm55dnNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExNDI3OTEsImV4cCI6MjA2NjcxODc5MX0.bPwAr68oUjarQrmWd-Zaf54DukdMP9C06mrgq-I2_vM'

// Fallback to environment variables if available (for local development)
const finalUrl = import.meta.env.VITE_SUPABASE_URL || supabaseUrl
const finalKey = import.meta.env.VITE_SUPABASE_ANON_KEY || supabaseAnonKey

export const supabase = createClient(finalUrl, finalKey)

// Types for our database
export interface Review {
  id: string
  name: string
  rating: number
  text: string
  location?: string
  created_at: string
  updated_at: string
  approved: boolean
  ip_address?: string
}

export interface ReviewInsert {
  name: string
  rating: number
  text: string
  location?: string
  ip_address?: string
} 