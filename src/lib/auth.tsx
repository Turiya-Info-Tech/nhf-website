import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from './supabase';

// Demo credentials for testing (remove in production)
const DEMO_EMAIL = 'admin@nhf.org';
const DEMO_PASSWORD = 'admin123';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  isDemo: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isDemo, setIsDemo] = useState(false);

  useEffect(() => {
    // Check for demo session in localStorage
    const demoSession = localStorage.getItem('nhf_demo_session');
    if (demoSession === 'true') {
      setUser({ email: DEMO_EMAIL, id: 'demo-user' } as User);
      setSession({} as Session);
      setIsDemo(true);
      setLoading(false);
      return;
    }

    // Get initial session from Supabase if configured
    if (isSupabaseConfigured) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      });

      // Listen for auth changes
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        async (event, session) => {
          setSession(session);
          setUser(session?.user ?? null);
          setLoading(false);
        }
      );

      return () => subscription.unsubscribe();
    } else {
      setLoading(false);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    // Demo login check
    if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
      localStorage.setItem('nhf_demo_session', 'true');
      setUser({ email: DEMO_EMAIL, id: 'demo-user' } as User);
      setSession({} as Session);
      setIsDemo(true);
      return { error: null };
    }

    // If Supabase is configured, try real authentication
    if (isSupabaseConfigured) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      return { error };
    }

    // If no Supabase and not demo creds, return error
    return { error: new Error('Invalid credentials. Use demo: admin@nhf.org / admin123') };
  };

  const signOut = async () => {
    // Clear demo session
    localStorage.removeItem('nhf_demo_session');
    setIsDemo(false);
    
    if (isSupabaseConfigured) {
      await supabase.auth.signOut();
    }
    
    setUser(null);
    setSession(null);
  };

  return (
    <AuthContext.Provider value={{ user, session, loading, signIn, signOut, isDemo }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
