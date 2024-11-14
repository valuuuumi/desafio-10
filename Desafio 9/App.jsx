import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './UserList';
import UserDetails from './UserDetails';
import UserForm from './UserForm';
import UserEdit from './UserEdit';
import UserDelete from './UserDelete';

const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/create" element={<UserForm />} />
          <Route path="/edit/:id" element={<UserEdit />} />
          <Route path="/delete/:id" element={<UserDelete />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;