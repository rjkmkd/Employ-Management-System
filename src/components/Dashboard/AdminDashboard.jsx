import React from 'react'
import Header from "../Header/Header"
import CreateTask from '../TaskList/CreateTask';
import AllTask from '../TaskList/AllTask';
const AdminDashboard = () => {
  return (
    <div className="p-2 h-screen">
      <Header />
      <CreateTask/>
      <AllTask/>
    </div>
  );
}

export default AdminDashboard
