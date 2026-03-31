"use client";

import { useState, useEffect, FormEvent } from "react";
import { Plus, Trash2, Eye, EyeOff } from "lucide-react";
import Button from "@/components/ui/Button";

interface Story {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  published: boolean;
  createdAt: string;
}

export default function StoriesAdminPage() {
  const [stories, setStories] = useState<Story[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchStories();
  }, []);

  async function fetchStories() {
    try {
      const res = await fetch("/api/admin/stories");
      const data = await res.json();
      setStories(data);
    } catch (error) {
      console.error("Failed to fetch stories:", error);
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/admin/stories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({ title: "", content: "", imageUrl: "" });
        setShowForm(false);
        fetchStories();
      }
    } catch (error) {
      console.error("Failed to create story:", error);
    } finally {
      setLoading(false);
    }
  }

  async function togglePublish(id: string, published: boolean) {
    try {
      await fetch(`/api/admin/stories/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !published }),
      });
      fetchStories();
    } catch (error) {
      console.error("Failed to update story:", error);
    }
  }

  async function deleteStory(id: string) {
    if (!confirm("Are you sure you want to delete this story?")) return;
    try {
      await fetch(`/api/admin/stories/${id}`, { method: "DELETE" });
      fetchStories();
    } catch (error) {
      console.error("Failed to delete story:", error);
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-earth-900">Stories</h1>
        <Button onClick={() => setShowForm(!showForm)} size="sm">
          <Plus className="w-4 h-4 mr-2" />
          Add Story
        </Button>
      </div>

      {/* Create Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl border border-earth-100 p-6 mb-8 shadow-sm"
        >
          <h3 className="font-semibold text-earth-900 mb-4">New Story</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-earth-700 mb-1">
                Title
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-earth-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none text-earth-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-earth-700 mb-1">
                Image URL
              </label>
              <input
                type="url"
                required
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imageUrl: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-earth-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none text-earth-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-earth-700 mb-1">
                Content
              </label>
              <textarea
                required
                rows={4}
                value={formData.content}
                onChange={(e) =>
                  setFormData({ ...formData, content: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-earth-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none text-earth-900 resize-y"
              />
            </div>
            <div className="flex gap-3">
              <Button type="submit" disabled={loading} size="sm">
                {loading ? "Creating..." : "Create Story"}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      )}

      {/* Stories List */}
      <div className="space-y-4">
        {stories.length === 0 ? (
          <div className="bg-white rounded-xl border border-earth-100 p-8 text-center text-earth-500">
            No stories yet. Click &quot;Add Story&quot; to create one.
          </div>
        ) : (
          stories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-xl border border-earth-100 p-6 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4 flex-1">
                  {story.imageUrl && (
                    <img
                      src={story.imageUrl}
                      alt={story.title}
                      className="w-20 h-20 rounded-lg object-cover shrink-0"
                    />
                  )}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-earth-900">
                        {story.title}
                      </h3>
                      {!story.published && (
                        <span className="text-xs bg-earth-100 text-earth-600 px-2 py-0.5 rounded-full">
                          Draft
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-earth-600 line-clamp-2">
                      {story.content}
                    </p>
                    <p className="text-xs text-earth-400 mt-2">
                      {new Date(story.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => togglePublish(story.id, story.published)}
                    className="p-2 text-earth-500 hover:text-gold-600 transition-colors"
                    title={story.published ? "Unpublish" : "Publish"}
                  >
                    {story.published ? (
                      <Eye className="w-4 h-4" />
                    ) : (
                      <EyeOff className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={() => deleteStory(story.id)}
                    className="p-2 text-earth-500 hover:text-red-600 transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
