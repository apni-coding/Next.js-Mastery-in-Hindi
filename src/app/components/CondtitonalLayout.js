"use client"
import { usePathname } from "next/navigation";
import Footer from "./Footer";
import Header from "./Header";

export default function ConditionalLayout({children}){
    const pathName = usePathname();
    const hideLayoutRoutes = [
        "/login",
        "/signup"
    ]

    const shouldHideLayout = hideLayoutRoutes.includes(pathName)

    return(
        <>
       {!shouldHideLayout && <Header/>}
        {children}
       {!shouldHideLayout && <Footer />}
        
        </>
    )
}