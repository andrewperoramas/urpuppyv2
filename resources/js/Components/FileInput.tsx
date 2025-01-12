import React, { useState } from "react";
import PropTypes from "prop-types";

const FileInput = ({ setData }: any) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name); // Update the file name for display
      setData(file); // Pass the file object to the parent component
    }
  };

  return (
    <div>
      <label htmlFor="file-upload" style={{ cursor: "pointer", color: "blue" }}>
        {fileName || "Click to upload a file"}
      </label>
      <input
        id="file-upload"
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

FileInput.propTypes = {
  setData: PropTypes.func.isRequired,
};

export default FileInput;

