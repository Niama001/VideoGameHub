import React, {useState, useEffect} from "react";
import { supabase } from './CreateClient'
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams(); 
  const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        const { data } = await supabase
            .from('users')
            .select('*')
        setUsers(data)
    }
  
  const createdAt = new Date().toLocaleString();

  return (
    <div>
      <h2>Post Details</h2>
      {users.map(users => (
        <div key = {users.id}>
          <h3>{users.title}</h3>
          <p>{users.content}</p>
          <p>{users.imageUrl}</p>
          <p>Upvotes: {users.upvotes}</p>
          <p>Created At: {createdAt}</p>
        </div>
      ))}
    </div>
  );
      };

export default PostDetails;


