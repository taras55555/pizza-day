import { forwardRef } from 'react';

export const Input = forwardRef((props, ref) => {
    const { type = 'text', name, value, onChange } = props;
    return (
        <input id={name} type={type} value={value} onChange={onChange} ref={ref} />
    )
})

export const Checkbox = forwardRef((props, ref) => {
    const { name: id, value: checked, onChange } = props;
    return (
        <input id={id} type='checkbox' onChange={onChange} ref={ref} checked={checked} />
    )
})