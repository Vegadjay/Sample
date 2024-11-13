import StartupCard, { StartupTypeCard } from "@/app/components/StartupCard";
import SearchForm from "@/app/components/SearchForm";
import { STARTUP_QUERIES } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const { data: posts } = await sanityFetch<{ data: StartupTypeCard[] }>({
    query: STARTUP_QUERIES,
    params,
  });

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup,<br />
          Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Result for "${query}"` : `All Startups`}
        </p>

        <ul className="card_grid mt-7">
            {posts && posts.length > 0 ? (
              posts.map((post: StartupTypeCard) => (
            <StartupCard key={post._id} post={post} />
             ))
            ) : (
                <p className="no-results">No Startup Found</p>
            )}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
