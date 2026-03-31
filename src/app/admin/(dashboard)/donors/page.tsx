import { prisma } from "@/lib/prisma";

async function getDonors() {
  try {
    if (!prisma) throw new Error("Database not configured");
    const donors = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        donations: {
          where: { status: "completed" },
          orderBy: { createdAt: "desc" },
        },
      },
    });
    return donors;
  } catch {
    return [];
  }
}

export default async function DonorsPage() {
  const donors = await getDonors();

  return (
    <div>
      <h1 className="text-2xl font-bold text-earth-900 mb-8">Donors</h1>

      <div className="bg-white rounded-xl border border-earth-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-earth-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-earth-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-earth-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-earth-500 uppercase tracking-wider">
                  Total Donated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-earth-500 uppercase tracking-wider">
                  Donations
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-earth-500 uppercase tracking-wider">
                  Joined
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-earth-100">
              {donors.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-8 text-center text-earth-500"
                  >
                    No donors yet.
                  </td>
                </tr>
              ) : (
                donors.map((donor) => {
                  const totalDonated = donor.donations.reduce(
                    (sum, d) => sum + d.amount,
                    0
                  );
                  return (
                    <tr key={donor.id} className="hover:bg-earth-50">
                      <td className="px-6 py-4 text-sm font-medium text-earth-900">
                        {donor.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-earth-600">
                        {donor.email}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gold-600">
                        ${totalDonated.toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-earth-600">
                        {donor.donations.length}
                      </td>
                      <td className="px-6 py-4 text-sm text-earth-500">
                        {new Date(donor.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
