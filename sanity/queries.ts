import { client } from "./client";

export type TourDate = {
  _id: string;
  type: "festival" | "festival-headlining" | "support" | "headline";
  festivalName: string;
  headliner?: string;
  date: string;
  endDate?: string;
  venue?: string;
  city: string;
  country: string;
  ticketUrl?: string;
};

export async function getTourDates(): Promise<TourDate[]> {
  return client.fetch(
    `*[_type == "tourDate" && isActive == true] | order(date asc) {
      _id,
      type,
      festivalName,
      headliner,
      date,
      endDate,
      venue,
      city,
      country,
      ticketUrl
    }`
  );
}