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

Alpine.store("features", [
  {
    title: "Personalization",
    description:
      "We create a workout program that is designed specifically for your body type, fitness level, and goals. No more wasting time on generic routines that don't deliver results.",
    image: "/public/yoga-woman.jpg",
  },
  {
    title: "Expert Guidance",
    description:
      "Our team of experienced trainers and fitness experts will be with you throughout your journey. They'll provide continuous support, motivation, and expertise to ensure your success.",
    image: "/public/trainer-and-student.jpg",
  },
  {
    title: "Results-Driven",
    description:
      "Our goal is your success. Whether you want to shed pounds, build muscle, or simply improve your overall health, we'll help you achieve the results you've always dreamed of.",
    image: "/public/man-dumbbells.jpg",
  },
]);

Alpine.store("workouts", [
  {
    name: "Workout at Home",
    videos: 18,
  },
  {
    name: "Stay Strong and Fit",
    videos: 48,
  },
  {
    name: "High Intensity",
    videos: 25,
  },
  {
    name: "Simple Workout",
    videos: 40,
  },
  {
    name: "Burn Calories",
    videos: 30,
  },
]);

Alpine.start();
