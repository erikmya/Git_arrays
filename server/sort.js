const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => b - a);
console.log(numbers);
const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort();
console.log(words);
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: new Date(2024, 1, 1, 12),
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date: new Date(2022, 1, 1, 12),
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date: new Date(2020, 1, 1, 12),
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: new Date(2021, 1, 1, 12),
    },
];

orders.sort((a,b) => a.date - b.date);
console.log(orders);