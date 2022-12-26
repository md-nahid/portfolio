export const tabs = [
  {
    id: "all",
    text: "All",
  },
  {
    id: "designs",
    text: "Designs",
  },
  {
    id: "javascript",
    text: "JavaScript",
  },
  {
    id: "react",
    text: "React JS",
  },
];

export const skills = [
  {
    title: "Next JS",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, soluta deserunt cupiditate ducimus at harum vel iusto saepe adipisci commodi.",
    skill: 70,
  },
  {
    title: "JavaScript",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, soluta deserunt cupiditate ducimus at harum vel iusto saepe adipisci commodi.",
    skill: 70,
  },
  {
    title: "React JS",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, soluta deserunt cupiditate ducimus at harum vel iusto saepe adipisci commodi.",
    skill: 70,
  },
  {
    title: "CSS",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, soluta deserunt cupiditate ducimus at harum vel iusto saepe adipisci commodi.",
    skill: 90,
  },
  {
    title: "Framer Motion",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, soluta deserunt cupiditate ducimus at harum vel iusto saepe adipisci commodi.",
    skill: 80,
  },
  {
    title: "TypeScript",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, soluta deserunt cupiditate ducimus at harum vel iusto saepe adipisci commodi.",
    skill: 10,
  },
];

export const data = [
  {
    id: "01",
    category: "designs",
    img: "/images/projectone.jpg",
    title: "Eat your vegitables everyday",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, mollitia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, excepturi.",
    liveLink: "https://vercel.com",
    githubrepo: "https://github.com/md-nahid",
  },
  {
    id: "02",
    category: "javascript",
    img: "/images/projecttwo.jpg",
    title: "Eat your vegitables everyday",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, mollitia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, excepturi.",
    liveLink: "https://vercel.com",
    githubrepo: "https://github.com/md-nahid",
  },
  {
    id: "03",
    category: "react",
    img: "/images/projectthree.png",
    title: "Eat your vegitables everyday",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, mollitia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, excepturi.",
    liveLink: "https://vercel.com",
    githubrepo: "https://github.com/md-nahid",
  },
  {
    id: "04",
    category: "designs",
    img: "/images/projectfive.jpg",
    title: "Eat your vegitables everyday",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, mollitia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, excepturi.",
    liveLink: "https://vercel.com",
    githubrepo: "https://github.com/md-nahid",
  },
  {
    id: "05",
    category: "javascript",
    img: "/images/projectfour.jpg",
    title: "Eat your vegitables everyday",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, mollitia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, excepturi.",
    liveLink: "https://vercel.com",
    githubrepo: "https://github.com/md-nahid",
  },
  {
    id: "06",
    category: "react",
    img: "/images/projectfive.jpg",
    title: "Eat your vegitables everyday",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, mollitia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, excepturi.",
    liveLink: "https://vercel.com",
    githubrepo: "https://github.com/md-nahid",
  },
  {
    id: "07",
    category: "javascript",
    img: "/images/projectsix.jpg",
    title: "Eat your vegitables everyday",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, mollitia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, excepturi.",
    liveLink: "https://vercel.com",
    githubrepo: "https://github.com/md-nahid",
  },
  {
    id: "08",
    category: "react",
    img: "/images/projecteight.jpg",
    title: "Eat your vegitables everyday",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, mollitia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, excepturi.",
    liveLink: "https://vercel.com",
    githubrepo: "https://github.com/md-nahid",
  },
];

// get data by filter
export function getData(obj) {
  let newData = [];
  if (obj?.id === "all") {
    newData = data;
  } else {
    newData = data.filter((item) => obj?.id.toLowerCase() === item.category.toLowerCase());
  }
  return newData;
}
