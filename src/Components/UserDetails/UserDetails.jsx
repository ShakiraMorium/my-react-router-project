import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const{name, email} = user;
    return (
        <div>
            <h2>Details About User:{name}</h2>
            <p>contact:{email}</p>
        </div>
    );
};

export default UserDetails;