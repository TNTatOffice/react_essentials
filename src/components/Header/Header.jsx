// Importing Header css file
import './Header.css'
import reactImg from "../../assets/react-core-concepts.png";

// Get dynamic input - define options
const reactDescriptions = ["Fundamental", "Crucial", "Core"];
// Create a function with Math that selects a random index
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    const description = reactDescriptions[genRandomInt(2)];
    // const newText = dynamicText[getRandomDescription(2)];
    return (
      <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {/* Call the array and function with a limit of max options  */}
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }
