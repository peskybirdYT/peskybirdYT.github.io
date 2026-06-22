document.addEventListener("DOMContentLoaded", () => {
    const splashes = [
        "Made in America!",
        "An American making an addon about the british?",
        "Made by madmen!",
        "Come meet our fantastic dev. team! (wait I don't have a team!)",
        "It's finally back!",
        "I guess your nagging about the addon worked.",
        "Also expect other addons!",
        "The Daelek Addon",
        "100% better than the original!",
        "Still in BETA!",
        "https://www.youtube.com/channel/UC8UIjk9LXl-OQS49YoKn6fQ",
        "Hello World!",
        "More Dalek colors!",
        "Made by PESKYBIRD2573! (In case you missed it on the title)",
        "I only have original ideas!",
        "0% AI Generated!",
        "Vibe coding is for suckers.",
        "Hey look ma! I made it!",
        "Will Dalek Addon Survival return?",
        "I will force my friends to endure Dalek Addon Survival for your entertainment.",
        "I have roommates who can write music for me now",
        "PESKYBIRD2573 has big plans for the future!",
        "42",
        "So long, and thanks for all the fish!"
    ];

    const subtitle = document.getElementById("subtitle");
    subtitle.textContent = splashes[Math.floor(Math.random() * splashes.length)];
});