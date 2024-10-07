export default function TicketSkeleton() {
    return (
        <div className="grid border border-slate-300 rounded-2xl p-4 w-full h-[140px]">
            <div className="animate-pulse grid grid-cols-12 gap-x-4">
                <div className="col-span-2 rounded-lg bg-slate-300 w-full"></div>
                <div className="col-span-10 space-y-6 py-1">
                    <div className="h-2.5 bg-slate-300 rounded"></div>
                    <div className="space-y-3">
                        <div className="h-2.5 bg-slate-300 rounded"></div>
                        <div className="h-2.5 bg-slate-300 rounded"></div>
                    </div>
                    <div className="h-2.5 w-1/2 bg-slate-300 rounded"></div>
                </div>
            </div>
        </div>
    )
}
