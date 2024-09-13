import { urlFor } from "@/sanity/lib/image";
import { PostType } from "@/types/PostType";
import Link from "next/link";

export default function RenderPosts({ posts }: { posts: PostType[] }) {
  function getSummaryText(bodyText: { text: string }[]) {
    let text = "";
    bodyText.map((e) => {
      text = e.text;
    });
    return text.slice(0, 200);
  }

  return (
    <main className="flex justify-center mx-auto text-black mt-32 max-w-[800px] flex-col pb-10">
      <ul className="grid grid-cols-1 gap-6">
        {posts.map((post) => (
          <li className="grid grid-cols-2 gap-10" key={post._id}>
            <Link href={`/posts/${post?.slug?.current}`} className="w-full">
              <img
                src={urlFor(post.mainImage).width(800).url()}
                alt="image"
                className="max-w-[400px]"
              />
            </Link>
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-semibold">{post?.title}</h2>
                {post?.publishedAt && (
                  <div className="flex gap-2 mt-3">
                    <p>{post.author.name}</p>
                    <p className="text-gray-500">
                      {new Date(post.publishedAt).toDateString()}
                    </p>
                  </div>
                )}
              </div>
              <p>{getSummaryText(post.bodyText)}...</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
