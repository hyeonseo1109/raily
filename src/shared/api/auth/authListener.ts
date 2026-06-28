import { supabase } from "@shared/supabase/client";
import { queryKeys } from "@shared/query/keys";
import { queryClient } from "@shared/lib";

export const initAuthListener = () => {
  supabase.auth.onAuthStateChange((_event, session) => {
    if (session?.user) {
      queryClient.setQueryData(queryKeys.user, session.user);
    } else {
      queryClient.setQueryData(queryKeys.user, null);
    }
  });
};
