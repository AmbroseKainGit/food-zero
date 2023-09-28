import { CategoryQuery, ICategories } from '@/typings';
import { queryMenu } from '@/utils/querys';
import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect } from 'react'
import UploadFile from '../General/UploadFile';
import { useForm } from '@/hooks/useForm';
interface props {
    handleSaveForm: (id: string | undefined, values: any, mutationName: string, reloadData?: (data: any) => void) => Promise<void>;
}
export const AdminCategories = ({ handleSaveForm }: props) => {
    const { loading, error, data } = useQuery<CategoryQuery>(queryMenu);
    const { handleInputChange, values, handleChange } = useForm<ICategories>({
        name: "",
        description: "",
        image: "",
        categoryData: data?.categories || []
    });
    const { categoryData } = values;
    const images = [
        "image"
    ];
    const handleChangeCategories = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>, index: number) => {
        const { name, value } = e.target;
        const newData = [...categoryData];
        newData[index][name] = value;
        console.log(newData);
        
        handleChange({ categoryData: newData });
    }
    const handleImageChange = (newData: any) => {
        const newCategory = [...categoryData];
        newCategory[newData.index]['image'] = newData.image;
        handleChange({ categoryData: newCategory });
    }
    const reloadDelete  = (data: any) => {
        const newCategory = [...categoryData];
        const updatedCategory = newCategory.filter(item => item.id !== data.updateCategory.id);
        handleChange({ categoryData: updatedCategory });
    }
    const reloadData = (data: any) => {
        const newCategory = [...categoryData, {
            description: data.createCategory.description,
            id: data.createCategory.id,
            image: data.createCategory.image,
            name: data.createCategory.name,
            disabled: data.createCategory.disabled,
            products: data.createCategory.products
        }];
        handleChange({ categoryData: newCategory, name: "", description: "", image: "" });     
    }
    useEffect(() => {
        handleChange({
            categoryData: data?.categories.map(data => ({
                id: data.id,
                name: data.name,
                description: data.description,
                image: data.image,
                disabled: data.disabled,
                products: [...data.products]
            })) || []
        });
    }, [data]);

    return (
        <>
            <div className="admin-general-header">
                <h1 className="admin-general-header__title">Categories</h1>
                <button onClick={() => handleSaveForm(undefined, values, 'createCategory', reloadData)}>
                    Crear
                </button>
            </div>
            <div className='data-admin-container'>
                <div className="admin-form-container-create">
                    {Object.entries(values).map(([key, value]) => (
                        key !== 'categoryData' &&
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
                    {categoryData && categoryData.map((category, index) => (
                        <div key={index} className='update__container'>
                            <div className='update__container__form'>
                                <div className="admin-form-container-create__card">
                                    <label htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={category.name}
                                        onChange={(e) => handleChangeCategories(e, index)}
                                    />
                                </div>
                                <div className="admin-form-container-create__card">
                                    <label htmlFor="description">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        name="description"
                                        value={category.description}
                                        onChange={(e) => handleChangeCategories(e, index)}
                                    />
                                </div>
                                <div className="admin-form-container-create__card">
                                    <label htmlFor="image">
                                        Image
                                    </label>
                                    <UploadFile
                                        url={category.image}
                                        name="image"
                                        key="image"
                                        index={index}
                                        onChange={handleImageChange}
                                    />
                                </div>
                            </div>
                            <div className="update__container__button">
                                <button onClick={() => handleSaveForm(category.id, category, 'updateCategory')}>                          
                                    Actualizar
                                </button>                               
                                <button className="delete" onClick={() => handleSaveForm(category.id, {disabled: true}, 'updateCategory', reloadDelete)}>
                                    Borrar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
