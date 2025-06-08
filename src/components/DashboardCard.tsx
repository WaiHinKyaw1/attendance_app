'use client';
import Link from 'next/link';
import { Home, Clock, Users, Settings } from 'lucide-react';

const menus = [
  {
    title: 'Dashboard',
    icon: <Home size={40} className="text-blue-600" />,
    href: '/dashboard',
    description: 'Overview of attendance stats',
  },
  {
    title: 'Check In / Out',
    icon: <Clock size={40} className="text-green-600" />,
    href: '/check',
    description: 'Record your attendance today',
  },
  {
    title: 'User List',
    icon: <Users size={40} className="text-purple-600" />,
    href: '/users',
    description: 'View all registered users',
  },
  {
    title: 'Settings',
    icon: <Settings size={40} className="text-gray-600" />,
    href: '/settings',
    description: 'Manage app preferences',
  },
];

export default function DashboardCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {menus.map((menu) => (
        <Link
          key={menu.title}
          href={menu.href}
          className="rounded-2xl shadow-md p-6 bg-white hover:shadow-lg transition border hover:border-blue-300"
        >
          <div className="flex flex-col items-center justify-center text-center">
            {menu.icon}
            <h3 className="mt-4 text-lg font-semibold">{menu.title}</h3>
            <p className="text-xs text-gray-500 mt-1">{menu.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
