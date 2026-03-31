"use client";

import { useState, useEffect } from "react";
import {
  DollarSign,
  Search,
  Download,
  Filter,
  ArrowUpDown,
} from "lucide-react";

interface Donation {
  id: string;
  amount: number;
  frequency: string;
  tier: string | null;
  status: string;
  createdAt: string;
  user: {
    name: string;
    email: string;
  };
}

export default function DonationsPage() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/donations")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setDonations(data);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const filtered = donations.filter((d) => {
    const matchesSearch =
      d.user.name.toLowerCase().includes(search.toLowerCase()) ||
      d.user.email.toLowerCase().includes(search.toLowerCase()) ||
      d.tier?.toLowerCase().includes(search.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || d.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalRevenue = filtered
    .filter((d) => d.status === "completed")
    .reduce((sum, d) => sum + d.amount, 0);

  function exportCSV() {
    const header = "Name,Email,Amount,Frequency,Tier,Status,Date\n";
    const rows = filtered
      .map(
        (d) =>
          `"${d.user.name}","${d.user.email}",${d.amount},"${d.frequency}","${d.tier || ""}","${d.status}","${new Date(d.createdAt).toLocaleDateString()}"`
      )
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `donations-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-earth-900">Donations</h1>
          <p className="text-sm text-earth-500 mt-1">
            {filtered.length} donation{filtered.length !== 1 ? "s" : ""} •
            ${totalRevenue.toLocaleString()} revenue
          </p>
        </div>
        <button
          onClick={exportCSV}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-earth-200 rounded-lg text-sm font-medium text-earth-700 hover:bg-earth-50 transition-colors"
        >
          <Download className="w-4 h-4" />
          Export CSV
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-earth-400" />
          <input
            type="text"
            placeholder="Search by name, email, or tier..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-earth-200 rounded-lg text-sm focus:border-gold-400 focus:ring-2 focus:ring-gold-200 outline-none text-earth-900"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-earth-400" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3 py-2.5 bg-white border border-earth-200 rounded-lg text-sm text-earth-700 focus:border-gold-400 outline-none"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-earth-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-earth-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-earth-500 uppercase tracking-wider">
                  <div className="flex items-center gap-1">
                    Donor <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-earth-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-earth-500 uppercase tracking-wider">
                  Frequency
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-earth-500 uppercase tracking-wider">
                  Tier
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-earth-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-earth-500 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-earth-100">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-earth-500">
                    <div className="w-6 h-6 mx-auto mb-2 border-2 border-gold-200 border-t-gold-500 rounded-full animate-spin" />
                    Loading donations...
                  </td>
                </tr>
              ) : filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-earth-500">
                    <DollarSign className="w-8 h-8 mx-auto mb-2 text-earth-300" />
                    {search || statusFilter !== "all"
                      ? "No donations match your filters."
                      : "No donations yet."}
                  </td>
                </tr>
              ) : (
                filtered.map((d) => (
                  <tr key={d.id} className="hover:bg-earth-50">
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-earth-900">
                        {d.user.name}
                      </p>
                      <p className="text-xs text-earth-500">{d.user.email}</p>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-earth-900">
                      ${d.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gold-100 text-gold-800 capitalize">
                        {d.frequency}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-earth-600">
                      {d.tier || "—"}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          d.status === "completed"
                            ? "bg-green-100 text-green-800"
                            : d.status === "pending"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-red-100 text-red-800"
                        }`}
                      >
                        {d.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-earth-500">
                      {new Date(d.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
