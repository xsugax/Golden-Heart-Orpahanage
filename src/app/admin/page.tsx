import { prisma } from "@/lib/prisma";
import { DollarSign, Users, TrendingUp, Calendar } from "lucide-react";

async function getStats() {
  try {
    if (!prisma) throw new Error("Database not configured");
    const [totalDonors, totalDonations, recentDonations, totalAmount] =
      await Promise.all([
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
      ]);

    return {
      totalDonors,
      totalDonations,
      recentDonations,
      totalAmount: totalAmount._sum.amount || 0,
    };
  } catch {
    return {
      totalDonors: 0,
      totalDonations: 0,
      recentDonations: [],
      totalAmount: 0,
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
      value: "—",
      icon: Calendar,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-earth-900 mb-8">
        Dashboard Overview
      </h1>

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
