import TicketSkeleton from '../components/skeletons/TicketSkeleton';
import TicketCard from '../components/TicketCard'
import { useTickets } from '../queries/useTicketQuery'
import { Controller, useFormContext } from 'react-hook-form';

export default function TicketSelection() {
    const { control, formState: { errors } } = useFormContext();

    const { data = [], isLoading } = useTickets();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            <Controller
                name='ticket'
                control={control}
                render={({ field }) => (
                    <>
                        {data.map(ticket => (
                            <TicketCard
                                key={ticket.code}
                                ticket={ticket}
                                selectedTicket={field.value}
                                onChange={field.onChange}
                                errors={errors.ticket}
                            />
                        ))}
                    </>
                )}
            />
            {isLoading && <LoadingState />}
            {errors.ticket && <p className="text-red-500 text-sm">{errors.ticket.message}</p>}
        </div>
    )
}

const LoadingState = () => {
    const skeletonTotal = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {skeletonTotal.map(() => (
                <TicketSkeleton />
            ))
            }
        </>
    )

}