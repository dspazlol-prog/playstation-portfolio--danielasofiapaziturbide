

const categories = [
    {
        name: "PROFILE",
        icon: '<img src="Assets/PS3Facelogo.png" alt="Profile">',
        items: [
            {
                title: "About Me",
                description: "I'm a Game Development student focused on Technical Art, real-time visuals and interactive experiences."
            }
        ]
    },
    {
        name: "GAMES",
        icon: '<img src="Assets/PS3 Control logo.png" alt="Games">',
        items: [
            {
                title: "Onsen Critters",
                description: "Cozy tycoon game developed in Unity. My contributions include level design, programming, lighting and visual implementation.",
                tools: "Unity · C# · Level Design · Lighting"
            },
            {
                title: "Level Design/Lighting",
                description: "A collection of real-time material experiments, including Glowstone, Soul Sand, Obsidian, Magma Block and Amethyst.",
                tools: "Unreal Engine 5 · Material Editor"
            },
            {
                title: "Horror Project",
                description: "A personal horror game project focused on atmospheric environments, lighting and interactive experiences.",
                tools: "Unreal Engine 5 · Environment Art"
            }
        ]
    },
    {
        name: "SKILLS",
        icon: '<img src="Assets/Toolbox.png" alt="Skills">',
        items: [
            {
                title: "Game Engines",
                description: "Unreal Engine 5 and Unity."
            },
            {
                title: "Materials & Shaders",
                description: "Material creation, node-based workflows and real-time visual materials."
            },
            {
                title: "VFX & Lighting",
                description: "Particle systems, visual effects, lighting and atmospheric composition."
            },
            {
                title: "Technical Implementation",
                description: "Blueprints, C# programming and implementation of gameplay systems."
            },
            {
                title: "3D & Environment",
                description: "Blender, environment art, level design and asset preparation."
            }
        ]
    },
    {
        name: "CONTACT",
        icon: '<img src="Assets/Internet.png" alt="Contact">',
        items: [
            {
                title: "Email",
                description: "danielasofiapaz@outlook.com"
            },
            {
                title: "LinkedIn",
                
            },
           
        ]
    }
];

let categoryIndex = 0;
let itemIndex = 0;

const categoryContainer = document.getElementById("categories");
const menuItems = document.getElementById("menu-items");
const sectionTitle = document.getElementById("section-title");
const sectionNumber = document.getElementById("section-number");
const overlay = document.getElementById("overlay");
const overlayContent = document.getElementById("overlay-content");
const overlayWindow = document.querySelector(".overlay-window");

// =========================================
// CATEGORIES
// =========================================

function renderCategories() {
    categoryContainer.innerHTML = "";

    categories.forEach((category, index) => {
        const button = document.createElement("button");

        button.className = "category";
        button.innerHTML = category.icon;
        button.title = category.name;

        button.classList.toggle("active", index === categoryIndex);

        button.addEventListener("click", () => {
            categoryIndex = index;
            itemIndex = 0;
            render();
        });

        categoryContainer.appendChild(button);
    });
}

// =========================================
// MENU ITEMS
// =========================================

function renderItems() {
    const current = categories[categoryIndex];

    menuItems.innerHTML = "";

    current.items.forEach((item, index) => {
        const button = document.createElement("button");

        button.className = "menu-item";
        button.textContent = item.title;
        button.classList.toggle("selected", index === itemIndex);

        button.addEventListener("click", () => {
            itemIndex = index;
            render();
            openItem();
        });

        menuItems.appendChild(button);
    });
}

// =========================================
// MAIN SCREEN
// =========================================

function render() {
    const current = categories[categoryIndex];

    sectionTitle.textContent = current.name;
    sectionNumber.textContent =
        String(categoryIndex + 1).padStart(2, "0");

    renderCategories();

    if (current.name === "PROFILE") {
        menuItems.innerHTML = `
            <div class="hero">
                <div>
                    <span class="overlay-label">
                        PLAYER 01 · PORTFOLIO
                    </span>

                    <h1>DANIELA</h1>
                    <h2>TECHNICAL ARTIST</h2>

                    <p>
                        Videogames are art and art is meant to communicate.
                    </p>

                    <p class="profile-hint">
                        Press ENTER to learn more
                    </p>
                </div>

                <img
                    class="hero-photo"
                    src="assets/profile.jpg"
                    alt="Portrait"
                    onerror="this.style.display='none'"
                >
            </div>
        `;
   } else if (current.name === "SKILLS") {
    menuItems.innerHTML = `
        <div class="skills-summary">
            <p><strong>Software:</strong> Unreal Engine 5 · Unity · Substance Painter · Blender</p>
            <p><strong>Technical Art:</strong> Shaders · VFX · Lighting · Materials · Level Desing</p>
            <p><strong>Technical Technical Implementation:</strong> C# · Unreal Blueprints</p>
            <p><strong>Languages:</strong> Spanish (Native) · English (B2) · French (A2)
            <p><strong>Currently Learning:</strong> Substance Designer · 3D Modeling</p>
        </div>
    `;
} else {
    renderItems();
}
}

// =========================================
// OPEN POPUP
// =========================================

function openItem() {
    const current = categories[categoryIndex];
    const item = current.items[itemIndex];

    // -------------------------------------
    // ONSEN CRITTERS
    // -------------------------------------

   
if (
    current.name === "GAMES" &&
    item.title === "Onsen Critters"
) {
    overlayContent.innerHTML = `
        <div class="onsen-page">

            <span class="overlay-label">GAMES / PROJECT 01</span>
            <h2 class="onsen-title">Onsen Critters</h2>
            <p class="onsen-subtitle">UNITY · COZY TYCOON · TEAM PROJECT</p>

            <!-- GAMEPLAY -->

            <div class="onsen-video-container">
                <video class="onsen-video" controls preload="metadata" playsinline>
                    <source src="Assets/OnsenGameplay.mp4" type="video/mp4">
                    Your browser does not support this video.
                </video>
            </div>

            <!-- OVERVIEW -->

            <section class="onsen-section">
                <span class="onsen-section-number">01 / OVERVIEW</span>
                <h3>About the Game</h3>

                <p>
                    Onsen Critters is a cozy tycoon game where capybaras
                    manage a mountain inn. We made this demo for a school
                    project in collaboration with HyperBeard. The game
                    was intended for mobile devices, and we worked on
                    this project for about eight weeks.
                </p>
            </section>

            <!-- CONTRIBUTIONS -->

            <section class="onsen-section">
                <span class="onsen-section-number">02 / MY ROLE</span>
                <h3>My Contributions</h3>

            

                <p>
                    As a small team of four, we all had various roles
                    and responsibilities. I was responsible for level
                    design, lighting, particles, and shaders. I also
                    developed the building system, towel system, coin
                    system, and ad systems
                    and designed the level.
                </p>
            </section>

            <!-- TECHNICAL BREAKDOWN -->

            <section class="onsen-section">
                <span class="onsen-section-number">03 / TECHNICAL BREAKDOWN</span>
                <h3>Particles, Shaders & Lighting</h3>

                <p>
                    I worked on the lighting, particles, and shaders
                    to create the visual atmosphere of Onsen Critters.
                    To make it look as comfy as possible, I added
                    various particle systems, such as steam from the
                    onsen, snow particles that disappear when colliding
                    with the floor, shiny triangles to make the snow
                    even more magical, and particles on the lights.
                    I also created a water shader for the onsen and
                    worked on the water effect in the UI that moves
                    when clicked.
                </p>

                

                <h4>Visual Effects - Part 1</h4>

                <div class="onsen-video-container">
                    <video class="onsen-video" controls preload="metadata" playsinline>
                        <source src="Assets/Particles.mp4" type="video/mp4">
                        Your browser does not support this video.
                    </video>
                </div>

                <h4>Visual Effects - Part 2</h4>

                <div class="onsen-video-container">
                    <video class="onsen-video" controls preload="metadata" playsinline>
                        <source src="Assets/Particles2.mp4" type="video/mp4">
                        Your browser does not support this video.
                    </video>
                </div>
            </section>

            <!-- BUILDING SYSTEM -->

            <section class="onsen-section">
                <span class="onsen-section-number">04 / GAMEPLAY SYSTEMS</span>
                <h3>Building System</h3>

                <p>
                    I designed and developed the building system used
                    to place furniture and organize the inn. Furniture
                    can be rotated and moved on the grid. When animals
                    are bathing, the building system is locked.
                </p>

                <div class="onsen-video-container">
                    <video class="onsen-video" controls preload="metadata" playsinline>
                        <source src="Assets/BuildingVideo.mp4" type="video/mp4">
                        Your browser does not support this video.
                    </video>
                </div>
            </section>

            <!-- GALLERY -->

            <section class="onsen-section">
                <span class="onsen-section-number">05 / GALLERY</span>
                <h3>Development Gallery</h3>

                <p>
                    Here are some screenshots from the development
                    of Onsen Critters and the work I did on the project.
                </p>

                <!-- IMAGE 1 - LEVEL DESIGN -->

                <div class="onsen-gallery-item">
                    <h4>Level Design</h4>

                    <p>
                        Here I worked on the layout of the inn, building the level on Unity.
                    </p>

                    <img
                        src="Assets/SceneDesign.png"
                        alt="Onsen Critters level design"
                        class="onsen-gallery-image"
                        loading="lazy"
                    >
                </div>

                <!-- VIDEO 2 - LIGHTING -->

                <div class="onsen-gallery-item">
                    <h4>Lighting</h4>

                    <p>
                        I experimented with lighting and colors to create a cozy atmosphere for the game. Post-processing was especially important, as the game relied heavily on bloom and vignette effects to enhance the cozy nighttime feeling that made our game so special.

Looking back, now that I have more experience, I'm confident I could optimize the lighting to reduce resource usage and improve performance while maintaining the same atmosphere.
                    </p>

                    <div class="onsen-video-container">
                        <video class="onsen-video" controls preload="metadata" playsinline>
                            <source src="Assets/Bloom.mp4" type="video/mp4">
                            Your browser does not support this video.
                        </video>
                    </div>
                </div>

                <!-- IMAGE 3 - FURNITURE -->

                <div class="onsen-gallery-item">
                    <h4>Environment & Furniture</h4>

                    <p>
                        I also worked on the building system's design and logic, making sure it was as intuitive and easy to understand.
                    </p>

                    <img
                        src="Assets/Furniture.png"
                        alt="Onsen Critters furniture and environment"
                        class="onsen-gallery-image"
                        loading="lazy"
                    >
                </div>

            </section>

        </div>
    `;

    overlay.classList.remove("hidden");
    overlayWindow.classList.add("onsen-window");
    overlayWindow.scrollTop = 0;

    return;
}


    // -------------------------------------
    // PROFILE
    // -------------------------------------

    if (current.name === "PROFILE") {
        overlayContent.innerHTML = `
            <div class="profile-popup">

                <div class="profile-info">
                    <span class="overlay-label">
                        PLAYER 01 · ABOUT ME
                    </span>

                    <h2>Daniela Sofia Paz</h2>

                    <h3>TECHNICAL ARTIST</h3>

                    <p>
                        Hi there! Im Daniela and im a game design
                        and development student at Tec de Monterrey
                        in Mexico.
                    </p>

                    <p>
                        Ive always been passionate about videogames
                        and wish to tell stories and share emotions
                        through them. I enjoy creating visual
                        experiences and communicating through details
                        such as lighting, materials, VFX and
                        technical implementation.
                    </p>

                    <div class="profile-details">
                        <span>UNREAL ENGINE 5</span>
                        <span>UNITY</span>
                        <span>TECHNICAL ART</span>
                    </div>
                </div>

                <div class="profile-image-container">
                    <img
                        src="Assets/PFP.jpg"
                        alt="My portrait"
                        class="profile-popup-photo"
                    >
                </div>

            </div>
        `;

        overlayWindow.classList.remove("onsen-window");
        overlay.classList.remove("hidden");
        overlayWindow.scrollTop = 0;

        return;
    }

    // -------------------------------------
    // OTHER ITEMS
    // -------------------------------------

   
let extra = "";

if (item.tools) {
    extra = `<p class="overlay-label">${item.tools}</p>`;
}

if (current.name === "CONTACT") {

    const contactLinks = {
        "LinkedIn": "https://www.linkedin.com/in/daniela-sofia-paz-iturbide-32a4b52b5"
    };

    const url = contactLinks[item.title];

    overlayContent.innerHTML = `
        <span class="overlay-label">CONTACT</span>
        <h2>${item.title}</h2>
${item.description ? `<p>${item.description}</p>` : ""}

        ${url ? `
            <p>
                <a href="${url}" target="_blank" rel="noopener noreferrer">
                    Open LinkedIn
                </a>
            </p>
        ` : ""}
    `;

} else {

    overlayContent.innerHTML = `
        <span class="overlay-label">${current.name}</span>
        <h2>${item.title}</h2>
        ${extra}
        <p>${item.description}</p>
    `;

}

overlayWindow.classList.remove("onsen-window");
overlay.classList.remove("hidden");
overlayWindow.scrollTop = 0;
}


// =========================================
// CLOSE POPUP
// =========================================

function closeItem() {
    const video = overlayContent.querySelector("video");

    if (video) {
        video.pause();
    }

    overlay.classList.add("hidden");
    overlayWindow.classList.remove("onsen-window");
}

// Close button
document.getElementById("close-overlay")
    .addEventListener("click", closeItem);

// =========================================
// KEYBOARD CONTROLS
// =========================================

document.addEventListener("keydown", (event) => {

    // Popup is open
    if (!overlay.classList.contains("hidden")) {
        if (event.key === "Escape") {
            closeItem();
        }

        return;
    }

    const current = categories[categoryIndex];

    switch (event.key) {

        case "ArrowRight":
            event.preventDefault();

            categoryIndex =
                (categoryIndex + 1) % categories.length;

            itemIndex = 0;
            render();
            break;

        case "ArrowLeft":
            event.preventDefault();

            categoryIndex =
                (categoryIndex - 1 + categories.length) %
                categories.length;

            itemIndex = 0;
            render();
            break;

        case "ArrowDown":
            event.preventDefault();

            itemIndex =
                (itemIndex + 1) % current.items.length;

            render();
            break;

        case "ArrowUp":
            event.preventDefault();

            itemIndex =
                (itemIndex - 1 + current.items.length) %
                current.items.length;

            render();
            break;

        case "Enter":
    event.preventDefault();

    if (current.name !== "SKILLS") {
        openItem();
    }

    break;

        case "Escape":
            closeItem();
            break;
    }
});

// =========================================
// CLOCK
// =========================================

function updateClock() {
    document.getElementById("clock").textContent =
        new Date().toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit"
        });
}

updateClock();
setInterval(updateClock, 1000);

// Initial render
render();
