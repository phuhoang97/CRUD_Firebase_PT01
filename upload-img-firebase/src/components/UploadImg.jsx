import React, { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebase";

function UploadImg() {
  // Để có thể đẩy ảnh lên firebase:
  // Bước 1: Upload Ảnh lên firebase
  // Bước 2: Lấy đường dẫn url về
  // Bước 3: Hiển thị ảnh

  // State dùng để upload ảnh
  const [imageUpload, setImageUpload] = useState(null);
  // State dùng để lấy url về
  const [imageUrls, setImageUrls] = useState([]);

  // Tạo storage dùng để lưu trữ dịch vụ firebase
  const imagesListRef = ref(storage, "images/");

  // Viết hàm upload

  const uploadFile = () => {
    if (imageUpload == null) return;

    const imgRef = ref(storage, `images/${imageUpload.name}`);
    uploadBytes(imgRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  // Lấy dữ liệu
  useEffect(() => {
    listAll(imagesListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className='App'>
      <input type='file' onChange={(e) => setImageUpload(e.target.files[0])} />
      <button onClick={uploadFile}>Upload</button>

      {imageUrls.map((url) => (
        <img src={url} />
      ))}
    </div>
  );
}

export default UploadImg;
