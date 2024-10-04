
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