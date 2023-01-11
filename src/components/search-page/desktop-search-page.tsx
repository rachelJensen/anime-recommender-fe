import React from "react";
import { Selector } from "../selector/selector";
import { DisplayGrid } from "../display-grid/display-grid";
import { GridHeader } from "../../grid-header/grid-header";
import styled from "styled-components";

const DesktopSearchPageStyles = styled.div`
  main{
    display: flex;
    flex-direction: row;
  }
`

export const DesktopSearchPage = () => {
  return (
    <DesktopSearchPageStyles>
      <main>
        <aside>
          <Selector />
        </aside>
        <section>
          <GridHeader />
          <DisplayGrid />
        </section>
      </main>
    </DesktopSearchPageStyles>
    )
};