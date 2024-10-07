import cx from 'classnames'

export default function Button({
    children,
    onClick = () => {},
    fullWidth = false,
    className = '',
    type = 'button',
    disabled = false,
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={cx(
                "text-white font-medium rounded-full px-5 py-2.5 me-2 mb-2 min-w-24 md:min-w-40",
                disabled ? "bg-slate-300" : "bg-purple-700 hover:bg-purple-800",
                {"w-full" : fullWidth},
                className
            )}
        >
            {children}
        </button>
    )
}
