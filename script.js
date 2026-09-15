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
========================================== */

const players = [
    {
        name: "Masumbaccha",
        role: "Founder",
        skin: "judelow",
        about: "I don't need to be the best, I just need to keep improving.",
        gamemode: "Survival"
    },

    {
        name: "Shinchan0n",
        role: "President",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Wixzen",
        role: "Vice-President",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "11k",
        role: "Governor",
        skin: "nerd",
        about: "Speed is specialty hahahah. Ello I'm 11k, 11k is my name. Uh I can pvp alittle but mostly I grind I got like 250 gear sets cuz I grind for like 20 hours daily. And uhh when I'm locked in I'm ht1 most times I'm ht10 ur welcome",
        gamemode: "Nethpot and Diapot"
    },

    {
        name: "Blazebeacon",
        role: "Governor",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Supperior_Hassan",
        role: "Civilian",
        skin: "wemmbu",
        about: "A combat specialist",
        gamemode: "Nethpot and Diapot"
    },

    {
        name: "dogyp0ty44",
        role: "Civilian",
        skin: "dogyp0ty44",
        about: "I can't do anything. 11k invited me idk. I can't fight, I just boss people around.",
        gamemode: "Not specified"
    },

    {
        name: "Lezux",
        role: "Civilian",
        skin: "tai",
        about: "uh what do i type idk",
        gamemode: "Not specified"
    },

    {
        name: "Ahil",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Arabicveled",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Someone",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Ishan",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Mzxwan",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Nivio",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "NotFlint",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "608ms",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Amayy",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Athubroplayz",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "EliteYshh",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Greenery",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "KomAP",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Ghost",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Mepp00",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Rain",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "seish",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Rachitified",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Kat",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Ahha",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Hunt Vantage",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Ily",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Itx Ammar",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    },

    {
        name: "Purplix",
        role: "Civilian",
        skin: "Steve",
        about: "Not specified",
        gamemode: "Not specified"
    }
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

    players.forEach((player, index) => {

        const card =
            document.createElement("div");

        card.className = "player-card";

        card.dataset.name =
            player.name;

        card.onclick = function () {
            showPlayerProfile(index);
        };


        const avatar =
            document.createElement("div");

        avatar.className = "avatar";


        const skin =
            document.createElement("img");

        skin.className = "player-card-skin";

        skin.src =
            `https://mc-heads.net/avatar/${encodeURIComponent(player.skin)}/64`;

        skin.alt =
            `${player.name} Minecraft skin`;

        skin.onerror =
            function () {

                this.src =
                    "https://mc-heads.net/avatar/Steve/64";

            };


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


        avatar.appendChild(skin);

        card.appendChild(avatar);
        card.appendChild(name);
        card.appendChild(rank);

        grid.appendChild(card);

    });
}


/* ==========================================
   PLAYER PROFILE
========================================== */

function showPlayerProfile(index) {

    const player =
        players[index];

    if (!player) {
        return;
    }

    const modal =
        document.getElementById("playerModal");

    const name =
        document.getElementById("playerModalName");

    const about =
        document.getElementById("playerModalAbout");

    const gamemode =
        document.getElementById("playerModalGamemode");

    const skin =
        document.getElementById("playerModalSkin");


    if (!modal) {
        return;
    }


    if (name) {
        name.innerText =
            player.name;
    }


    if (about) {
        about.innerText =
            player.about || "Not specified";
    }


    if (gamemode) {
        gamemode.innerText =
            player.gamemode || "Not specified";
    }


    if (skin) {

        skin.src =
            `https://mc-heads.net/avatar/${encodeURIComponent(player.skin || "Steve")}/128`;

        skin.alt =
            `${player.name} Minecraft skin`;

        skin.onerror =
            function () {

                this.src =
                    "https://mc-heads.net/avatar/Steve/128";

            };

    }


    modal.classList.add("show");
}


/* ==========================================
   CLOSE PLAYER PROFILE
========================================== */

function closePlayerModal() {

    const modal =
        document.getElementById("playerModal");

    if (modal) {

        modal.classList.remove("show");

    }
}


/* ==========================================
   PLAYER MODAL OUTSIDE CLICK
========================================== */

const playerModal =
    document.getElementById("playerModal");

if (playerModal) {

    playerModal.addEventListener(
        "click",
        function(event) {

            if (event.target === this) {

                closePlayerModal();

            }

        }
    );
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
            closePlayerModal();

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


/* ==========================================
   MCTIERS-STYLE PVP TIER LIST
========================================== */

const mcTierPlayers = [
    {
        name: "Masumbaccha",
        region: "NA",
        points: 450,
        title: "Combat Grandmaster",
        tiers: {
            overall: ["HT1", "HT1", "HT1", "HT1", "HT1", "HT1", "LT1", "LT1"],
            ltms: ["HT1", "HT1", "HT2", "HT1", "HT1", "HT2", "LT1", "LT1"],
            vanilla: ["HT1"],
            uhc: ["HT1"],
            pot: ["HT1"],
            netherop: ["HT1"],
            smp: ["LT1"],
            sword: ["HT1"],
            axe: ["LT1"],
            mace: ["HT1"]
        }
    },

    {
        name: "Shinchan0n",
        region: "NA",
        points: 330,
        title: "Combat Master",
        tiers: {
            overall: ["HT3", "HT1", "HT1", "HT1", "HT1", "LT2", "LT2", "LT2"],
            ltms: ["HT2", "HT1", "HT2", "HT1", "HT1", "LT2", "LT2", "LT2"],
            vanilla: ["HT1"],
            uhc: ["HT2"],
            pot: ["HT1"],
            netherop: ["HT1"],
            smp: ["LT2"],
            sword: ["HT1"],
            axe: ["LT2"],
            mace: ["HT2"]
        }
    },

    {
        name: "Wixzen",
        region: "EU",
        points: 326,
        title: "Combat Master",
        tiers: {
            overall: ["LT1", "LT3", "HT1", "HT1", "LT1", "LT1", "LT1", "LT2"],
            ltms: ["LT1", "LT2", "HT1", "HT1", "LT1", "LT1", "LT2", "LT2"],
            vanilla: ["HT1"],
            uhc: ["LT1"],
            pot: ["LT1"],
            netherop: ["HT1"],
            smp: ["LT1"],
            sword: ["LT1"],
            axe: ["LT1"],
            mace: ["LT2"]
        }
    },

    {
        name: "11k",
        region: "NA",
        points: 290,
        title: "Combat Master",
        tiers: {
            overall: ["LT3", "LT3", "HT1", "HT1", "HT2", "LT2", "LT2", "LT2"],
            ltms: ["LT3", "LT2", "HT1", "HT1", "HT2", "LT2", "LT2", "LT2"],
            vanilla: ["HT1"],
            uhc: ["HT2"],
            pot: ["HT2"],
            netherop: ["HT1"],
            smp: ["LT2"],
            sword: ["HT1"],
            axe: ["LT2"],
            mace: ["LT2"]
        }
    },

    {
        name: "Blazebeacon",
        region: "EU",
        points: 260,
        title: "Combat Master",
        tiers: {
            overall: ["LT3", "HT4", "HT1", "HT1", "HT1", "HT2", "LT2", "LT2"],
            ltms: ["LT3", "HT3", "HT1", "HT1", "HT1", "HT2", "LT2", "LT2"],
            vanilla: ["HT1"],
            uhc: ["HT2"],
            pot: ["HT1"],
            netherop: ["HT1"],
            smp: ["LT2"],
            sword: ["HT1"],
            axe: ["LT2"],
            mace: ["LT2"]
        }
    }
];


const mcTierModes = [
    ["netherop", "◉"],
    ["vanilla", "⬡"],
    ["mace", "⚒"],
    ["smp", "◈"],
    ["sword", "⚔"],
    ["pot", "⚗"],
    ["uhc", "♥"],
    ["axe", "◈"]
];


function mcTierClass(tier) {

    return tier
        .toLowerCase()
        .replace("1", "1")
        .replace("2", "2")
        .replace("3", "3")
        .replace("4", "4");

}


function renderMCTiers(category = "overall") {

    const container =
        document.getElementById("mcTierRows");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    mcTierPlayers.forEach((player, index) => {

        const row =
            document.createElement("div");

        row.className =
            "mc-tier-row";


        const rank =
            document.createElement("div");

        rank.className =
            "mc-tier-number";

        rank.innerText =
            `${index + 1}.`;


        const playerBox =
            document.createElement("div");

        playerBox.className =
            "mc-tier-player";


        const head =
            document.createElement("img");

        head.className =
            "mc-tier-head";

        head.src =
            `https://mc-heads.net/avatar/${encodeURIComponent(player.name)}/64`;

        head.alt =
            `${player.name} Minecraft head`;

        head.onerror =
            function () {
                this.style.display = "none";
            };


        const playerText =
            document.createElement("div");


        const name =
            document.createElement("strong");

        name.innerText =
            player.name;


        const title =
            document.createElement("span");

        title.innerText =
            `⚔ ${player.title} (${player.points} points)`;


        playerText.appendChild(name);
        playerText.appendChild(title);

        playerBox.appendChild(head);
        playerBox.appendChild(playerText);


        const region =
            document.createElement("div");

        region.className =
            `mc-tier-region ${player.region.toLowerCase()}`;

        region.innerText =
            player.region;


        const tiersBox =
            document.createElement("div");

        tiersBox.className =
            "mc-tier-badges";


        if (category === "overall") {

            player.tiers.overall.forEach(
                (tier, tierIndex) => {

                    const badgeBox =
                        document.createElement("div");

                    badgeBox.className =
                        "mc-tier-badge-box";


                    const icon =
                        document.createElement("span");

                    icon.className =
                        "mc-tier-mode-icon";

                    icon.innerText =
                        mcTierModes[tierIndex][1];


                    const badge =
                        document.createElement("span");

                    badge.className =
                        `mc-tier-badge ${mcTierClass(tier)}`;

                    badge.innerText =
                        tier;


                    badgeBox.appendChild(icon);
                    badgeBox.appendChild(badge);

                    tiersBox.appendChild(badgeBox);

                }
            );

        } else {

            const tier =
                player.tiers[category][0];


            const badgeBox =
                document.createElement("div");

            badgeBox.className =
                "mc-tier-badge-box single";


            const icon =
                document.createElement("span");

            icon.className =
                "mc-tier-mode-icon";

            icon.innerText =
                mcTierModes.find(
                    mode => mode[0] === category
                )?.[1] || "◆";


            const badge =
                document.createElement("span");

            badge.className =
                `mc-tier-badge ${mcTierClass(tier)}`;

            badge.innerText =
                tier;


            badgeBox.appendChild(icon);
            badgeBox.appendChild(badge);

            tiersBox.appendChild(badgeBox);

        }


        row.appendChild(rank);
        row.appendChild(playerBox);
        row.appendChild(region);
        row.appendChild(tiersBox);

        container.appendChild(row);
    });

}


function showTierCategory(category, button) {

    document
        .querySelectorAll(".mc-tier-tab")
        .forEach(tab => {

            tab.classList.remove("active");

        });


    if (button) {

        button.classList.add("active");

    }


    renderMCTiers(category);

}


renderMCTiers();
