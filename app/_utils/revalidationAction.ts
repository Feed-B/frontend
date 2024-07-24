"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function revalidatePathAction(url: string, type: "page" | "layout" = "page") {
  revalidatePath(url, type);
}

export async function revalidateTagAction(tag: string) {
  revalidateTag(tag);
}
