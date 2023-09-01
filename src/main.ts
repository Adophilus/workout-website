import './globals.css'
import Alpine from "alpinejs"

Alpine.store("exercises", [
  {
    title: "Treadmill",
    image: "/public/exercise-treadmill.png",
    averageCalories: 250,
    duration: "58:24"
  }
])

Alpine.start()
