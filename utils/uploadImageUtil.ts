import { storage } from "@/lib/firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

export const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file === null) return;
    const imageRef = ref(storage, `${file.name + Date.now()}`);
    const image = await uploadBytes(imageRef, file);
    return await getDownloadURL(image.ref);
}