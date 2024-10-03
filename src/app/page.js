import Image from "next/image";
import styles from "./page.module.css";
import List from "./List";
import RecipeList from "./RecipeList";
import RecipeList2 from "./RecipeList2";
import Poem from "./Poem";

export default function Home() {
  return (
    <>
    <h1>Ejercicio 1</h1>
    <List />
    <br />
    <br />
    <br />
    <br />
    <h1>Ejercicio 2</h1>
    <RecipeList />
    <br />
    <br />
    <br />
    <br />
    <h1>Ejercicio 3</h1>
    <RecipeList2 />
    <br />
    <br />
    <br />
    <br />
    <h1>Ejercicio 4</h1>
    <Poem />
    <br />
    <br />
    <br />
    <br />
   </>
  );
}
