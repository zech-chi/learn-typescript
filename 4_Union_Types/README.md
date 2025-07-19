# Unionversity

Welcome to **Unionversity**, a new-wave educational institution where learners join together and combine their knowledge to gain a higher understanding of the world around them. While Unionversity is revolutionizing learning, it has one unique matriculation requirement: all prospective students must write a type-safe program to enroll themselves in their own courses and study groups.

This project is your admissions application. You will build a program that models the Unionversity system, handling enrollment for various types of learning events. The key challenge is to use TypeScript's powerful type system—especially **union types**—to create a flexible yet robust program.

## Project Goal

The primary objective is to develop a type-safe program that can:
1.  Define different types of learning events, such as **Courses** and **Study Groups**.
2.  Create a roster of available events.
3.  Enroll a student in a selection of these events.
4.  Process a list of mixed event types and perform actions based on what type of event it is.
5.  Search and retrieve all events a student is enrolled in.

The name "Unionversity" itself is a hint: you'll rely heavily on **union types** to combine different data structures into a cohesive system.

## Core Concepts Illustrated

This project provides hands-on practice with several key TypeScript concepts:
*   **Union Types:** Combining multiple distinct types into one. For example, a `LearningEvent` could be a `Course | StudyGroup`.
*   **Type Aliases:** Creating custom names for types to improve readability.
*   **Type Narrowing & Guards:** Writing code that can safely distinguish between different types within a union.
*   **Working with Arrays of Mixed Types:** Managing collections where elements don't all have the same shape.
*   **Data Modeling:** Structuring data to represent real-world entities like students, courses, and study sessions.
