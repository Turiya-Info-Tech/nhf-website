import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import AdminLayout from "@/components/admin/AdminLayout";
import { Award } from "@/lib/supabase";
import { useContent } from "@/lib/content";
import { Plus, Pencil, Trash2, Loader2, Trophy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminAwards = () => {
  const { awards, loading, saveAward, deleteAward } = useContent();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: "",
    organization: "",
    year: new Date().getFullYear().toString(),
    description: "",
  });

  const resetForm = () => {
    setFormData({
      title: "",
      organization: "",
      year: new Date().getFullYear().toString(),
      description: "",
    });
    setEditingId(null);
  };

  const handleEdit = (award: Award) => {
    setFormData({
      title: award.title,
      organization: award.organization,
      year: award.year,
      description: award.description,
    });
    setEditingId(award.id);
    setDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const { error } = await saveAward(
        editingId ? { ...formData, id: editingId } : formData
      );
      
      if (error) throw new Error(error);
      
      toast({ 
        title: editingId ? "Updated" : "Created", 
        description: `Award ${editingId ? 'updated' : 'added'} successfully` 
      });

      setDialogOpen(false);
      resetForm();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to save award",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this award?")) return;

    try {
      const { error } = await deleteAward(id);
      if (error) throw new Error(error);
      toast({ title: "Deleted", description: "Award deleted successfully" });
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
            <h1 className="text-3xl font-bold font-serif">Awards</h1>
            <p className="text-muted-foreground mt-1">
              Manage awards and achievements
            </p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={(open) => { setDialogOpen(open); if (!open) resetForm(); }}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Award
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>{editingId ? "Edit Award" : "Add New Award"}</DialogTitle>
                <DialogDescription>
                  Fill in the details for this award
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Award Title *</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Excellence in Child Development Research"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Awarding Organization *</label>
                  <Input
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Indian Academy of Pediatrics"
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
                <div>
                  <label className="text-sm font-medium">Description *</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Recognition for groundbreaking research..."
                    rows={3}
                    required
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

        {/* Awards List */}
        <Card>
          <CardHeader>
            <CardTitle>All Awards</CardTitle>
            <CardDescription>
              {awards.length} award{awards.length !== 1 ? "s" : ""} total
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
              </div>
            ) : awards.length === 0 ? (
              <div className="text-center py-12">
                <Trophy className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No awards yet</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Add your first award to get started
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {awards.map((award) => (
                  <div
                    key={award.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-12 h-12 rounded-lg bg-yellow-100 flex items-center justify-center shrink-0">
                        <Trophy className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium truncate">{award.title}</p>
                        <p className="text-sm text-muted-foreground truncate">
                          {award.organization} • {award.year}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-4">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(award)}>
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleDelete(award.id)}
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

export default AdminAwards;
