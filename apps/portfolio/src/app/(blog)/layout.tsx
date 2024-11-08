import React from "react";
import {SanityLive} from "@/sanity/lib/live";
import {draftMode} from "next/headers";
import {DisableDraftMode} from "@/components/DisableDraftMode";
import {VisualEditing} from "next-sanity";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
    </>
  );
}
