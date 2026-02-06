import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Missing Supabase environment variables')
}

export const supabase = createClient(
    supabaseUrl || '',
    supabaseAnonKey || ''
)

export type ContentType = 'video' | 'foto'

export interface Content {
    id: string
    title: string
    description: string
    category: ContentType
    file_url: string
    thumbnail_url?: string
    created_at: string
}

export interface Testimonial {
    id: string
    name: string
    profession: string
    content: string
    rating: number
    photo_url?: string
    created_at: string
}
