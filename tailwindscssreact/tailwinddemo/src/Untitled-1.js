// src/components/TabNavigation.js
import React from 'react';

function TabNavigation({ tabs, activeTab, onTabChange }) {
  return (
    <div className="flex space-x-4 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 rounded-md ${
            activeTab === tab
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default TabNavigation;


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


// src/components/Performance.js
import React from 'react';

function Performance({ data }) {
  return (
    <div>
      <h2 className="text-lg font-medium mb-2">Performance</h2>
      <ul>
        {data.map((item) => (
          <li key={item.month}>
            {item.month}: {item.sales}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Performance;


// src/components/Users.js
import React from 'react';

function Users({ data }) {
  return (
    <div>
      <h2 className="text-lg font-medium mb-2">Users</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

