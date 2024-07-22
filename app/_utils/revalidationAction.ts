"use server";

import { revalidatePath } from "next/cache";

export default async function revalidatePathAction(url: string, type: "page" | "layout" = "page") {
  revalidatePath(url, type);
}
