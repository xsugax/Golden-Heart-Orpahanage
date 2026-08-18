"use client";

import { useState, useEffect, FormEvent } from "react";
import Button from "@/components/ui/Button";
import { Save } from "lucide-react";
import {
  adminFetch,
  assertAdminOk,
  AdminNetworkError,
  AdminUnauthorizedError,
} from "@/lib/adminApiClient";

interface Metrics {
  id?: string;
  childrenSupported: number;
  programsActive: number;
  mealsServed: number;
  communitiesReached: number;
}

export default function MetricsAdminPage() {
  const [metrics, setMetrics] = useState<Metrics>({
    childrenSupported: 2400,
    programsActive: 12,
    mealsServed: 8500,
    communitiesReached: 15,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    fetch("/api/impact")
      .then((res) => res.json())
      .then((data) => {
        if (data && !data.error) {
          setMetrics(data);
        }
      })
      .catch(console.error);
  }, []);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const res = await adminFetch("/api/admin/metrics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(metrics),
      });
      await assertAdminOk(res);
      setMessage({ type: "success", text: "Metrics updated successfully!" });
    } catch (err) {
      if (err instanceof AdminUnauthorizedError) {
        return;
      }
      if (err instanceof AdminNetworkError) {
        setMessage({ type: "error", text: err.message });
        return;
      }
      if (err instanceof Error) {
        setMessage({ type: "error", text: err.message });
        return;
      }
      setMessage({ type: "error", text: "Could not update metrics right now." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-earth-900 mb-8">
        Impact Metrics
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl border border-earth-100 p-6 shadow-sm max-w-2xl"
      >
        <p className="text-sm text-earth-600 mb-6">
          Update the impact metrics displayed on the website.
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-earth-700 mb-2">
              Children Supported
            </label>
            <input
              type="number"
              min="0"
              value={metrics.childrenSupported}
              onChange={(e) =>
                setMetrics({
                  ...metrics,
                  childrenSupported: parseInt(e.target.value) || 0,
                })
              }
              className="w-full px-4 py-2 rounded-lg border border-earth-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none text-earth-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-earth-700 mb-2">
              Programs Active
            </label>
            <input
              type="number"
              min="0"
              value={metrics.programsActive}
              onChange={(e) =>
                setMetrics({
                  ...metrics,
                  programsActive: parseInt(e.target.value) || 0,
                })
              }
              className="w-full px-4 py-2 rounded-lg border border-earth-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none text-earth-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-earth-700 mb-2">
              Meals Served (Monthly)
            </label>
            <input
              type="number"
              min="0"
              value={metrics.mealsServed}
              onChange={(e) =>
                setMetrics({
                  ...metrics,
                  mealsServed: parseInt(e.target.value) || 0,
                })
              }
              className="w-full px-4 py-2 rounded-lg border border-earth-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none text-earth-900"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-earth-700 mb-2">
              Communities Reached
            </label>
            <input
              type="number"
              min="0"
              value={metrics.communitiesReached}
              onChange={(e) =>
                setMetrics({
                  ...metrics,
                  communitiesReached: parseInt(e.target.value) || 0,
                })
              }
              className="w-full px-4 py-2 rounded-lg border border-earth-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none text-earth-900"
            />
          </div>
        </div>

        {message && (
          <div
            className={`mt-4 rounded-lg border p-3 text-sm ${
              message.type === "success"
                ? "border-green-200 bg-green-50 text-green-800"
                : "border-red-200 bg-red-50 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <div className="mt-6">
          <Button type="submit" disabled={loading}>
            <Save className="w-4 h-4 mr-2" />
            {loading ? "Saving..." : "Save Metrics"}
          </Button>
        </div>
      </form>
    </div>
  );
}
