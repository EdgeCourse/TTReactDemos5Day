import React, { useState } from 'react';
import TabNavigation from './components/TabNavigation';
import Overview from './components/Overview';
import Performance from './components/Performance';
import Users from './components/Users';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const data = {
    overview: {
      users: 1500,
      revenue: '$25,000',
      orders: 320,
    },
    performance: {
      chartData: [
        { month: 'Jan', sales: 120 },
        { month: 'Feb', sales: 150 },
        { month: 'Mar', sales: 180 },
      ],
    },
    users: {
      userList: [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
      ],
    },
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <TabNavigation 
        tabs={Object.keys(data)} 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
      />

      <div>
        {activeTab === 'overview' && <Overview data={data.overview} />}
        {activeTab === 'performance' && (
          <Performance data={data.performance.chartData} />
        )}
        {activeTab === 'users' && <Users data={data.users.userList} />}
      </div>
    </div>
  );
}

export default App;