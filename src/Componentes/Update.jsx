import { useLoaderData } from "react-router-dom";



const Update = () => {
   
    const users = useLoaderData()
    console.log(users);

    const handleUpdate =e=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const newUsers = {name, email, password}
        console.log(name,email,password, newUsers);

        fetch(`http://localhost:5000/users/${users._id}`, {
            method: 'put',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(newUsers)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })

    }

    return (
        <div>
            <h2>Update form</h2>
            
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={users.name} id="" />
                <br />
                <input type="email" name="email" defaultValue={users.email} id="" />
                <br />
                <input type="password" name="password" defaultValue={users.password} id="" />
                <br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default Update;