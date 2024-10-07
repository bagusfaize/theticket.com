import Input from '../components/Input';

export default function BookingForm() {

    return (
        <div className=" w-4/5 lg:w-1/3">
            <Input label="Name" name="name" />
            <Input label="Email" name="email" />
            <Input label="Phone number" name="phone_number" type="number" />
        </div>
    )
}
