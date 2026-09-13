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
   NAVIGATION
========================================== */

function showSection(sectionName) {

    const sections =
        document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    const selected =
        document.getElementById(sectionName);

    if (selected) {
        selected.classList.add("active");
    }

    const navButtons =
        document.querySelectorAll("nav button");

    navButtons.forEach(button => {
        button.classList.remove("active");

        if (
            button.innerText.toLowerCase() ===
            sectionName
        ) {
            button.classList.add("active");
        }
    });

    document
        .getElementById("navMenu")
        .classList.remove("open");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==========================================
   MOBILE MENU
========================================== */

function toggleMenu() {

    document
        .getElementById("navMenu")
        .classList.toggle("open");
}


/* ==========================================
   SERVER IP
========================================== */

function copyIP() {

    if (
        SERVER_IP ===
        "YOUR-SERVER-IP-HERE"
    ) {

        document.getElementById("copyMessage")
            .innerText =
            "Set your server IP in script.js first.";

        return;
    }

    navigator.clipboard
        .writeText(SERVER_IP)
        .then(() => {

            document.getElementById("copyMessage")
                .innerText =
                "✓ Server IP copied: " + SERVER_IP;

            setTimeout(() => {

                document.getElementById("copyMessage")
                    .innerText = "";

            }, 3000);

        })
        .catch(() => {

            alert(
                "Server IP: " + SERVER_IP
            );

        });
}


/* ==========================================
   RULE ACCORDION
========================================== */

function toggleRule(button) {

    const rule =
        button.parentElement;

    const currentlyOpen =
        rule.classList.contains("open");


    document
        .querySelectorAll(".rule")
        .forEach(item => {

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
   PLAYER SEARCH
========================================== */

function searchPlayers() {

    const input =
        document
            .getElementById("playerSearch")
            .value
            .toLowerCase()
            .trim();

    const players =
        document.querySelectorAll(".player-card");

    let found = false;


    players.forEach(player => {

        const name =
            player
                .dataset
                .name
                .toLowerCase();

        if (name.includes(input)) {

            player.style.display = "";
            found = true;

        } else {

            player.style.display = "none";

        }
    });


    document
        .getElementById("noPlayers")
        .style.display =
        found ? "none" : "block";
}


/* ==========================================
   EVENT COUNTDOWN
========================================== */


/*
    CHANGE THIS DATE TO YOUR EVENT DATE.

    Example:

    September 18, 2026 21:00:00

    = 18 September 2026
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


    if (event === "pvp") {

        title.innerText =
            "ELYSIUM PVP";

        text.innerText =
            "Enter the Elysium PvP arena, " +
            "fight your opponents and prove " +
            "your worth. More event information " +
            "will be announced on Discord.";

    }


    else if (event === "endwar") {

        title.innerText =
            "END WAR";

        text.innerText =
            "Prepare your gear and get ready " +
            "for the ultimate battle in the End. " +
            "Follow Discord announcements for " +
            "the final event information.";

    }


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


function closeModal() {

    document
        .getElementById("eventModal")
        .classList.remove("show");
}


/* ==========================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================== */

document
    .getElementById("eventModal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target ===
                this
            ) {
                closeModal();
            }

        }
    );


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

document
    .getElementById("discordLink")
    .href = DISCORD_LINK;


/* ==========================================
   DEMO PLAYER COUNT
========================================== */

/*
   This is ONLY demonstration data.

   It does NOT connect to Minecraft.

   Remove this section when you have
   a real server API.
*/

let demoPlayers = 12;

setInterval(() => {

    const randomChange =
        Math.floor(
            Math.random() * 3
        ) - 1;

    demoPlayers +=
        randomChange;


    if (demoPlayers < 0) {
        demoPlayers = 0;
    }


    if (demoPlayers > 50) {
        demoPlayers = 50;
    }


    document
        .getElementById("playerCount")
        .innerText =
        `${demoPlayers} / 50`;

}, 5000);


/* ==========================================
   START HOME PAGE
========================================== */

showSection("home");
