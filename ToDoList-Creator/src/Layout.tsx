import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({children}: {children:React.ReactNode}) {
    return (
        <>
        <Navbar/>   
        <main>{children}</main>    
        <Footer/>
        </>

    );

}
export default Layout;