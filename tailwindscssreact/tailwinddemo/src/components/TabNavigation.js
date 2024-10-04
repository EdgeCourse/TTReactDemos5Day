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

