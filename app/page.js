'use client'
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Hero from "./components/Hero";
import Button from "./components/Button";
import TicketSelection from "./forms/TicketSelection";
import BookingForm from "./forms/BookingForm";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import BookedTicket from "./forms/BookedTicket";

const stepHeading = ['Step 1: Choose a ticket', 'Step 2: Enter your details', `Here's Your E-Ticket!`];

export default function Home() {
  const [step, setStep] = useState(0);
  const [bookedTicket, setBookedTicket] = useState(null)

  const validationSchema = [
    yup.object({
      ticket: yup.object().required('Please select ticket'),
    }),
    yup.object({
      name: yup.string().required('Name is required'),
      email: yup.string().email('Please enter valid email').required('Email is required'),
      phone_number: yup.number().required('Phone number is required'),
    })
  ];

  const currentValidationSchema = validationSchema[step];

  const methods = useForm({
    resolver: yupResolver(currentValidationSchema),
    mode: 'onChange',
  })

  const { handleSubmit, watch, setError, trigger, reset } = methods;

  const handlePrevStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  }

  const handleNextStep = async () => {
    const isStepValid = await trigger();
    if (isStepValid) setStep((prev) => prev + 1);
  }

  const handleResetStep = () => {
    reset()
    setStep(0)
  }

  const onSubmit = (data) => {
    handleNextStep()
    setBookedTicket(data)
    // console.log('clg submit data', data);
  };

  const renderStepContent = () => {
    switch (step) {
      case 0:
        return <TicketSelection />
      case 1:
        return <BookingForm />
      case 2:
        return <BookedTicket details={bookedTicket} />
      default:
        return null;
    }
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <Hero heading={stepHeading[step]} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4 md:py-6 md:px-10 flex justify-center">
            {renderStepContent()}
          </div>
          <div className="flex justify-center my-2">
            {step === 2 ? (
              <Button
                type="button"
                onClick={handleResetStep}
              >
                GO HOME
              </Button>
            )
              :
              (
                <>
                  <Button
                    type="button"
                    disabled={step === 0}
                    onClick={handlePrevStep}
                  >
                    Prev
                  </Button>
                  <Button
                    type="button"
                    onClick={step === 1 ? handleSubmit(onSubmit) : handleNextStep}
                  >
                    {step === 1 ? "Submit" : "Next"}
                  </Button>
                </>
              )
            }
          </div>
        </form>
      </FormProvider>
    </div>
  );
}