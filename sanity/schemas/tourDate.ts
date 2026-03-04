import { defineField, defineType } from "sanity";

export const tourDate = defineType({
  name: "tourDate",
  title: "Tour Date",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Show Type",
      type: "string",
      options: {
        list: [
          { title: "Festival",              value: "festival" },
          { title: "Festival (Co-Headlining)", value: "festival-headlining" },
          { title: "Support (Opening for someone)", value: "support" },
          { title: "Headline (LB's own show)", value: "headline" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),

    defineField({
      name: "festivalName",
      title: "Festival / Show Name",
      type: "string",
      description: "For festivals: the festival name. For headline shows: the tour/show name.",
      validation: (r) => r.required(),
    }),

    defineField({
      name: "headliner",
      title: "Headliner Name",
      type: "string",
      description: "Only for Support shows — who is Limp Bizkit opening for?",
      hidden: ({ document }) => document?.type !== "support",
    }),

    defineField({
      name: "date",
      title: "Date",
      type: "date",
      options: { dateFormat: "YYYY-MM-DD" },
      validation: (r) => r.required(),
    }),

    defineField({
      name: "endDate",
      title: "End Date (multi-day events only)",
      type: "date",
      options: { dateFormat: "YYYY-MM-DD" },
      description: "Leave blank for single-day shows.",
    }),

    defineField({
      name: "venue",
      title: "Venue",
      type: "string",
    }),

    defineField({
      name: "city",
      title: "City",
      type: "string",
      validation: (r) => r.required(),
    }),

    defineField({
      name: "country",
      title: "Country",
      type: "string",
      validation: (r) => r.required(),
    }),

    defineField({
      name: "ticketUrl",
      title: "Ticket URL",
      type: "url",
    }),

    defineField({
      name: "isActive",
      title: "Show this date?",
      type: "boolean",
      description: "Uncheck to hide without deleting.",
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title:    "festivalName",
      subtitle: "date",
      type:     "type",
    },
    prepare({ title, subtitle, type }) {
      const typeLabel: Record<string, string> = {
        "festival":             "🎪",
        "festival-headlining":  "🎪★",
        "support":              "🎸",
        "headline":             "👊",
      };
      return {
        title:    `${typeLabel[type] ?? "📅"} ${title}`,
        subtitle: subtitle,
      };
    },
  },
});