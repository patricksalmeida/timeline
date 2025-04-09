import React from "react";
import ReactDOM from "react-dom/client";

import Timeline from "./Components/timeline.js";
import timelineItems from "./timelineItems.js";
import { assignLanes, sortItems } from "./assignLanes.js";

function App() {
  const [itemsInLanes, setItemsInLanes] = React.useState([])

  React.useEffect(() => {
    setItemsInLanes(assignLanes(timelineItems))
  }, [])

  return (
    <div className="pb-12 h-screen">
      <div className="mb-6 p-6 bg-gray-950">
        <h2 className="text-xl font-bold text-gray-50">Good luck with your assignment! {"\u2728"}</h2>
        <h3 className="text-gray-50">{timelineItems.length} timeline items to render</h3>
      </div>

      <Timeline.Root>
        {itemsInLanes.map((laneItems, index) => (
          <Timeline.Lane key={index}>
            {laneItems.map(laneItem => (
              <Timeline.ItemContent
                key={laneItem.id}
                item={laneItem}
                onChange={(currentItem, newItemName) => {
                  let updatedLanes = itemsInLanes.map(lane => {
                    let itemToEdit = lane.find(item => item.id == currentItem.id)

                    if (itemToEdit) {
                      let laneWithoutItem = lane.filter(laneItem => laneItem.id != currentItem.id)
                      let laneUpdated = [...laneWithoutItem, { ...itemToEdit, name: newItemName }]
                      console.log('laneUpdated', laneUpdated)
                      return sortItems(laneUpdated)
                    }

                    return lane
                  })

                  setItemsInLanes(updatedLanes)
                }}
              />
            ))}
          </Timeline.Lane>
        ))}
      </Timeline.Root>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);