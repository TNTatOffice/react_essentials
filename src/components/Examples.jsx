import { useState } from "react";
import { EXAMPLES } from "../data";
import Section from "./Section";
import TabButton from "./TabButton";

export default function Examples() {
  // Calling hook function with a const array that accepts only 2 items
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'

    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  return (
    // Using proxy (forwarded) props to pass data to the Section component. Added ...props to Section
    <Section title="Examples" id="examples">
      <menu>
        {/* Adding a function to the call prevents the call from running immediately.  */}
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu>
      {/* Conditional content with ternary operator. If nothing is selected, show please select topic. Else, show chosen topic */}
      {!selectedTopic ? (
        <p>Please select a topic</p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </div>
      )}
    </Section>
  );
}
