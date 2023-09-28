import { CategoryProducts, CategoryQuery, IProducts } from "@/typings";
import { queryMenu, queryProducts } from "@/utils/querys";
import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import UploadFile from "../General/UploadFile";
import { useForm } from "@/hooks/useForm";
interface props {
  handleSaveForm: (
    id: string | undefined,
    values: any,
    mutationName: string,
    reloadData?: (data: any) => void
  ) => Promise<void>;
}
export const AdminProducts = ({ handleSaveForm }: props) => {
  const { data: dataMenu } = useQuery<CategoryQuery>(queryMenu);
  const { loading, error, data } = useQuery<CategoryProducts>(queryProducts);
  const { handleInputChange, values, handleChange } = useForm<IProducts>({
    name: "",
    description: "",
    image: "",
    priority: "",
    price: "",
    category: "",
    productsData: data?.products || []
  });
  const { productsData } = values;
  const images = ["image"];
  const handleChangeProducts = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const newData = [...productsData];
    newData[index][name] = value;
    handleChange({ productsData: newData });
  };
  const handleImageChange = (newData: any) => {
    const newProducts = [...productsData];
    newProducts[newData.index]["image"] = newData.image;
    handleChange({ productsData: newProducts });
  };
  const reloadDelete = (data: any) => {
    const newProducts = [...productsData];
    const updatedProducts = newProducts.filter(
      (item) => item.id !== data.updateProduct.id
    );
    handleChange({ productsData: updatedProducts });
  };
  const reloadData = (data: any) => {
    const newProducts = [
      ...productsData,
      {
        description: data.createProduct.description,
        id: data.createProduct.id,
        image: data.createProduct.image,
        name: data.createProduct.name,
        disabled: data.createProduct.disabled,
        products: data.createProduct.products,
        priority: data.createProduct.priority,
        price: data.createProduct.price,
        category: data.createProduct.categories[0].id
      }
    ];
    handleChange({
      productsData: newProducts,
      name: "",
      description: "",
      image: "",
      priority: "",
      price: "",
      category: ""
    });
  };
  useEffect(() => {
    handleChange({
      productsData:
        data?.products.map((data) => ({
          id: data.id,
          name: data.name,
          description: data.description,
          image: data.image,
          disabled: data.disabled,
          category: data.categories[0].id,
          priority: data.priority,
          price: data.price
        })) || []
    });
  }, [data]);

  return (
    <>
      <div className="admin-general-header">
        <h1 className="admin-general-header__title">Products</h1>
        <button
          onClick={() =>
            handleSaveForm(
              undefined,
              {
                price: parseInt(values.price.toString()),
                priority: parseInt(values.priority.toString()),
                categories: [values.category],
                description: values.description,
                image: values.image,
                name: values.name
              },
              "createproducts",
              reloadData
            )
          }
        >
          Crear
        </button>
      </div>
      <div className="data-admin-container">
        <div className="admin-form-container-create">
          {Object.entries(values).map(
            ([key, value]) =>
              key !== "productsData" && (
                <div key={key} className="admin-form-container-create__card">
                  <label htmlFor={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  {key === "category" && (
                    <select
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                    >
                      <option value=""></option>
                      {dataMenu &&
                        dataMenu.categories.map((option) => (
                          <option key={option.id} value={option.id}>
                            {option.name}
                          </option>
                        ))}
                    </select>
                  )}

                  {images.includes(key) && (
                    <UploadFile
                      url={value}
                      name={key}
                      key={key}
                      onChange={handleChange}
                    />
                  )}
                  {!images.includes(key) && key !== "category" && (
                    <input
                      type="text"
                      name={key}
                      value={value}
                      onChange={handleInputChange}
                    />
                  )}
                </div>
              )
          )}
        </div>
        <div className="admin-form-container-create update">
          {productsData &&
            productsData.map((products, index) => (
              <div style={{marginBottom: 50}} key={index} className="update__container">
                <div className="update__container__form">
                  <div className="admin-form-container-create__card">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={products.name}
                      onChange={(e) => handleChangeProducts(e, index)}
                    />
                  </div>
                  <div className="admin-form-container-create__card">
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      name="description"
                      value={products.description}
                      onChange={(e) => handleChangeProducts(e, index)}
                    />
                  </div>
                  <div className="admin-form-container-create__card">
                    <label htmlFor="image">Image</label>
                    <UploadFile
                      url={products.image}
                      name="image"
                      key="image"
                      index={index}
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
                <div className="update__container__button">
                  <button
                    onClick={() =>
                      handleSaveForm(
                        products.id,
                        {
                          price: parseInt(products.price.toString()),
                          priority: parseInt(products.priority.toString()),
                          categories: [products.category],
                          description: products.description,
                          image: products.image,
                          name: products.name
                        },
                        "updateproducts"
                      )
                    }
                  >
                    Actualizar
                  </button>
                  <button
                    className="delete"
                    onClick={() =>
                      handleSaveForm(
                        products.id,
                        { disabled: true },
                        "updateproducts",
                        reloadDelete
                      )
                    }
                  >
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
