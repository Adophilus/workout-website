import "./globals.css";
import Alpine from "alpinejs";

Alpine.store("exercises", [
  {
    title: "Treadmill",
    image: "/public/exercise-treadmill.png",
    averageCalories: 250,
    duration: "58:24",
  },
  {
    title: "Stretching",
    image: "/public/exercise-stretching.png",
    averageCalories: 250,
    duration: "58:24",
  },
  {
    title: "Yoga",
    image: "/public/exercise-yoga.png",
    averageCalories: 250,
    duration: "58:24",
  },
  {
    title: "Running",
    image: "/public/exercise-running.png",
    averageCalories: 250,
    duration: "58:24",
  },
  {
    title: "Lifting",
    image: "/public/exercise-lifting.png",
    averageCalories: 250,
    duration: "58:24",
  },
  {
    title: "Push Ups",
    image: "/public/exercise-pushups.png",
    averageCalories: 250,
    duration: "58:24",
  },
]);

Alpine.start();
