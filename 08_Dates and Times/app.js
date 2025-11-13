// ===== JavaScript Dates and Times =====

// 1️ Creating Date Objects

// Current date and time
const now = new Date();
console.log("Current Date and Time:", now);

// Create a specific date (Year, Month, Day, Hours, Minutes, Seconds)
// Note: Months are zero-based (0 = January, 11 = December)
const birthday = new Date(2000, 5, 15, 10, 30, 0);
console.log("Birthday:", birthday);

// Create from a string
const fromString = new Date("2025-11-13T14:00:00");
console.log("Date from String:", fromString);


// 2️ Getting Date and Time Components

console.log("Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth()); // 0 = Jan
console.log("Day of Month:", now.getDate());
console.log("Day of Week (0-6):", now.getDay()); // 0 = Sunday
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());


// 3️ Setting Date and Time Components

let meeting = new Date();
meeting.setFullYear(2030);
meeting.setMonth(11); // December
meeting.setDate(25);  // Christmas
meeting.setHours(9, 0, 0); // 09:00:00
console.log("Meeting set to:", meeting);


// 4️ Working with Timestamps

// Get timestamp (milliseconds since Jan 1, 1970)
const timestamp = Date.now();
console.log("Current timestamp (ms):", timestamp);

// Convert timestamp to Date
const fromTimestamp = new Date(timestamp);
console.log("From timestamp:", fromTimestamp);


// 5️ Date Calculations (Difference Between Dates)

const start = new Date("2025-01-01");
const end = new Date("2025-11-13");

// Difference in milliseconds
const diffMs = end - start;

// Convert to days
const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
console.log(`Days between ${start.toDateString()} and ${end.toDateString()}:`, diffDays);


// 6️ Formatting Dates

// Default string
console.log("Default format:", now.toString());

// ISO format (useful for storage)
console.log("ISO format:", now.toISOString());

// Locale format (depends on your region)
console.log("Locale date:", now.toLocaleDateString());
console.log("Locale time:", now.toLocaleTimeString());


// 7️ Useful Example: Display Live Clock

function showClock() {
  const time = new Date();
  const formatted = time.toLocaleTimeString();
  console.log("Current time:", formatted);
}

// Call once
showClock();

// Or update every second
// setInterval(showClock, 1000); // Uncomment to see live time
