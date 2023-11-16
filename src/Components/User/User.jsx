import { Link } from "react-router-dom";


const User = ({ user }) => {
    const{ id, name, email, phone} = user;
    // use syle //
    const userStyle ={
        border : '2px solid red',
        padding:'5px',
        borderRadius:'20px'
    }
    return (
        <div style={userStyle }>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>Phones:{phone}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to = {`/user/${id}`}>
               <button></button>
            </Link>
        </div>
    );
};

export default User;