import { defineCollection, z } from "astro:content";

const v = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),

    profile: z.object({
      Avatar: z.string(),
      HeaderImage: z.string(),
      Gallery: z.array(z.object({ URL: z.string(), Remark: z.string() })).optional(),
      OriginalName: z.string(),
      Nickname: z.array(z.string()).optional(),
      Species: z.string().optional(),
      Birthday: z.date().optional(),
      Age: z.number().optional(),
      AppearanceAge: z.number().optional(),
      Gender: z.string().optional(),
      Height: z.string().optional(),
      Weight: z.string().optional(),
      BloodType: z.string().optional(),
      MITB: z.string().optional(),
      Hometown: z.string().optional(),
      Company: z.string().optional(),
      Hobbies: z.string().optional(),
      Tags: z.array(z.string()).optional(),
      DebutDate: z.array(z.object({ Platform: z.string(), Date: z.date() })),
      Retirement: z.object({ URL: z.string(), Date: z.date() }).optional(),
      Medias: z.array(z.object({ Platform: z.string(), URL: z.string() })),
      ExternalLinks: z.array(z.object({ URL: z.string(), Remark: z.string() })).optional(),
      Description: z.string(),
      Highlights: z.array(z.object({ URL: z.string(), Remark: z.string() })).optional(),
      More: z.array(z.record(z.string())).optional(),
    }).optional(),
  }),
});

export const collections = { v };
