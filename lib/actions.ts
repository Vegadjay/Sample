"use server";

import { getSession } from "next-auth/react";
import { parseServerActionResponse } from "@/lib/utils";
import slugify from "slugify";
import { writeClient } from "@/sanity/lib/write-client";

export const createPitch = async (
  state: any,
  form: FormData,
  pitch: string,
) => {
  try {
    // Get session from NextAuth
    const session = await getSession();

    // Check if the session exists and includes user data
    if (!session || !session.user) {
      return parseServerActionResponse({
        error: "Not signed in",
        status: "ERROR",
      });
    }

    const { title, description, category, link } = Object.fromEntries(
      Array.from(form).filter(([key]) => key !== "pitch"),
    );

    // Validate required fields
    if (!title || !description || !category || !link) {
      return parseServerActionResponse({
        error: "Missing required fields",
        status: "ERROR",
      });
    }

    // Generate slug
    const slug = slugify(title as string, { lower: true, strict: true });

    // Define startup data with author based on GitHub login (using email as fallback for ID)
    const startup = {
      _type: "startup",
      title,
      description,
      category,
      image: link,
      slug: {
        _type: "slug",
        current: slug,
      },
      author: {
        _type: "reference",
        _ref: session.user.id || session.user.email, // Fallback to email if no id
      },
      pitch,
    };

    const result = await writeClient.create(startup);

    return parseServerActionResponse({
      ...result,
      error: "",
      status: "SUCCESS",
    });
  } catch (error) {
    console.error("Error creating pitch:", error);

    return parseServerActionResponse({
      error: JSON.stringify(error),
      status: "ERROR",
    });
  }
};
