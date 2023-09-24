"use client";
import { ParamsQuery, IContact } from "@/typings"
import { useForm } from "@/hooks/useForm";

interface props {
    handleSave: (id: string | undefined, values: any) => void;
    params?: ParamsQuery | null
}
export const Contact = ({ handleSave, params }: props) => {
    const { handleInputChange, values } = useForm<IContact>({
        contactSectionTitle: params?.getParams?.contactSectionTitle || "",
        contactSectionSubtitle: params?.getParams?.contactSectionSubtitle || "",
        backgroundContact: params?.getParams?.backgroundContact || "",
    });
    return (
        <>
            <h1 className="admin-general-title">Contact</h1>
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
                <div className="admin-general-container__card">
                    <button onClick={() => handleSave(params?.getParams.id, values)}>
                        Guardar
                    </button>
                </div>
            </div>
        </>
    )
}