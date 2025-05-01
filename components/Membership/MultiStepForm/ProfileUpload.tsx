import Image from "next/image";
import React, { useState } from "react";

const ProfileUpload: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex w-full items-center justify-between gap-4">
      <h2 className="text-dark text-2xl font-semibold">Upload Profile Photo</h2>
      <div className="flex justify-center">
        <label htmlFor="fileInput" className="group relative cursor-pointer">
          <Image
            src={imagePreview || "/avatar.jpg"}
            alt="Profile Preview"
            height={208}
            width={208}
            className="border-dark h-52 w-52 rounded-md border-4 object-cover transition group-hover:opacity-80"
          />
          <div className="bg-opacity-40 bg-dark absolute inset-0 flex items-center justify-center rounded-md text-white opacity-0 group-hover:opacity-100">
            Change
          </div>
        </label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default ProfileUpload;
