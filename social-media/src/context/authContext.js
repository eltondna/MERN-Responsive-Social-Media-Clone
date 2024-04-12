import { useState, useEffect, useContext, createContext, Children } from "react";
import axios from 'axios'
import { BASE_URL } from "../config";
export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem('user')) || null)
    
    const login = async (input)=>{
        // setCurrentUser({
        //     id: 1,
        //     name:"Elton Wong",
        //     profilePic:'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        // })
        const {data} = await axios.post(BASE_URL + "/auth/login",input)
        const userinfo = data.data.others;
        const token = data.token;
        console.log(data.token)

        // remove await after implement logout
        await localStorage.setItem('token', token);
        
        setCurrentUser(userinfo)
        
    }


    useEffect(()=>{
        // May be happen to be an object
        localStorage.setItem('user',JSON.stringify(currentUser));
        const token = localStorage.getItem('token')
        if (token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            console.log(token)
        }
    },[currentUser])

    return (
        <AuthContext.Provider value={{currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )
}