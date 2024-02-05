import img1 from "../images/og-Number-Plate-Detection.png";
import img2 from "../images/certificate.jpg";
import img3 from "../images/shop.avif";
import img4 from "../images/net.avif";
const data = [
  {
    id: 1,
    img: img1,
    Title: "RealTime number Plate Detection",
    Description:
      "The goal of this project is to develop a system for recognizing vehicle number plates using existing surveillance cameras. The system will capture images of vehicles and use image segmentation to extract the number plate region and store and display data in website.",
    Technology: "webtechnologies/Machine learning",
    links: [
      {
        git: "https://github.com/Dharmareddy8520/ANPR",
        youtube: "https://www.youtube.com/watch?v=Owf1Tajbj7k",
      },
    ],
  },
  {
    id: 2,
    img: img2,
    title: "DIGITALIZED CERTIFICATE GENERATION SYSTEM",
    Description:
      "It is a web-based application that has the capability to automatically generate certificates in bulk. The primary objective of this project is to streamline the process of certificate generation, making it more efficient and timesaving.",
    Technology: "webtechnologies",
    links: [
      {
        basepaper:
          "https://ijsrem.com/download/digitalized-certificate-generation-system/",
      },
    ],
  },
  {
    id: 3,
    img: img3,
    title: "E-Commerce Website",
    Description:
      "The goal of this project is to develop a website for shopping using MERN stack. With the help of fake store api and firestore database i developed this website.for frontend i used reactjs and for backend i used nodejs and expressjs and for database i used firestore.",
    Technology: "Reactjs,Html,css,bootstrap,Nodejs,Firebase,Mongodb",
    links: [
      {
        website: "https://frontend-nine-black-86.vercel.app/",
        git: "https://github.com/Dharmareddy8520/frontend",
      },
    ],
  },
  {
    id: 4,
    title: "Dflex",
    img: img4,
    Description:
      "creating a netflix clone using MERN stack .It includes various technologies such as reactjs,html,bootstrap,css and javascript for frontend.In case of backend i use tmdb api link and firestore as database",
    Technology: "Reactjs,Html,css,bootstrap,Nodejs,Firebase,Mongodb",
    links: [
      {
        website: "https://dflix-52956.web.app/",
      },
    ],
  },
];

export default data;
