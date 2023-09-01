import "./globals.css";
import Alpine from "alpinejs";

Alpine.store("exercises", [
  {
    title: "Treadmill",
    image: "./exercise-treadmill.png",
    averageCalories: 250,
    duration: "21:18",
    link:
      "https://www.youtube.com/watch?v=tBNqEwcvYjU&pp=ygUSdHJlYWRtaWxsIGV4ZXJjaXNl",
  },
  {
    title: "Stretching",
    image: "./exercise-stretching.png",
    averageCalories: 250,
    duration: "15:32",
    link:
      "https://www.youtube.com/watch?v=7_Gmj7awnWY&pp=ygUTc3RyZXRjaGluZyBleGVyY2lzZQ%3D%3D",
  },
  {
    title: "Yoga",
    image: "./exercise-yoga.png",
    averageCalories: 250,
    duration: "25:37",
    link:
      "https://www.youtube.com/watch?v=Eml2xnoLpYE&pp=ygUNeW9nYSBleGVyY2lzZQ%3D%3D",
  },
  {
    title: "Running",
    image: "./exercise-running.png",
    averageCalories: 250,
    duration: "29:45",
    link:
      "https://www.youtube.com/watch?v=b7G4lkryqVM&pp=ygUQcnVubmluZyBleGVyY2lzZQ%3D%3D",
  },
  {
    title: "Lifting",
    image: "./exercise-lifting.png",
    averageCalories: 250,
    duration: "10:26",
    link:
      "https://www.youtube.com/watch?v=HWO2W5c9m7o&pp=ygUQbGlmdGluZyBleGVyY2lzZQ%3D%3D",
  },
  {
    title: "Push Ups",
    image: "./exercise-pushups.png",
    averageCalories: 250,
    duration: "11:55",
    link:
      "https://www.youtube.com/watch?v=Jf5_PJCFs-g&pp=ygUQcHVzaCB1cCBleGVyY2lzZQ%3D%3D",
  },
]);

Alpine.store("features", [
  {
    title: "Personalization",
    description:
      "We create a workout program that is designed specifically for your body type, fitness level, and goals. No more wasting time on generic routines that don't deliver results.",
    image: "./yoga-woman.jpg",
  },
  {
    title: "Expert Guidance",
    description:
      "Our team of experienced trainers and fitness experts will be with you throughout your journey. They'll provide continuous support, motivation, and expertise to ensure your success.",
    image: "./trainer-and-student.jpg",
  },
  {
    title: "Results-Driven",
    description:
      "Our goal is your success. Whether you want to shed pounds, build muscle, or simply improve your overall health, we'll help you achieve the results you've always dreamed of.",
    image: "./man-dumbbells.jpg",
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
