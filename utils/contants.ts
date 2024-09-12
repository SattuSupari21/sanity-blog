import { defineQuery } from "next-sanity";

export const options = { next: { revalidate: 60 } };

export const POSTS_QUERY = defineQuery(`*[
  _type == "post"
  && defined(slug.current)]{_id, title, slug, author->{name}, publishedAt, "bodyText": body[]{
    _type == "block" => {
      "text": pt::text(@)
    }
  }}|order(date desc)`);

export const GET_POST_QUERY = (slug: string) => {
  return `*[
  _type == "post"
  && slug.current == "${slug}"]{_id, title, slug, author->{name}, publishedAt, "bodyText": body[]{
    _type == "block" => {
      "text": pt::text(@)
    }
  }}|order(date desc)`;
};
