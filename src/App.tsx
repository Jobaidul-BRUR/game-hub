import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar.tsx";
import GameGrid from "./components/GameGrid.tsx";

function App() {

  return (
    <>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }} >
        <GridItem gridArea="nav">
          <NavBar />
        </GridItem>

        <Show above="lg">
          <GridItem gridArea="aside">aside</GridItem>
        </Show>

        <GridItem gridArea="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  )
}

export default App
