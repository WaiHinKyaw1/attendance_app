
import { HiBuildingLibrary, HiCog6Tooth, HiMiniClock, HiUser } from "react-icons/hi2";


export default function Home() {
  const buttons = [
    { label: "Dashboard", icon: HiBuildingLibrary, href: "/dashboard" },
    { label: "Check In/Out",icon: HiMiniClock, href: "/check" },
    { label: "User List",icon: HiUser, href: "/users" },
    { label: "Setting", icon:HiCog6Tooth, href: "/settings" },
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
          {btn.icon && <btn.icon className="mr-2 text-2xl" />}
          {btn.label}
          </a>
        ))}
      </div>
    </div>
  );
}
