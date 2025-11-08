import { useEffect, useState } from "react";

const User = ()=>{
    /*
    //*Important
    useEffect(()=>{
        const timer = setInterval(() => {
            console.log("Interval Started");
        }, 1000);
        return ()=>{
            clearInterval(timer);
        }
    })
    */
    const [user,setUser] = useState(null);

    useEffect(()=>{
        fetchUserInfo();
    },[])

    const fetchUserInfo = async ()=>{
        const data = await fetch("https://api.github.com/users/piyushtiwari919");
        const json = await data.json();
        setUser(json);
    }
    return(
        <div className="user-card">
            <h2>Name : {user?.name}</h2>
            <h3>Location : {user?.location}</h3>
            <p>Bio : {user?.bio}</p>
        </div>
    )
}

export default User;