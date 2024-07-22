"use server";

import { revalidatePath } from "next/cache";

export default async function revalidatePathaction(url: string, type: "page" | "layout" = "page") {
  revalidatePath(url, type);
}
