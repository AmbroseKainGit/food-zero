"use client";
import { ParamsQuery, IAbout } from "@/typings"
import { useForm } from "@/hooks/useForm";

interface props {
    handleSave: (id: string | undefined, values: any) => void;
    params?: ParamsQuery | null
}
export const About = ({ handleSave, params }: props) => {
    const { handleInputChange, values } = useForm<IAbout>({
        backgroundAbout: params?.getParams?.blogDetailCommentTitle || "",
    });
    return (
        <>
            <div className="admin-general-header">
                <h1 className="admin-general-header__title">About</h1>
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