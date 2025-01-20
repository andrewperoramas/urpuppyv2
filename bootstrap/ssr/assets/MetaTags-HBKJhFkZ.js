import { j as jsxRuntimeExports, M as Me } from "../ssr.js";
const MetaTags = ({
  title = "UrPuppy",
  description = "Discover trusted dog breeders, buy or sell puppies online, and connect with pet lovers nationwide. UrPuppy.com is your go-to platform for finding purebred puppies and connecting with licensed breeders.",
  url = "https://urpuppy.com",
  image = "/logo.svg",
  twitterHandle = "@UrpuppyDotCom",
  siteName = "UrPuppy"
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Me, { title, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "description", content: description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:site", content: twitterHandle }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:title", content: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:description", content: description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:image", content: image }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "twitter:image:alt", content: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:type", content: "website" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:title", content: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:description", content: description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:url", content: url }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:image", content: image }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:image:alt", content: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { property: "og:site_name", content: siteName }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "image_src", href: image }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("meta", { name: "keywords", content: "Buy puppies online, sell puppies online, dog breeders directory, find dog breeders, puppies for sale, sell dogs online, buy dogs online, registered dog breeders, puppy marketplace, dog adoption services, purebred puppies for sale, licensed dog breeders" })
  ] });
};
export {
  MetaTags as M
};
