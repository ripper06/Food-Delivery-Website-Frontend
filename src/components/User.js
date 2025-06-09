import { useState } from "react";

const User = ({name})=>{
    const [count1,setcount1] = useState(0);
    const [count2] = useState(1);

    return (
    <div className="user-card">
        <h1>Count1 = {count1}</h1>
        <h1>Count2 = {count2}</h1>
        <h2>Name : {name}</h2>
        <h3>Location : India</h3>
        <h3>Contact : @ripper03</h3>
    </div>
    )
}

export default User;