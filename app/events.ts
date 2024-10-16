import { createClient } from "@/utils/supabase/client";

export interface Event {
    id: number;
    name: string;
    category: string;
    image: string;
    register: string;
    date: string;
    location: string;
    description: string;
    one_liner: string;
}
export default async function getEvents() {
    const supabase = createClient();
    const { data, error } = await supabase.from("events").select("*");
    if (error) {
        console.error(error);
        return [];
    }
    return data;
}
