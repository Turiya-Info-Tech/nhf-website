import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/lib/auth";
import { ContentProvider } from "@/lib/content";
import { LanguageProvider } from "@/lib/language";
import Index from "./pages/Index";
import Research from "./pages/Research";
import NotFound from "./pages/NotFound";

// Admin Pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminPublications from "./pages/admin/AdminPublications";
import AdminTeam from "./pages/admin/AdminTeam";
import AdminAwards from "./pages/admin/AdminAwards";
import AdminAnnouncements from "./pages/admin/AdminAnnouncements";
import AdminUploads from "./pages/admin/AdminUploads";
import AdminSettings from "./pages/admin/AdminSettings";
import ProtectedRoute from "./components/admin/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <ContentProvider>
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Index />} />
                <Route path="/research" element={<Research />} />
                
                {/* Admin Routes */}
                <Route path="/admin" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={
                  <ProtectedRoute><AdminDashboard /></ProtectedRoute>
                } />
                <Route path="/admin/publications" element={
                  <ProtectedRoute><AdminPublications /></ProtectedRoute>
                } />
                <Route path="/admin/team" element={
                  <ProtectedRoute><AdminTeam /></ProtectedRoute>
                } />
                <Route path="/admin/awards" element={
                  <ProtectedRoute><AdminAwards /></ProtectedRoute>
                } />
                <Route path="/admin/announcements" element={
                  <ProtectedRoute><AdminAnnouncements /></ProtectedRoute>
                } />
                <Route path="/admin/uploads" element={
                  <ProtectedRoute><AdminUploads /></ProtectedRoute>
                } />
                <Route path="/admin/settings" element={
                  <ProtectedRoute><AdminSettings /></ProtectedRoute>
                } />
                
                {/* Catch-all Route */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </LanguageProvider>
      </ContentProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
