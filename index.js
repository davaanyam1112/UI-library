import { Button } from "./components/Button/Button.js";
import { Checkbox } from "./components/Checkbox/Checkbox.js";
import { SearchBar } from "./components/SearchBar/SearchBar.js";
import { Table } from "./components/Table/Table.js";

customElements.define("search-bar" , SearchBar);
customElements.define("my-button" , Button);
customElements.define("styled-table" , Table);
customElements.define("my-checkbox",Checkbox)

const newData = [
    ["1" , "Harry" , "1" , "1" , "2" , "3"],
    ["2" , "Tom" , "0" , "2" , "2" , "2"] ,
    ["3" , "Jame" , "0" , "2" , "2" , "2"] ,
];

const usersTable = document.getElementById("users");
const usersTable1= document.getElementById("users1");

usersTable.data = newData;
usersTable1.data = newData;

