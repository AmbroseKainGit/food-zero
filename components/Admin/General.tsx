"use client";
import { ParamsQuery, IGeneral } from "@/typings"
import { useForm } from "@/hooks/useForm";

interface props {
    handleSave: (id: string | undefined, values: any) => void;
    params?: ParamsQuery | null
}
export const General = ({ handleSave, params }: props) => {
    const { handleInputChange, values } = useForm<IGeneral>({
        address: params?.getParams?.address || "",
        email: params?.getParams?.email || "",
        backgroundCover: params?.getParams?.backgroundCover || "",
        facebook: params?.getParams?.facebook || "",
        instagram: params?.getParams?.instagram || "",
        phone: params?.getParams?.phone || "",
        twitter: params?.getParams?.twitter || "",
        youtube: params?.getParams?.youtube || "",
    });

    return (
        <>
            <div className="admin-general-header">
                <h1 className="admin-general-header__title">General</h1>
                <button onClick={() => handleSave(params?.getParams.id, values)}>
                    Guardar
                </button>
            </div>
            <div className="admin-general-container">
                {Object.entries(values).map(([key, value]) => (
                    <div key={key} className="admin-general-container__card">
                        <label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                        <input
                            type="text"
                            name={key}
                            value={value}
                            onChange={handleInputChange}
                        />
                    </div>
                ))}           
            </div>
        </>
    )
}