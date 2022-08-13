export const portfolio = {
    name: "Portfolio Doddy Matabaro",
    fields: {
        seo: {title: "DM dev.", description: "A simple portfolio with vue and tailwind" },
        navMenu:{
            linkItems: [{
                label: "Home",
                url: "#hero",
                metadata:{
                    id: 'home'
                },
            }],
            
            actionItems: [{
                label: "Portfolio",
                url: "/portfolio",
                metadata:{
                    id: 'portfolio'
                },
            },{
                label: "Contact Me",
                url: "/contactme",
                metadata:{
                    id: 'contact'
                },
            }],
            logo: {
                url: "../assets/logo.png",
                metadata: {
                    alt: "DM dev. logo",
                    id:'logo',
                },
                label: "DM dev."
            }
        },
        body:[
            {
                type: "hero",
                slug: "hero",
                fields: {
                    diviser: "Introduction",
                    headline:"Hello I'm Doddy M.",
                    subheadline: "Since beginning my journey as a freelance designer nearby 7 years ago, I ‘ve done remote work for agencies, consulted for startup, and collaborated with talented people to create digital products",
                    button_label: "Contact Me",
                    button_url: "/contactme",
                    scroll_anchor_id: "home",
                    image: "../assets/portfolio/hero_left.png",
                },
            },
            {
                type: "about",
                slug: "about",
                fields:{
                    deviser: "Skills",
                    title: "Why Hire Me For Next Project ?",
                    subtitle: "La révolution technologique modifie certains aspects de nos vies, ainsi que le tissu social lui-même. Elle modifie également la manière dont nous apprenons et ce que nous apprenons. Les connaissances factuelles sont moins prisées lorsque tout ce que vous avez besoin de savoir peut être trouvé sur votre téléphone. Il n’est pas impératif d’être un expert en tout quand on peut tout faire.",
                    skills:[
                            {
                                title: "Contrib",
                                icon: "../assets/icons/bx_git-branch.png",
                                details: "Contribution quoti-dienne aux projets open source.",
                            },

                            {
                                title: "Contrib",
                                icon: "../assets/icons/bx_git-branch.png",
                                details: "Contribution quoti-dienne aux projets open source.",
                            },
                            {
                                title: "Contrib",
                                icon: "../assets/icons/bx_git-branch.png",
                                details: "Contribution quoti-dienne aux projets open source.",
                            },
                            {
                                title: "Contrib",
                                icon: "../assets/icons/bx_git-branch.png",
                                details: "Contribution quoti-dienne aux projets open source.",
                            },
                        ],
                    
                },
            },
            {
                type: "project",
                slug: "project",
                fields:{
                    title: "Sinnuside Design",
                    link: 'https://www.google.com/design',
                    description: "A landing page for a simple enterprise to display his services",
                    image: "../assets/portfolio/project/Screenshot from 2022-08-08 16-46-13.png",
                }
            },
            {
                type: "statitics",
                slug: "statistics",
                fields:{
                    columns:[
                        {
                            value: "50+",
                            label: "Client Happpy",
                        },
                        {
                            value: "50+",
                            label: "Client Happpy",
                        },
                        {
                            value: "50+",
                            label: "Client Happpy",
                        },
                        {
                            value: "50+",
                            label: "Client Happpy",
                        }
                    ] 
                }
            },
            {
                type: "testimonial",
                slug: "testimonial",
                fields: {
                    fullname: "Shako Kinyamba", 
                    profile: "../assets/portfolio/home-right.png",
                    statut: " Founder of BLCI",
                    testimonial: "Un Travail Bien Fait Et Tres Consistant, C'etait Vraiment Un Plaisir De Pouvoir Travailler Avec Lui"
                }
            },
            {
                type: "contact",
                slug: "contact",
                
                    fields:{
                        title: "Let's Work Together",
                    }
                
            },
            {
                type: "footer",
                slug: "footer",
                fields : {
                    logo: '../assets/logo.png',
                    copyright: '© 2022 – Doddy M.',
                    socialsMedia:[
                        {
                            icon: "../assets/linkedin-brands.svg",
                            href: "https://linkedin.com"
                        },
                        {
                            icon: "../assets/linkedin-brands.svg",
                            href: "https://linkedin.com"
                        },
                        {
                            icon: "../assets/linkedin-brands.svg",
                            href: "https://linkedin.com"
                        },
                        {
                            icon: "../assets/linkedin-brands.svg",
                            href: "https://linkedin.com"
                        }
                    ],
                },

            },
        ]
    }

}