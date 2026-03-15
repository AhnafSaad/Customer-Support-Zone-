import React from "react";

const Reports = ({ resolvedTasks }) => {
  return (
    <div className="bg-gray-50 min-h-screen px-4 md:px-16 py-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-bold text-black mb-2">Performance Reports</h1>
          <p className="text-gray-500">Track customer support efficiency and resolved tickets.</p>
        </div>
        
        {/* Statistics Cards Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="stat bg-white border border-gray-200 shadow-sm rounded-2xl p-6">
            <div className="stat-figure text-success float-right">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
            </div>
            <div className="stat-title text-gray-500 font-semibold mb-1">Total Resolved</div>
            <div className="stat-value text-3xl font-bold text-success">{resolvedTasks?.length || 0}</div>
            <div className="stat-desc text-gray-400 mt-2 text-sm">All time completion rate</div>
          </div>
          
          <div className="stat bg-white border border-gray-200 shadow-sm rounded-2xl p-6">
            <div className="stat-figure text-info float-right">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="stat-title text-gray-500 font-semibold mb-1">Avg. Resolution Time</div>
            <div className="stat-value text-3xl font-bold text-info">2.4 hrs</div>
            <div className="stat-desc text-gray-400 mt-2 text-sm">Faster than last month</div>
          </div>

          <div className="stat bg-white border border-gray-200 shadow-sm rounded-2xl p-6">
            <div className="stat-figure text-warning float-right">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
            </div>
            <div className="stat-title text-gray-500 font-semibold mb-1">Customer Satisfaction</div>
            <div className="stat-value text-3xl font-bold text-warning">98%</div>
            <div className="stat-desc text-gray-400 mt-2 text-sm">Based on recent feedback</div>
          </div>
        </div>

        {/* Recently Resolved Tickets Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <h2 className="text-xl font-bold text-black">Recently Resolved Tickets</h2>
          </div>
          <div className="p-6">
            {resolvedTasks?.length > 0 ? (
              <div className="space-y-4">
                {resolvedTasks.map((task) => (
                  <div key={task.id} className="flex justify-between items-center p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-success transition-all">
                    <div>
                      <h3 className="font-bold text-black text-sm">{task.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">Ticket ID: #{task.id}</p>
                    </div>
                    <span className="badge badge-success text-white text-xs font-bold py-3 px-3">Resolved</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p>No reports available yet. Start resolving tickets to see data here!</p>
              </div>
            )}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Reports;