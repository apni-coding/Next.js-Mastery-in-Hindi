export default async function ProductDetailPage({params}){
    const {id} = await params;
    return(
        <h1>Product Detail Page: {id}</h1>
    )
}
