import StartupCard from "@/app/components/StartupCard";
import SearchForm from "@/app/components/SearchForm";

export default async function Home( { searchParams }: { searchParams: Promise<{ query?: string}> } ) {

  const query = ( await searchParams ).query;

  const posts = [
  {
    _id: 1,
    title: "The Future of Web Development",
    description: "Exploring upcoming trends in web development including AI integration, WebAssembly, and edge computing.",
    author: "Sarah Chen",
    category: "Technology",
    views: 1542,
    profilePicture: "https://picsum.photos/seed/sarah/200/200",
    img: "https://picsum.photos/seed/webdev/800/600",
    _createdAt: "2024-01-15T08:30:00Z"
  },
  {
    _id: 2,
    title: "Ultimate Guide to Sustainable Living",
    description: "Practical tips and strategies for reducing your carbon footprint and living a more sustainable lifestyle.",
    author: "Michael Green",
    category: "Lifestyle",
    views: 2891,
    profilePicture: "https://picsum.photos/seed/michael/200/200",
    img: "https://picsum.photos/seed/sustainable/800/600",
    _createdAt: "2024-02-01T14:20:00Z"
  },
  {
    _id: 3,
    title: "Machine Learning for Beginners",
    description: "A comprehensive introduction to machine learning concepts and applications for newcomers to the field.",
    author: "David Kumar",
    category: "Technology",
    views: 3756,
    profilePicture: "https://picsum.photos/seed/david/200/200",
    img: "https://picsum.photos/seed/machinelearning/800/600",
    _createdAt: "2024-02-15T10:45:00Z"
  },
  {
    _id: 4,
    title: "Healthy Breakfast Recipes",
    description: "Collection of nutritious and delicious breakfast recipes to start your day right.",
    author: "Emma Rodriguez",
    category: "Food",
    views: 4521,
    profilePicture: "https://picsum.photos/seed/emma/200/200",
    img: "https://picsum.photos/seed/breakfast/800/600",
    _createdAt: "2024-03-01T09:15:00Z"
  },
  {
    _id: 5,
    title: "Digital Marketing Strategies 2024",
    description: "Latest digital marketing trends and strategies for growing your online presence.",
    author: "James Wilson",
    category: "Marketing",
    views: 2187,
    profilePicture: "https://picsum.photos/seed/james/200/200",
    img: "https://picsum.photos/seed/marketing/800/600",
    _createdAt: "2024-03-10T16:30:00Z"
  },
  {
    _id: 6,
    title: "Mindfulness Meditation Guide",
    description: "Step-by-step guide to practicing mindfulness meditation for better mental health.",
    author: "Lisa Thompson",
    category: "Health",
    views: 1876,
    profilePicture: "https://picsum.photos/seed/lisa/200/200",
    img: "https://picsum.photos/seed/meditation/800/600",
    _createdAt: "2024-03-20T11:25:00Z"
  },
  {
    _id: 7,
    title: "Photography Tips for Beginners",
    description: "Essential photography techniques and camera settings for aspiring photographers.",
    author: "Alex Martinez",
    category: "Photography",
    views: 3298,
    profilePicture: "https://picsum.photos/seed/alex/200/200",
    img: "https://picsum.photos/seed/photography/800/600",
    _createdAt: "2024-04-01T13:40:00Z"
  },
  {
    _id: 8,
    title: "Home Office Setup Ideas",
    description: "Creative and ergonomic home office design ideas for remote workers.",
    author: "Rachel Brown",
    category: "Lifestyle",
    views: 2654,
    profilePicture: "https://picsum.photos/seed/rachel/200/200",
    img: "https://picsum.photos/seed/office/800/600",
    _createdAt: "2024-04-15T15:10:00Z"
  },
  {
    _id: 9,
    title: "Cryptocurrency Investment Guide",
    description: "Understanding cryptocurrency markets and developing smart investment strategies.",
    author: "Tom Anderson",
    category: "Finance",
    views: 5432,
    profilePicture: "https://picsum.photos/seed/tom/200/200",
    img: "https://picsum.photos/seed/crypto/800/600",
    _createdAt: "2024-04-25T12:50:00Z"
  },
  {
    _id: 10,
    title: "Plant-Based Diet Benefits",
    description: "Scientific research and health benefits of adopting a plant-based diet.",
    author: "Maria Santos",
    category: "Health",
    views: 3121,
    profilePicture: "https://picsum.photos/seed/maria/200/200",
    img: "https://picsum.photos/seed/plantbased/800/600",
    _createdAt: "2024-05-01T09:55:00Z"
  }
];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup,<br /> 
        Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

    <section className="section_container">
      <p className="text-30-semibold">
        { query ? `Search Result for "${query}"` : `All Startups` }
      </p>

      <ul className="card_grid mt-7">
          {
            posts.length > 0 ? (
              posts.map((post: StartupTypeCard, index:number) => (
                <StartupCard key={post?._id} post={post} />
              ))
            ) : ( 
              <p className="no-results">No Startup Found</p>
            )
          }
        </ul>
    </section>
    </>
  );
}