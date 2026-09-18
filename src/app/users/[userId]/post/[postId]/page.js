export default async function PostDetailsPage({params}){
    const {userId, postId} = await params;

    return (
        <>
        <h1>Post detial page</h1>
        <p>User Id: {userId}</p>
        <p>Post Id: {postId}</p>

        </>
    )
}

//http://localhost:3000/docs/react/components/button
