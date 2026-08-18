"use client";

import { useState, useEffect, FormEvent } from "react";
import { Plus, Trash2, Eye, EyeOff } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  adminFetch,
  adminFetchJson,
  assertAdminOk,
  AdminNetworkError,
  AdminUnauthorizedError,
} from "@/lib/adminApiClient";

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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchStories();
  }, []);

  async function fetchStories() {
    try {
      const data = await adminFetchJson<Story[]>("/api/admin/stories");
      setStories(Array.isArray(data) ? data : []);
      setError(null);
    } catch (err) {
      if (err instanceof AdminUnauthorizedError) {
        return;
      }
      if (err instanceof AdminNetworkError) {
        setError(err.message);
        return;
      }
      setError("Could not load stories right now.");
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await adminFetch("/api/admin/stories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      await assertAdminOk(res);

      setFormData({ title: "", content: "", imageUrl: "" });
      setShowForm(false);
      setError(null);
      fetchStories();
    } catch (err) {
      if (err instanceof AdminUnauthorizedError) {
        return;
      }
      if (err instanceof AdminNetworkError) {
        setError(err.message);
        return;
      }
      if (err instanceof Error) {
        setError(err.message);
        return;
      }
      setError("Could not create the story.");
    } finally {
      setLoading(false);
    }
  }

  async function togglePublish(id: string, published: boolean) {
    try {
      const res = await adminFetch(`/api/admin/stories/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: !published }),
      });
      await assertAdminOk(res);
      setError(null);
      fetchStories();
    } catch (err) {
      if (err instanceof AdminUnauthorizedError) {
        return;
      }
      if (err instanceof AdminNetworkError) {
        setError(err.message);
        return;
      }
      setError("Could not update story visibility.");
    }
  }

  async function deleteStory(id: string) {
    if (!confirm("Are you sure you want to delete this story?")) return;
    try {
      const res = await adminFetch(`/api/admin/stories/${id}`, { method: "DELETE" });
      await assertAdminOk(res);
      setError(null);
      fetchStories();
    } catch (err) {
      if (err instanceof AdminUnauthorizedError) {
        return;
      }
      if (err instanceof AdminNetworkError) {
        setError(err.message);
        return;
      }
      setError("Could not delete the story.");
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

      {error && (
        <div className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

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
