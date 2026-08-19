import { defineField, defineType } from "sanity";

export const sponsor = defineType({
  name: "sponsor",
  title: "Sponsor / Partner",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      validation: (r) => r.required(),
    }),
    defineField({ name: "url", title: "URL", type: "url" }),
  ],
  preview: {
    select: { title: "name", media: "logo" },
  },
});
