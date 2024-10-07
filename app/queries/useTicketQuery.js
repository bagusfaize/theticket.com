import { getTickets } from "../services/api"
import { useQuery } from "@tanstack/react-query"

export const useTickets = () => {
    return useQuery({
        queryKey:['tickets'],
        queryFn: getTickets,
    })
}