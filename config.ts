import { defineCollection, z } from "astro:content";

const v = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      mid: z.number().optional(), // bilibili mid
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional().or(z.string().optional()),

      featured: z.number().optional(),

      profile: z
        .object({
          Avatar: z.string().optional(),
          Gallery: z.array(z.object({ URL: z.string(), Remark: z.string() })).optional(),
          OriginalName: z.string().optional(),
          Nickname: z.array(z.string()).optional(),
          Species: z.string().optional(),
          Birthday: z.coerce.date().optional(),
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
          DebutDate: z.array(z.object({ Platform: z.string(), Date: z.coerce.date() })).optional(),
          Retirement: z.object({ URL: z.string(), Date: z.coerce.date() }).optional(),
          Medias: z.array(z.string()).optional(),
          LiveRooms: z.array(z.string()).optional(),
          ExternalLinks: z.array(z.object({ URL: z.string(), Remark: z.string() })).optional(),
          Description: z.string().optional(),
          Highlights: z.array(z.object({ URL: z.string(), Remark: z.string() })).optional(),
          More: z.array(z.record(z.string())).optional(),
        })
        .optional(),
    }),
});

export const collections = { v };
