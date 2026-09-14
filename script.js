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

    document.querySelectorAll(".section").forEach(section => {
        section.classList.remove("active");
    });

    const section = document.getElementById(sectionId);

    if (section) {
        section.classList.add("active");
    }

    document.querySelectorAll(".nav-btn").forEach(button => {
        button.classList.remove("active");

        const onclick = button.getAttribute("onclick");

        if (
            onclick &&
            onclick.includes(`'${sectionId}'`)
        ) {
            button.classList.add("active");
        }
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    const menu = document.getElementById("navMenu");

    if (menu) {
        menu.classList.remove("open");
    }
}


/* ==========================================
   MOBILE MENU
========================================== */

function toggleMenu() {

    const menu = document.getElementById("navMenu");

    if (menu) {
        menu.classList.toggle("open");
    }
}


/* ==========================================
   COPY SERVER IP
========================================== */

function copyIP() {

    navigator.clipboard.writeText(SERVER_IP)
        .then(() => {

            const message =
                document.getElementById("copyMessage");

            if (!message) return;

            message.textContent =
                "SERVER IP COPIED!";

            setTimeout(() => {
                message.textContent = "";
            }, 2000);

        })
        .catch(() => {

            const message =
                document.getElementById("copyMessage");

            if (!message) return;

            message.textContent =
                SERVER_IP;

        });
}


/* ==========================================
   RULE TOGGLE
========================================== */

function toggleRule(button) {

    const rule =
        button.closest(".rule");

    if (!rule) return;

    const content =
        rule.querySelector(".rule-content");

    if (!content) return;

    rule.classList.toggle("open");

    if (rule.classList.contains("open")) {

        content.style.maxHeight =
            content.scrollHeight + "px";

    } else {

        content.style.maxHeight =
            "0";
    }
}


/* ==========================================
   PLAYER PROFILE MODAL
========================================== */

function createPlayerModal() {

    if (
        document.getElementById(
            "playerProfileModal"
        )
    ) {
        return;
    }

    const modal =
        document.createElement("div");

    modal.id =
        "playerProfileModal";

    modal.className =
        "player-profile-modal";

    modal.innerHTML = `

        <div
            class="player-profile-overlay"
            onclick="closePlayerProfile()"
        ></div>

        <div class="player-profile-box">

            <button
                class="player-profile-close"
                onclick="closePlayerProfile()"
            >
                ×
            </button>

            <div
                class="profile-avatar"
                id="profileAvatar"
            ></div>

            <h2 id="profileName"></h2>

            <div
                class="profile-role"
                id="profileRole"
            ></div>

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
        document.getElementById(
            "playerProfileModal"
        );

    const avatar =
        document.getElementById(
            "profileAvatar"
        );

    const name =
        document.getElementById(
            "profileName"
        );

    const role =
        document.getElementById(
            "profileRole"
        );

    const about =
        document.getElementById(
            "profileAbout"
        );

    const gamemode =
        document.getElementById(
            "profileGamemode"
        );

    avatar.innerHTML = "";

    if (player.skin) {

        const image =
            document.createElement("img");

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
        player.about ||
        "No information added yet.";

    gamemode.textContent =
        player.gamemode ||
        "Not specified";

    modal.classList.add("show");

    document.body.classList.add(
        "profile-open"
    );
}


/* ==========================================
   CLOSE PLAYER PROFILE
========================================== */

function closePlayerProfile() {

    const modal =
        document.getElementById(
            "playerProfileModal"
        );

    if (!modal) return;

    modal.classList.remove("show");

    document.body.classList.remove(
        "profile-open"
    );
}


/* ==========================================
   LOAD PLAYERS
========================================== */

function loadPlayers(list = players) {

    const grid =
        document.getElementById(
            "playersGrid"
        );

    const noPlayers =
        document.getElementById(
            "noPlayers"
        );

    if (!grid) return;

    grid.innerHTML = "";

    if (list.length === 0) {

        if (noPlayers) {
            noPlayers.style.display =
                "block";
        }

        return;
    }

    if (noPlayers) {
        noPlayers.style.display =
            "none";
    }

    list.forEach(player => {

        const card =
            document.createElement("div");

        card.className =
            "player-card";

        card.onclick = function () {
            openPlayerProfile(player);
        };


        /* PLAYER SKIN */

        const avatar =
            document.createElement("div");

        avatar.className =
            "avatar";

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


        /* PLAYER NAME */

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
        document.getElementById(
            "playerSearch"
        );

    if (!input) return;

    const search =
        input.value
            .trim()
            .toLowerCase();

    const filtered =
        players.filter(player =>
            player.name
                .toLowerCase()
                .includes(search)
        );

    loadPlayers(filtered);
}


/* ==========================================
   PVP TIER BUTTONS
========================================== */

function changeTier(tier, button) {

    document.querySelectorAll(
        ".tier-tab"
    ).forEach(tab => {

        tab.classList.remove("active");

    });

    if (button) {
        button.classList.add("active");
    }

    /*
       Your current HTML contains one tier list.
       Keep it visible while switching tabs.
    */

    document.querySelectorAll(
        ".tier-list"
    ).forEach(list => {

        list.classList.add("active");

    });
}


/* ==========================================
   EVENT COUNTDOWN
========================================== */

const eventDate =
    new Date(
        "September 18, 2026 21:00:00"
    ).getTime();


function updateCountdown() {

    const countdown =
        document.getElementById(
            "countdown"
        );

    if (!countdown) return;

    const now =
        Date.now();

    const distance =
        eventDate - now;

    if (distance <= 0) {

        countdown.textContent =
            "EVENT STARTED";

        return;
    }

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

    countdown.textContent =
        `${days}D ${hours}H ${minutes}M ${seconds}S`;
}


/* ==========================================
   EVENT MODAL
========================================== */

function showEvent(type) {

    const modal =
        document.getElementById(
            "eventModal"
        );

    const title =
        document.getElementById(
            "modalTitle"
        );

    const text =
        document.getElementById(
            "modalText"
        );

    if (!modal) return;


    if (type === "pvp") {

        title.textContent =
            "ELYSIUM PVP";

        text.textContent =
            "Enter the arena and prove who deserves the top spot.";

    }

    else if (type === "endwar") {

        title.textContent =
            "END WAR";

        text.textContent =
            "Gear up for the ultimate battle in the End.";

    }

    else if (type === "media") {

        title.textContent =
            "MEDIA EVENT";

        text.textContent =
            "The Elysium community media event has been completed.";

    }


    modal.classList.add("show");
}


/* ==========================================
   CLOSE EVENT MODAL
========================================== */

function closeModal() {

    const modal =
        document.getElementById(
            "eventModal"
        );

    if (!modal) return;

    modal.classList.remove("show");
}


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
   PLAYER COUNT
========================================== */

function updatePlayerCount() {

    const element =
        document.getElementById(
            "playerCount"
        );

    if (!element) return;

    element.textContent =
        "12 / 50";
}


/* ==========================================
   ESC KEY
========================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeModal();
            closePlayerProfile();

        }

    }
);


/* ==========================================
   INITIALIZE
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadPlayers();

        updateCountdown();

        updatePlayerCount();

        setInterval(
            updateCountdown,
            1000
        );

    }
);
