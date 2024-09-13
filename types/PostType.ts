export type PostType = {
  _id: string;
  title: string;
  slug: { current: string };
  author: { name: string };
  publishedAt: string;
  bodyText: [{ text: string }];
  mainImage: [];
};
