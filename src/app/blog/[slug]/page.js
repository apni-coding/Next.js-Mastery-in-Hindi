export default async function BlogDetailPage({params}){
    const {slug} = await params;
    return(
        <h1>Blog Details Page: {slug}</h1>
    )
}
//    /blog/next