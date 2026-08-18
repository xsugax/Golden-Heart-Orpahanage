"use client";

import { useState } from "react";
import {
  Shield,
  Key,
  Server,
  Globe,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  Save,
} from "lucide-react";
import {
  adminFetch,
  assertAdminOk,
  AdminNetworkError,
  AdminUnauthorizedError,
} from "@/lib/adminApiClient";

export default function SettingsPage() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  async function handlePasswordChange(e: React.FormEvent) {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage({ type: "error", text: "New passwords do not match." });
      return;
    }
    if (newPassword.length < 8) {
      setMessage({
        type: "error",
        text: "Password must be at least 8 characters.",
      });
      return;
    }
    setSaving(true);
    setMessage(null);
    try {
      const res = await adminFetch("/api/admin/settings/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });
      await assertAdminOk(res);
      setMessage({ type: "success", text: "Password changed successfully." });
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
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
      setMessage({ type: "error", text: "Could not update password right now." });
    } finally {
      setSaving(false);
    }
  }

  const envChecks = [
    { name: "Database (Prisma)", env: "DATABASE_URL" },
    { name: "Stripe Secret Key", env: "STRIPE_SECRET_KEY" },
    { name: "Stripe Publishable Key", env: "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY" },
    { name: "PayPal Client ID", env: "PAYPAL_CLIENT_ID" },
    { name: "PayPal Client Secret", env: "PAYPAL_CLIENT_SECRET" },
    { name: "Admin Password", env: "ADMIN_PASSWORD" },
    { name: "Session Secret", env: "ADMIN_SESSION_SECRET" },
  ];

  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl font-bold text-earth-900 mb-2">Settings</h1>
      <p className="text-sm text-earth-500 mb-8">
        Manage admin credentials and view system configuration.
      </p>

      {/* Change Password */}
      <div className="bg-white rounded-xl border border-earth-100 shadow-sm mb-8">
        <div className="flex items-center gap-3 p-6 border-b border-earth-100">
          <div className="p-2 rounded-lg bg-gold-100">
            <Key className="w-5 h-5 text-gold-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-earth-900">
              Change Password
            </h2>
            <p className="text-sm text-earth-500">
              Update your admin login password
            </p>
          </div>
        </div>
        <form onSubmit={handlePasswordChange} className="p-6 space-y-4">
          {message && (
            <div
              className={`flex items-center gap-2 p-3 rounded-lg text-sm ${
                message.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {message.type === "success" ? (
                <CheckCircle2 className="w-4 h-4" />
              ) : (
                <AlertCircle className="w-4 h-4" />
              )}
              {message.text}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-earth-700 mb-1">
              Current Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              className="w-full px-4 py-2.5 border border-earth-200 rounded-lg text-sm focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none text-earth-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-earth-700 mb-1">
              New Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={8}
                className="w-full px-4 py-2.5 border border-earth-200 rounded-lg text-sm focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none pr-10 text-earth-900"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-earth-400 hover:text-earth-600"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-earth-700 mb-1">
              Confirm New Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={8}
              className="w-full px-4 py-2.5 border border-earth-200 rounded-lg text-sm focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none text-earth-900"
            />
          </div>
          <button
            type="submit"
            disabled={saving}
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold-500 text-white font-medium rounded-lg hover:bg-gold-600 transition-colors disabled:opacity-50 text-sm"
          >
            <Save className="w-4 h-4" />
            {saving ? "Saving..." : "Update Password"}
          </button>
        </form>
      </div>

      {/* System Info */}
      <div className="bg-white rounded-xl border border-earth-100 shadow-sm mb-8">
        <div className="flex items-center gap-3 p-6 border-b border-earth-100">
          <div className="p-2 rounded-lg bg-blue-100">
            <Server className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-earth-900">
              System Information
            </h2>
            <p className="text-sm text-earth-500">
              Current configuration status
            </p>
          </div>
        </div>
        <div className="p-6">
          <div className="grid gap-4">
            <div className="flex items-center justify-between p-3 bg-earth-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-earth-500" />
                <span className="text-sm font-medium text-earth-700">
                  Framework
                </span>
              </div>
              <span className="text-sm text-earth-500">Next.js 16 (App Router)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-earth-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Server className="w-4 h-4 text-earth-500" />
                <span className="text-sm font-medium text-earth-700">
                  Database
                </span>
              </div>
              <span className="text-sm text-earth-500">PostgreSQL (Prisma 6)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-earth-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Shield className="w-4 h-4 text-earth-500" />
                <span className="text-sm font-medium text-earth-700">
                  Auth Method
                </span>
              </div>
              <span className="text-sm text-earth-500">
                Cookie-based Session (HTTP-Only)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Environment Status */}
      <div className="bg-white rounded-xl border border-earth-100 shadow-sm">
        <div className="flex items-center gap-3 p-6 border-b border-earth-100">
          <div className="p-2 rounded-lg bg-green-100">
            <Shield className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-earth-900">
              Environment Variables
            </h2>
            <p className="text-sm text-earth-500">
              Required configuration (values hidden for security)
            </p>
          </div>
        </div>
        <div className="p-6">
          <ul className="space-y-3">
            {envChecks.map((item) => (
              <li
                key={item.env}
                className="flex items-center justify-between p-3 rounded-lg bg-earth-50"
              >
                <div>
                  <p className="text-sm font-medium text-earth-700">
                    {item.name}
                  </p>
                  <p className="text-xs text-earth-400 font-mono">{item.env}</p>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-earth-200 text-earth-600">
                  Server-side
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
