import { useState, useEffect } from 'react';

const Block = ({ data, idx, setCategories, categories }) => {
  const isSelected = categories.includes(data.id);
  const [selected, setSelected] = useState(isSelected);

  useEffect(() => {
    setSelected(isSelected);
  }, [isSelected]);

  const handleClick = () => {
    const newCategories = isSelected
      ? categories.filter(cat => cat !== data.id)
      : [...categories, data.id];

    setCategories(newCategories);
    setSelected(!selected);
  };

  return (
    <div
      data={data}
      onClick={handleClick}
      key={idx}
      style={{
        background: data.color,
        color: 'white',
        padding: '16px',
        borderRadius: '12px',
        border: `4px solid ${selected ? 'green' : 'white'}`,
        fontFamily: `${selected?'Roboto':'DM Sans'}`,
        fontStyle: 'normal'
      }}
    >
      <p style={{ marginBottom: '4px', fontSize: '18px' }}>{data.id}</p>
      {data.image}
    </div>
  );
};
export default Block;