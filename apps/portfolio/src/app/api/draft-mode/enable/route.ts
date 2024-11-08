// src/app/api/draft-mode/enable/route.ts

import {defineEnableDraftMode} from "next-sanity/draft-mode";
import {client} from "@/sanity/lib/client";

export const {GET} = defineEnableDraftMode({
  client: client.withConfig({token: process.env.SANITY_API_READ_TOKEN}),
});

// const clientWithToken = client.withConfig({
//   token: process.env.SANITY_API_READ_TOKEN,
// });

// export async function GET(request: Request) {
//   const {isValid, redirectTo = "/"} = await validatePreviewUrl(
//     clientWithToken,
//     request.url
//   );
//   if (!isValid) {
//     return new Response("Invalid secret", {status: 401});
//   }

//   await draftMode().enable();

//   redirect(redirectTo);
// }

// export async function GET(request: Request) {
//   return NextResponse.json({
//     message: "Message came",
//   });
// }
