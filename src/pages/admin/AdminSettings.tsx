import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase, SiteSettings } from "@/lib/supabase";
import { Save, Loader2, Settings, Globe, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    site_name: "New Horizons Health and Research Foundation",
    contact_email: "research@enablemychild.org",
    whatsapp_number: "919876543210",
    address: "Saira Mansion, Pahadi School Road No. 2, Opposite Pahadi School, Goregaon (East), Mumbai, Maharashtra – 400063, India",
    twitter_handle: "@NHFoundation",
    web3forms_key: "",
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const fetchSettings = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from("site_settings")
        .select("*");

      if (error) throw error;

      if (data) {
        const settingsObj: any = {};
        data.forEach((item: SiteSettings) => {
          settingsObj[item.key] = item.value;
        });
        setSettings((prev) => ({ ...prev, ...settingsObj }));
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  const handleSave = async () => {
    setSaving(true);

    try {
      // Upsert each setting
      for (const [key, value] of Object.entries(settings)) {
        const { error } = await supabase
          .from("site_settings")
          .upsert({ key, value }, { onConflict: "key" });
        if (error) throw error;
      }

      toast({ title: "Saved", description: "Settings saved successfully" });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save settings",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold font-serif">Settings</h1>
            <p className="text-muted-foreground mt-1">
              Configure website settings
            </p>
          </div>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
            ) : (
              <Save className="w-4 h-4 mr-2" />
            )}
            Save Changes
          </Button>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <div className="grid gap-6">
            {/* General Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  General Settings
                </CardTitle>
                <CardDescription>
                  Basic website information
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Site Name</label>
                  <Input
                    value={settings.site_name}
                    onChange={(e) => setSettings({ ...settings, site_name: e.target.value })}
                    placeholder="New Horizons Health and Research Foundation"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Address</label>
                  <Input
                    value={settings.address}
                    onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                    placeholder="Full address"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Twitter Handle</label>
                  <Input
                    value={settings.twitter_handle}
                    onChange={(e) => setSettings({ ...settings, twitter_handle: e.target.value })}
                    placeholder="@NHFoundation"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Contact Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Settings
                </CardTitle>
                <CardDescription>
                  Contact information displayed on the website
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Contact Email</label>
                  <Input
                    type="email"
                    value={settings.contact_email}
                    onChange={(e) => setSettings({ ...settings, contact_email: e.target.value })}
                    placeholder="research@enablemychild.org"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">WhatsApp Number</label>
                  <Input
                    value={settings.whatsapp_number}
                    onChange={(e) => setSettings({ ...settings, whatsapp_number: e.target.value })}
                    placeholder="919876543210 (country code without +)"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Format: Country code + number without + (e.g., 919876543210 for +91 9876543210)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* API Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  API Settings
                </CardTitle>
                <CardDescription>
                  Third-party service configurations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Web3Forms Access Key</label>
                  <Input
                    type="password"
                    value={settings.web3forms_key}
                    onChange={(e) => setSettings({ ...settings, web3forms_key: e.target.value })}
                    placeholder="Your Web3Forms access key"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Get a free API key from <a href="https://web3forms.com" target="_blank" className="text-primary underline">web3forms.com</a> for contact form emails
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Supabase Info */}
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-base">Supabase Configuration</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-2">
                <p>To enable database functionality, add these environment variables:</p>
                <div className="bg-muted p-3 rounded-lg font-mono text-xs">
                  <p>VITE_SUPABASE_URL=your_supabase_url</p>
                  <p>VITE_SUPABASE_ANON_KEY=your_anon_key</p>
                </div>
                <p className="mt-4">
                  Create a <code className="bg-muted px-1 rounded">.env</code> file in the project root with these values from your Supabase dashboard.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
