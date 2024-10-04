// src/components/Overview.js
import React from 'react';

function Overview({ data }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-md shadow">
        <h2 className="text-lg font-medium mb-2">Users</h2>
        <p className="text-2xl font-bold">{data.users}</p>
      </div>
      <div className="bg-white p-4 rounded-md shadow">
        <h2 className="text-lg font-medium mb-2">Revenue</h2>
        <p className="text-2xl font-bold">{data.revenue}</p>
      </div>
      <div className="bg-white p-4 rounded-md shadow">
        <h2 className="text-lg font-medium mb-2">Orders</h2>
        <p className="text-2xl font-bold">{data.orders}</p>
      </div>
    </div>
  );
}

export default Overview;


