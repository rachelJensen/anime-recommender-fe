import * as React from 'react';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const genres = ['Action', 'Romance', 'Comedy', 'Drama', 'Horror', 'Suspense', 'Fantasy', 'Sci-fi'];

const SelectorStyle = styled.aside`
  {
    width: 200px;
    padding: 1rem;
  }
`

export const Selector = () => {
    return (
      <SelectorStyle>
        <aside>
        <FormControl component="fieldset">
          <FormLabel component="legend">Genres</FormLabel>
          <FormGroup aria-label="select genres">
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
        </aside>
      </SelectorStyle>  
      );
}