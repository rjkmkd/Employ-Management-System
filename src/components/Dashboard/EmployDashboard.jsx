import React from 'react'
import Header from "../Header/Header"
import TaskNumber from '../TaskList/TaskNumber';
import TaskList from '../TaskList/TaskList';

const EmployDashboard = () => {
  return (
    <div>
      <Header />
      <TaskNumber />
      <TaskList />
    </div>
  );
}

export default EmployDashboard
