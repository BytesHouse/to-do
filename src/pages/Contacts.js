import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { UserService } from "../api/users.service";
import { PostService } from "../api/posts.service";
import { UsersTable } from "../components/UsersTable";

export default function Contacts() {
    const [state, setState] = useState();
    const [posts, setPosts] = useState();
    useEffect(() => {
        UserService.getUsers().then((json) => setState(json.data));
        PostService.getAllPosts().then((json) => setPosts(json.data));
    }, []);
    return (
        <>
            <Header title={"Contacts"} />
            <UsersTable users={state}/>
        </>
    );
}