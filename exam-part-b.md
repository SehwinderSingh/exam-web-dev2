# Exam: Part B: Project Course (1 hour, 200 points)

## Overview

- We will continue building upon the code wrote in Part A. Even if you had issues in Part A, you can complete Part B independently e.g. testing uses endpoints that **already work** in the starter code.
- Same rules as Part A i.e. no AI, no internet search. Any offline material is allowed.
- Write your discussion answers in the `answers.md` file.
- **Make a git commit after each question** with a meaningful commit message.

---

## Section 4: API Testing (75 points)

A test file scaffold is provided at `backend/tests/workout_api.test.js`. It already has the imports, test data, `beforeEach`, and `afterAll` set up for you.

### Q10: Test GET /api/workouts (35 pts)

Write a test inside the `describe("Workout API")` block that verifies:

- The response status code is **200**
- The response `Content-Type` contains `application/json`
- The response body is an array with the correct number of workouts (matching `initialWorkouts`)

**Commit your changes** with message: `Q10: Test GET /api/workouts`

### Q11: Test POST /api/users/signup (40 pts)

Write a test inside the `describe("Workout API")` block that:

- Creates a valid new user object with all required fields (`name`, `username`, `password`, `phone_number`, `address`)
- Sends a POST request to `/api/users/signup`
- Verifies the response status code is **201**
- Verifies the response body contains the correct `username`
- Verifies the response body contains a `token`

**Commit your changes** with message: `Q11: Test POST /api/users/signup`

---

## Section 5: Configuration (30 points)

### Q12: Change Backend Port (30 pts)

The team has decided to change the backend port from **4000** to **5003**.

- (a) Update the **default port** in the appropriate backend configuration file (15 pts)
- (b) Update the **Vite proxy** target in the frontend so it points to the new backend port (15 pts)

> In your `answers.md`, briefly list which files you changed and why.

**Commit your changes** with message: `Q12: Change backend port to 5003`

---

## Section 6: Frontend (70 points)

### Q13: Login Page (35 pts)

Implement the `LoginPage` component in `frontend/src/pages/LoginPage.jsx`.

A `useLogin` hook is provided in `hooks/useLogin.jsx`. Study it before starting.

Requirements:
- Import and use the `useLogin` hook
- Create state for `username` and `password`
- On form submit, call `login(username, password)` from the hook
- Display the error from the hook if present (red text)
- Disable the submit button while `isLoading` is true
- Navigate to `"/"` on successful login
- The form should have:
  - Username text input (required)
  - Password input (required)
  - Submit button with text "Login"

**Commit your changes** with message: `Q13: Implement LoginPage`


### Q14: Signup Page With useAuth Hook (35 pts)

A `useAuth` hook is provided in `hooks/useAuth.jsx`. Rewrite the `SignupPage` component in `frontend/src/pages/SignupPage.jsx` so that it uses this `useAuth` hook.

**Commit your changes** with the message: `Q14: Signup Page With useAuth Hook`

---

## Section 7: Error Handling (25 points)

### Q15: Add Error Handling to the Controllers (25 pts)

In `backend/workoutControllers.js`, the **GET `/api/workouts`** and **POST `/api/workouts`** controllers are already implemented and functional.

Modify both controllers to handle errors using `try/catch` blocks.

* Add a `try/catch` block to the `getAllWorkouts` controller.
* Add a `try/catch` block to the `createWorkout` controller.
* Keep the existing successful responses unchanged.
* If an error occurs, return an appropriate HTTP status code and a JSON error message.

**Grading:**

* `try/catch` correctly added to `getAllWorkouts`: **8 pts**
* `try/catch` correctly added to `createWorkout`: **8 pts**
* Appropriate error response/status code: **5 pts**
* Successful responses remain correct: **4 pts**

**Total: 25 points**

---

## Summary

| Question | Topic | Points |
|----------|-------|--------|
| Q10 | Test GET /api/workouts | 35 |
| Q11 | Test POST /api/users/signup | 40 |
| Q12 | Change backend port | 30 |
| Q13 | Login Page | 35 |
| Q14 | Signup Page With useAuth Hook | 35 |
| Q15 | Error Handling | 25 |
| **Total** | | **200** |

---

## Grand Total (Part A + Part B)

| Part | Duration | Points |
|------|----------|--------|
| Part A: Web Development | 2 hours | 270 |
| Part B: Testing, Config & Discussion | 1 hour | 200 |
| **Total** | **3 hours** | **470** |
