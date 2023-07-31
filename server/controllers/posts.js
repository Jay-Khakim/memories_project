import PostMessage from "../models/postMEssage.js"


export const getPosts = (req, res) => {
    res.send('This WORKS')
}

export const createPost = (req, res) =>{
    res.send('Post Creation ')
}