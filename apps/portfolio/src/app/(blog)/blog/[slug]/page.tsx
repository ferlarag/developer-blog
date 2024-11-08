import React from "react";
import {getPost, getPosts} from "../../../../sanity/lib/queries";
import {PortableText} from "next-sanity";
import {Refractor, registerLanguage} from "react-refractor";
import ts from "refractor/lang/typescript";
import "../../../../../prism-funky.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {toUrl} from "@/lib/utils";
import {buttonVariants} from "@/components/ui/button";
import {notFound} from "next/navigation";
import {POST_Result} from "@/sanity/schemaTypes/sanity.types";

interface Props {
  params: {
    slug: string;
  };
}

registerLanguage(ts);

// https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams
export const dynamicParams = false;

// https://nextjs.org/docs/app/api-reference/functions/generate-static-params
export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug?.current,
  }));
}

const Page = async ({params}: Props) => {
  // ----- WHY AWAIT params?
  // https://nextjs.org/docs/messages/sync-dynamic-apis
  const {slug} = await params;
  const post: POST_Result = await getPost({slug});

  if (!post) {
    return notFound();
  }

  return (
    <MaxWidthWrapper className="mt-10">
      <div className="flex relative">
        <div className="flex-1 sticky self-start top-20 max-w-[300px]">
          <h3 className="text-2xl font-semibold">Contents</h3>

          <div className="flex flex-col gap-2">
            {post.body?.map((item, index) => {
              if (item.style == "h2") {
                return (
                  <Link href={`#${toUrl(item.children[0].text)}`} key={index}>
                    {item.children[0].text}
                  </Link>
                );
              }
            })}
          </div>
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-semibold">{post.title}</h1>
          <PortableText
            value={post.body}
            components={{
              block: {
                h1: ({children}) => <h1>{children}</h1>,
                h2: ({children, value}) => (
                  <h2
                    id={toUrl(value.children[0].text)}
                    className="text-3xl font-semibold scroll-mt-28 mt-6"
                  >
                    {children}
                  </h2>
                ),
                normal: ({children}) => <p className="mt-3">{children}</p>,
              },
              types: {
                code: ({value}) => (
                  <Refractor
                    language="ts"
                    className="rounded-lg border m-10"
                    value={value.code}
                    markers={[1, 5]}
                  />
                ),
                image: ({value}) => <div>Image</div>,
              },
            }}
          />
        </div>

        <div className="flex-1 flex flex-col gap-2 text-center sticky border p-4 rounded-xl bg-zinc-900 text-white self-start ml-10 top-20 max-w-[300px]">
          <h3 className="text-xl font-semibold">Looking for a developer?</h3>
          <p>
            Send me a message! I&apos;ll be happy to help you in any way I can
          </p>
          <Link
            className={buttonVariants({
              className: "bg-zinc-700 w-full",
            })}
            href={"mailto:ferlarag10@gmail.com"}
          >
            Email me
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
