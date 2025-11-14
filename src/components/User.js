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
        <div className="user-card border-fuchsia-500 border-2 shadow-fuchsia-700 shadow-md mt-4">
            <h2 className="text-shadow-orange-600 shadow-2xl my-1">Name : {user?.name}</h2>
            <h3 className="my-1">Location : {user?.location}</h3>
            <p className="my-1">Bio : {user?.bio}</p>
        </div>
    )
}

export default User;