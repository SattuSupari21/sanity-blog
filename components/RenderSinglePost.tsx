import { urlFor } from "@/sanity/lib/image";
import { PostType } from "@/types/PostType";
import { EditIcon, TrashIcon } from "@sanity/icons";

export default function RenderSinglePost({ post }: { post: PostType }) {
  return (
    <main className="flex justify-center mx-auto text-black mt-12 pb-4 max-w-[800px] flex-col">
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
        <p className="font-bold">by @{post.author.name}</p>
        <img
          src={urlFor(post.mainImage).width(800).url()}
          alt="image"
          className="w-[800px]"
        />
        <div className="mt-8 flex flex-col justify-between text-lg font-medium">
          <p>{post.bodyText[0].text}</p>
        </div>
      </div>
    </main>
  );
}
