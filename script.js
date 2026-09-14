/* ==========================================
   ELYSIUM SMP WEBSITE
   MAIN JAVASCRIPT
========================================== */


/* ==========================================
   SERVER SETTINGS
========================================== */

const SERVER_IP = "elysiumsmp.playwithbao.com";

const DISCORD_LINK = "https://discord.gg/EsDQqvrx7";


/* ==========================================
   PLAYER DATA
========================================== */

const players = [
    {
        name: "Masumbaccha",
        role: "Founder",
        skin: "Judelow",
        about: "I don't need to be the strongest. I just need to keep improving.",
        gamemode: "Survival"
    },

    {
        name: "Shinchan0n",
        role: "President",
        skin: "Shinchan0n"
    },

    {
        name: "Wixzen",
        role: "Vice-President",
        skin: "Wixzen"
    },

    {
        name: "11k",
        role: "Governor",
        skin: "11k"
    },

    {
        name: "Blazebeacon",
        role: "Governor",
        skin: "Blazebeacon"
    },

    {
        name: "Dogyp0ty44",
        role: "Civilian",
        skin: "Dogyp0ty44",
        about: "I can't do anything. 11k invited me, idk. I can't fight, I just boss people around.",
        gamemode: "Not specified"
    },

    {
        name: "Supperior_Hassan",
        role: "Civilian",
        skin: "Wemmbu",
        about: "A combat specialist",
        gamemode: "Nethpot & Diapot"
    },

    {
        name: "Ahil",
        role: "Civilian",
        skin: "Ahil"
    },

    {
        name: "Arabicveled",
        role: "Civilian",
        skin: "Arabicveled"
    },

    {
        name: "Ishan",
        role: "Civilian",
        skin: "Ishan"
    },

    {
        name: "Nivio",
        role: "Civilian",
        skin: "Nivio"
    },

    {
        name: "NotFlint",
        role: "Civilian",
        skin: "NotFlint"
    },

    {
        name: "608ms",
        role: "Civilian",
        skin: "608ms"
    },

    {
        name: "Amayy",
        role: "Civilian",
        skin: "Amayy"
    },

    {
        name: "Athubroplayz",
        role: "Civilian",
        skin: "Athubroplayz"
    },

    {
        name: "EliteYshh",
        role: "Civilian",
        skin: "EliteYshh"
    },

    {
        name: "Greenery",
        role: "Civilian",
        skin: "Greenery"
    },

    {
        name: "KomAP",
        role: "Civilian",
        skin: "KomAP"
    },

    {
        name: "Ghost",
        role: "Civilian",
        skin: "Ghost"
    },

    {
        name: "Mepp00",
        role: "Civilian",
        skin: "Mepp00"
    },

    {
        name: "Rain",
        role: "Civilian",
        skin: "Rain"
    },

    {
        name: "seish",
        role: "Civilian",
        skin: "seish"
    },

    {
        name: "Rachitified",
        role: "Civilian",
        skin: "Rachitified"
    },

    {
        name: "Kat",
        role: "Civilian",
        skin: "Kat"
    },

    {
        name: "Ahha",
        role: "Civilian",
        skin: "Ahha"
    },

    {
        name: "Hunt_Vantage",
        role: "Civilian",
        skin: "Steve",
        about: "Hotel",
        gamemode: "Not specified"
    },

    {
        name: "Ily",
        role: "Civilian",
        skin: "Ily"
    },

    {
        name: "Itx Ammar",
        role: "Civilian",
        skin: "ItxAmmar"
    },

    {
        name: "Purplix",
        role: "Civilian",
        skin: "Purplix"
    }
];


/* ==========================================
   SECTION NAVIGATION
========================================== */

function showSection(sectionId) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.add("active");
    }

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.classList.remove("active");
    });

    const activeLink = document.querySelector(
        `.nav-link[data-section="${sectionId}"]`
    );

    if (activeLink) {
        activeLink.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    const menu = document.getElementById("mobileMenu");

    if (menu) {
        menu.classList.remove("open");
    }
}


/* ==========================================
   MOBILE MENU
========================================== */

function toggleMenu() {

    const menu = document.getElementById("mobileMenu");

    if (menu) {
        menu.classList.toggle("open");
    }
}


/* ==========================================
   COPY SERVER IP
========================================== */

function copyIP() {

    navigator.clipboard.writeText(SERVER_IP);

    const button = document.getElementById("copyButton");

    if (!button) return;

    const originalText = button.innerText;

    button.innerText = "COPIED!";

    setTimeout(() => {
        button.innerText = originalText;
    }, 1500);
}


/* ==========================================
   RULE TOGGLE
========================================== */

function toggleRule(element) {

    const content = element.querySelector(".rule-content");

    if (!content) return;

    element.classList.toggle("open");

    if (element.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";
    } else {
        content.style.maxHeight = "0";
    }
}


/* ==========================================
   CREATE PLAYER PROFILE MODAL
========================================== */

function createPlayerModal() {

    if (document.getElementById("playerProfileModal")) {
        return;
    }

    const modal = document.createElement("div");

    modal.id = "playerProfileModal";
    modal.className = "player-profile-modal";

    modal.innerHTML = `
        <div class="player-profile-overlay"
             onclick="closePlayerProfile()"></div>

        <div class="player-profile-box">

            <button
                class="player-profile-close"
                onclick="closePlayerProfile()"
                aria-label="Close profile"
            >
                ×
            </button>

            <div class="profile-avatar" id="profileAvatar"></div>

            <h2 id="profileName"></h2>

            <div class="profile-role" id="profileRole"></div>

            <div class="profile-section">
                <span>ABOUT</span>
                <p id="profileAbout"></p>
            </div>

            <div class="profile-section">
                <span>MAIN GAMEMODE</span>
                <p id="profileGamemode"></p>
            </div>

        </div>
    `;

    document.body.appendChild(modal);
}


/* ==========================================
   OPEN PLAYER PROFILE
========================================== */

function openPlayerProfile(player) {

    createPlayerModal();

    const modal =
        document.getElementById("playerProfileModal");

    const avatar =
        document.getElementById("profileAvatar");

    const name =
        document.getElementById("profileName");

    const role =
        document.getElementById("profileRole");

    const about =
        document.getElementById("profileAbout");

    const gamemode =
        document.getElementById("profileGamemode");

    avatar.innerHTML = "";

    if (player.skin) {

        const image = document.createElement("img");

        image.src =
            `https://mc-heads.net/avatar/${encodeURIComponent(player.skin)}/256`;

        image.alt =
            `${player.name} Minecraft skin`;

        image.onerror = function () {

            avatar.innerHTML =
                `<span>${player.name.charAt(0).toUpperCase()}</span>`;
        };

        avatar.appendChild(image);

    } else {

        avatar.innerHTML =
            `<span>${player.name.charAt(0).toUpperCase()}</span>`;
    }

    name.textContent =
        player.name;

    role.textContent =
        player.role || "Civilian";

    about.textContent =
        player.about || "No information added yet.";

    gamemode.textContent =
        player.gamemode || "Not specified";

    modal.classList.add("show");

    document.body.classList.add("profile-open");
}


/* ==========================================
   CLOSE PLAYER PROFILE
========================================== */

function closePlayerProfile() {

    const modal =
        document.getElementById("playerProfileModal");

    if (!modal) return;

    modal.classList.remove("show");

    document.body.classList.remove("profile-open");
}


/* ==========================================
   LOAD PLAYERS
========================================== */

function loadPlayers(list = players) {

    const grid =
        document.getElementById("playersGrid");

    const noPlayers =
        document.getElementById("noPlayers");

    if (!grid) return;

    grid.innerHTML = "";

    if (list.length === 0) {

        if (noPlayers) {
            noPlayers.style.display = "block";
        }

        return;
    }

    if (noPlayers) {
        noPlayers.style.display = "none";
    }

    list.forEach(player => {

        const card =
            document.createElement("div");

        card.className =
            "player-card";

        card.dataset.name =
            player.name.toLowerCase();

        /* ENTIRE CARD IS CLICKABLE */
        card.onclick = function () {
            openPlayerProfile(player);
        };

        /* SKIN */
        const avatar =
            document.createElement("div");

        avatar.className =
            "avatar";

        if (player.skin) {

            const image =
                document.createElement("img");

            image.src =
                `https://mc-heads.net/avatar/${encodeURIComponent(player.skin)}/128`;

            image.alt =
                `${player.name} Minecraft skin`;

            image.loading =
                "lazy";

            image.onerror = function () {

                avatar.innerHTML =
                    `<span>${player.name.charAt(0).toUpperCase()}</span>`;
            };

            avatar.appendChild(image);

        } else {

            avatar.innerHTML =
                `<span>${player.name.charAt(0).toUpperCase()}</span>`;
        }

        /* NAME */
        const playerName =
            document.createElement("h3");

        playerName.textContent =
            player.name;

        /* ROLE */
        const rank =
            document.createElement("p");

        rank.className =
            "rank role";

        rank.textContent =
            player.role;

        card.appendChild(avatar);
        card.appendChild(playerName);
        card.appendChild(rank);

        grid.appendChild(card);
    });
}


/* ==========================================
   PLAYER SEARCH
========================================== */

function searchPlayers() {

    const input =
        document.getElementById("playerSearch");

    if (!input) return;

    const searchTerm =
        input.value.trim().toLowerCase();

    const filteredPlayers =
        players.filter(player =>
            player.name.toLowerCase().includes(searchTerm)
        );

    loadPlayers(filteredPlayers);
}


/* ==========================================
   PVP TIER
========================================== */

function changeTier(element, tier) {

    const tierButtons =
        document.querySelectorAll(".tier-button");

    tierButtons.forEach(button => {
        button.classList.remove("active");
    });

    element.classList.add("active");

    const tierLists =
        document.querySelectorAll(".tier-list");

    tierLists.forEach(list => {
        list.classList.remove("active");
    });

    const selectedTier =
        document.getElementById(tier);

    if (selectedTier) {
        selectedTier.classList.add("active");
    }
}


/* ==========================================
   COUNTDOWN
========================================== */

const eventDate =
    new Date("September 18, 2026 21:00:00").getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const distance =
        eventDate - now;

    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance %
                (1000 * 60)) /
            1000
        );

    const daysElement =
        document.getElementById("days");

    const hoursElement =
        document.getElementById("hours");

    const minutesElement =
        document.getElementById("minutes");

    const secondsElement =
        document.getElementById("seconds");

    if (!daysElement) return;

    if (distance < 0) {

        daysElement.innerText = "00";
        hoursElement.innerText = "00";
        minutesElement.innerText = "00";
        secondsElement.innerText = "00";

        return;
    }

    daysElement.innerText =
        String(days).padStart(2, "0");

    hoursElement.innerText =
        String(hours).padStart(2, "0");

    minutesElement.innerText =
        String(minutes).padStart(2, "0");

    secondsElement.innerText =
        String(seconds).padStart(2, "0");
}


/* ==========================================
   EVENT MODAL
========================================== */

function openEvent(title, description) {

    const modal =
        document.getElementById("eventModal");

    const modalTitle =
        document.getElementById("eventModalTitle");

    const modalDescription =
        document.getElementById("eventModalDescription");

    if (!modal) return;

    if (modalTitle) {
        modalTitle.textContent =
            title;
    }

    if (modalDescription) {
        modalDescription.textContent =
            description;
    }

    modal.classList.add("show");
}


function closeEventModal() {

    const modal =
        document.getElementById("eventModal");

    if (!modal) return;

    modal.classList.remove("show");
}


/* ==========================================
   ESC KEY
========================================== */

document.addEventListener("keydown", function (event) {

    if (event.key !== "Escape") return;

    closeEventModal();
    closePlayerProfile();

});


/* ==========================================
   DISCORD
========================================== */

function openDiscord() {

    window.open(
        DISCORD_LINK,
        "_blank"
    );
}


/* ==========================================
   SERVER PLAYER COUNT
========================================== */

function updatePlayerCount() {

    const playerCount =
        document.getElementById("playerCount");

    if (!playerCount) return;

    playerCount.textContent =
        "12/50";
}


/* ==========================================
   INITIALIZE
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    loadPlayers();

    updateCountdown();

    updatePlayerCount();

    setInterval(
        updateCountdown,
        1000
    );

});
