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
    title: "5 ways to Craft compelling and informative content",
    paragraph:
      "These five strategies will help you craft compelling and informative content that not only informs but also engages and resonates with your audience. In-depth research lends authority to your content. It's the bedrock of valuable, informative pieces.",
    image: "/images/article/img_sm_placeholder.png",
    author: {
      name: "Musharof Chy",
      image: "/images/article/avatar-profile.png",
      designation: "Content Writer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
  {
    id: 3,
    url: "/",
    title: "Tools that improve coding skills.",
    paragraph:
      "Having the right tools for the job can greatly improve your efficiency. Understanding your audiences needs, interests and pain points is the cornerstone of compelling content.",
    image: "/images/article/blog-01.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/article/avatar-profile.png",
      designation: "Graphic Designer",
    },
    tags: ["coding"],
    publishDate: "2025",
  },
];
export default blogData;
