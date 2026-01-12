import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AdminLayout from "@/components/admin/AdminLayout";
import { FileText, Users, Award, Upload, Eye, TrendingUp, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { useContent } from "@/lib/content";

const AdminDashboard = () => {
  const { publications, teamMembers, awards, announcements } = useContent();
  
  const stats = [
    { label: "Publications", value: publications.length.toString(), icon: FileText, href: "/admin/publications", color: "bg-blue-500" },
    { label: "Team Members", value: teamMembers.length.toString(), icon: Users, href: "/admin/team", color: "bg-green-500" },
    { label: "Awards", value: awards.length.toString(), icon: Award, href: "/admin/awards", color: "bg-yellow-500" },
    { label: "Announcements", value: announcements.filter(a => a.is_active).length.toString(), icon: Bell, href: "/admin/announcements", color: "bg-purple-500" },
  ];

  const quickActions = [
    { label: "Add Publication", href: "/admin/publications", icon: FileText },
    { label: "Add Team Member", href: "/admin/team", icon: Users },
    { label: "Upload PDF", href: "/admin/uploads", icon: Upload },
    { label: "View Website", href: "/", icon: Eye },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold font-serif">Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Welcome to the NHF Admin Dashboard
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Link key={stat.label} to={stat.href}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold mt-1">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks you can perform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action) => (
                <Link
                  key={action.label}
                  to={action.href}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <action.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{action.label}</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Setup Instructions */}
        <Card className="border-primary/30 bg-primary/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Setup Instructions
            </CardTitle>
            <CardDescription>Complete these steps to enable full functionality</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">1</span>
                <div>
                  <p className="font-medium">Create a Supabase Account</p>
                  <p className="text-muted-foreground">Go to <a href="https://supabase.com" target="_blank" className="text-primary underline">supabase.com</a> and create a free account</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <div>
                  <p className="font-medium">Create a New Project</p>
                  <p className="text-muted-foreground">Create a new project and copy your API URL and anon key</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">3</span>
                <div>
                  <p className="font-medium">Update Environment Variables</p>
                  <p className="text-muted-foreground">Create a <code className="bg-muted px-1 rounded">.env</code> file with VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">4</span>
                <div>
                  <p className="font-medium">Run Database Setup</p>
                  <p className="text-muted-foreground">Go to Supabase SQL Editor and run the setup script from <code className="bg-muted px-1 rounded">supabase-setup.sql</code></p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0">5</span>
                <div>
                  <p className="font-medium">Create Admin User</p>
                  <p className="text-muted-foreground">In Supabase Authentication, create a new user with email/password</p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
