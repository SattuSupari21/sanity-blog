import { urlFor } from "@/sanity/lib/image";

type PostType = {
  _id: string;
  title: string;
  slug: { current: string };
  author: { name: string };
  publishedAt: string;
  bodyText: [{ text: string }];
  mainImage: [];
};

export default function RenderSinglePost({ post }: { post: PostType[] }) {
  return (
    <main className="flex justify-center mx-auto text-black mt-32 max-w-[800px] flex-col">
      <ul className="grid grid-cols-1 gap-6">
        {post.map((post) => (
          <li
            className="flex flex-col items-center justify-center gap-4"
            key={post._id}
          >
            <div className="flex flex-col gap-2 items-center">
              <h2 className="text-3xl font-semibold">{post?.title}</h2>
              {post?.publishedAt && (
                <div className="flex gap-2">
                  <p className="text-gray-500">
                    {new Date(post.publishedAt).toDateString()}
                  </p>
                </div>
              )}
            </div>
            <p className="font-bold">by @{post.author.name}</p>
            <img
              src={urlFor(post.mainImage).width(800).url()}
              alt="image"
              className="w-[800px]"
            />
            <div className="flex flex-col justify-between">
              <p>{post.bodyText[0].text}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
