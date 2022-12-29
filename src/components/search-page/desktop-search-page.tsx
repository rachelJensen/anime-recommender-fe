import React from "react";
import { Selector } from "../selector/selector";
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
          <div>grid goes here</div>
        </section>
      </main>
    </DesktopSearchPageStyles>
    )
};