import { instance } from "./api";

export class PostService {
    static getAllPosts(){
        return instance.get("/post")
    }
    static getPostById(id){
        return instance.get(`/post/${id}`);
    }
    static createPost(obj){
        return instance.post(`/post`, obj)
    }
}