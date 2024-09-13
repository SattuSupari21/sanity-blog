import Header from "@/components/Header";
import RenderPosts from "@/components/RenderPosts";
import { client } from "@/sanity/lib/client";
import { options, POSTS_QUERY } from "@/utils/contants";

export default async function Home() {
  const posts = await client.fetch(POSTS_QUERY, {}, options);

  return (
    <div>
      <Header />
      <div className="text-center mt-32">
        <p className="text-4xl font-bold">Blogs</p>
        <p className="text-2xl font-medium">Home/Blogs</p>
      </div>
      <RenderPosts posts={posts} />
    </div>
  );
}
