import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "./keys";
import { getUser } from "@shared/api/auth";

export const useUserQuery = () => {
  return useQuery({
    queryKey: queryKeys.user,
    queryFn: getUser,

    staleTime: Infinity,
    retry: 1,
  });
};
