/* ==========================================
   ELYSIUM SMP WEBSITE
   MAIN JAVASCRIPT
========================================== */


/* ==========================================
   EDIT THESE
========================================== */

const SERVER_IP = "elysiumsmp.playwithbao.com";

const DISCORD_LINK = "https://discord.gg/EsDQqvrx7";


/* ==========================================
   ELYSIUM PLAYERS
   EDIT THIS LIST WHENEVER YOU WANT
========================================== */

const players = [
    { name: "Masumbaccha", role: "Founder" },
    { name: "Shinchan0n", role: "President" },
    { name: "Wixzen", role: "Vice-President" },

    { name: "11k", role: "Governor" },
    { name: "Blazebeacon", role: "Governor" },

    { name: "Ahil", role: "Civilian" },
    { name: "Arabicveled", role: "Civilian" },
    { name: "Someone", role: "Civilian" },
    { name: "Ishan", role: "Civilian" },
    { name: "Mzxwan", role: "Civilian" },
    { name: "Nivio", role: "Civilian" },
    { name: "NotFlint", role: "Civilian" },
    { name: "608ms", role: "Civilian" },
    { name: "Amayy", role: "Civilian" },
    { name: "Athubroplayz", role: "Civilian" },
    { name: "EliteYshh", role: "Civilian" },
    { name: "Greenery", role: "Civilian" },
    { name: "KomAP", role: "Civilian" },
    { name: "Ghost", role: "Civilian" },
    { name: "Mepp00", role: "Civilian" },
    { name: "Rain", role: "Civilian" },
    { name: "seish", role: "Civilian" },
    { name: "Rachitified", role: "Civilian" },
    { name: "Kat", role: "Civilian" },
    { name: "Ahha", role: "Civilian" },
    { name: "Hunt Vantage", role: "Civilian" },
    { name: "Ily", role: "Civilian" },
    { name: "Itx Ammar", role: "Civilian" },
    { name: "Purplix", role: "Civilian" }
];


/* ==========================================
   NAVIGATION
========================================== */

function showSection(sectionName) {

    const sections = document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    const selected = document.getElementById(sectionName);

    if (selected) {
        selected.classList.add("active");
    }

    const navButtons = document.querySelectorAll("nav button");

    navButtons.forEach(button => {

        button.classList.remove("active");

        if (
            button.innerText
                .toLowerCase()
                .trim() === sectionName.toLowerCase()
        ) {
            button.classList.add("active");
        }

    });

    const navMenu = document.getElementById("navMenu");

    if (navMenu) {
        navMenu.classList.remove("open");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==========================================
   MOBILE MENU
========================================== */

function toggleMenu() {

    const navMenu = document.getElementById("navMenu");

    if (navMenu) {
        navMenu.classList.toggle("open");
    }
}


/* ==========================================
   SERVER IP
========================================== */

function copyIP() {

    const message = document.getElementById("copyMessage");

    if (SERVER_IP === "YOUR-SERVER-IP-HERE") {

        if (message) {
            message.innerText =
                "Set your server IP in script.js first.";
        }

        return;
    }

    navigator.clipboard
        .writeText(SERVER_IP)
        .then(() => {

            if (message) {

                message.innerText =
                    "✓ Server IP copied: " + SERVER_IP;

                setTimeout(() => {

                    message.innerText = "";

                }, 3000);
            }

        })
        .catch(() => {

            alert("Server IP: " + SERVER_IP);

        });
}


/* ==========================================
   RULE ACCORDION
========================================== */

function toggleRule(button) {

    const rule = button.parentElement;

    const currentlyOpen =
        rule.classList.contains("open");

    document.querySelectorAll(".rule").forEach(item => {

        item.classList.remove("open");

        const symbol =
            item.querySelector("b");

        if (symbol) {
            symbol.innerText = "+";
        }

    });

    if (!currentlyOpen) {

        rule.classList.add("open");

        const symbol =
            rule.querySelector("b");

        if (symbol) {
            symbol.innerText = "−";
        }

    }
}


/* ==========================================
   CREATE PLAYER CARDS
========================================== */

function loadPlayers() {

    const grid =
        document.getElementById("playersGrid");

    if (!grid) {
        return;
    }

    grid.innerHTML = "";

    players.forEach(player => {

        const card =
            document.createElement("div");

        card.className = "player-card";

        card.dataset.name =
            player.name;

        const avatar =
            document.createElement("div");

        avatar.className = "avatar";

        avatar.innerText =
            player.name.charAt(0).toUpperCase();

        const name =
            document.createElement("h3");

        name.innerText =
            player.name;

        const rank =
            document.createElement("span");

        rank.className =
            "rank " +
            player.role
                .toLowerCase()
                .replace(/\s+/g, "-");

        rank.innerText =
            player.role.toUpperCase();

        card.appendChild(avatar);
        card.appendChild(name);
        card.appendChild(rank);

        grid.appendChild(card);

    });
}


/* ==========================================
   PLAYER SEARCH
========================================== */

function searchPlayers() {

    const searchBox =
        document.getElementById("playerSearch");

    const noPlayers =
        document.getElementById("noPlayers");

    if (!searchBox) {
        return;
    }

    const input =
        searchBox.value
            .toLowerCase()
            .trim();

    const playerCards =
        document.querySelectorAll(".player-card");

    let found = false;

    playerCards.forEach(player => {

        const name =
            player.dataset.name
                .toLowerCase();

        if (name.includes(input)) {

            player.style.display = "";

            found = true;

        } else {

            player.style.display = "none";

        }

    });

    if (noPlayers) {

        noPlayers.style.display =
            found ? "none" : "block";

    }
}


/* ==========================================
   EVENT COUNTDOWN
========================================== */

/*
   CHANGE THIS DATE WHEN YOUR EVENT DATE
   CHANGES.

   Current:
   18 September 2026
   9:00 PM
*/

const eventDate =
    new Date(
        "September 18, 2026 21:00:00"
    ).getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        eventDate - now;

    const countdown =
        document.getElementById("countdown");

    if (!countdown) {
        return;
    }

    if (difference <= 0) {

        countdown.innerText =
            "EVENT STARTED";

        return;
    }

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (
                difference %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (
                difference %
                (1000 * 60)
            ) /
            1000
        );

    countdown.innerText =
        `${days}D ${hours}H ${minutes}M ${seconds}S`;
}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* ==========================================
   EVENT MODALS
========================================== */

function showEvent(event) {

    const modal =
        document.getElementById("eventModal");

    const title =
        document.getElementById("modalTitle");

    const text =
        document.getElementById("modalText");

    if (!modal || !title || !text) {
        return;
    }


    /* PVP */

    if (event === "pvp") {

        title.innerText =
            "ELYSIUM PVP";

        text.innerText =
            "Enter the Elysium PvP arena, " +
            "fight your opponents and prove " +
            "your worth. More event information " +
            "will be announced on Discord.";
    }


    /* END WAR */

    else if (event === "endwar") {

        title.innerText =
            "END WAR";

        text.innerText =
            "Prepare your gear and get ready " +
            "for the ultimate battle in the End. " +
            "Follow Discord announcements for " +
            "the final event information.";
    }


    /* MEDIA EVENT */

    else if (event === "media") {

        title.innerText =
            "MEDIA EVENT";

        text.innerText =
            "The Elysium Media event has been " +
            "completed. Check the official Discord " +
            "for the winner announcement.";
    }


    modal.classList.add("show");
}


/* ==========================================
   CLOSE MODAL
========================================== */

function closeModal() {

    const modal =
        document.getElementById("eventModal");

    if (modal) {

        modal.classList.remove("show");

    }
}


/* ==========================================
   MODAL OUTSIDE CLICK
========================================== */

const eventModal =
    document.getElementById("eventModal");

if (eventModal) {

    eventModal.addEventListener(
        "click",
        function(event) {

            if (event.target === this) {

                closeModal();

            }

        }
    );
}


/* ==========================================
   ESC KEY CLOSES MODAL
========================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* ==========================================
   DISCORD LINK
========================================== */

const discordLink =
    document.getElementById("discordLink");

if (discordLink) {

    discordLink.href =
        DISCORD_LINK;

}


/* ==========================================
   DEMO PLAYER COUNT
========================================== */

/*
   IMPORTANT:
   This is NOT the 30-player roster.

   This is only the fake ONLINE counter
   shown on the homepage.

   It does NOT connect to Minecraft.
*/

let demoPlayers = 12;


setInterval(() => {

    const randomChange =
        Math.floor(
            Math.random() * 3
        ) - 1;

    demoPlayers += randomChange;


    if (demoPlayers < 0) {
        demoPlayers = 0;
    }


    if (demoPlayers > 50) {
        demoPlayers = 50;
    }


    const playerCount =
        document.getElementById(
            "playerCount"
        );


    if (playerCount) {

        playerCount.innerText =
            `${demoPlayers} / 50`;

    }

}, 5000);


/* ==========================================
   START WEBSITE
========================================== */

loadPlayers();

showSection("home");
