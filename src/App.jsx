import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import NewTicketModal from './components/NewTicketModal';
import Footer from './components/Footer';
import Home from './components/Home';
import Reports from './components/Reports';
import Faq from './components/Faq';
import ticketsData from './tickets.json';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // Initialize state from Local Storage or fallback to default data
  const [tickets, setTickets] = useState(() => {
    const savedTickets = localStorage.getItem('tickets');
    return savedTickets ? JSON.parse(savedTickets) : ticketsData;
  });

  const [taskStatus, setTaskStatus] = useState(() => {
    const savedTasks = localStorage.getItem('taskStatus');
    return savedTasks ? JSON.parse(savedTasks) : [];
  }); 

  const [resolvedTasks, setResolvedTasks] = useState(() => {
    const savedResolved = localStorage.getItem('resolvedTasks');
    return savedResolved ? JSON.parse(savedResolved) : [];
  }); 

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Save to Local Storage whenever state changes
  useEffect(() => {
    localStorage.setItem('tickets', JSON.stringify(tickets));
  }, [tickets]);

  useEffect(() => {
    localStorage.setItem('taskStatus', JSON.stringify(taskStatus));
  }, [taskStatus]);

  useEffect(() => {
    localStorage.setItem('resolvedTasks', JSON.stringify(resolvedTasks));
  }, [resolvedTasks]);

  // Handle adding a ticket to the task status list
  const handleSelectTicket = (ticket) => {
    setTaskStatus([...taskStatus, ticket]);
    setTickets(tickets.filter(t => t.id !== ticket.id));
    toast.info("Ticket added to Task Status!");
  };

  // Handle creation of a new customer ticket
  const handleAddTicket = (newTicketData) => {
    const newId = tickets.length > 0 ?
    Math.max(...tickets.map(t => t.id)) + 1 : 1001;
    
    const finalTicket = {
      id: newId, 
      title: newTicketData.title,
      status: "Open",
      description: newTicketData.description,
      priority: newTicketData.priority,
      customer: newTicketData.customer,
      createdAt: new Date().toLocaleDateString()
    };

    setTickets([finalTicket, ...tickets]);
    setIsModalOpen(false);
    toast.success(`Ticket #${newId} created successfully!`);
  };

  // Handle marking a task as resolved
  const handleCompleteTask = (ticket) => {
    setTaskStatus(taskStatus.filter(t => t.id !== ticket.id));
    setResolvedTasks([...resolvedTasks, ticket]);
    toast.success("Task Resolved Successfully!");
  };

  return (
    <div className='min-h-screen bg-[#F5F5F5] font-sans flex flex-col'>
      <Navbar onNewTicket={() => setIsModalOpen(true)} />
      
      <NewTicketModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddTicket}
      />

      {/* Main Content Area handled by React Router */}
      <div className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                tickets={tickets} 
                onSelectTicket={handleSelectTicket} 
                taskStatus={taskStatus}
                resolvedTasks={resolvedTasks}
                onCompleteTask={handleCompleteTask} 
              />
            } 
          />
          <Route path="/reports" element={<Reports resolvedTasks={resolvedTasks} />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </div>

      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;