import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import AdminLayout from "@/components/admin/AdminLayout";
import { Publication } from "@/lib/supabase";
import { useContent } from "@/lib/content";
import { Plus, Pencil, Trash2, Loader2, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminPublications = () => {
  const { publications, loading, savePublication, deletePublication } = useContent();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: "",
    authors: "",
    journal: "",
    year: new Date().getFullYear().toString(),
    type: "Research Paper",
    pdf_url: "",
  });

  const resetForm = () => {
    setFormData({
      title: "",
      authors: "",
      journal: "",
      year: new Date().getFullYear().toString(),
      type: "Research Paper",
      pdf_url: "",
    });
    setEditingId(null);
  };

  const handleEdit = (pub: Publication) => {
    setFormData({
      title: pub.title,
      authors: pub.authors,
      journal: pub.journal,
      year: pub.year,
      type: pub.type,
      pdf_url: pub.pdf_url || "",
    });
    setEditingId(pub.id);
    setDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const { error } = await savePublication(
        editingId ? { ...formData, id: editingId } : formData
      );
      
      if (error) throw new Error(error);
      
      toast({ 
        title: editingId ? "Updated" : "Created", 
        description: `Publication ${editingId ? 'updated' : 'added'} successfully` 
      });

      setDialogOpen(false);
      resetForm();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save publication",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this publication?")) return;

    try {
      const { error } = await deletePublication(id);
      if (error) throw new Error(error);
      toast({ title: "Deleted", description: "Publication deleted successfully" });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to delete",
        variant: "destructive",
      });
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold font-serif">Publications</h1>
            <p className="text-muted-foreground mt-1">
              Manage research papers and publications
            </p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={(open) => { setDialogOpen(open); if (!open) resetForm(); }}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Publication
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>{editingId ? "Edit Publication" : "Add New Publication"}</DialogTitle>
                <DialogDescription>
                  Fill in the details for this publication
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Title *</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Publication title"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Authors *</label>
                  <Input
                    value={formData.authors}
                    onChange={(e) => setFormData({ ...formData, authors: e.target.value })}
                    placeholder="Dr. Name, Dr. Name"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Journal/Source *</label>
                    <Input
                      value={formData.journal}
                      onChange={(e) => setFormData({ ...formData, journal: e.target.value })}
                      placeholder="Journal name"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Year *</label>
                    <Input
                      value={formData.year}
                      onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                      placeholder="2024"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium">Type</label>
                  <Select value={formData.type} onValueChange={(val) => setFormData({ ...formData, type: val })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Research Paper">Research Paper</SelectItem>
                      <SelectItem value="Technical Report">Technical Report</SelectItem>
                      <SelectItem value="Parent Guide">Parent Guide</SelectItem>
                      <SelectItem value="Policy Document">Policy Document</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium">PDF URL</label>
                  <Input
                    value={formData.pdf_url}
                    onChange={(e) => setFormData({ ...formData, pdf_url: e.target.value })}
                    placeholder="https://... or upload in File Uploads section"
                  />
                </div>
                <div className="flex justify-end gap-3 pt-4">
                  <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={saving}>
                    {saving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
                    {editingId ? "Update" : "Create"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Publications List */}
        <Card>
          <CardHeader>
            <CardTitle>All Publications</CardTitle>
            <CardDescription>
              {publications.length} publication{publications.length !== 1 ? "s" : ""} total
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
              </div>
            ) : publications.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No publications yet</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Add your first publication to get started
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {publications.map((pub) => (
                  <div
                    key={pub.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="font-medium truncate">{pub.title}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {pub.authors} • {pub.journal} • {pub.year}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-4">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded hidden sm:block">
                        {pub.type}
                      </span>
                      <Button variant="outline" size="sm" onClick={() => handleEdit(pub)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleDelete(pub.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminPublications;
