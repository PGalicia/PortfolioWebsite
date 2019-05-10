export const PROJECTS = [
    {
        id: 0,
        name: "Event Planner",
        description: `<p>A web application that lets users create and manage events, including the attendees, and items needed for the events. This side project was made to help organize events made in my friend group.</p>
        <p><strong>How It Works</strong>: For the homepage, the web app displays a “create an event” button and all the events the user has created. The top will always showcase the latest upcoming event <i>(if available)</i>, the middle section will always showcase the possible future events, and the last section would showcase the past events. In each event card, users can see the following information: event name, datetime, location, edit button, delete button, and “See more” button.</p>
        <p>If the user pressed “See more”, they will not only see the core information about the event <i>(as mentioned above)</i> but also additional information, such as the attendees and the needed items for the event. For the items section, each item is color coded and each item’s color corresponds to the color attached with each attendee, displaying which users are responsible for what items. In addition, users can reassign item responsibility by pressing the “Reassign Items” located at the bottom of the event page.</p>
        <p className="note">Note: This project is currently still in its development stage.</p>
        `,
        stack: ["ReactJs", "Redux", "NodeJs", "ExpressJs", "HTML5", "CSS/SASS", "SQLite", "Sequelize", "Jest", "Webpack"],
        images: ["image1", "image2", "image3"],
        githubRepoLink: "",
        demoLink: ""
    },
    {
        id: 1,
        name: "Wisely",
        description: `<p>A program that takes a percentage amount of your total money as your “spending money” and allocate it to the items you want to use the money on.</p>
        <p>How it works: The program allows its users to input the items that they want to save us for. The program allows it users to list items that they want to save up for. The program takes in the users’ total money (ie the total money you have in your bank account), which then takes a percentage of it as your spending money. As the default, 30% of your total would be used but this can changed based on your preference.</p>
        <p>The program allows it users to list items that they want to save up for. The program takes in the users’ total money (ie the total money you have in your bank account), which then takes a percentage of it as your spending money. As the default, 30% of your total would be used but this can changed based on your preference.</p>
        `,
        stack: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "JQuery", "PySQL", "MySQL"],
        images: ["image1", "image2", "image3"],
        githubRepoLink: "",
        demoLink: ""
    },
    {
        id: 2,
        name: "Cocktail Finder",
        description: `<p>A web application that allows users to make a cocktail based on which liquors and ingredients they have. This side project is an introduction to a bigger project that a friend and I designed in college, which we can discuss more about in person.</p>
        <p><strong>How It Works</strong>: On the main page, users can see all the available cocktails. Each cocktails card will present the name and a small description. When the user click the cocktail it will show more information about the selected cocktail, such as ingredients (refer to something image below).</p>
        <p>The main feature of the the web app by pressing the [something] button. This will show the users the available liquor and ingredients we have. Once they chose which ingredients they have, and press [something], it will present them the exact cocktail they can make, if available, and other cocktails they can *almost* make.</p>
        <p className="note">Note: This project is currently still in its development stage. Please check the roadmap at Trello: link to version 1.0</p>
        `,
        stack: ["ReactJs", "Redux", "HTML5", "CSS/SASS", "Webpack"],
        images: ["image1", "image2", "image3"],
        githubRepoLink: "",
        demoLink: ""
    },
    {
        id: 3,
        name: "Healthy Campus Initiative",
        description: `<p>A website created for University of California, Irvine that serves as hub for all the resources available for both faculty and staff.</p>
        <p><strong>How It Works</strong>: For the homepage, users can see the navigation buttons which consists of the home button and various working group page (which I will talk about later on). The main feature of this page is the dropdown search, which list a couple of popular topic (according to our group’s research) about health related topics on campus. Once the user chooses his/her desired topic, it will then lead him/her to a page that best suit their needs. For example, if a user choose a topic about Sexual Assault, the website will redirect the user to UCI’s Campus Assault Resources and Education homepage.</p>
        <p>In addition, when scrolled down, users will see the About page which shows the website’s purpose and our supervisor’s contact information.</p>
        <p>For the working group page, All health related campus resources are categorized into five working groups: Physical Activity, Alcohol and Drugs, Mental Health, Sexual Health, Nutrition.</p>
        <p>Each page is consist of the following:</p>
        <ul>
        <li>Description: Gives the overview of the page</li>
        <li>National Hotlines: List useful hotlines users can utilize</li>
        <li>Student Resource Links: Links that are useful for students</li>
        <li>Faculty Resource Links: Links that are useful for faculty</li>
        </ul>
        <p>In addition, when users press a link, a modal will pop, like the one below, that display relevant information such as contact information and location, of the resource.</p>
        `,
        stack: ["HTML5", "CSS3", "JavaScript", "PHP", "JQuery"],
        images: ["image1", "image2", "image3"],
        githubRepoLink: "",
        demoLink: ""
    },
    {
        id: 4,
        name: "Scrapyard",
        description: `<p>An pseudo-e-commerce website that allows users to “buy” mechanical keyboards.</p>
        <p><strong>How It Works</strong>: Similar to other e-commerce websites, the website displays our product and allow users to buy them by specifying which product they want to buy and after they input their personal information <i>(i.e. billing and shipping address)</i>. Users will then be presented a receipt, signifying that they have bought the product.</p>`,
        stack: ["HTML5", "CSS3", "JavaScript", "Java", "JDBC",  "MySQL", "Apache Tomcat"],
        images: ["home.jpg"],
        isDemoAvailable: false,
        githubRepoLink: "https://github.com/PGalicia/ScrapYard",
        demoLink: ""
    },
    {
        id: 5,
        name: "Seance",
        description: `<p>A roguelike game let's you control of a bellhop, Esteban, as you keep your terrifying guest happy ... or else.</p>
        <p><strong>How It Works</strong>: The player can control the bellhop which has one main ability, to throw food at their guests. His guests comprise of monsters: Frankenstein, Witch, and Ghost.</p>
        <p>The bellhop must throw food to each of the guests to lower their hunger because if not they will become enraged. This will emit an aura around each enraged monster, draining the player’s sanity when they are around them. The game ends when the player’s sanity reaches zero.</p>
        <p className="note">Note: More details about each character and mechanic of the game can be found @ <a href="https://github.com/PGalicia/Seance" target="_blank">https://github.com/PGalicia/Seance</a></p>
        `,
        stack: ["Lua", "Love2D", "Tiled", "Aseprite"],
        images: ["game-photo.png", "character-models.gif"],
        githubRepoLink: "https://github.com/PGalicia/Seance",
        demoLink: ""
    },
]