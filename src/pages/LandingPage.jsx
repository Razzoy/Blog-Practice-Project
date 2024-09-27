import { useQuery } from "@tanstack/react-query"
import { request } from "graphql-request"
import { aboutRally } from "../queries/aboutRally"
import { Post } from "../components/Post/Post"

export function LandingPage() {
    const {data, isLoading, error} = useQuery(
    {
        queryKey: ['AboutRally'],
        queryFn: async () => request(import.meta.env.VITE_PUBLIC_ENDPOINT, aboutRally)
    }
);

console.log(data);

  return (
    <section style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem'}}>
        <Post data={data}/>
    </section>
  )
}
