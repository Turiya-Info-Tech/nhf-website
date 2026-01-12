# 🔐 NHF Admin Dashboard - Setup Guide

A complete admin panel for managing the NHF website content including publications, team members, awards, announcements, and PDF file uploads.

## 🚀 Quick Start

### 1. Create a Supabase Project

1. Go to [Supabase](https://supabase.com) and create a free account
2. Click "New Project" and fill in:
   - **Project name**: nhf-website
   - **Database password**: Choose a strong password
   - **Region**: Choose closest to your users
3. Wait for the project to finish provisioning

### 2. Get Your API Keys

1. In your Supabase dashboard, go to **Settings → API**
2. Copy:
   - **Project URL** (looks like `https://xxxxx.supabase.co`)
   - **anon public** key (long string starting with `eyJ...`)

### 3. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

### 4. Set Up Database Tables

1. In Supabase dashboard, go to **SQL Editor**
2. Click "New query"
3. Copy the contents of `supabase-setup.sql` and paste it
4. Click "Run" to execute the SQL

This creates:
- `publications` table
- `team_members` table
- `awards` table
- `announcements` table
- `site_settings` table
- `publications` storage bucket for PDFs

### 5. Create Admin User

1. Go to **Authentication → Users** in Supabase
2. Click "Add user" → "Create new user"
3. Enter:
   - **Email**: your admin email
   - **Password**: a strong password
   - Check "Auto-confirm user"
4. Click "Create user"

### 6. Start the Development Server

```bash
npm run dev
```

### 7. Access Admin Panel

Navigate to: `http://localhost:8080/admin`

Log in with the admin user credentials you created.

---

## 📁 Admin Panel Structure

```
/admin                    → Login page
/admin/dashboard          → Overview with stats
/admin/publications       → Manage research papers & publications
/admin/team               → Manage team members
/admin/awards             → Manage awards & recognitions
/admin/announcements      → Manage homepage announcements
/admin/uploads            → Upload & manage PDF files
/admin/settings           → Site-wide settings
```

---

## 🔧 Features

### Publications Management
- Add/Edit/Delete publications
- Upload PDF files
- Categorize by type (Research Paper, Book Chapter, Guidelines, etc.)

### Team Members Management
- Add/Edit/Delete team member profiles
- Upload profile images
- Set display order

### Awards Management
- Add/Edit/Delete awards and recognitions
- Track year and organization

### Announcements
- Create announcements for the homepage
- Toggle active/inactive status
- Rich content support

### File Uploads
- Upload PDFs to Supabase Storage
- Get public download links
- Manage uploaded files

### Site Settings
- Site name
- Contact information
- Social media links
- API keys

---

## 🔒 Security

- All admin routes are protected by authentication
- Row Level Security (RLS) enabled on all tables
- Public read access for content
- Write access requires authentication
- Passwords are handled securely by Supabase Auth

---

## 📝 Troubleshooting

### "Invalid login credentials"
- Make sure you created the user in Supabase Authentication
- Check that the email and password are correct
- Ensure "Auto-confirm user" was checked

### "No data appearing"
- Verify the SQL setup ran successfully
- Check the browser console for errors
- Ensure Supabase URL and key are correct in `.env`

### "File upload fails"
- Make sure the `publications` storage bucket exists
- Check that storage policies were created
- Verify you're logged in to the admin panel

### "Connection refused"
- Restart the dev server after adding `.env` file
- Verify Supabase project is active (not paused)

---

## 🌐 Deployment

For production deployment:

1. Set environment variables on your hosting platform (Vercel, Netlify, etc.)
2. Build the project: `npm run build`
3. Deploy the `dist` folder

The admin panel will work the same way in production - just access `/admin` on your deployed site.

---

## 📧 Contact

For issues with the admin panel, contact the development team.
