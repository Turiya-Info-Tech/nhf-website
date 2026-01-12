-- =============================================
-- NHF Admin Dashboard - Supabase Database Setup
-- =============================================
-- Run this SQL in your Supabase SQL Editor to create the required tables

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- Publications Table
-- =============================================
CREATE TABLE IF NOT EXISTS publications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  authors TEXT NOT NULL,
  journal TEXT NOT NULL,
  year TEXT NOT NULL,
  type TEXT DEFAULT 'Research Paper',
  pdf_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE publications ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access
CREATE POLICY "Allow public read access on publications" ON publications
  FOR SELECT USING (true);

-- Policy: Allow authenticated users to manage
CREATE POLICY "Allow authenticated users to manage publications" ON publications
  FOR ALL USING (auth.role() = 'authenticated');

-- =============================================
-- Team Members Table
-- =============================================
CREATE TABLE IF NOT EXISTS team_members (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT NOT NULL,
  image_url TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access
CREATE POLICY "Allow public read access on team_members" ON team_members
  FOR SELECT USING (true);

-- Policy: Allow authenticated users to manage
CREATE POLICY "Allow authenticated users to manage team_members" ON team_members
  FOR ALL USING (auth.role() = 'authenticated');

-- =============================================
-- Awards Table
-- =============================================
CREATE TABLE IF NOT EXISTS awards (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  organization TEXT NOT NULL,
  year TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE awards ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access
CREATE POLICY "Allow public read access on awards" ON awards
  FOR SELECT USING (true);

-- Policy: Allow authenticated users to manage
CREATE POLICY "Allow authenticated users to manage awards" ON awards
  FOR ALL USING (auth.role() = 'authenticated');

-- =============================================
-- Announcements Table
-- =============================================
CREATE TABLE IF NOT EXISTS announcements (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE announcements ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access for active announcements
CREATE POLICY "Allow public read access on active announcements" ON announcements
  FOR SELECT USING (is_active = true);

-- Policy: Allow authenticated users to manage
CREATE POLICY "Allow authenticated users to manage announcements" ON announcements
  FOR ALL USING (auth.role() = 'authenticated');

-- =============================================
-- Site Settings Table
-- =============================================
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access
CREATE POLICY "Allow public read access on site_settings" ON site_settings
  FOR SELECT USING (true);

-- Policy: Allow authenticated users to manage
CREATE POLICY "Allow authenticated users to manage site_settings" ON site_settings
  FOR ALL USING (auth.role() = 'authenticated');

-- =============================================
-- Storage Bucket for Publications (PDFs)
-- =============================================
-- Note: Run this in the Supabase Dashboard > Storage > New Bucket
-- Bucket Name: publications
-- Public: Yes (for public download links)

-- Or use SQL:
INSERT INTO storage.buckets (id, name, public)
VALUES ('publications', 'publications', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policy for authenticated uploads
CREATE POLICY "Allow authenticated uploads to publications" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'publications' AND
    auth.role() = 'authenticated'
  );

-- Storage policy for public reads
CREATE POLICY "Allow public reads from publications" ON storage.objects
  FOR SELECT USING (bucket_id = 'publications');

-- Storage policy for authenticated deletes
CREATE POLICY "Allow authenticated deletes from publications" ON storage.objects
  FOR DELETE USING (
    bucket_id = 'publications' AND
    auth.role() = 'authenticated'
  );

-- =============================================
-- Insert Default Settings
-- =============================================
INSERT INTO site_settings (key, value) VALUES
  ('site_name', 'New Horizons Health and Research Foundation'),
  ('contact_email', 'research@enablemychild.org'),
  ('whatsapp_number', '919876543210'),
  ('address', 'Saira Mansion, Pahadi School Road No. 2, Opposite Pahadi School, Goregaon (East), Mumbai, Maharashtra – 400063, India'),
  ('twitter_handle', '@NHFoundation'),
  ('web3forms_key', '')
ON CONFLICT (key) DO NOTHING;

-- =============================================
-- Sample Data (Optional)
-- =============================================

-- Sample Publications
INSERT INTO publications (title, authors, journal, year, type) VALUES
  ('Early Intervention in Neurodevelopmental Disorders', 'Dr. Samir H. Dalwai, Dr. Hilla Sookhadwala', 'Indian Journal of Pediatrics', '2024', 'Research Paper'),
  ('Parent-Mediated Interventions for Children with Developmental Delays', 'Dr. Samir H. Dalwai et al.', 'Journal of Developmental & Behavioral Pediatrics', '2023', 'Research Paper')
ON CONFLICT DO NOTHING;

-- Sample Team Members
INSERT INTO team_members (name, role, bio, order_index) VALUES
  ('Dr. Samir H. Dalwai', 'Founder & Director', 'Developmental Pediatrician with 25+ years of experience.', 1),
  ('Dr. Hilla Sookhadwala', 'Developmental Pediatrician', 'Medical leadership for research and clinical program development.', 2)
ON CONFLICT DO NOTHING;

-- Sample Awards
INSERT INTO awards (title, organization, year, description) VALUES
  ('Excellence in Child Development Research', 'Indian Academy of Pediatrics', '2023', 'Recognition for groundbreaking research in early intervention.')
ON CONFLICT DO NOTHING;
