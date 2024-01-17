import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [searchId, setSearchId] = useState('');
  const [searchedPost, setSearchedPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handleSearch = () => {
    const postId = parseInt(searchId, 10);
    const searchedPost = posts.find(post => post.id === postId);

    setSearchedPost(searchedPost);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Posts</h2>

      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Enter Post ID"
          className="px-4 py-2 border border-gray-300 mr-2"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </div>

      <ul className="divide-y divide-gray-300">
        {searchedPost ? (
          <li className="py-2">
            <span className="font-bold">ID: </span>
            <span>{searchedPost.id}</span>
            <br />
            <span className="font-bold">Title: </span>
            <span>{searchedPost.title}</span>
            <br />
            <span className="font-bold">Body: </span>
            <span>{searchedPost.body}</span>
          </li>
        ) : (
          posts.map(post => (
            <li key={post.id} className="py-2">
              <span className="font-bold">ID: </span>
              <span>{post.id}</span>
              <br />
              <span className="font-bold">Title: </span>
              <span>{post.title}</span>
              <br />
              <span className="font-bold">Body: </span>
              <span>{post.body}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default PostList;
