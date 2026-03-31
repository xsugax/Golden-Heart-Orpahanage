import { prisma } from "@/lib/prisma";
import { DollarSign, Users, TrendingUp, Calendar, Mail } from "lucide-react";
import Link from "next/link";

async function getStats() {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  try {
    const [
      totalDonors,
      totalDonations,
      recentDonations,
      totalAmount,
      monthAmount,
      unreadMessages,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.donation.count({ where: { status: "completed" } }),
      prisma.donation.findMany({
        where: { status: "completed" },
        orderBy: { createdAt: "desc" },
        take: 10,
        include: { user: true },
      }),
      prisma.donation.aggregate({
        where: { status: "completed" },
        _sum: { amount: true },
      }),
      prisma.donation.aggregate({
        where: {
          status: "completed",
          createdAt: { gte: startOfMonth },
        },
        _sum: { amount: true },
      }),
      prisma.contactMessage.count({ where: { read: false } }),
    ]);

    return {
      totalDonors,
      totalDonations,
      recentDonations,
      totalAmount: totalAmount._sum.amount || 0,
      monthAmount: monthAmount._sum.amount || 0,
      unreadMessages,
    };
  } catch {
    return {
      totalDonors: 0,
      totalDonations: 0,
      recentDonations: [],
      totalAmount: 0,
      monthAmount: 0,
      unreadMessages: 0,
    };
  }
}

export default async function AdminDashboard() {
  const stats = await getStats();

  const statCards = [
    {
      label: "Total Donors",
      value: stats.totalDonors.toLocaleString(),
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      label: "Total Donations",
      value: stats.totalDonations.toLocaleString(),
      icon: TrendingUp,
      color: "bg-green-100 text-green-600",
    },
    {
      label: "Total Amount Raised",
      value: `$${stats.totalAmount.toLocaleString()}`,
      icon: DollarSign,
      color: "bg-gold-100 text-gold-600",
    },
    {
      label: "This Month",
      value: `$${stats.monthAmount.toLocaleString()}`,
      icon: Calendar,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-earth-900">
          Dashboard Overview
        </h1>
        {stats.unreadMessages > 0 && (
          <Link
            href="/admin/messages"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gold-50 border border-gold-200 rounded-lg text-sm font-medium text-gold-800 hover:bg-gold-100 transition-colors"
          >
            <Mail className="w-4 h-4" />
            {stats.unreadMessages} unread message{stats.unreadMessages !== 1 ? "s" : ""}
          </Link>
        )}
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {statCards.map((card) => (
          <div
            key={card.label}
            className="bg-white rounded-xl border border-earth-100 p-6 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center ${card.color}`}
              >
                <card.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-earth-500">{card.label}</p>
                <p className="text-2xl font-bold text-earth-900">
                  {card.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Donations Table */}
      <div className="bg-white rounded-xl border border-earth-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-earth-100">
          <h2 className="text-lg font-semibold text-earth-900">
            Recent Donations
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-earth-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-earth-500 uppercase tracking-wider">
                  Donor
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
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-earth-100">
              {stats.recentDonations.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-earth-500"
                  >
                    No donations yet. They will appear here once processed.
                  </td>
                </tr>
              ) : (
                stats.recentDonations.map((donation) => (
                  <tr key={donation.id} className="hover:bg-earth-50">
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm font-medium text-earth-900">
                          {donation.user.name}
                        </p>
                        <p className="text-xs text-earth-500">
                          {donation.user.email}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-earth-900">
                      ${donation.amount.toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gold-100 text-gold-800 capitalize">
                        {donation.frequency}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-earth-600">
                      {donation.tier || "—"}
                    </td>
                    <td className="px-6 py-4 text-sm text-earth-500">
                      {new Date(donation.createdAt).toLocaleDateString()}
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
