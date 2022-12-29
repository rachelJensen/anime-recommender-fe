import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const genres = ['Action', 'Romance', 'Comedy', 'Drama', 'Horror', 'Suspense', 'Fantasy', 'Sci-fi']

export const Selector = () => {
    return (
        <FormControl component="fieldset">
          <FormLabel component="legend">Genres</FormLabel>
          <FormGroup aria-label="position">
            {genres.map(genre => (
              <FormControlLabel
                value={genre.toLowerCase()}
                control={<Checkbox />}
                label={genre}
                labelPlacement="end"
              />
            ))}
          </FormGroup>
        </FormControl>
      );
}