import {defineQuery, groq} from "next-sanity";
import {client} from "./client";

export async function getPost({slug}: {slug: string}) {
  const POST_ = groq`*[_type == 'post' && slug.current == $slug][0]{
    title, slug, mainImage, body
  }`;
  const data = await client.fetch(POST_, {slug});
  return data;
}

export async function getPosts() {
  const POSTS_ = defineQuery(`*[_type == 'post'][0...10]{
        title, 
        slug, 
        mainImage, 
        description,
        categories[]->{title},
        author->{name}
    }`);
  const data = await client.fetch(POSTS_);
  return data;
}
