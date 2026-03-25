// app/dashboard/page.tsx
import Link from "next/link";

export default function DashboardHome() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Header */}
      <div className="bg-teal-600 text-white flex items-center justify-between px-4 py-3">
        {/* Left: Logo + App Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full overflow-hidden shadow-sm">
            <img
              src="/headerpicture.png"
              alt="EJO Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="font-semibold text-lg md:text-xl">EJO HEALTH MANAGEMENT</span>
        </div>

        {/* Right: Logout */}
        <div className="text-sm md:text-base cursor-pointer hover:underline">
          &gt; Logout
        </div>
      </div>

      {/* Greeting Section */}
      <div className="px-4 py-6">
        <h2 className="text-2xl font-semibold">Hello, ejoenz! 👋</h2>
        <p className="text-base mt-1 text-gray-700">Stay Healthy Today</p>
      </div>

      {/* Main Cards */}
      <div className="px-4 py-2 grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
        <Link href="/heart-rate" className="cursor-pointer">
          <div className="bg-red-500 text-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center">
            <div className="text-5xl mb-3">❤️</div>
            <p className="text-lg font-medium">Heart Rate</p>
            <p className="text-2xl font-bold mt-1">76 BPM</p>
          </div>
        </Link>

        <Link href="/bp-rate" className="cursor-pointer">
          <div className="bg-orange-400 text-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center">
            <div className="text-5xl mb-3">💉</div>
            <p className="text-lg font-medium">BP Rate</p>
            <p className="text-2xl font-bold mt-1">120/80</p>
          </div>
        </Link>

        <Link href="/sugar" className="cursor-pointer">
          <div className="bg-yellow-400 text-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center">
            <div className="text-5xl mb-3">🩸</div>
            <p className="text-lg font-medium">Sugar</p>
            <p className="text-2xl font-bold mt-1">95 mg/dL</p>
          </div>
        </Link>

        <Link href="/steps" className="cursor-pointer">
          <div className="bg-blue-400 text-white rounded-2xl p-6 shadow-lg flex flex-col items-center justify-center">
            <div className="text-5xl mb-3">👣</div>
            <p className="text-lg font-medium">Steps</p>
            <p className="text-2xl font-bold mt-1">8,532</p>
          </div>
        </Link>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-teal-600 text-white py-4 flex justify-around items-center mt-auto">
        <Link href="/dashboard" className="text-2xl cursor-pointer">🏠</Link>
        <Link href="/appointment" className="text-2xl cursor-pointer">📅</Link>
        <Link href="/records" className="text-2xl cursor-pointer">📋</Link>
        <Link href="/profile" className="text-2xl cursor-pointer">👤</Link>
      </div>

    </div>
  );
}