let aqi;
if (Math.random() < 0.95){
    aqi = Math.floor(Math.random() * 301); // Range: 0 - 300
} else {
    aqi = Math.floor(Math.random() * (1081 - 301 + 1)) + 301; // Range: 301 - 1081
}

console.log("| Air Quality Index |");
console.log(" > Value: " + aqi)

if (aqi <= 50) {
    console.log(" > Level: Good")
} else if (aqi <= 100) {
    console.log(" > Level: Moderate")
} else if (aqi <= 150) {
    console.log(" > Level: Unhealthy (Sensitive Groups)")
} else if (aqi <= 200) {
    console.log(" > Level: Unhealthy")
} else if (aqi <= 300) {
    console.log(" > Level: Very Unhealthy")
} else {
    console.log(" > Level: Hazardous")
}
