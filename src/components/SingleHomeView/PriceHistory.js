import React from "react";

export default function PriceHistory() {
  return (
    <div className="bg-white">
      <div className="w-full mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Price history</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200">
            <thead className="bg-zinc-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Event
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 uppercase tracking-wider">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-zinc-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-zinc-900">5/16/2024</div>
                  <div className="text-xs text-zinc-500">
                    Source: TMLS IDX™ TMLS #10029763{" "}
                    <a href="#" className="text-blue-500">
                      Report
                    </a>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-zinc-900">Price change</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-zinc-900">
                    $705,000 <span className="text-red-500">-0.7%</span>
                  </div>
                  <div className="text-xs text-zinc-500">$218/sqft</div>
                </td>
              </tr>
              {/* More table rows go here */}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Public tax history</h2>
        <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-700">
          <thead className="bg-zinc-50 dark:bg-zinc-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">
                Year
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">
                Property taxes
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-500 dark:text-zinc-300 uppercase tracking-wider">
                Tax assessment
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-zinc-900 divide-y divide-zinc-200 dark:divide-zinc-700">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-zinc-900 dark:text-zinc-100">
                2023
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-100">
                $4,343{" "}
                <span className="text-green-600 dark:text-green-400">
                  +3.9%
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-900 dark:text-zinc-100">
                $431,432
              </td>
            </tr>
            {/* More table rows go here */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
