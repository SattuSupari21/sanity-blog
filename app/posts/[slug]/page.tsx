import Header from "@/components/Header";
import RenderSinglePost from "@/components/RenderSinglePost";
import { client } from "@/sanity/lib/client";
import { GET_POST_QUERY, options } from "@/utils/contants";
import { defineQuery } from "next-sanity";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await client.fetch(
    defineQuery(GET_POST_QUERY(params.slug)),
    {},
    options
  );

  return (
    <div className="inset-0 -z-10 min-h-screen w-full pb-12 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
      <Header />
      <RenderSinglePost post={post} />
    </div>
  );
}
