"use server";
import { createClient } from "@/utils/supabase/server";

export interface Photo {
  id: number;
  image_url: string;
  caption: string;
}

export async function getPhotosServer(): Promise<Photo[]> {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("photos")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    console.error("Error fetching photos:", error);
    return [];
  }

  return data || [];
}
