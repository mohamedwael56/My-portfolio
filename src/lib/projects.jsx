const teamTrackKeys=["Role-Based Access Control –  User permission control.",
"Employee Management – Add, edit, delete employees.",
"Shift Scheduling – Assign and manage shifts.",
"Attendance Tracking – Monitor daily attendance.",
"Performance Monitoring – Track employee performance.",
"Interactive Dashboard – Charts and statistics.",
"Responsive Design – Mobile-friendly interface.",
"Reusable Component Architecture – Scalable component architecture.",
"Modern UI/UX – Clean, user-friendly interface.",
"Secure Authentication – Secure user login."
]
const dashboardKeys=[
"User Management – Add, edit, delete users.",
"Analytics and Reporting – Visualize data with charts.",
"Real-time Updates – Dynamic data updates.",
"Responsive Design – Mobile-friendly interface.",
"Secure Authentication – User login and access control.",
"Customizable Dashboard – Personalize dashboard layout.",
"Interactive Charts – Visualize key metrics.",
"Performance Monitoring – Track system performance.",
"Role-Based Access Control – Different views for different user roles.",
"Modern UI/UX – Clean, user-friendly interface."
]
const eCommerceKeys=[
  "Product Catalog – Browse available products",
  "Shopping Cart – Add and manage cart items",
  "Product Search – Find products quickly",
  "Responsive Design – Optimized for all devices",
"Product Details – View complete product information",
"Payment Summary – Review order costs and payment details",
"Orders Overview – View and manage placed orders",
"Order Tracking – Track order status and progress",

]

const projects = [
    {
      id: "team-track",
      img: "/first-project.png",
      img1: "/attendance.png",
      img2: "/performance.png",
      name:"Work Management System",
      overView:"TeamTrack is a modern work management system designed to help teams organize daily operations efficiently. The application enables administrators to manage employees, assign shifts, monitor attendance, track performance, and oversee team activities through a centralized dashboard. It features a role-based interface that presents different views and permissions depending on the user's role, creating a scalable and intuitive workflow for both managers and employees. The project focuses on clean architecture, reusable components, responsive design, and a smooth user experience",
      description:"A full-featured work management system for handling employees, shifts, attendance, and performance tracking with role-based access. ",
      stack: "Next, Supabase, Node.js, Tailwind CSS",
      gitHub: "https://github.com/mohamedwael56/Team-track",
      Demo: "https://team-track-pi.vercel.app/",
      keyFeatures: teamTrackKeys,
    technologies: ["Next.JS", "Supabase", "Node.js", "Tailwind CSS"]
    },
    {
      id: "dashboard-admin",
      img: "/Dashboard.png",
      img1: "/dashboard-profile1.png",
      img2: "/dashboard&adminPanel1.png",
      name: " Admin Dashboard",
      overView:"A modern admin dashboard designed to manage users, visualize system data, and monitor key metrics through interactive charts and a clean responsive interface.",
      description: " Interactive dashboard for managing users, analytics, and system data with real-time UI updates.",
     stack: "React, Node.js, Express,Charts.js ,UI libraries, Tailwind CSS",
      gitHub: "https://github.com/mohamedwael56/Dashboard-admin-panel",
      Demo: "https://dashboard-admin-panel-smoky.vercel.app/",
keyFeatures: dashboardKeys,
      technologies: ["React.JS", "Node.js", "Express", "Charts.js", "UI libraries", "Tailwind CSS"]
    },
    {
      id: "e-commerce",
      img: "/E-commerce-project.png",
      img1: "/cart1.png",
      img2: "/order.png",
      name: "E-Commerce Project",
      overView:"A full-stack e-commerce application that enables users to browse products, manage their shopping cart, place orders, and track order status through a responsive and user-friendly interface. Built with modern web technologies to deliver a seamless shopping experience.",
      description: " Full-stack e-commerce application with product listing, cart system, and user authentication.",
      stack: "React, Node.js, Tailwind CSS",
      gitHub: "https://github.com/mohamedwael56/E-commerce-project",
     keyFeatures: eCommerceKeys,
      Demo: "https://e-commerce-project-yui6.vercel.app/",
   technologies: ["React.JS", "Node.js", "Rest API", "bootstrap"],
    },
    
  ];

export default projects;
