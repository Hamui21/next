import {Metadata} from "next";
import {getPost} from "@/app/posts/[id]/getPost";

type Post = {
    userId: number
    id: number
    title: string
    body: string
}

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {

    const { id } = await params
    const post: Post = await getPost(id)

    return {
        title: post.title,
        description: post.body
    }
}

export default async function PostPage({ params }: Props) {

    const { id } = await params
    const post: Post = await getPost(id)

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}