import { Blog } from "@/types/article";

const blogData: Blog[] = [
  {
    id: 1,
    url: "/articles/react-framework",
    title:
      "Next.js: The React Framework That's Changing the Way We Build Websites",
    paragraph:
      "Next.js is a React framework that enables server-side rendering (SSR) and static site generation (SSG). This means that Next.js can generate HTML, CSS, and JavaScript on the server, and then serve it to the client as static files. This can lead to significant performance improvements, especially for first-page loads.",
    image: "/images/article/image_placeholder.png",
    author: {
      name: "Samuyl Joshi",
      image: "/images/article/avatar-profile.png",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    url: "/",
    title: "9 simple ways to improve your design skills",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/article/img_sm_placeholder.png",
    author: {
      name: "Musharof Chy",
      image: "/images/article/avatar-profile.png",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    url: "/",
    title: "Tips to quickly improve your coding speed.",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/article/blog-01.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/article/avatar-profile.png",
      designation: "Graphic Designer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
