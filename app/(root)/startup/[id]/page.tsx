import { formateDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { STARTUP_ID_QUERY } from '@/sanity/lib/queries';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import markdownit from 'markdown-it'
import { Skeleton } from '@/components/ui/skeleton';
import  View  from '@/app/components/View';

const md = markdownit();

const Page = async ({ params }: { params: { id: string } }) => {
    const { id } = params;
    
    const post = await client.fetch(STARTUP_ID_QUERY, { id });
    
    const parsedContent = md.render(post?.pitch || "");

    if (!post) {
        return notFound();
    }
    
    return (
        <div>
            <section className='pink_container !min-h-[230px]'>
                <p className='tag'>{formateDate(post._createdAt)}</p>
                <h1 className='heading'>{post.title}</h1>
                <p className='sub-heading !max-w-5xl'>{post.description}</p>
            </section>

            <section className='section_container'>
                <img src={post.image ?? "https://cdn.vectorstock.com/i/1000x1000/47/39/simple-person-icon-or-user-and-avatar-vector-46414739.webp"} alt="thumbnail" width={800} height={450} className='w-full h-auto rounded-xl' />

                <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
                    <div className='flex-between gap-5'>
                        <Link href={`/user/${post.author?._id}`} className='flex gap-2 items-center mb-3'>
                            <img src={post.author?.profilePicture ?? "https://www.teradrinks.com/wp-content/uploads/2013/09/1000x500.gif"} alt="avatar" width={64} height={64} className="rounded-full drop-shadow-lg" />
                            <div>
                                <p className='text-20-medium'>{post.author?.name}</p>
                                <p className='text-16-medium !text-black-300'>{post.author?.username}</p>
                            </div>
                        </Link>
 
                        <p className='category-tag'>
                            {post.category}
                        </p>
                    </div>

                    <h3 className='text-30-bold'>
                        Pitch Details
                    </h3>

                    { parsedContent ? ( 
                        <article dangerouslySetInnerHTML={{__html: parsedContent}} className='prose max-w-4xl font-work-sans breaka-all' /> 
                     ) : (
                        <p className='no-result'>No Details Provided</p>
                     ) 
                    }
                </div>
                <hr className='divider' />
                <Suspense fallback={<Skeleton className="view_skeleton" />}>
                  <View id={id} />
                </Suspense>
            
            </section>
        </div>
    );
};

export default Page;
