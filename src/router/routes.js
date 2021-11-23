import Home from "@/views/Home";
import About from "@/views/About";
import Project from "@/views/Project";
// import Blog from "@/views/Blog";
// import Message from "@/views/Message";

export default [{
    name: "Home",
    path: "/",
    component: Home
  },
  {
    name: "About",
    path: "/about",
    component: About
  },
  {
    name: "Project",
    path: "/project",
    component: Project
  }, {
    name: "Home",
    path: "*",
    component: Home
  },
  // { name: "Blog", path: "/article", component: Blog },
  // { name: "Message", path: "/message", component: Message },
];