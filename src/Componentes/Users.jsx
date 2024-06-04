import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {

    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = id=>{
        console.log(id);

        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            const remaining = users.filter(user=>user._id !== id)
            setUsers(remaining)
            console.log(data);
        })
    }

    return (
        <div>
            <h2>USERS length: {users.length}</h2>
            {
                users.map(user=><p key={user._id}>{user.name}:{user.email} {user._id}
                <Link to={`/users/${user._id}`}>
                <button>Update</button>
                </Link> 
                <button onClick={()=>handleDelete(user._id)}>X</button> </p>)
            }
        </div>
    );
};

export default Users;