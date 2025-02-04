import { r as reactExports, j as jsxRuntimeExports, K, $ as $e } from "../ssr.js";
import { B as Button } from "./Button-CgnQqdf2.js";
import { L as Layout } from "./Layout-CCns5W7G.js";
import PostCommentCard from "./PostCommentCard-DmJ7X53H.js";
import PostCommentForm from "./PostCommentForm-BJNrbaJf.js";
import { F as FacebookShareButton$1, T as TwitterShareButton$1 } from "./index-CpAMPVps.js";
import { M as MetaTags } from "./MetaTags-DV5IHhOb.js";
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
import "./Avatar-wh5kThZW.js";
import "./index-BgmffWW1.js";
import "./index-St0ZXb81.js";
import "net";
function CopyToClipboard({ link }) {
  const [copied, setCopied] = reactExports.useState(false);
  const handleCopy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2e3);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: "#",
      onClick: handleCopy,
      className: "btn btn-outline-extralight border btn-white text-dark d-flex align-items-center gap-2",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-link-dark.svg", alt: "Link Icon" }),
        copied ? "Copied!" : "Copy link"
      ]
    }
  );
}
const Show = ({ post, comments, is_liked, is_unliked }) => {
  const user = K().props.auth.user;
  let currentUrl = `https://urpuppy.com/posts/${post.slug}`;
  console.log(is_liked, is_unliked);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { navType: "secondary", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(MetaTags, { url: currentUrl, title: post.title, description: post.excerpt, image: post.banner_url }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "puppy-spotlight py-7 py-md-5 py-xl-9", id: "scroll-target", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          backgroundColor: "rgba(0, 122, 255, 0.1)",
          color: "rgba(0, 122, 255, 1)",
          fontWeight: "500"
        }, className: "btn py-1 mb-3", children: post.category.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mb-2", children: post.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "fs-4", children: post.excerpt })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex  flex-column flex-sm-column flex-md-row  align-items-center justify-content-between  ", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex gap-3 mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: post.author.photo_url, className: "rounded-circle object-fit-cover", width: "50", height: "50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { style: {
              marginBottom: "unset"
            }, className: "btn-link fs-5 font-work-sans", children: post.author.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Author" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "d-flex justify-content-center align-items-center mb-2 gap-md-4 gap-3",
            style: { height: "24px" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "../images/svgs/icon-time.svg", alt: "", width: "18", height: "18" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
                  marginBottom: "0.5px"
                }, className: " fs-3", children: post.published_at_formatted })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "1px", background: "rgba(8, 49, 78, 0.4)", height: "12px" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  $e,
                  {
                    only: ["post", "is_liked", "is_unliked"],
                    className: "bg-white border-0",
                    method: "post",
                    href: `/posts/${post.id}/react/Like`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        style: { filter: is_liked ? "brightness(0) saturate(100%) invert(43%) sepia(91%) saturate(2636%) hue-rotate(195deg) brightness(96%) contrast(104%)" : "" },
                        src: "../images/svgs/icon-like.svg",
                        alt: "",
                        width: "18",
                        height: "18"
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      marginBottom: "0.5px"
                    },
                    className: "fs-3",
                    children: post.like_count
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "1px", background: "rgba(8, 49, 78, 0.4)", height: "12px" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  $e,
                  {
                    only: ["post", "is_liked", "is_unliked"],
                    className: "bg-white border-0",
                    method: "post",
                    href: `/posts/${post.id}/react/Unlike`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "../images/svgs/icon-dislike.svg", alt: "", width: "18", height: "18" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    style: {
                      marginBottom: "0.5px"
                    },
                    className: "fs-3",
                    children: post.unlike_count
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "1px", background: "rgba(8, 49, 78, 0.4)", height: "12px" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "../images/svgs/icon-eye.svg", alt: "", width: "18", height: "18" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 fs-3", children: [
                  post.view_count,
                  " Views"
                ] })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-2 mb-4 mt-4",
          style: {
            backgroundImage: `url('${post.banner_url}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: "500px"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          style: {
            maxWidth: "904px",
            margin: "0 auto"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                dangerouslySetInnerHTML: {
                  __html: post.content
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "mb-8 mt-8",
                style: {
                  background: "rgba(8, 49, 78, 0.1)",
                  width: "100%",
                  height: "1px"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex mb-8 flex-column flex-md-row text-center", style: {
              justifyContent: "space-between"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "fs-3 mt-4 mb-4",
                  style: {
                    color: "rgba(8, 49, 78, 0.8)"
                  },
                  children: "Share this blog:"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex gap-2 justify-content-center", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CopyToClipboard, { link: currentUrl }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FacebookShareButton$1, { url: currentUrl, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "", "data-bs-toggle": "tooltip", "data-bs-title": "Instagram", className: "bg-white border bg-opacity-10 d-flex align-items-center justify-content-center round-40 rounded-circle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { loading: "lazy", src: "/images/svgs/icon-facebook-dark.svg", alt: "" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(TwitterShareButton$1, { url: currentUrl, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "data-bs-toggle": "tooltip", "data-bs-title": "Instagram", className: "bg-white border bg-opacity-10 d-flex align-items-center justify-content-center round-40 rounded-circle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { loading: "lazy", src: "/images/svgs/icon-twitter-dark.svg", alt: "" }) }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card border mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-body", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-4", children: "Comments" }),
              user ? /* @__PURE__ */ jsxRuntimeExports.jsx(PostCommentForm, { post_id: post.id }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "mb-4", href: "/register", children: "Signup to Comment" }),
              comments.data.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: comments.data.map((comment, index) => {
                return /* @__PURE__ */ jsxRuntimeExports.jsx(PostCommentCard, { comment }, index);
              }) })
            ] }) })
          ]
        }
      )
    ] }) })
  ] });
};
export {
  Show as default
};
