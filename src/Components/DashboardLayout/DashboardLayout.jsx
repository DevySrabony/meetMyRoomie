import React from 'react';
import { Link, Outlet } from 'react-router';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-orange-100 dark:bg-gray-900 p-6">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <nav className="flex flex-col gap-4 text-sm font-medium">
          <Link to="/">Home</Link>
          <Link to="/dashboard/all-items">All Items</Link>
          <Link to="/add-roommate">Add Item</Link>
          <Link to="/dashboard/my-items">My Items</Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-50 dark:bg-gray-800">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
