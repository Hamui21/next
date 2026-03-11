import {cache} from "react";

export const getPost = cache(async (id: string) => {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => res.json())

    return post
})