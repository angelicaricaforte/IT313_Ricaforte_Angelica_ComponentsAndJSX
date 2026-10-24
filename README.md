# IT313_Ricaforte_Angelica_ComponentsAndJSX
IT313 - Student Roster Card Renderer

Project Description

The Student Roster Card Renderer is a simple mobile application developed using React Native and Expo. It displays student information, including name, course, enrolled units, and full-load status.

Objectives

- To understand React functional components.
- To use JSX to display student information.
- To pass data using props.
- To apply conditional rendering.
- To display multiple students using the map() function.
- To use unique keys for student lists.

Components

StudentCard

The StudentCard component displays each student's name, course, enrolled units, and Full Load label when applicable.

StudentRoster

The StudentRoster component stores the student list, displays the total number of students, and renders each student card. It also includes a button to reverse the roster order.

App

The App component is the main component that displays the StudentRoster.

Technologies Used

- React Native
- JavaScript
- JSX
- Expo

How to Run

1. Open the project in Expo Snack.
2. Add the application code to App.js.
3. Run the application preview.
4. Open the preview using Expo Go or an available emulator.
5. Test the Reverse Roster button.

Key Experiment

The application uses each student's unique ID as the React key. The key can temporarily be changed to the array index to observe what happens when the roster order changes. Restore the unique ID after the experiment.

Conclusion

This project demonstrates how React Native components, JSX, props, conditional rendering, and list rendering can be used to create a simple student roster application.

Author

Name: Angelica Ricaforte

Section: BSIT 3A

Subject: IT313 - Mobile Programming