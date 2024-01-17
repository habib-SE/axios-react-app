
import './App.css';
import React from 'react';
import PostList from './components/PostList';

function App() {
  return (
    <div className="container mx-auto mt-8 p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">React App with Axios and Tailwind CSS Post Search By Id</h1>
      <PostList />
    </div>
  );
}

export default App;
