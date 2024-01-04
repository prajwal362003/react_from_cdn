let heading = document.createElement("h1");
heading.innerHTML = "Hello Everyone using DOM Manipulation in JS";
const root = document.getElementById("root");
root.appendChild(heading);

// Heading1 , Heading2 , Heading3
// Define the title variable before using it in heading1, heading2, and heading3
const title = React.createElement("div", { id: "title" });

const heading1 = React.createElement(
  "h1",
  {
    style: { color: "orange" },
    id: "title",
  },
  "Heading-1"
);

const heading2 = React.createElement(
  "h2",
  {
    style: { color: "wheat" },
    id: "title",
  },
  "Heading-2"
);

const heading3 = React.createElement(
  "h3",
  {
    style: { color: "green" }, // Use a string with the color value
    id: "title",
  },
  "Heading-3"
);

// Use the title variable in the correct order
const titleWithHeadings = React.createElement("div", { id: "title" }, [
  heading1,
  heading2,
  heading3,
]);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
// Passing the React Element inside the root
rootElement.render(titleWithHeadings);
