import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import './LandingPage.css';
import { Input, Checkbox } from "./Input";


const schema = yup.object().shape({
    firstName: yup
        .string()
        .required('First Name is required')
        .test({
            name: 'is-name',
            test(value, ctx) {
                if (value.length < 2) {
                    return ctx.createError({ message: 'The length of the name must be greater than 1 character' })
                }
                return true;
            }
        }),

    phone: yup
        .string()
        .required('Phone number is required')
        .matches(/^[0-9+\s]{10,20}$/g, 'A valid phone number is required.'),

    address: yup
        .string()
        .required('Address is required')
        .min(10, 'Address is too short. 10 chars minimum.')
        .max(150, 'Address is to long. 150 chars maximum.'),

    priority: yup
        .boolean(),
});

const LandingPage = () => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            firstName: '',
            phone: '',
            address: '',
            priority: false,
        },
        resolver: yupResolver(schema),
    });

    const onSubmitHandler = (data) => {
        console.log({ data });
        reset();
    }

    return (
        <div className="centered-element">
            <form className="form-style" onSubmit={handleSubmit(onSubmitHandler)}>

                <h2 className="title">Ready to order? Let's go!</h2>

                <div className="input-block">
                    <div className="label-item">
                        <label htmlFor="firstName">First Name</label>
                    </div>
                    <div className="input-item">
                        <Controller
                            control={control}
                            name="firstName"
                            render={({ field }) => <Input {...field} inputRef={field.ref} />}
                        />
                    </div>
                    <div className="required-item">
                        <span>{errors.firstName?.message}</span>
                    </div>
                </div>

                <div className="input-block">
                    <div className="label-item">
                        <label htmlFor="phone">Phone number</label>
                    </div>
                    <div className="input-item">
                        <Controller
                            control={control}
                            name="phone"
                            render={({ field }) => <Input {...field} inputRef={field.ref} type='tel' />}
                        />
                    </div>
                    <div className="required-item">
                        <span>{errors.phone?.message}</span>
                    </div>
                </div>

                <div className="input-block">
                    <div className="label-item">
                        <label htmlFor="address">Address</label>
                    </div>
                    <div className="input-item">
                        <Controller
                            control={control}
                            name="address"
                            render={({ field }) => <Input {...field} inputRef={field.ref} />}
                        />
                    </div>
                    <div className="required-item">
                        <span>{errors.address?.message}</span>
                    </div>
                </div>

                <div className="priority-block">
                    <div className="priority-input">
                        <Controller
                            control={control}
                            name="priority"
                            render={({ field }) => <Checkbox {...field} inputRef={field.ref} />}
                        />
                    </div>
                    <div>
                        <label htmlFor="priority">Want to give your order priority?</label>
                    </div>
                </div>
                <button type="submit">ORDER NOW FOR</button>

            </form>
        </div>
    )
}

export default LandingPage;