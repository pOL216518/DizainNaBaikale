import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Евгений',
    lastName:  'Ершов',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Frontend developer',
    avatar:    '/images/avatar.jpg',
    location:  '',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    // {
    //     name: 'GitHub',
    //     icon: 'github',
    //     link: 'https://github.com/once-ui-system/nextjs-starter',
    // },
    // {
    //     name: 'LinkedIn',
    //     icon: 'linkedin',
    //     link: 'https://www.linkedin.com/company/once-ui/',
    // },
    // {
    //     name: 'X',
    //     icon: 'x',
    //     link: '',
    // },
    // {
    //     name: 'Email',
    //     icon: 'email',
    //     link: 'mailto:example@gmail.com',
    // },
]

const home = {
    label: 'Главная страница',
    title: `BaikalIsBeatiful`,
    description: `${person.role}`,
    headline: <>Байкал — жемчужина Сибири</>,
    subline: <>Добро пожаловать на страницу, посвящённую самому глубокому озеру мира — <InlineCode>Байкалу</InlineCode>!  Этот природный шедевр привлекает путешественников со всех уголков земного шара своими величественными пейзажами,<br/> богатой историей и уникальной экосистемой.</>
}

const about = {
    label: 'Обо мне',
    title: 'Обо мне',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Введение',
        description: <>Привет! Меня зовут Евгений Ершов, этим летом я отправился в Энхалук, чтобы освоить основы веб-дизайна. Это путешествие стало для меня вдохновляющим опытом: уникальная природа Байкала и атмосфера творчества помогли открыть новые горизонты в моей любимой области.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Мой опыт и навыки в веб-дизайне',
        experiences: [
            {
                company: 'Работа с Figma',
                timeframe: '',
                role: 'В процессе обучения я научился:',
                achievements: [
                    <>Разрабатывать удобные и интуитивно понятные прототипы.</>,
                    <>Использовать дизайн-системы для обеспечения единообразия стиля.</>,
                    <>Работать с компонентами и взаимодействиями, что позволяет ускорить процесс создания макетов.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/figma.jpeg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            // {
            //     company: 'Creativ3',
            //     timeframe: '2018 - 2022',
            //     role: 'Lead Designer',
            //     achievements: [
            //         <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
            //         <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
            //     ],
            //     images: [ ]
            // }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Эмоции и знакомства на Байкале',
        institutions: [
            {
                name: '',
                description: <>Путешествие на Байкал стало для меня настоящим источником вдохновения и ярких эмоций. Уникальная природа, чистый воздух и спокойствие этого места создавали особую атмосферу, в которой легко было открыться чему-то новому.</>,
            },
            {
                name: '',
                description: <>Находясь рядом с Байкалом, я познакомился с удивительными людьми, каждый из которых оставил свой след в моём сердце. Совместные беседы, обмен идеями и совместное творчество наполнили эти дни теплом и радостью.</>,
            },
            {
                name: '',
                description: <>Эти моменты стали для меня не просто отдыхом, а возможностью обрести новых друзей, вдохновиться историей и культурой этого региона, а также почувствовать, как природа объединяет нас всех. Байкал подарил мне воспоминания, которые я буду хранить всегда.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Фотографии',
        skills: [
            {
                // title: 'Figma',
                //  description: <>Данные фотографи которые были сделаны во врмя поездки.</>,
                images: [
                    {
                        src: '/images/projects/project-01/photo1.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/photo2.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/baikal7.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/baikal8.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: '',
                description: <></>,
                images: [
                    // {
                    //     src: '/images/projects/project-01/cover-04.jpg',
                    //     alt: 'Project image',
                    //     width: 16,
                    //     height: 9
                    // },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Галерея',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/gallery1.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/gallery2.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/gallery3.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/gallery4.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/gallery5.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/gallery6.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/gallery7.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/gallery8.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/gallery9.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/gallery10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/gallery11.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/gallery12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/gallery13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/gallery14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/gallery15.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/gallery16.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };