import { r as reactExports, V, j as jsxRuntimeExports } from "../ssr.js";
import "util";
import "stream";
import "path";
import "http";
import "https";
import "url";
import "fs";
import "assert";
import "tty";
import "os";
import "zlib";
import "events";
import "process";
const AvatarInput = ({ onChange }) => {
  const fileInputRef = reactExports.useRef(null);
  const user = V().props.auth.user;
  const [imagePreview, setImagePreview] = reactExports.useState(user.avatar);
  const handleFileChange = (event) => {
    var _a;
    const file = (_a = event.target.files) == null ? void 0 : _a[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        var _a2;
        if ((_a2 = e.target) == null ? void 0 : _a2.result) {
          setImagePreview(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
    if (onChange) {
      onChange(event);
    }
  };
  const handleDeletePicture = (e) => {
    e.preventDefault();
    setImagePreview("../images/logos/account.jpg");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-md-flex align-items-center gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "d-block round-120 flex-shrink-0 position-relative overflow-hidden rounded-circle mb-3 mb-md-0 ", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: imagePreview,
        id: "image-preview",
        alt: "Profile",
        className: "object-fit-cover w-100 h-100"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-sm-flex align-items-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "position-relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "label",
          {
            className: "custom-file-label btn btn-primary",
            htmlFor: "file-upload",
            children: "Change Picture"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            ref: fileInputRef,
            className: "form-control change-img-preview",
            type: "file",
            id: "file-upload",
            placeholder: "Change Picture",
            onChange: handleFileChange,
            style: { display: "none" }
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          className: "btn btn-outline-extralight border btn-white text-dark d-block",
          href: "#",
          onClick: handleDeletePicture,
          children: "Delete Picture"
        }
      )
    ] })
  ] });
};
export {
  AvatarInput as default
};
