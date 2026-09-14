/* =========================================================
   ELYSIUM SMP
   MAIN JAVASCRIPT
========================================================= */


/* ================= CONFIG ================= */

const SERVER_IP = "elysiumsmp.playwithbao.com";

const DISCORD_LINK =
    "https://discord.gg/EsDQqvrx7";


/* ================= PLAYER DATA ================= */

const players = [

    {
        name: "Masumbaccha",
        role: "Founder"
    },

    {
        name: "Shinchan0n",
        role: "President"
    },

    {
        name: "Wixzen",
        role: "Vice-President"
    },

    {
        name: "11k",
        role: "Governor"
    },

    {
        name: "Blazebeacon",
        role: "Governor"
    },

    {
        name: "Ahil",
        role: "Civilian"
    },

    {
        name: "Arabicveled",
        role: "Civilian"
    },

    {
        name: "Someone",
        role: "Civilian"
    },

    {
        name: "Ishan",
        role: "Civilian"
    },

    {
        name: "Mzxwan",
        role: "Civilian"
    },

    {
        name: "Nivio",
        role: "Civilian"
    },

    {
        name: "NotFlint",
        role: "Civilian"
    },

    {
        name: "608ms",
        role: "Civilian"
    },

    {
        name: "Amayy",
        role: "Civilian"
    },

    {
        name: "Athubroplayz",
        role: "Civilian"
    },

    {
        name: "EliteYshh",
        role: "Civilian"
    },

    {
        name: "Greenery",
        role: "Civilian"
    },

    {
        name: "KomAP",
        role: "Civilian"
    },

    {
        name: "Ghost",
        role: "Civilian"
    },

    {
        name: "Mepp00",
        role: "Civilian"
    },

    {
        name: "Rain",
        role: "Civilian"
    },

    {
        name: "seish",
        role: "Civilian"
    },

    {
        name: "Rachitified",
        role: "Civilian"
    },

    {
        name: "Kat",
        role: "Civilian"
    },

    {
        name: "Ahha",
        role: "Civilian"
    },

    {
        name: "Hunt Vantage",
        role: "Civilian"
    },

    {
        name: "Ily",
        role: "Civilian"
    },

    {
        name: "Itx Ammar",
        role: "Civilian"
    },

    {
        name: "Purplix",
        role: "Civilian"
    }

];



/* =========================================================
   SECTION NAVIGATION
========================================================= */

function showSection(sectionName) {

    document
        .querySelectorAll(".section")
        .forEach(section => {

            section.classList.remove("active");

        });


    const selectedSection =
        document.getElementById(sectionName);


    if (selectedSection) {

        selectedSection.classList.add("active");

    }


    document
        .querySelectorAll(".nav-btn")
        .forEach(button => {

            button.classList.remove("active");


            const buttonText =
                button.innerText
                    .toLowerCase()
                    .trim();


            if (buttonText === sectionName) {

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



/* =========================================================
   MOBILE MENU
========================================================= */

function toggleMenu() {

    const menu =
        document.getElementById("navMenu");


    menu.classList.toggle("open");

}



/* =========================================================
   COPY SERVER IP
========================================================= */

function copyIP() {

    const message =
        document.getElementById("copyMessage");


    if (
        !SERVER_IP ||
        SERVER_IP === "YOUR_SERVER_IP"
    ) {

        message.innerText =
            "Set your server IP in script.js first.";

        return;

    }


    navigator.clipboard
        .writeText(SERVER_IP)
        .then(() => {

            message.innerText =
                "✓ Server IP copied: " + SERVER_IP;


            setTimeout(() => {

                message.innerText = "";

            }, 3000);

        })
        .catch(() => {

            alert(
                "Server IP: " + SERVER_IP
            );

        });

}



/* =========================================================
   RULE ACCORDION
========================================================= */

function toggleRule(button) {

    const currentRule =
        button.parentElement;


    document
        .querySelectorAll(".rule")
        .forEach(rule => {

            if (rule !== currentRule) {

                rule.classList.remove("open");

                const symbol =
                    rule.querySelector("b");

                if (symbol) {

                    symbol.innerText = "+";

                }

            }

        });


    currentRule.classList.toggle("open");


    const symbol =
        button.querySelector("b");


    if (
        currentRule.classList.contains("open")
    ) {

        symbol.innerText = "−";

    } else {

        symbol.innerText = "+";

    }

}



/* =========================================================
   LOAD PLAYERS
========================================================= */

function loadPlayers() {

    const grid =
        document.getElementById("playersGrid");


    if (!grid) return;


    grid.innerHTML = "";


    players.forEach(player => {

        const card =
            document.createElement("div");


        card.className =
            "player-card";


        card.dataset.name =
            player.name.toLowerCase();


        const avatar =
            document.createElement("div");


        avatar.className =
            "avatar";


        avatar.innerText =
            player.name.charAt(0).toUpperCase();


        const name =
            document.createElement("h3");


        name.innerText =
            player.name;


        const rank =
            document.createElement("p");


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



/* =========================================================
   PLAYER SEARCH
========================================================= */

function searchPlayers() {

    const input =
        document.getElementById("playerSearch");


    const query =
        input.value
            .toLowerCase()
            .trim();


    const cards =
        document.querySelectorAll(".player-card");


    const noPlayers =
        document.getElementById("noPlayers");


    let found = 0;


    cards.forEach(card => {

        const name =
            card.dataset.name;


        if (
            name.includes(query)
        ) {

            card.style.display = "";

            found++;

        } else {

            card.style.display = "none";

        }

    });


    noPlayers.style.display =
        found === 0
            ? "block"
            : "none";

}



/* =========================================================
   PVP TIER LIST
========================================================= */

function changeTier(category, button) {

    document
        .querySelectorAll(".tier-tab")
        .forEach(tab => {

            tab.classList.remove("active");

        });


    button.classList.add("active");


    console.log(
        "Selected PvP category:",
        category
    );

}



/* =========================================================
   EVENT COUNTDOWN
========================================================= */

const eventDate =
    new Date(
        "September 18, 2026 21:00:00"
    ).getTime();


function updateCountdown() {

    const countdown =
        document.getElementById("countdown");


    if (!countdown) return;


    const now =
        new Date().getTime();


    const difference =
        eventDate - now;


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



/* =========================================================
   EVENT MODALS
========================================================= */

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
            "Enter the arena, fight your opponents and prove that you deserve your place on the Elysium PvP Tier List. More information will be announced on Discord.";

    }


    else if (event === "endwar") {

        title.innerText =
            "END WAR";


        text.innerText =
            "Gear up for the ultimate battle in the End. Prepare your best equipment and get ready for war. Final information will be posted on Discord.";

    }


    else if (event === "media") {

        title.innerText =
            "MEDIA EVENT";


        text.innerText =
            "The Elysium Media Event has been completed. Check the Discord server for the final results and winner.";

    }


    modal.classList.add("show");

}



/* =========================================================
   CLOSE MODAL
========================================================= */

function closeModal() {

    document
        .getElementById("eventModal")
        .classList.remove("show");

}



/* =========================================================
   CLOSE MODAL WHEN CLICKING OUTSIDE
========================================================= */

document
    .getElementById("eventModal")
    .addEventListener(
        "click",
        function(event) {

            if (
                event.target === this
            ) {

                closeModal();

            }

        }
    );



/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);



/* =========================================================
   DISCORD LINK
========================================================= */

const discordLink =
    document.getElementById("discordLink");


if (discordLink) {

    discordLink.href =
        DISCORD_LINK;

}



/* =========================================================
   DEMO ONLINE PLAYER COUNT
========================================================= */

/*
   This is currently a visual/demo counter.
   It does NOT connect to the Minecraft server.
*/

let demoPlayers = 12;


function updateDemoPlayers() {

    const change =
        Math.floor(
            Math.random() * 3
        ) - 1;


    demoPlayers += change;


    if (demoPlayers < 0) {

        demoPlayers = 0;

    }


    if (demoPlayers > 50) {

        demoPlayers = 50;

    }


    const playerCount =
        document.getElementById("playerCount");


    if (playerCount) {

        playerCount.innerText =
            `${demoPlayers} / 50`;

    }

}


setInterval(
    updateDemoPlayers,
    5000
);



/* =========================================================
   INITIALIZE
========================================================= */

loadPlayers();

showSection("home");
