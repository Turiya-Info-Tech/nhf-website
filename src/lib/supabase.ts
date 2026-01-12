import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Supabase configuration
// To set up Supabase:
// 1. Go to https://supabase.com and create a free account
// 2. Create a new project
// 3. Go to Settings > API and copy your URL and anon key
// 4. Create a .env file with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Check if Supabase is configured
export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  supabaseUrl.startsWith('https://') &&
  supabaseAnonKey.startsWith('eyJ')
);

// Create a mock client for when Supabase is not configured
const createMockClient = () => {
  // Create a chainable query builder mock
  const createQueryBuilder = () => {
    const builder = {
      select: () => builder,
      insert: () => builder,
      update: () => builder,
      delete: () => builder,
      eq: () => builder,
      order: () => builder,
      limit: () => builder,
      single: () => Promise.resolve({ data: null, error: null }),
      then: (resolve: any) => resolve({ data: [], error: null }),
    };
    return builder;
  };

  return {
    auth: {
      getSession: async () => ({ data: { session: null }, error: null }),
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      signInWithPassword: async () => ({ data: { user: null, session: null }, error: { message: 'Supabase not configured. Please add your credentials to .env file.' } }),
      signOut: async () => ({ error: null }),
    },
    from: () => createQueryBuilder(),
    storage: {
      from: () => ({
        upload: async () => ({ data: null, error: { message: 'Supabase not configured' } }),
        getPublicUrl: () => ({ data: { publicUrl: '' } }),
        list: async () => ({ data: [], error: null }),
        remove: async () => ({ error: { message: 'Supabase not configured' } }),
      }),
    },
  };
};

// Export supabase client - use real client if configured, mock otherwise
export const supabase: SupabaseClient | ReturnType<typeof createMockClient> = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createMockClient() as any;

// Types for content management
export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  type: string;
  pdf_url: string | null;
  created_at: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  created_at: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image_url: string | null;
  order_index: number;
  created_at: string;
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  is_active: boolean;
  created_at: string;
}

export interface SiteSettings {
  id: string;
  key: string;
  value: string;
  updated_at: string;
}
