import logo1 from "../Assets/Image/edtech.png"
import logo2 from "../Assets/Image/images.jpg"
import homePage from "../Assets/Image/Home Page.png"
import cards from "../Assets/Image/Cards.png"
import contact from "../Assets/Image/Contact.png"
import myProfile from "../Assets/Image/MyProfile.png"
import settings from "../Assets/Image/Settings.png"
import landingPage from "../Assets/Image/LandingPage.png"
import Cart from "../Assets/Image/Cart.png"
import plan from "../Assets/Image/Plan.png"
import travel from "../Assets/Image/Travel.webp"
export const ProjectData = [
    {
        id: 1,
        name: "STUDY NOTION",
        description: "A comprehensive edtech platform with course management, student progress tracking, and interactive learning features.",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
         github: "https://github.com/RashikaSharma2712/StudyNotion",
        images: [
            {
                id: 1,
                src: logo1,
                alt: "Study Notion - EdTech Platform",
             
            },
            {
                id: 2,
                src: homePage,
                alt: "Study Notion Home Page",
                title: "Home Page"
            },
            {
                id: 3,
                src: cards,
                alt: "Study Notion Course Cards",
                title: "Course Cards"
            },
            {
                id: 4,
                src: contact,
                alt: "Study Notion Contact Page",
                title: "Contact"
            },
            {
                id: 5,
                src: myProfile,
                alt: "Study Notion My Profile",
                title: "My Profile"
            },
            {
                id: 6,
                src: settings,
                alt: "Study Notion Settings",
                title: "Settings"
            }
        ],
        features: [
            "User authentication & authorization",
            "Course creation & management",
            "Student progress tracking",
            "EdTech Platform",
            "Responsive design"
        ]
    },
    {
        id: 2,
        name: "SHOP APP (Frontend)",
        description: "A modern e-commerce frontend with Redux state management, product catalog, and shopping cart functionality.",
        technologies: ["React", "Redux", "JavaScript", "CSS3", "HTML5"],
        link: 'https://shop-app-redux-omega.vercel.app',
        github: "https://github.com/RashikaSharma2712/ShopApp-Redux",
        images: [

            {
                id: 1,
                src: logo2,
                alt: "Shop App Landing Page",
              
            },
            {
                id: 2,
                src: landingPage,
                alt: "Shop App Landing Page",
                title: "Landing Page"
            },
            
            {
                id: 3,
                src: Cart,
                alt: "Shop App Shopping Cart",
                title: "Shopping Cart"
            }
        ],
        features: [
            
            "Shopping cart functionality",
            "Redux state management",
            "Responsive design",
            "User-friendly interface"
        ]

        
    },

    {
        id: 3,
        name: "PLAN WITH RASHIKA(Frontend)",
        description: "PLAN WITH RASHIKA is a heartfelt planner to cherish shared moments, built with love using HTML, CSS, and JavaScript.",
        technologies: [ " Tailwind CSS" ,"React"],
        
        github: "https://github.com/RashikaSharma2712/PLAN-WITH-RASHIKA",
        images: [

            {
                id: 1,
                src: travel,
                alt: "Shop App Landing Page",
            
            },

            {
                id: 2,
                src: plan,
                alt: "HomePage",
              
            },
            
            
            
        ],
        features: [
            
           "Organize dates, trips & goals",
           "Minimal and heartfelt UI",
           "Built with Tailwind CSS and React"
        ]

    }
];