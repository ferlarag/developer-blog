import React from "react";
import {getPosts} from "../../../sanity/lib/queries";
import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {POSTS_Result} from "@/sanity/schemaTypes/sanity.types";

const Page = async () => {
  const posts = await getPosts();

  return (
    <MaxWidthWrapper className="flex flex-col">
      {posts.map((post, index) => (
        <div className={`${index !== 0 ? "border-t" : ""}`} key={index}>
          <PostEntry post={post} />
        </div>
      ))}
    </MaxWidthWrapper>
  );
};

type POST = POSTS_Result[0];

const PostEntry = ({post}: {post: POST}) => {
  const {description, mainImage, slug, title, author, categories} = post;
  return (
    <Link
      href={`/blog/${slug?.current ?? "/"}`}
      className="flex flex-col py-10 gap-1"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-lg max-w-[600px]">{description}</p>
      <div className="flex gap-1">
        {categories?.map((cat, index) => (
          <span
            className="px-2 py-1 border rounded-lg text-zinc-600"
            key={index}
          >
            {cat.title}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default Page;
