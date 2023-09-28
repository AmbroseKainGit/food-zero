import React, { use, useEffect } from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { IStaffMember, StaffQuery } from '@/typings';
import { queryStaff } from '@/utils/querys';
import { useForm } from '@/hooks/useForm';
import UploadFile from '../General/UploadFile';
import { deleteStaffMutation } from '@/utils/mutations';
import { toast } from 'react-toastify';

interface props {
    handleSaveForm: (id: string | undefined, values: any, mutationName: string, reloadData?: (data: any) => void) => Promise<void>;
}

export const AdminStaff = ({ handleSaveForm }: props) => {
    const { loading, error, data } = useQuery<StaffQuery>(queryStaff);
    const [deleteStaff] = useMutation(deleteStaffMutation);
    const { handleInputChange, values, handleChange } = useForm<IStaffMember>({
        name: "",
        description: "",
        role: "",
        image: "",
        staffData: data?.staff || []
    });
    const { staffData } = values;
    const images = [
        "image"
    ];
    const handleChangeStaff = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
        const { name, value } = e.target;
        const newData = [...staffData];
        newData[index][name] = value;
        handleChange({ staffData: newData });
    }
    const handleImageChange = (newData: any) => {
        const newStaff = [...staffData];
        newStaff[newData.index]['image'] = newData.image;
        handleChange({ staffData: newStaff });
    }
    const handleDelete = async (id: string) => {
        try {
            const { data } = await deleteStaff({
                variables: {
                    deleteStaffId: id
                }
            });
            const newStaff = [...staffData];
            const updatedStaff = newStaff.filter(item => item.id !== id);
            handleChange({ staffData: updatedStaff });
            toast.success('Registro eliminado correctamente', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (error) {
            console.error("Error updating params:", error);
        }
    };
    const reloadData = (data: any) => {
        const newStaff = [...staffData, {
            description: data.createStaff.description,
            id: data.createStaff.id,
            image: data.createStaff.image,
            name: data.createStaff.name,
            role: data.createStaff.role
        }];
        handleChange({ staffData: newStaff });  
        handleChange({
            name: "",
            description: "",
            role: "",
            image: ""
        });
    }
    useEffect(() => {
        handleChange({
            staffData: data?.staff.map(data => ({
                id: data.id,
                name: data.name,
                description: data.description,
                role: data.role,
                image: data.image
            })) || []
        });
    }, [data]);
    return (
        <>
            <div className="admin-general-header">
                <h1 className="admin-general-header__title">Admin Staff</h1>
                <button onClick={() => handleSaveForm(undefined, values, 'createStaff', reloadData)}>
                    Crear
                </button>
            </div>
            <div className='data-admin-container'>
                <div className="admin-form-container-create">
                    {Object.entries(values).map(([key, value]) => (
                        key !== 'staffData' &&
                        <div key={key} className="admin-form-container-create__card">
                            <label htmlFor={key}>
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </label>
                            {images.includes(key) ? (
                                <UploadFile
                                    url={value}
                                    name={key}
                                    key={key}
                                    onChange={handleChange}
                                />
                            ) : (
                                <input
                                    type="text"
                                    name={key}
                                    value={value}
                                    onChange={handleInputChange}
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className="admin-form-container-create update">
                    {staffData && staffData.map((staffMember, index) => (
                        <div key={index} className='update__container'>
                            <div className='update__container__form'>
                                <div className="admin-form-container-create__card">
                                    <label htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={staffMember.name}
                                        onChange={(e) => handleChangeStaff(e, index)}
                                    />
                                </div>
                                <div className="admin-form-container-create__card">
                                    <label htmlFor="description">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        name="description"
                                        value={staffMember.description}
                                        onChange={(e) => handleChangeStaff(e, index)}
                                    />
                                </div>
                                <div className="admin-form-container-create__card">
                                    <label htmlFor="Role">
                                        Role
                                    </label>
                                    <input
                                        type="text"
                                        name="role"
                                        value={staffMember.role}
                                        onChange={(e) => handleChangeStaff(e, index)}
                                    />
                                </div>
                                <div className="admin-form-container-create__card">
                                    <label htmlFor="image">
                                        Image
                                    </label>
                                    <UploadFile
                                        url={staffMember.image}
                                        name="image"
                                        key="image"
                                        index={index}
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>
                            <div className="update__container__button">
                                <button onClick={() => handleSaveForm(staffMember.id, staffMember, 'updateStaff')}>
                                    Actualizar
                                </button>
                                <button className="delete" onClick={() => handleDelete(staffMember.id)}>
                                    Borrar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
