"use client";
import { ParamsQuery, IBlog } from "@/typings"
import { useForm } from "@/hooks/useForm";

interface props {
    handleSave: (id: string | undefined, values: any) => void;
    params?: ParamsQuery | null
}
export const Blog = ({ handleSave, params }: props) => {
    const { handleInputChange, values } = useForm<IBlog>({
        blogDetailCommentTitle: params?.getParams?.blogDetailCommentTitle || "",
        blogSectionSubtitle: params?.getParams?.blogSectionSubtitle || "",
        blogSectionTitle: params?.getParams?.blogSectionTitle || "",
        backgroundBlog: params?.getParams?.backgroundBlog || "",
        backgroundBlogDetail: params?.getParams?.backgroundBlogDetail || "",
    });
    return (
        <>
            <div className="admin-general-header">
                <h1 className="admin-general-header__title">Blog</h1>
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