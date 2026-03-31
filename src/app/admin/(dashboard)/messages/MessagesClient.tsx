"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  MailOpen,
  Trash2,
  Search,
  Eye,
  X,
  Inbox,
  AlertCircle,
} from "lucide-react";

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");
  const [selected, setSelected] = useState<Message | null>(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  async function load() {
    try {
      const res = await fetch("/api/admin/messages");
      const data = await res.json();
      if (Array.isArray(data)) setMessages(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function toggleRead(id: string, read: boolean) {
    await fetch("/api/admin/messages", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, read }),
    });
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, read } : m))
    );
    if (selected?.id === id) setSelected({ ...selected, read });
  }

  async function deleteMessage(id: string) {
    setDeleting(id);
    await fetch(`/api/admin/messages?id=${id}`, { method: "DELETE" });
    setMessages((prev) => prev.filter((m) => m.id !== id));
    if (selected?.id === id) setSelected(null);
    setDeleting(null);
  }

  function openMessage(msg: Message) {
    setSelected(msg);
    if (!msg.read) toggleRead(msg.id, true);
  }

  const filtered = messages.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      m.subject.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "unread" && !m.read) ||
      (filter === "read" && m.read);
    return matchesSearch && matchesFilter;
  });

  const unreadCount = messages.filter((m) => !m.read).length;

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-earth-900">Messages</h1>
          <p className="text-sm text-earth-500 mt-1">
            {messages.length} total • {unreadCount} unread
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-400" />
          <input
            type="text"
            placeholder="Search by name, email, or subject..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-earth-200 rounded-lg text-sm focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none text-earth-900"
          />
        </div>
        <div className="flex gap-1 bg-white border border-earth-200 rounded-lg p-1">
          {(["all", "unread", "read"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors capitalize ${
                filter === f
                  ? "bg-gold-100 text-gold-800"
                  : "text-earth-500 hover:text-earth-800"
              }`}
            >
              {f}
              {f === "unread" && unreadCount > 0 && (
                <span className="ml-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Message List */}
      <div className="bg-white rounded-xl border border-earth-100 shadow-sm overflow-hidden">
        {loading ? (
          <div className="px-6 py-12 text-center text-earth-500">
            <div className="w-6 h-6 mx-auto mb-2 border-2 border-gold-200 border-t-gold-500 rounded-full animate-spin" />
            Loading messages...
          </div>
        ) : filtered.length === 0 ? (
          <div className="px-6 py-12 text-center text-earth-500">
            <Inbox className="w-8 h-8 mx-auto mb-2 text-earth-300" />
            {search || filter !== "all"
              ? "No messages match your filters."
              : "No messages yet."}
          </div>
        ) : (
          <ul className="divide-y divide-earth-100">
            {filtered.map((m) => (
              <li
                key={m.id}
                className={`flex items-center gap-4 px-6 py-4 hover:bg-earth-50 cursor-pointer transition-colors ${
                  !m.read ? "bg-gold-50/30" : ""
                }`}
                onClick={() => openMessage(m)}
              >
                <div className="flex-shrink-0">
                  {m.read ? (
                    <MailOpen className="w-5 h-5 text-earth-300" />
                  ) : (
                    <Mail className="w-5 h-5 text-gold-500" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p
                      className={`text-sm truncate ${
                        !m.read
                          ? "font-semibold text-earth-900"
                          : "font-medium text-earth-700"
                      }`}
                    >
                      {m.name}
                    </p>
                    <span className="text-xs text-earth-400">
                      &lt;{m.email}&gt;
                    </span>
                  </div>
                  <p
                    className={`text-sm truncate ${
                      !m.read ? "text-earth-800" : "text-earth-500"
                    }`}
                  >
                    {m.subject}
                  </p>
                  <p className="text-xs text-earth-400 truncate mt-0.5">
                    {m.message.slice(0, 100)}
                    {m.message.length > 100 ? "..." : ""}
                  </p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-xs text-earth-400">
                    {new Date(m.createdAt).toLocaleDateString()}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleRead(m.id, !m.read);
                    }}
                    className="p-1.5 rounded-lg hover:bg-earth-100 text-earth-400 hover:text-earth-600 transition-colors"
                    title={m.read ? "Mark unread" : "Mark read"}
                  >
                    {m.read ? (
                      <Mail className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (confirm("Delete this message?")) deleteMessage(m.id);
                    }}
                    disabled={deleting === m.id}
                    className="p-1.5 rounded-lg hover:bg-red-50 text-earth-400 hover:text-red-500 transition-colors disabled:opacity-50"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Message Detail Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-hidden shadow-2xl">
            <div className="flex items-start justify-between p-6 border-b border-earth-100">
              <div>
                <h2 className="text-lg font-semibold text-earth-900">
                  {selected.subject}
                </h2>
                <p className="text-sm text-earth-500 mt-1">
                  From {selected.name} &lt;{selected.email}&gt;
                </p>
                <p className="text-xs text-earth-400 mt-0.5">
                  {new Date(selected.createdAt).toLocaleString()}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="p-1.5 rounded-lg hover:bg-earth-100 text-earth-400 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[50vh]">
              <p className="text-sm text-earth-700 whitespace-pre-wrap leading-relaxed">
                {selected.message}
              </p>
            </div>
            <div className="flex justify-end gap-2 p-4 border-t border-earth-100 bg-earth-50">
              <button
                onClick={() => toggleRead(selected.id, !selected.read)}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white border border-earth-200 rounded-lg text-earth-700 hover:bg-earth-100 transition-colors"
              >
                {selected.read ? (
                  <>
                    <Mail className="w-4 h-4" /> Mark Unread
                  </>
                ) : (
                  <>
                    <MailOpen className="w-4 h-4" /> Mark Read
                  </>
                )}
              </button>
              <button
                onClick={() => {
                  if (confirm("Delete this message?")) deleteMessage(selected.id);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-red-50 border border-red-200 rounded-lg text-red-700 hover:bg-red-100 transition-colors"
              >
                <Trash2 className="w-4 h-4" /> Delete
              </button>
              <a
                href={`mailto:${selected.email}?subject=Re: ${encodeURIComponent(selected.subject)}`}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gold-500 rounded-lg text-white hover:bg-gold-600 transition-colors"
              >
                Reply
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
