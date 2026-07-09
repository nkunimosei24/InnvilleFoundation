import { useEffect, useState } from "react";
import { supabase } from "../../lib/src/lib/supabase";
import { useAuth } from "../../context/AuthContext";
import { Trash2, Plus, X, LogOut, Mail, UserPlus, Calendar, Layers, Image as ImageIcon } from "lucide-react";
import { programs } from "../../utils/program";

const EVENT_CATEGORIES = [
  "Entrepreneurship",
  "Skills Training & Development",
  "Youth Advocacy & Community",
];

const PROGRAM_CATEGORIES = [
  "Entrepreneurship",
  "Skills Training & Development",
  "Youth Advocacy & Community",
];

const TABS = [
  { key: "submissions", label: "Messages", icon: Mail },
  { key: "registrations", label: "Registrations", icon: UserPlus },
  { key: "events", label: "Events", icon: Calendar },
  { key: "programs", label: "Programs", icon: Layers },
  { key: "gallery", label: "Gallery", icon: ImageIcon },
];

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("submissions");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-red-500 font-semibold uppercase tracking-widest text-xs">
              Innville Foundation
            </p>
            <h1 className="text-lg font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 hidden sm:inline">{user?.email}</span>
            <button
              onClick={logout}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-red-500 transition-colors"
            >
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </div>

        {/* TABS */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex gap-1 overflow-x-auto">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  isActive
                    ? "border-red-500 text-red-500"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {activeTab === "submissions" && <SubmissionsPanel />}
        {activeTab === "registrations" && <RegistrationsPanel />}
        {activeTab === "events" && <EventsPanel />}
        {activeTab === "programs" && <ProgramsPanel />}
        {activeTab === "gallery" && <GalleryPanel />}
      </main>
    </div>
  );
}

/* ---------------- SHARED HELPERS ---------------- */

function EmptyState({ label }) {
  return (
    <div className="text-center py-16 text-gray-400 text-sm">
      No {label} yet.
    </div>
  );
}

function LoadingState() {
  return <div className="text-center py-16 text-gray-400 text-sm">Loading...</div>;
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleString(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

/* ---------------- MESSAGES (contact_submissions) ---------------- */

function SubmissionsPanel() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRows = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setRows(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRows();
  }, []);

  const updateStatus = async (id, status) => {
    await supabase.from("contact_submissions").update({ status }).eq("id", id);
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
  };

  const deleteRow = async (id) => {
    if (!confirm("Delete this message permanently?")) return;
    await supabase.from("contact_submissions").delete().eq("id", id);
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  if (loading) return <LoadingState />;
  if (rows.length === 0) return <EmptyState label="messages" />;

  return (
    <div className="space-y-4">
      {rows.map((row) => (
        <div
          key={row.id}
          className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-semibold text-gray-900">{row.name}</p>
              <p className="text-sm text-gray-500">{row.email}</p>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={row.status}
                onChange={(e) => updateStatus(row.id, e.target.value)}
                className="text-xs border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="new">New</option>
                <option value="read">Read</option>
                <option value="responded">Responded</option>
              </select>
              <button
                onClick={() => deleteRow(row.id)}
                aria-label="Delete"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="mt-3 text-xs font-semibold text-red-500 uppercase tracking-wide">
            {row.reason}
          </p>
          <p className="mt-2 text-sm text-gray-700 leading-relaxed">{row.message}</p>
          <p className="mt-3 text-xs text-gray-400">{formatDate(row.created_at)}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------------- REGISTRATIONS ---------------- */

function RegistrationsPanel() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRows = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("registrations")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setRows(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRows();
  }, []);

  const updateStatus = async (id, status) => {
    await supabase.from("registrations").update({ status }).eq("id", id);
    setRows((prev) => prev.map((r) => (r.id === id ? { ...r, status } : r)));
  };

  const deleteRow = async (id) => {
    if (!confirm("Delete this registration permanently?")) return;
    await supabase.from("registrations").delete().eq("id", id);
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  if (loading) return <LoadingState />;
  if (rows.length === 0) return <EmptyState label="registrations" />;

  return (
    <div className="space-y-4">
      {rows.map((row) => (
        <div
          key={row.id}
          className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm"
        >
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-semibold text-gray-900">{row.name}</p>
              <p className="text-sm text-gray-500">{row.email} · {row.phone}</p>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={row.status}
                onChange={(e) => updateStatus(row.id, e.target.value)}
                className="text-xs border border-gray-200 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="confirmed">Confirmed</option>
              </select>
              <button
                onClick={() => deleteRow(row.id)}
                aria-label="Delete"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          <p className="mt-3 text-xs font-semibold text-red-500 uppercase tracking-wide">
            {row.program_title}
          </p>
          {row.message && (
            <p className="mt-2 text-sm text-gray-700 leading-relaxed">{row.message}</p>
          )}
          <p className="mt-3 text-xs text-gray-400">{formatDate(row.created_at)}</p>
        </div>
      ))}
    </div>
  );
}

/* ---------------- EVENTS (full CRUD) ---------------- */

const emptyEvent = {
  title: "",
  event_date: "",
  event_time: "",
  location: "",
  category: "",
  program_slug: "",
  image_url: "",
};

function EventsPanel() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyEvent);
  const [saving, setSaving] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [uploadError, setUploadError] = useState("");

  const fetchRows = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("event_date", { ascending: true });
    if (!error) setRows(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRows();
  }, []);

  const openNewForm = () => {
    setForm(emptyEvent);
    setEditingId(null);
    setImageFile(null);
    setImagePreview("");
    setUploadError("");
    setShowForm(true);
  };

  const openEditForm = (row) => {
    setForm(row);
    setEditingId(row.id);
    setImageFile(null);
    setImagePreview(row.image_url || "");
    setUploadError("");
    setShowForm(true);
  };

  const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > MAX_IMAGE_SIZE) {
      setUploadError("Image is too large. Please choose a file under 2MB.");
      e.target.value = "";
      return;
    }

    setUploadError("");
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setUploadError("");

    let finalForm = { ...form };

    // If a new local file was picked, upload it and use the resulting public URL
    if (imageFile) {
      const fileExt = imageFile.name.split(".").pop();
      const filePath = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;

      const { error: uploadErr } = await supabase.storage
        .from("event-images")
        .upload(filePath, imageFile);

      if (uploadErr) {
        setUploadError("Image upload failed. Please try again.");
        setSaving(false);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("event-images")
        .getPublicUrl(filePath);

      finalForm.image_url = publicUrlData.publicUrl;
    }

    if (editingId) {
      await supabase.from("events").update(finalForm).eq("id", editingId);
    } else {
      await supabase.from("events").insert([finalForm]);
    }

    setSaving(false);
    setShowForm(false);
    fetchRows();
  };

  const deleteRow = async (id) => {
    if (!confirm("Delete this event permanently?")) return;
    await supabase.from("events").delete().eq("id", id);
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div>
      <div className="flex justify-end mb-5">
        <button
          onClick={openNewForm}
          className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Event
        </button>
      </div>

      {loading ? (
        <LoadingState />
      ) : rows.length === 0 ? (
        <EmptyState label="events" />
      ) : (
        <div className="space-y-4">
          {rows.map((row) => (
            <div
              key={row.id}
              className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex flex-wrap items-start justify-between gap-3"
            >
              <div>
                <p className="font-semibold text-gray-900">{row.title}</p>
                <p className="text-sm text-gray-500 mt-0.5">
                  {row.event_date} {row.event_time && `· ${row.event_time}`} · {row.location}
                </p>
                {row.category && (
                  <p className="mt-1.5 text-xs font-semibold text-red-500 uppercase tracking-wide">
                    {row.category}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => openEditForm(row)}
                  className="text-sm font-medium text-gray-600 hover:text-red-500 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteRow(row.id)}
                  aria-label="Delete"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ADD / EDIT MODAL */}
      {showForm && (
        <div
          onClick={() => setShowForm(false)}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 pb-0">
              <h3 className="text-lg font-semibold text-gray-900">
                {editingId ? "Edit Event" : "Add Event"}
              </h3>
              <button
                onClick={() => setShowForm(false)}
                aria-label="Close"
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Title</label>
                <input
                  type="text" name="title" required value={form.title} onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Date</label>
                  <input
                    type="date" name="event_date" required value={form.event_date} onChange={handleChange}
                    className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Time</label>
                  <input
                    type="text" name="event_time" placeholder="9:00 AM" value={form.event_time} onChange={handleChange}
                    className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Location</label>
                <input
                  type="text" name="location" value={form.location} onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Category</label>
                <select
                  name="category" required value={form.category} onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                >
                  <option value="" disabled>Select a category</option>
                  {EVENT_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Linked Program (optional)
                </label>
                <select
                  name="program_slug" value={form.program_slug} onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                >
                  <option value="">None</option>
                  {programs.map((p) => (
                    <option key={p.slug} value={p.slug}>{p.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Event Image (optional)
                </label>
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-32 object-cover rounded-lg mb-2 border border-gray-200"
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full text-sm text-gray-600 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-red-50 file:text-red-600 hover:file:bg-red-100 file:cursor-pointer cursor-pointer"
                />
                {uploadError && (
                  <p className="mt-1.5 text-sm text-red-600">{uploadError}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={saving}
                className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors disabled:opacity-60"
              >
                {saving ? "Uploading & Saving..." : editingId ? "Save Changes" : "Add Event"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- PROGRAMS (admin-added, full CRUD) ---------------- */

const emptyProgram = {
  slug: "",
  title: "",
  tagline: "",
  category: "",
  description: "",
  who_for: "",   // newline-separated in the form, converted to array on save
  impact: "",    // newline-separated in the form, converted to array on save
  why_matters: "",
  get_involved: "",
};

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function ProgramsPanel() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(emptyProgram);
  const [saving, setSaving] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [error, setError] = useState("");

  const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB

  const fetchRows = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("programs")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setRows(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRows();
  }, []);

  const openNewForm = () => {
    setForm(emptyProgram);
    setEditingId(null);
    setImageFile(null);
    setImagePreview("");
    setError("");
    setShowForm(true);
  };

  const openEditForm = (row) => {
    setForm({
      ...row,
      who_for: (row.who_for || []).join("\n"),
      impact: (row.impact || []).join("\n"),
    });
    setEditingId(row.id);
    setImageFile(null);
    setImagePreview(row.image_url || "");
    setError("");
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const next = { ...prev, [name]: value };
      // Auto-generate slug from title unless the slug was already customized manually while editing
      if (name === "title" && !editingId) {
        next.slug = slugify(value);
      }
      return next;
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > MAX_IMAGE_SIZE) {
      setError("Image is too large. Please choose a file under 2MB.");
      e.target.value = "";
      return;
    }
    setError("");
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    let finalForm = {
      slug: form.slug,
      title: form.title,
      tagline: form.tagline,
      category: form.category,
      description: form.description,
      who_for: form.who_for
        ? form.who_for.split("\n").map((s) => s.trim()).filter(Boolean)
        : [],
      impact: form.impact
        ? form.impact.split("\n").map((s) => s.trim()).filter(Boolean)
        : [],
      why_matters: form.why_matters,
      get_involved: form.get_involved || undefined,
      image_url: form.image_url || null,
    };

    if (imageFile) {
      const fileExt = imageFile.name.split(".").pop();
      const filePath = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;

      const { error: uploadErr } = await supabase.storage
        .from("program-images")
        .upload(filePath, imageFile);

      if (uploadErr) {
        setError("Image upload failed. Please try again.");
        setSaving(false);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("program-images")
        .getPublicUrl(filePath);

      finalForm.image_url = publicUrlData.publicUrl;
    }

    let saveFailed = false;

    if (editingId) {
      const { error: saveErr } = await supabase.from("programs").update(finalForm).eq("id", editingId);
      if (saveErr) {
        setError("Could not save changes. Slug may already be in use.");
        saveFailed = true;
      }
    } else {
      const { error: saveErr } = await supabase.from("programs").insert([finalForm]);
      if (saveErr) {
        setError("Could not add program. Slug may already be in use.");
        saveFailed = true;
      }
    }

    setSaving(false);
    if (!saveFailed) {
      setShowForm(false);
      fetchRows();
    }
  };

  const deleteRow = async (id) => {
    if (!confirm("Delete this program permanently?")) return;
    await supabase.from("programs").delete().eq("id", id);
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div>
      <div className="flex justify-end mb-5">
        <button
          onClick={openNewForm}
          className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Program
        </button>
      </div>

      {loading ? (
        <LoadingState />
      ) : rows.length === 0 ? (
        <EmptyState label="admin-added programs" />
      ) : (
        <div className="space-y-4">
          {rows.map((row) => (
            <div
              key={row.id}
              className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex flex-wrap items-start justify-between gap-3"
            >
              <div>
                <p className="font-semibold text-gray-900">{row.title}</p>
                <p className="text-xs font-semibold text-red-500 uppercase tracking-wide mt-0.5">
                  {row.category}
                </p>
                <p className="text-sm text-gray-600 mt-2 max-w-xl">{row.description}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => openEditForm(row)}
                  className="text-sm font-medium text-gray-600 hover:text-red-500 transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteRow(row.id)}
                  aria-label="Delete"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ADD / EDIT MODAL */}
      {showForm && (
        <div
          onClick={() => setShowForm(false)}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 pb-0">
              <h3 className="text-lg font-semibold text-gray-900">
                {editingId ? "Edit Program" : "Add Program"}
              </h3>
              <button
                onClick={() => setShowForm(false)}
                aria-label="Close"
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Title</label>
                <input
                  type="text" name="title" required value={form.title} onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  URL Slug <span className="text-gray-400 font-normal">(auto-generated, editable)</span>
                </label>
                <input
                  type="text" name="slug" required value={form.slug} onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 font-mono"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Tagline (optional)</label>
                <input
                  type="text" name="tagline" value={form.tagline} onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Category</label>
                <select
                  name="category" required value={form.category} onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                >
                  <option value="" disabled>Select a category</option>
                  {PROGRAM_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">Description</label>
                <textarea
                  name="description" required rows="3" value={form.description} onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Who It's For <span className="text-gray-400 font-normal">(one per line, optional)</span>
                </label>
                <textarea
                  name="who_for" rows="3" value={form.who_for} onChange={handleChange}
                  placeholder={"Students and recent graduates\nYoung entrepreneurs"}
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Impact <span className="text-gray-400 font-normal">(one per line, optional)</span>
                </label>
                <textarea
                  name="impact" rows="3" value={form.impact} onChange={handleChange}
                  placeholder={"Reduces youth unemployment\nBuilds practical skills"}
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Why It Matters <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  name="why_matters" rows="2" value={form.why_matters} onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Get Involved Message <span className="text-gray-400 font-normal">(optional, shown above the register button)</span>
                </label>
                <textarea
                  name="get_involved" rows="2" value={form.get_involved} onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Program Image (optional)
                </label>
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-32 object-cover rounded-lg mb-2 border border-gray-200"
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full text-sm text-gray-600 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-red-50 file:text-red-600 hover:file:bg-red-100 file:cursor-pointer cursor-pointer"
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={saving}
                className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors disabled:opacity-60"
              >
                {saving ? "Saving..." : editingId ? "Save Changes" : "Add Program"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- GALLERY (upload/delete, no editing needed) ---------------- */

function GalleryPanel() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]); // [{ file, preview }]
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState("");
  const [saving, setSaving] = useState(false);
  const [progress, setProgress] = useState("");
  const [error, setError] = useState("");

  const MAX_IMAGE_SIZE = 2 * 1024 * 1024; // 2MB per file
  const GALLERY_LIMIT = 15; // total photos allowed in the gallery

  const remainingSlots = GALLERY_LIMIT - rows.length;
  const isFull = remainingSlots <= 0;

  const fetchRows = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("gallery")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setRows(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchRows();
  }, []);

  const openForm = () => {
    setSelectedFiles([]);
    setCaption("");
    setCategory("");
    setError("");
    setShowForm(true);
  };

  const handleFilesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    // Reject anything over the per-file size limit
    const oversized = files.filter((f) => f.size > MAX_IMAGE_SIZE);
    if (oversized.length > 0) {
      setError(`${oversized.length} file(s) are over 2MB and were skipped.`);
    } else {
      setError("");
    }

    const validFiles = files.filter((f) => f.size <= MAX_IMAGE_SIZE);

    // Respect remaining capacity: existing gallery rows + whatever's already staged in this batch
    const slotsLeftForThisPick = remainingSlots - selectedFiles.length;
    const allowed = validFiles.slice(0, Math.max(slotsLeftForThisPick, 0));

    if (validFiles.length > allowed.length) {
      setError(
        slotsLeftForThisPick <= 0
          ? `You've already selected the maximum of ${remainingSlots} photo(s) this batch allows.`
          : `Only ${allowed.length} of those could be added — the gallery holds a maximum of ${GALLERY_LIMIT}.`
      );
    }

    const withPreviews = allowed.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    // Append to whatever's already staged, rather than replacing it
    setSelectedFiles((prev) => [...prev, ...withPreviews]);
    e.target.value = ""; // allow picking more files afterward
  };

  const removeSelected = (index) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedFiles.length === 0) {
      setError("Please choose at least one photo to upload.");
      return;
    }

    setSaving(true);
    setError("");

    const newRows = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const { file } = selectedFiles[i];
      setProgress(`Uploading ${i + 1} of ${selectedFiles.length}...`);

      const fileExt = file.name.split(".").pop();
      const filePath = `${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExt}`;

      const { error: uploadErr } = await supabase.storage
        .from("gallery-images")
        .upload(filePath, file);

      if (uploadErr) {
        setError(`Upload failed on file ${i + 1}. Stopped — earlier photos in this batch were still saved.`);
        break;
      }

      const { data: publicUrlData } = supabase.storage
        .from("gallery-images")
        .getPublicUrl(filePath);

      newRows.push({
        image_url: publicUrlData.publicUrl,
        caption: caption || null,
        category: category || null,
      });
    }

    if (newRows.length > 0) {
      await supabase.from("gallery").insert(newRows);
    }

    setProgress("");
    setSaving(false);
    setShowForm(false);
    fetchRows();
  };

  const deleteRow = async (id) => {
    if (!confirm("Delete this photo permanently?")) return;
    await supabase.from("gallery").delete().eq("id", id);
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-5">
        <p className="text-sm text-gray-500">
          {rows.length} / {GALLERY_LIMIT} photos
        </p>
        <button
          onClick={openForm}
          disabled={isFull}
          className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="w-4 h-4" /> Add Photos
        </button>
      </div>

      {isFull && !loading && (
        <div className="mb-5 p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
          Gallery is full ({GALLERY_LIMIT}/{GALLERY_LIMIT}). Delete a photo below to make room for new ones.
        </div>
      )}

      {loading ? (
        <LoadingState />
      ) : rows.length === 0 ? (
        <EmptyState label="gallery photos" />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {rows.map((row) => (
            <div
              key={row.id}
              className="group relative aspect-square rounded-xl overflow-hidden border border-gray-100 bg-gray-50"
            >
              <img
                src={row.image_url}
                alt={row.caption || "Gallery photo"}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => deleteRow(row.id)}
                aria-label="Delete photo"
                className="absolute top-2 right-2 bg-black/60 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
              {row.caption && (
                <p className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-[11px] px-2 py-1.5 truncate">
                  {row.caption}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ADD MODAL — supports selecting multiple files at once */}
      {showForm && (
        <div
          onClick={() => setShowForm(false)}
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between p-6 pb-0">
              <h3 className="text-lg font-semibold text-gray-900">Add Photos</h3>
              <button
                onClick={() => setShowForm(false)}
                aria-label="Close"
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Photos <span className="text-gray-400 font-normal">(Select several photos at once, or add them one at a time — {remainingSlots} slot{remainingSlots === 1 ? "" : "s"} left)</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFilesChange}
                  className="w-full text-sm text-gray-600 file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-red-50 file:text-red-600 hover:file:bg-red-100 file:cursor-pointer cursor-pointer"
                />

                {selectedFiles.length > 0 && (
                  <div className="mt-3 grid grid-cols-4 gap-2">
                    {selectedFiles.map((item, i) => (
                      <div key={i} className="relative aspect-square rounded-lg overflow-hidden border border-gray-200">
                        <img src={item.preview} alt="" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => removeSelected(i)}
                          className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 hover:bg-red-500"
                          aria-label="Remove"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Category <span className="text-gray-400 font-normal">(optional, applied to all selected photos)</span>
                </label>
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Programs, Events, Community..."
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Caption <span className="text-gray-400 font-normal">(optional, applied to all selected photos)</span>
                </label>
                <input
                  type="text"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="w-full border border-gray-200 p-3 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="SkillSet Lab cohort, June 2026"
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={saving || selectedFiles.length === 0}
                className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition-colors disabled:opacity-60"
              >
                {saving ? (progress || "Uploading...") : `Add ${selectedFiles.length || ""} Photo${selectedFiles.length === 1 ? "" : "s"}`}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}