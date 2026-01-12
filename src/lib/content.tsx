import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase, isSupabaseConfigured, Publication, Award, TeamMember, Announcement } from './supabase';

// Default data (used when no data is set)
const defaultTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: "Dr. Samir H. Dalwai",
    role: "Founder & Director",
    bio: "Developmental Pediatrician with 25+ years of experience. Leads NHF's vision and strategic direction.",
    image_url: "/image.png",
    order_index: 1,
    created_at: ''
  },
  {
    id: '2',
    name: "Dr. Hilla Sookhadwala",
    role: "Developmental Pediatrician",
    bio: "Medical leadership for research and clinical program development.",
    image_url: null,
    order_index: 2,
    created_at: ''
  },
  {
    id: '3',
    name: "Dr. Sandeep B. Bavdekar",
    role: "Research Consultant",
    bio: "Guides research methodology, ethics, and publication development.",
    image_url: null,
    order_index: 3,
    created_at: ''
  },
  {
    id: '4',
    name: "Ms. Rucha Panchal",
    role: "Research Associate",
    bio: "Supporting research operations, data analysis, and evidence generation.",
    image_url: null,
    order_index: 4,
    created_at: ''
  },
  {
    id: '5',
    name: "Ms. Anushka Samant",
    role: "Research Associate",
    bio: "Clinical research coordination and outcome tracking.",
    image_url: null,
    order_index: 5,
    created_at: ''
  },
  {
    id: '6',
    name: "Ms. Sandhya Kulkarni",
    role: "Training & Direction",
    bio: "Leading capacity building programs and training initiatives.",
    image_url: null,
    order_index: 6,
    created_at: ''
  }
];

const defaultAwards: Award[] = [
  {
    id: '1',
    title: "Excellence in Child Development Research",
    organization: "Indian Academy of Pediatrics",
    year: "2023",
    description: "Recognition for groundbreaking research in early intervention and neurodevelopmental care.",
    created_at: ''
  },
  {
    id: '2',
    title: "Outstanding Contribution to Developmental Pediatrics",
    organization: "National Medical Association",
    year: "2022",
    description: "Awarded for significant contributions to advancing developmental pediatrics in India.",
    created_at: ''
  },
  {
    id: '3',
    title: "Community Health Impact Award",
    organization: "Maharashtra State Health Department",
    year: "2021",
    description: "Recognized for impactful community health programs reaching underserved populations.",
    created_at: ''
  },
  {
    id: '4',
    title: "Innovation in Healthcare Education",
    organization: "Medical Education Council",
    year: "2020",
    description: "For developing innovative training programs for healthcare professionals.",
    created_at: ''
  }
];

const defaultPublications: Publication[] = [
  {
    id: '1',
    title: "Early Intervention in Neurodevelopmental Disorders: A Comprehensive Guide",
    authors: "Dr. Samir H. Dalwai, Dr. Hilla Sookhadwala",
    journal: "Indian Journal of Pediatrics",
    year: "2024",
    type: "Research Paper",
    pdf_url: "#",
    created_at: ''
  },
  {
    id: '2',
    title: "Parent-Mediated Interventions for Children with Developmental Delays",
    authors: "Dr. Samir H. Dalwai et al.",
    journal: "Journal of Developmental & Behavioral Pediatrics",
    year: "2023",
    type: "Research Paper",
    pdf_url: "#",
    created_at: ''
  },
  {
    id: '3',
    title: "PALAT Tracking System: A Framework for Developmental Monitoring",
    authors: "NHF Research Team",
    journal: "NHF Technical Report",
    year: "2023",
    type: "Technical Report",
    pdf_url: "#",
    created_at: ''
  },
  {
    id: '4',
    title: "Capacity Building in Child Development: Training Healthcare Workers",
    authors: "Ms. Sandhya Kulkarni, Dr. Samir H. Dalwai",
    journal: "Medical Education Review",
    year: "2022",
    type: "Research Paper",
    pdf_url: "#",
    created_at: ''
  },
  {
    id: '5',
    title: "Understanding Neurodevelopmental Stages: A Guide for Parents",
    authors: "Dr. Samir H. Dalwai",
    journal: "NHF Parent Resources",
    year: "2022",
    type: "Parent Guide",
    pdf_url: "#",
    created_at: ''
  },
  {
    id: '6',
    title: "Community-Based Developmental Screening: Lessons from Maharashtra",
    authors: "NHF Research Team, UNICEF India",
    journal: "Public Health Reports",
    year: "2021",
    type: "Research Paper",
    pdf_url: "#",
    created_at: ''
  }
];

const defaultAnnouncements: Announcement[] = [];

// Storage keys
const STORAGE_KEYS = {
  team: 'nhf_team_members',
  awards: 'nhf_awards',
  publications: 'nhf_publications',
  announcements: 'nhf_announcements',
};

// Helper functions for localStorage
const getFromStorage = <T,>(key: string, defaultValue: T[]): T[] => {
  try {
    const stored = localStorage.getItem(key);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Error reading from localStorage:', e);
  }
  return defaultValue;
};

const saveToStorage = <T,>(key: string, data: T[]): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Error saving to localStorage:', e);
  }
};

interface ContentContextType {
  teamMembers: TeamMember[];
  awards: Award[];
  publications: Publication[];
  announcements: Announcement[];
  loading: boolean;
  refreshContent: () => Promise<void>;
  // Admin functions
  saveTeamMember: (member: Partial<TeamMember>) => Promise<{ error: string | null }>;
  deleteTeamMember: (id: string) => Promise<{ error: string | null }>;
  saveAward: (award: Partial<Award>) => Promise<{ error: string | null }>;
  deleteAward: (id: string) => Promise<{ error: string | null }>;
  savePublication: (pub: Partial<Publication>) => Promise<{ error: string | null }>;
  deletePublication: (id: string) => Promise<{ error: string | null }>;
  saveAnnouncement: (ann: Partial<Announcement>) => Promise<{ error: string | null }>;
  deleteAnnouncement: (id: string) => Promise<{ error: string | null }>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [awards, setAwards] = useState<Award[]>([]);
  const [publications, setPublications] = useState<Publication[]>([]);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    setLoading(true);
    
    if (isSupabaseConfigured) {
      // Fetch from Supabase
      try {
        const [teamRes, awardsRes, pubsRes, annRes] = await Promise.all([
          supabase.from('team_members').select('*').order('order_index'),
          supabase.from('awards').select('*').order('created_at', { ascending: false }),
          supabase.from('publications').select('*').order('year', { ascending: false }),
          supabase.from('announcements').select('*').order('created_at', { ascending: false }),
        ]);

        setTeamMembers((teamRes as any).data?.length ? (teamRes as any).data : defaultTeamMembers);
        setAwards((awardsRes as any).data?.length ? (awardsRes as any).data : defaultAwards);
        setPublications((pubsRes as any).data?.length ? (pubsRes as any).data : defaultPublications);
        setAnnouncements((annRes as any).data || []);
      } catch (e) {
        console.error('Error fetching from Supabase:', e);
        // Fall back to defaults
        setTeamMembers(defaultTeamMembers);
        setAwards(defaultAwards);
        setPublications(defaultPublications);
        setAnnouncements([]);
      }
    } else {
      // Use localStorage or defaults
      setTeamMembers(getFromStorage(STORAGE_KEYS.team, defaultTeamMembers));
      setAwards(getFromStorage(STORAGE_KEYS.awards, defaultAwards));
      setPublications(getFromStorage(STORAGE_KEYS.publications, defaultPublications));
      setAnnouncements(getFromStorage(STORAGE_KEYS.announcements, defaultAnnouncements));
    }
    
    setLoading(false);
  };

  useEffect(() => {
    fetchContent();
  }, []);

  // Team Member CRUD
  const saveTeamMember = async (member: Partial<TeamMember>): Promise<{ error: string | null }> => {
    if (isSupabaseConfigured) {
      if (member.id) {
        const { error } = await (supabase.from('team_members').update(member).eq('id', member.id) as any);
        if (error) return { error: error.message };
      } else {
        const { error } = await (supabase.from('team_members').insert(member) as any);
        if (error) return { error: error.message };
      }
    } else {
      const current = getFromStorage<TeamMember>(STORAGE_KEYS.team, defaultTeamMembers);
      if (member.id) {
        const index = current.findIndex(m => m.id === member.id);
        if (index >= 0) current[index] = { ...current[index], ...member };
      } else {
        current.push({ ...member, id: Date.now().toString(), created_at: new Date().toISOString() } as TeamMember);
      }
      saveToStorage(STORAGE_KEYS.team, current);
    }
    await fetchContent();
    return { error: null };
  };

  const deleteTeamMember = async (id: string): Promise<{ error: string | null }> => {
    if (isSupabaseConfigured) {
      const { error } = await (supabase.from('team_members').delete().eq('id', id) as any);
      if (error) return { error: error.message };
    } else {
      const current = getFromStorage<TeamMember>(STORAGE_KEYS.team, defaultTeamMembers);
      saveToStorage(STORAGE_KEYS.team, current.filter(m => m.id !== id));
    }
    await fetchContent();
    return { error: null };
  };

  // Award CRUD
  const saveAward = async (award: Partial<Award>): Promise<{ error: string | null }> => {
    if (isSupabaseConfigured) {
      if (award.id) {
        const { error } = await (supabase.from('awards').update(award).eq('id', award.id) as any);
        if (error) return { error: error.message };
      } else {
        const { error } = await (supabase.from('awards').insert(award) as any);
        if (error) return { error: error.message };
      }
    } else {
      const current = getFromStorage<Award>(STORAGE_KEYS.awards, defaultAwards);
      if (award.id) {
        const index = current.findIndex(a => a.id === award.id);
        if (index >= 0) current[index] = { ...current[index], ...award };
      } else {
        current.push({ ...award, id: Date.now().toString(), created_at: new Date().toISOString() } as Award);
      }
      saveToStorage(STORAGE_KEYS.awards, current);
    }
    await fetchContent();
    return { error: null };
  };

  const deleteAward = async (id: string): Promise<{ error: string | null }> => {
    if (isSupabaseConfigured) {
      const { error } = await (supabase.from('awards').delete().eq('id', id) as any);
      if (error) return { error: error.message };
    } else {
      const current = getFromStorage<Award>(STORAGE_KEYS.awards, defaultAwards);
      saveToStorage(STORAGE_KEYS.awards, current.filter(a => a.id !== id));
    }
    await fetchContent();
    return { error: null };
  };

  // Publication CRUD
  const savePublication = async (pub: Partial<Publication>): Promise<{ error: string | null }> => {
    if (isSupabaseConfigured) {
      if (pub.id) {
        const { error } = await (supabase.from('publications').update(pub).eq('id', pub.id) as any);
        if (error) return { error: error.message };
      } else {
        const { error } = await (supabase.from('publications').insert(pub) as any);
        if (error) return { error: error.message };
      }
    } else {
      const current = getFromStorage<Publication>(STORAGE_KEYS.publications, defaultPublications);
      if (pub.id) {
        const index = current.findIndex(p => p.id === pub.id);
        if (index >= 0) current[index] = { ...current[index], ...pub };
      } else {
        current.push({ ...pub, id: Date.now().toString(), created_at: new Date().toISOString() } as Publication);
      }
      saveToStorage(STORAGE_KEYS.publications, current);
    }
    await fetchContent();
    return { error: null };
  };

  const deletePublication = async (id: string): Promise<{ error: string | null }> => {
    if (isSupabaseConfigured) {
      const { error } = await (supabase.from('publications').delete().eq('id', id) as any);
      if (error) return { error: error.message };
    } else {
      const current = getFromStorage<Publication>(STORAGE_KEYS.publications, defaultPublications);
      saveToStorage(STORAGE_KEYS.publications, current.filter(p => p.id !== id));
    }
    await fetchContent();
    return { error: null };
  };

  // Announcement CRUD
  const saveAnnouncement = async (ann: Partial<Announcement>): Promise<{ error: string | null }> => {
    if (isSupabaseConfigured) {
      if (ann.id) {
        const { error } = await (supabase.from('announcements').update(ann).eq('id', ann.id) as any);
        if (error) return { error: error.message };
      } else {
        const { error } = await (supabase.from('announcements').insert(ann) as any);
        if (error) return { error: error.message };
      }
    } else {
      const current = getFromStorage<Announcement>(STORAGE_KEYS.announcements, defaultAnnouncements);
      if (ann.id) {
        const index = current.findIndex(a => a.id === ann.id);
        if (index >= 0) current[index] = { ...current[index], ...ann };
      } else {
        current.push({ ...ann, id: Date.now().toString(), created_at: new Date().toISOString() } as Announcement);
      }
      saveToStorage(STORAGE_KEYS.announcements, current);
    }
    await fetchContent();
    return { error: null };
  };

  const deleteAnnouncement = async (id: string): Promise<{ error: string | null }> => {
    if (isSupabaseConfigured) {
      const { error } = await (supabase.from('announcements').delete().eq('id', id) as any);
      if (error) return { error: error.message };
    } else {
      const current = getFromStorage<Announcement>(STORAGE_KEYS.announcements, defaultAnnouncements);
      saveToStorage(STORAGE_KEYS.announcements, current.filter(a => a.id !== id));
    }
    await fetchContent();
    return { error: null };
  };

  return (
    <ContentContext.Provider value={{
      teamMembers,
      awards,
      publications,
      announcements,
      loading,
      refreshContent: fetchContent,
      saveTeamMember,
      deleteTeamMember,
      saveAward,
      deleteAward,
      savePublication,
      deletePublication,
      saveAnnouncement,
      deleteAnnouncement,
    }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
