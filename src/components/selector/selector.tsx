import styled from 'styled-components';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import genreCodes from '../../helpers/genres';
import { Selection } from './checkbox';

const SelectorStyle = styled.aside`
  {
    width: 18vw;
    padding: 1rem;
  }
`

export const Selector = () => {
    const genreList = Object.keys(genreCodes);

    return (
      <SelectorStyle>
        <aside>
        <FormControl component="fieldset">
          <FormLabel component="legend">Genres</FormLabel>
          <FormGroup aria-label="select genres">
            {genreList.map(genre => (
              <Selection name={genre} />
            ))}
          </FormGroup>
        </FormControl>
        </aside>
      </SelectorStyle>  
      );
}