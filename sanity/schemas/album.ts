import { defineField, defineType } from "sanity";

export const album = defineType({
  name: "album",
  title: "Album",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Album Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "year",
      title: "Release Year",
      type: "number",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Art",
      type: "image",
      options: { hotspot: true },
      description: "Upload the album cover art",
    }),
    defineField({
      name: "coverPlaceholderColor",
      title: "Cover Placeholder Color",
      type: "string",
      description: "Hex color to show while cover art loads (e.g. #1a1a1a)",
    }),
    defineField({
      name: "highlights",
      title: "Song Highlights",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "title", title: "Song Title", type: "string" }),
            defineField({ name: "youtubeUrl", title: "YouTube URL", type: "url" }),
          ],
          preview: {
            select: { title: "title" },
          },
        },
      ],
      description: "Pick 2-3 key tracks to highlight",
    }),
    defineField({
      name: "streamingLinks",
      title: "Streaming Links",
      type: "object",
      fields: [
        defineField({ name: "spotify", title: "Spotify URL", type: "url" }),
        defineField({ name: "appleMusic", title: "Apple Music URL", type: "url" }),
        defineField({ name: "youtube", title: "YouTube Music URL", type: "url" }),
      ],
    }),
    defineField({
      name: "isFeatured",
      title: "Feature this album?",
      type: "boolean",
      description: "Featured albums appear larger in the grid",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "year",
      media: "coverImage",
    },
  },
});