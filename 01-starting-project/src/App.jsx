import { useState } from "react";
import CoreConcepts from "./Components/CoreConcepts/CoreConcepts.jsx";
import Header from "./Components/Header/Header.jsx";
import TabButton from "./Components/TabButton/TabButton.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const handleClick = (selectedTopic) => {
    setSelectedTopic(selectedTopic);
  };
  let tabContent = <p>Please Select The Topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcepts
                key={concept.title}
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <menu>
            {CORE_CONCEPTS.map((element) => (
              <TabButton
                key={element.title}
                isSelected={selectedTopic === element.title}
                onSelect={() => handleClick(element.title)}>
                {element.title}
              </TabButton>
            ))}
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
