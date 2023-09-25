import { uploadImageUtil } from "@/utils/uploadImageUtil";
import Image from "next/image";
import { useRef } from "react";

interface UploadFileProps {
  onChange: ({}: any) => void;
  url: string;
  name: string;
}

const UploadFile = ({ url, onChange, name }: UploadFileProps) => {
  const inputFile = useRef<HTMLInputElement | null>(null);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = await uploadImageUtil(e);
    onChange({ [name]: url });
  };
  return (
    <>
      <div className="upload-file" onClick={() => inputFile.current?.click()}>
        <span>Upload file</span>
      </div>
      {url && url !== "" && (
        <Image
          onClick={() => inputFile.current?.click()}
          src={url}
          width={307}
          height={115}
          alt="Upload file image for "
        />
      )}

      <input
        type="file"
        name={name}
        ref={inputFile}
        style={{ display: "none" }}
        onChange={handleChange}
      />
    </>
  );
};

export default UploadFile;
