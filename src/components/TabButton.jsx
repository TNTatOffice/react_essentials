// Children prop takes the content between the component called text (Components in App.jsx)
export default function TabButton({ children, isSelected, ...props }) {
  // create what happens when the button is clicked
  return (
    <li>
      {/* Adding a class name to dynamically style the active button with a prop */}
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
                                                                                           