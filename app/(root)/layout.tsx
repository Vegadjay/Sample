import Navbar from "../components/Navbar";
import SessionProvider from "../lib/SessionProvider";
export default function Layout ({children} : Readonly <{ children : React.ReactNode}> ) {
    return <>
        <main className="font-work-sans">
            <SessionProvider>
                <Navbar />
                {children}
            </SessionProvider>
        </main>
    </>
}