# 🛰️ ISS Tracker

A simple and responsive **ISS Tracker** web application that displays the **real-time location** and orbital information of the **International Space Station (ISS)** using a public API.

---

## 📌 Project Overview

The ISS Tracker fetches live data from the ISS API and displays important information such as latitude, longitude, altitude, velocity, visibility, and more in a clean dashboard.

---

## ✨ Features

- 🌍 Live ISS Location
- 📍 Latitude & Longitude
- 🛰️ Altitude
- ⚡ Velocity
- 👁️ Visibility Status
- 🎯 Footprint
- ☀️ Solar Latitude
- 🌞 Solar Longitude
- 🕒 Live Timestamp
- 📏 Units Information
- 🔄 Real-Time Data Updates
- 📱 Responsive Design
- 🎨 Modern UI

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API / Axios
- ISS API

---

## 🌐 API Used

### Where The ISS At API

```http
GET https://api.wheretheiss.at/v1/satellites/25544
```

---

## 📦 Example Response

```json
{
  "name": "iss",
  "id": 25544,
  "latitude": 28.3811,
  "longitude": 56.4820,
  "altitude": 419.58,
  "velocity": 27576.30,
  "visibility": "daylight",
  "footprint": 4512.40,
  "timestamp": 1754058645,
  "solar_lat": 18.2500,
  "solar_lon": 72.4000,
  "units": "kilometers"
}
```

---

# 📊 Displayed Properties

| Property | Description | Unit |
|----------|-------------|------|
| Latitude | Current Latitude | ° |
| Longitude | Current Longitude | ° |
| Altitude | Height Above Earth | km |
| Velocity | Speed | km/h |
| Visibility | Daylight / Eclipsed | Text |
| Footprint | Visible Area Diameter | km |
| Solar Latitude | Sun Latitude | ° |
| Solar Longitude | Sun Longitude | ° |
| Timestamp | Last Updated Time | Unix Time |
| Units | Measurement System | kilometers |

---

## 📁 Project Structure

```
ISS-Tracker/
│
├── index.html
├── style.css
├── script.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

---

## 🚀 How to Run

1. Clone the repository

```bash
git clone https://github.com/your-username/ISS-Tracker.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

---

## 📸 Dashboard Preview

```
-------------------------------------------------

                🛰️ ISS TRACKER

📍 Latitude          : 28.3811°
🌍 Longitude         : 56.4820°
🛰️ Altitude         : 419.58 km
⚡ Velocity          : 27,576.30 km/h
👁️ Visibility       : Daylight
🎯 Footprint        : 4,512.40 km
☀️ Solar Latitude   : 18.2500°
🌞 Solar Longitude  : 72.4000°
🕒 Timestamp        : 1754058645
📏 Units            : Kilometers

-------------------------------------------------
```

---

## 📱 Responsive Design

- 📱 Mobile
- 📲 Tablet
- 💻 Laptop
- 🖥️ Desktop

---

## 📚 What I Learned

- Working with REST APIs
- Fetch API
- Async/Await
- JSON Data Handling
- DOM Manipulation
- Responsive Web Design
- Error Handling

---

## 🔮 Future Improvements

- 🗺️ Interactive World Map
- 🛰️ Live ISS Orbit Animation
- 📍 Auto Refresh Every 5 Seconds
- 🌍 Country Detection
- 🌙 Dark/Light Mode
- 📊 Charts & Statistics
- 📅 ISS Pass Prediction
- 👨‍🚀 Current Astronauts
- 🌌 NASA APOD Integration

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Suraj Kumar**

- 💼 Full Stack Developer
- 🚀 Passionate about Web Development & Space Technology

⭐ If you like this project, don't forget to **star the repository!**