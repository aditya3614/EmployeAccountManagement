import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function DeletableChips() {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleDelete = (option) => () => {
    setSelectedOptions((prevOptions) => prevOptions.filter((item) => item !== option));
  };

  const handleOptionChange = (event) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(selectedValues);
  };

  return (
    <div>
      <select
        label="Select Party Groups"
        className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
        multiple
        value={selectedOptions}
        onChange={handleOptionChange}
      >
        <option value="ReactJS Dropdown">ReactJS Dropdown</option>
        <option value="Laravel 9 with React">Laravel 9 with React</option>
        <option value="React with Tailwind CSS">React with Tailwind CSS</option>
        <option value="React With Headless UI">React With Headless UI</option>
      </select>

      <Stack spacing={1}>
        {selectedOptions.map((option) => (
          <Chip
            key={option}
            label={option}
            variant="outlined"
            onDelete={handleDelete(option)}
          />
        ))}
      </Stack>
    </div>
  );
}
