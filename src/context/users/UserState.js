import UserContext from "./userContext";
import { useState } from "react";

const UserState = (props) => {
    const [flag, setFlag] = useState(false);
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        age: "",
        phoneno: "",
        city: "",
        state: "",
        sports_prefrence: ""
    });

    const data = (name, email, password, age, phoneno, city, state, sports_prefrence) => {
        setUserData({
            name,
            email,
            password,
            age,
            phoneno,
            city,
            state,
            sports_prefrence
        });
    };

    const [title, setTitle] = useState('')

    const createUser = async (D) => {
        try {
            const response = await fetch("https://back-end-rebase.vercel.app/api/auth/SignUp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(D)
            });
    
            if (!response.ok) {
                setFlag(false)
                return;
            }
    
            const fetched = await response.json();
            setFlag(true)
            return fetched;
        } catch (error) {
            console.error("Error creating user:", error);
            throw error;
        }
    };
    

    const loginUser = async (D) => {
        try {
            const response = await fetch("https://back-end-rebase.vercel.app/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(D)
            });

            if (!response.ok) {
                //throw new Error("Failed to login ");
                setFlag(false);
                return;
            }

            setFlag(true);

            const fetched = await response.json();
            localStorage.setItem("key", (fetched.authData))
            return fetched;
        } catch (error) {
            console.error("Error creating user:", error);
            throw error; // Rethrow the error for handling in the calling code
        }
    };

    const [data2, setData2] = useState({})

    const fetchUser = async () =>{
        const response = await fetch("https://back-end-rebase.vercel.app/api/auth/getuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem("key")
            }
        })
        const responsedata = await response.json()
        setData2(responsedata)
        return responsedata
    }

    const [data3, setData3] = useState([])
    const getallusers = async () => {
        const response = await fetch("https://back-end-rebase.vercel.app/api/auth/userdetails", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const fetched = await response.json()
        setData3(fetched);
        return fetched
    }

    return (
        <UserContext.Provider value={{ data, createUser, setUserData, userData, flag, setFlag, loginUser, data2, fetchUser, data3, getallusers, title, setTitle }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserState;
