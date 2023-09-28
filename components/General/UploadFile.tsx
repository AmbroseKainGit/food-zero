import { uploadImageUtil } from "@/utils/uploadImageUtil";
import Image from "next/image";
import { useRef } from "react";

interface UploadFileProps {
  onChange: ({}: any) => void;
  url: string;
  name: string;
  index?: number;
}

const UploadFile = ({ url, onChange, name, index }: UploadFileProps) => {
  const inputFile = useRef<HTMLInputElement | null>(null);
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = await uploadImageUtil(e);
    if (index !== undefined && index >= 0) {
      onChange({ [name]: url, index });
      return;
    }
    onChange({ [name]: url });
  };
  return (
    <>
      {url === "" && (
        <div
          className="upload-file"
          onClick={() => inputFile.current?.click()}
          style={{ cursor: "pointer", fontSize: 12 }}
        >
          <span>Upload file</span>
        </div>
      )}

      {url && url !== "" && (
        <div style={{ display: "flex", position: "relative" }}>
          <Image
            onClick={() => inputFile.current?.click()}
            src={url}
            style={{ cursor: "pointer" }}
            width={307}
            height={115}
            alt="Upload file image for "
          />
          <span
            onClick={() => inputFile.current?.click()}
            style={{
              position: "absolute",
              cursor: "pointer",
              color: "white",
              fontSize: 12,
              bottom: 0,
              textAlign: "center",
              left: "40%"
            }}
          >
            Change File
          </span>
        </div>
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
