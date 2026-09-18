export default async function DocsPage({params}){
    const {slug} = await params;

    return (
        <>
        <h1>Docs page</h1>
        
        <p>{slug.join(" / ")}</p>
        </>
    )
}

//http://localhost:3000/docs/react/components/button
