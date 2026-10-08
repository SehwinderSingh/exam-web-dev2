const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const Workout = require("../models/workoutModel");
const User = require("../models/userModel");

const api = supertest("../app");

const initialWorkouts = [
  {
    workoutTitle: "Morning HIIT",
    description: "High intensity interval training session",
    location: { city: "Helsinki", state: "Uusimaa" },
    sessionPrice: 25,
    fitnessLevel: "Intermediate",
    requiredEquipment: "None",
  },
  {
    workoutTitle: "Strength Basics",
    description: "Fundamental strength training",
    location: { city: "Tampere", state: "Pirkanmaa" },
    sessionPrice: 30,
    fitnessLevel: "Beginner",
    requiredEquipment: "Dumbbells",
  },
];

beforeEach(async () => {
  await Workout.deleteMany({});
  await User.deleteMany({});
  await Workout.insertMany(initialWorkouts);
});

describe("Workout API", () => {
  test("should return all workouts as json", async () => {
    const response = await api
      .get("/api/workouts")
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(response.body).toHaveLength(initialWorkouts.length);
  });

  test("should signup a new user and should return a token", async () =>{
    const newUser = {
      name: "Test User",
      username: "TestUser",
      password: "savy1234#",
      phone_number: "0123456789",
      address: "Testlantie, Vanta"
    };

    const response = await api
      .get("/api/users/signup")
      .send(newUser)
      .expect(200);

    expect(response.body.username).toBe(newUser.username);
    expect(response.body.token).toBeDefined();
  });
  
  // TODO (Q11): Write a test for POST /api/users/signup
  // - Create a valid new user object with all required fields (name, username, password, phone_number, address)
  // - Send a POST request to /api/users/signup
  // - Verify the response status code is 201
  // - Verify the response body contains the correct username
  // - Verify the response body contains a token
});

afterAll(async () => {
  await mongoose.connection.close();
});
