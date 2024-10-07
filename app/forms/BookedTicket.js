import Image from "next/image";

const initialValue = {
    name: '',
    email: '',
    phone_number: '',
    ticket: {
        id: '',
        code: '',
        title: '',
        description: '',
        price: 250,
        location: '',
        date: ''
    }
}

export default function BookedTicket({
    details = initialValue
}) {
    const {
        name,
        email,
        phone_number,
        ticket: {
            title,
            location,
            description,
            date,
            code,
            price
        }
    } = details;
    return (
        <div className="grid grid-cols-12 bg-white border border-dashed border-slate-400 rounded-2xl my-5">
            <div className="col-span-12 md:col-span-9 p-7 md:py-5 md:px-10 text-gray-800 border-b md:border-b-0 md:border-r border-dashed border-slate-400">
                <div className="mb-5">
                    <div className="mb-2">
                        <h5 className="mb-2 text-xl font-bold">
                            {title}
                        </h5>
                    </div>
                    <div className="mb-2 flex flex-col gap-2">
                        <span className="flex gap-1">
                            <p className="text-xs font-mono">
                                {`${date} / ${location}`}
                            </p>
                        </span>
                    </div>
                </div>
                <hr />
                <div class="flex flex-col md:flex-row gap-3 md:gap-7 w-full mt-7 justify-between">
                    <div class="flex flex-col">
                        <span class="text-xs text-slate-400">Name</span>
                        <span class="font-mono">{name}</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-xs text-slate-400">Email</span>
                        <span class="font-mono">{email}</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-xs text-slate-400">Phone Number</span>
                        <span class="font-mono">{phone_number}</span>
                    </div>
                </div>
            </div>
            <div className="col-span-12 md:col-span-3 py-5 rounded-e-2xl font-bold flex justify-center items-center">
                <span className="text-2xl font-bold transform -rotate-90 whitespace-nowrap">
                    <Image src="/svg/qr-code.svg" height={100} width={100} alt="qr-code" />
                </span>
            </div>
        </div>
    )
}
