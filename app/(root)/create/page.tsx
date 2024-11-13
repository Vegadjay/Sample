import StartupForm from "@/app/components/StartupForm"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";

const Page = () => { 

    const { data: session } = useSession();

    if (!session) {
        redirect('/api/auth/signin');
    }

    return (
        <>
            <section className="pink_container !min-h-[230px]">
                <h1 className="heading">Submit Your Startup</h1>
            </section>
            <StartupForm />
        </>
    )
}

export default Page;