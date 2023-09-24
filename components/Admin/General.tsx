"use client";
import { ParamsQuery, IGeneral } from "@/typings"
import { useForm } from "@/hooks/useForm";

interface props {
    handleSave: (id: string|undefined, values: any) => void;
    params?: ParamsQuery | null
}
export const General = ({ handleSave, params }: props) => {
    const { handleInputChange, values } = useForm<IGeneral>({
        address: params?.getParams?.address || "",
        email: params?.getParams?.email || "",
        facebook: params?.getParams?.facebook || "",
        instagram: params?.getParams?.instagram || "",
        phone: params?.getParams?.phone || "",
        twitter: params?.getParams?.twitter || "",
        youtube: params?.getParams?.youtube || "",
    });
    const { address, email, facebook, instagram, phone, twitter, youtube } = values;
    return (
        <>
            <h1 className="admin-general-title">General</h1>
            <div className="admin-general-container">             
                <div className="admin-general-container__card">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" value={address} onChange={handleInputChange} />
                </div>
                <div className="admin-general-container__card">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" value={email} onChange={handleInputChange} />
                </div>
                <div className="admin-general-container__card">
                    <label htmlFor="facebook">Facebook</label>
                    <input type="text" name="facebook" value={facebook} onChange={handleInputChange} />
                </div>
                <div className="admin-general-container__card">
                    <label htmlFor="instagram">Instagram</label>
                    <input type="text" name="instagram" value={instagram} onChange={handleInputChange} />
                </div>
                <div className="admin-general-container__card">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" value={phone} onChange={handleInputChange} />
                </div>
                <div className="admin-general-container__card">
                    <label htmlFor="twitter">Twitter</label>
                    <input type="text" name="twitter" value={twitter} onChange={handleInputChange} />
                </div>
                <div className="admin-general-container__card">
                    <label htmlFor="youtube">Youtube</label>
                    <input type="text" name="youtube" value={youtube} onChange={handleInputChange} />
                </div>
                <div className="admin-general-container__card">
                    <button onClick={() => handleSave(params?.getParams.id, values)}>
                        Guardar
                    </button>
                </div>
            </div>
        </>
    )
}