import { createClient } from "@/utils/supabase/client";
export interface Query {
  first_name: string;
  last_name: string;
  email: string;
  query: string;
  status: "pending" | "resolved" | "rejected";
}

interface QueryResponse {
  success: boolean;
  error: string;
}

export default async function submitQuery(query: Query): Promise<QueryResponse> {
  const supabase = createClient();
  const { data, error } = await supabase.from("query").insert(query);
  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true, error: "" };
}
