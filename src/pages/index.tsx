

export default function Home() {
  const buttons = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Check In/Out", href: "/check" },
    { label: "User List", href: "/users" },
    { label: "Setting", href: "/settings" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <h1 className="text-5xl font-semibold mb-12 text-black">Attendance</h1>
      <div className="grid grid-cols-2 gap-8">
        {buttons.map((btn) => (
          <a
            key={btn.label}
            href={btn.href}
            className="w-40 h-20 bg-black text-white flex items-center justify-center rounded-lg text-lg font-medium shadow-md hover:bg-gray-800 transition"
          >
            {btn.label}
          </a>
        ))}
      </div>
    </div>
  );
}
