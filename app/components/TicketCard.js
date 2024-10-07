import cx from 'classnames';
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function TicketCard({
    ticket,
    onChange,
    selectedTicket,
    field,
    errors,
}) {
    const {
        title,
        price,
        code,
        description,
        location,
        date
    } = ticket;

    const handleSelect = () => {
        onChange(ticket)
    }

    const isSelected = selectedTicket && selectedTicket.code === code;

    return (
        <label className="cursor-pointer">
            <input
                type="radio"
                name="ticket"
                value={code}
                checked={isSelected}
                onChange={handleSelect}
                className="hidden"
            />
            <div className={cx(
                "grid grid-cols-12 border rounded-2xl",
                isSelected ? "border-purple-500 bg-purple-50" : "bg-white border-slate-300",
            )}>
                <div className={cx(
                    "col-span-2 rounded-s-2xl font-semibold flex justify-center items-center",
                    isSelected ? "bg-purple-600" : "bg-slate-300",
                )}>
                    <span className={cx(
                        "text-2xl font-semibold transform -rotate-90 whitespace-nowrap ",
                        isSelected ? "text-purple-900" : "text-slate-400",
                    )}>
                        {code}
                    </span>
                </div>
                <div className="col-span-10 py-3 px-4 text-gray-800">
                    <div className="mb-2">
                        <h5 className="mb-2 font-semibold">
                            {title}
                        </h5>
                    </div>
                    <div className="mb-2 flex flex-col gap-2">
                        <span className="flex gap-1">
                            <CalendarIcon className="size-4 text-purple-500" />
                            <p className="text-xs text-slate-500">
                                {date}
                            </p>
                        </span>
                        <span className="flex gap-1">
                            <MapPinIcon className="size-4 text-purple-500" />
                            <p className="text-xs text-slate-500">
                                {location}
                            </p>
                        </span>
                    </div>
                    <div>
                        <h5 className="mb-2 font-semibold">
                            {`$${price}.00`}
                        </h5>
                    </div>
                </div>
            </div>
        </label>
    )
}
