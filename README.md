# My React Blog
A blog platform built with React and Vite.

## Setup Instructions
1. Clone the repository
2. Run npm install
3. Run npm run dev
4. Open http://localhost:5173 in your browser

## Project Structure
- **App.jsx**: The main application component that renders the 'Header' component and the main content of the blog.
- **Header.jsx**: Contains the header component with a dark mode toggle and navigation.
- **index.css**: Contains global styling for light and dark modes, as well as responsive design and hover effects.

## Components Structure
- **BlogPost**: Displays an individual blog post with the title, author, content, and meta information.
- **BlogList**: Contains a list of multiple blog posts. It imports and renders `BlogPost` components.
- **Header**: Contains the site's title and navigation links.

## Styling Approach
For styling, I used **CSS Modules** to ensure scoped styles for each component. This avoids any global style conflicts and makes the styles easier to maintain as the project grows. 
- **CSS Modules** were chosen for their encapsulation of styles, meaning each component's styles are limited to that component.
- I also added some custom styles for hover effects, dark mode, and responsive layouts to improve the user experience across devices.


## Screenshot
![Screenshot-2](https://github.com/user-attachments/assets/4ba064ad-be13-4e52-97e6-e7af8bc15d1e)

![Desktop screenshot](https://github.com/user-attachments/assets/2c4986f3-ae6f-4cdf-9596-3d4a5859e066)
_Desktop view of the blog_  

![Responsive screenshot-](https://github.com/user-attachments/assets/e3a157a0-f298-4cf6-82e3-26e0ff32b047)
_Mobile view of the blog_




## What I Learned
1. Learned how to start a React project using Vite, which makes the setup and development faster.
2. I learned how to implement a dark mode toggle using React's `useState and conditionally applying a class to the body and components.
3. Got familiar with basic npm commands like npm install to add dependencies and npm run dev to start the development server.
4. Built a Header component, which taught me how to make and style reusable parts in React.








