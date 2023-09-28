"use client"
import { TextareaHTMLAttributes, useState } from "react"

export const useForm = <Type>(initialState: Type) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const handleChange = (newValues: Partial<Type>) => {
    setValues(prev => ({ ...prev, ...newValues }));
  }

  return { values, handleInputChange, handleChange };
}
