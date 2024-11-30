import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const user = useLoaderData();

    const [users,setUsers] = useState(user)

    const handleDelete = (_id) => {
        console.log("Delete", _id);
        fetch(`http://localhost:5000/users/${_id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0) {
                alert('Deleted Successfully')
                const remaining = users.filter(user => user._id !== _id);
                setUsers(remaining)
            }
        })
    };

    return (
        <div>
            <h2 className="text-3xl font-semibold">{user.length}</h2>
            <div>
                {user.map((user) => (
                    <p key={user._id} className="border p-5 m-5 bg-slate-50">
                        Name:{user.name} <br /> email: {user.email} <br /> id:{user._id} <br />
                        <button className="text-white bg-red-600 p-2" onClick={() => handleDelete(user._id)}>X</button>{" "}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Users;
