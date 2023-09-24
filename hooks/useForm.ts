"use client"
import { useState } from "react"

export const useForm = <Type>(initialState: Type) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const handleChange = (newValues: Partial<Type>) => {
    setValues(prev => ({ ...prev, ...newValues }));
  }

  return { values, handleInputChange, handleChange };
}
