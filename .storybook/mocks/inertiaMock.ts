import React from "react";

export const usePage = () => ({
  props: {
    user: { id: 1, name: "John Doe", email: "john@example.com" },
    errors: {},
  },
});

export const route = (name, params = {}) => {
  const baseUrl = "http://example.com"; // Adjust to your base URL
  return `${baseUrl}/${name}${Object.keys(params).length ? `?${new URLSearchParams(params)}` : ""}`;
};

