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
    <div>
      <Header />
      <RenderSinglePost post={post[0]} />
    </div>
  );
}
