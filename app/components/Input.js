import { Controller, useFormContext, get, useController } from 'react-hook-form'

export default function Input({
    label = '',
    name = '',
    type = 'text',
}) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: {error} }) => (
                <div className="flex flex-col mb-3">
                    <label
                        htmlFor={name}
                        className="block mb-2 text-sm font-medium text-gray-800"
                    >
                        {label}
                    </label>
                    <input
                        id={name}
                        type={type}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
                        {...field}
                    />
                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                </div>
            )}
        />
    )
}
