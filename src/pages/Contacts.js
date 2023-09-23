import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { UserService } from "../api/users.service";

export default function Contacts(){
    const [state, setState] = useState()
    useEffect(()=>{
        const tmp = UserService.getUsers();
        setState(tmp);
    },[]);
    console.log(state)
    return (
        <Header title={"Contacts"}/>
    );
}