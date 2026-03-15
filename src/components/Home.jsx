import Banner from "./Banner";
import React from "react";
import TicketList from "./TicketList";

const Home = ({ tickets, onSelectTicket, taskStatus, resolvedTasks, onCompleteTask }) => {
  return (
    <>
      <Banner 
        inProgressCount={taskStatus.length} 
        resolvedCount={resolvedTasks.length} 
      />
      <TicketList 
        tickets={tickets} 
        onSelect={onSelectTicket} 
        taskStatus={taskStatus}
        resolvedTasks={resolvedTasks}
        onComplete={onCompleteTask} 
      />
    </>
  );
};

export default Home;