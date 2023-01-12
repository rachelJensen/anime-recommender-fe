import { useContext, useState, useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { SearchContext } from '../App';
import { FormControlLabel } from '@mui/material';

export const Selection = ({ name }: {name: string}) => {
  const [checked, setChecked] = useState(false);
  const { selectedGenres, updateSelectedGenres } = useContext(SearchContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  useEffect(() => {
    updateSelectedGenres(name, checked)
  }, [checked])

  return (
    <FormControlLabel
      control={
        <Checkbox 
          name={name}
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      }
      label={name}
      labelPlacement="end"
      value={name.toLowerCase()}
    />
  );
}