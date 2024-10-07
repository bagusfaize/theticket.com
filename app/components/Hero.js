import { TicketIcon } from '@heroicons/react/24/outline'

export default function Hero({
    heading
}) {
  return (
    <div className="bg-purple-600 p-5 md:px-10 text-white">
        <div className="flex items-center gap-1">
            <TicketIcon className="size-5"/>
            <h5 className="font-semibold text-sm">THETICKET.COM</h5>
        </div>
        <div className="mt-5 mb-2">
            <h1 className="mb-2 text-xl md:text-3xl font-bold">Book Your Ticket for Music Concert 2023</h1>
            <p className="font-semibold">
                {heading}
            </p>
        </div>
    </div>
  )
}
