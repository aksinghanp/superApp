// Define the 'Chips' component
const Chips = ({ color, id, setCategories, categories }) => {
    const handleClick = () => {
      // Find the index of the current category
      const index = categories.indexOf(id);
      // Remove the category from the array
      categories.splice(index, 1);

      setCategories([...categories]);
    };
    
    return (
      <div style={{ width: "40vw" }}>
        {categories.map((category) => (
          <button
            style={{
              background: color,
              borderRadius: "12px",
              width: "100px",
              color: "white",
              border: "none",
              padding: "6px",
              height: "30px",
              flexShrink: 0,
              margin: "2px 10px",
            }}
            onClick={handleClick}
          >
            {category}
            <span style={{ color: "black", marginLeft: "4px" }}>X</span>
          </button>
        ))}
      </div>
    );
  };
  
  export default Chips;