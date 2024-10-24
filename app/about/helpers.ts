import { createClient } from "@/utils/supabase/client";

export type Photo = {
  id: number;
  image_url: string;
  caption: string;
};

export async function getPhotos(): Promise<Photo[]> {
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

