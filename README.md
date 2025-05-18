# 🌫️ AQI Simulator
![status](https://img.shields.io/badge/status-Beta-orange)

Written in [Codedex, The Origins III: JavaScript](https://www.codedex.io/javascript) (Exercise 16),
it simulates AQI (Air Quality Index) readings that deviates from the instructions. As instead of
inputting a random AQI value from any area to determine their level of concern, I made use of
**Math.floor** and **Math.random** to generate values from **0 - 300** and a slim chance of **5%**
for those values to exceed **300**.

## 🧪 How It Works

- **95% chance**: AQI falls between **0–300** // Regular AQI Range.
- **5% chance**: Rare spike between **301–1081** // Abnormal AQI Range (1081 is the highest recorded AQI in history).

AQI levels are classified into categories based on Exercise 16 instructions:

    If aqi is between 0 and 50, print "Good".
    Else if aqi is between 51 and 100, print "Moderate".
    Else if aqi is between 101 and 150, print "Unhealthy (Sensitive Groups)".
    Else if aqi is between 151 and 200, print "Unhealthy".
    Else if aqi is between 201 and 300, print "Very Unhealthy".
    Else, print "Hazardous".

## 📊 Output Example

| Air Quality Index |

    Value: 178
    Level: Unhealthy
