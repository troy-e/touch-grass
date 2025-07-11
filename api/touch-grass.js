export default function handler(req, res) {
    const activities = [
    { activity: "Touch some grass. Literally. Touch it.", emoji: "🌱" },
    { activity: "Water a plant, even if it's not yours.", emoji: "🪴" },
    { activity: "Count the rocks in your yard.", emoji: "🪨" },
    { activity: "Wave at a bird. Don’t explain yourself.", emoji: "🐦" },
    { activity: "Sit on a bench and do absolutely nothing.", emoji: "🪑" },
    ];
    const random = activities[Math.floor(Math.random() * activities.length)];
    res.status(200).json(random);
}