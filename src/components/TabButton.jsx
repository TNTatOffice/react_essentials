// Children prop takes the content between the component called text (Components in App.jsx)
export default function TabButton({ children, onSelect, isSelected }) {
  // create what happens when the button is clicked
  return (
    <li>
      {/* Adding a class name to dynamically style the active button with a prop */}
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}
