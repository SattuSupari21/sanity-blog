import { urlFor } from "@/sanity/lib/image";
import { PostType } from "@/types/PostType";
import { PortableText } from "next-sanity";

export default function RenderSinglePost({ post }: { post: PostType }) {
  const ImageComponent = ({ value }: { value: any }) => {
    return <img src={urlFor(value).width(800).url()} alt="content-image" />;
  };

  return (
    <main className="max-[820px]:px-2 flex justify-center mx-auto text-black mt-12 pb-4 max-w-[800px] flex-col">
      <div
        className="flex flex-col items-center justify-center gap-4"
        key={post._id}
      >
        <div className="flex flex-col gap-1 items-center">
          <h2 className="text-3xl font-semibold">{post?.title}</h2>
          {post?.publishedAt && (
            <div className="flex gap-2">
              <p className="text-gray-500">
                {new Date(post.publishedAt).toDateString()}
              </p>
            </div>
          )}
        </div>
        {post?.author && <p className="font-bold">by @{post.author.name}</p>}
        <img
          src={urlFor(post.mainImage).width(800).url()}
          alt="image"
          className="w-[800px]"
        />
        <div className="min-w-full text-justify prose lg:prose-xl mt-6">
          <PortableText
            value={post.content}
            components={{
              types: {
                image: ({ value }) => {
                  return <ImageComponent value={value} />;
                },
              },
            }}
          />
        </div>
      </div>
    </main>
  );
}
