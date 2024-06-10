const { Post } = require('../models');
const postData = [
    {
        post_title: "Embrace Version Control",
        content: 'Incorporating version control, such as Git, is essential for efficient project management. It facilitates collaboration, tracks changes, and provides a safety net for code revisions.',
        user_id: 1,
        post_state: "cs"
        
    },
    {
        post_title: "Sharpen Algorithmic Skills",
        content: 'Regularly practicing algorithm design, through platforms like LeetCode or HackerRank, enhances problem-solving abilities. This skill transcends specific roles within computer science, making you a more versatile and effective coder.',
        user_id: 2,
        post_state: "cs"
    },
    {
        post_title: "Test-Driven Development",
        content: "Embrace the practice of Test-Driven Development. Writing tests before writing code ensures that your codebase remains robust and reliable, and it helps in designing cleaner and more maintainable code.",
        user_id: 5,
        post_state: "sd"
    },
    {
        post_title: "Refine Problem-Solving Skills",
        content: "Regularly tackle coding challenges and refine your problem-solving abilities. Platforms like LeetCode and HackerRank offer a wealth of problems to solve, improving your coding proficiency and making you a more effective software developer.",
        user_id: 5,
        post_state: "sd"
    },
    {
        post_title: "Responsive Design is Key",
        content: "Prioritize responsive web design to ensure your websites look and function well across various devices and screen sizes. Using frameworks like Bootstrap or CSS Grid can streamline this process and enhance user experience.",
        user_id: 4,
        post_state: "wd"
    },
    {
        post_title: "Stay Updated on Web Standards",
        content: "Keep yourself informed about evolving web standards and best practices. Regularly explore new technologies, frameworks, and tools to stay ahead in the dynamic field of web development and deliver modern, efficient, and secure web experiences.",
        user_id: 6,
        post_state: "wd"
    }
];

const SeedPost = () => Post.bulkCreate(postData);
module.exports = SeedPost;