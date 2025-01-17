import { usePage } from "@inertiajs/react";
import React, { useRef, useState } from "react";

interface AvatarInputProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AvatarInput: React.FC<AvatarInputProps> = ({ onChange }) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
    const user  = usePage().props.auth.user
  const [imagePreview, setImagePreview] = useState<string>(user.avatar);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          setImagePreview(e.target.result as string); // Set the image preview URL
        }
      };
      reader.readAsDataURL(file);
    }

    // Invoke the external onChange handler if provided
    if (onChange) {
      onChange(event);
    }
  };

  const handleDeletePicture = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setImagePreview("../images/logos/account.jpg"); // Reset to default image
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input
    }
  };

  return (
    <div className="d-md-flex align-items-center gap-4">
      <span className="d-block round-120 flex-shrink-0 position-relative overflow-hidden rounded-circle mb-3 mb-md-0 ">
        <img
          src={imagePreview}
          id="image-preview"
          alt="Profile"
          className="object-fit-cover w-100 h-100"
        />
      </span>
      <div className="d-sm-flex align-items-center gap-6">
        <div className="position-relative">
          <label
            className="custom-file-label btn btn-primary"
            htmlFor="file-upload"
          >
            Change Picture
          </label>
          <input
            ref={fileInputRef}
            className="form-control change-img-preview"
            type="file"
            id="file-upload"
            placeholder="Change Picture"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
        <a
          className="btn btn-outline-extralight border btn-white text-dark d-block"
          href="#"
          onClick={handleDeletePicture}
        >
          Delete Picture
        </a>
      </div>
    </div>
  );
};

export default AvatarInput;

