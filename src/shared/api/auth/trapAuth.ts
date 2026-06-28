import { supabase } from "@shared/supabase/client";
import { queryKeys } from "@shared/query/keys";
import { queryClient } from "@shared/lib";

export const trapAuth = async () => {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    console.error("bootstrap auth error:", error);
    return;
  }

  queryClient.setQueryData(queryKeys.user, data.user ?? null);
};
