//const { createElement } = require("react");

const MATERIAL_IRON_INGOT_ID = "IRON-INGOT";
const MATERIAL_STICK_ID = "STICK";
const MATERIAL_AIR_ID = "AIR";

const MATERIAL_AIR_IMG = "./assets/air.webp";
const MATERIAL_IRON_INGOT_IMG = "./assets/iron-ingot.webp";
const MATERIAL_STICK_IMG = "./assets/stick.webp";

const materials = [MATERIAL_AIR_ID, MATERIAL_IRON_INGOT_ID, MATERIAL_STICK_ID];
const materialsImageSrc = [
    MATERIAL_AIR_IMG,
    MATERIAL_IRON_INGOT_IMG,
    MATERIAL_STICK_IMG,
];

const pickaxeRecipe = [
    MATERIAL_IRON_INGOT_ID,
    MATERIAL_IRON_INGOT_ID,
    MATERIAL_IRON_INGOT_ID,
    MATERIAL_AIR_ID,
    MATERIAL_STICK_ID,
    MATERIAL_AIR_ID,
    MATERIAL_AIR_ID,
    MATERIAL_STICK_ID,
    MATERIAL_AIR_ID,
];
const axeRecipe = [
    MATERIAL_IRON_INGOT_ID,
    MATERIAL_IRON_INGOT_ID,
    MATERIAL_AIR_ID,
    MATERIAL_IRON_INGOT_ID,
    MATERIAL_STICK_ID,
    MATERIAL_AIR_ID,
    MATERIAL_AIR_ID,
    MATERIAL_STICK_ID,
    MATERIAL_AIR_ID,
];

const pickaxeRecipeImageSrc = "./assets/iron-pickaxe.webp";
const axeRecipeImageSrc = "./assets/iron-axe.webp";

const recipeList = [pickaxeRecipe, axeRecipe];
const recipeImageSrcList = [pickaxeRecipeImageSrc, axeRecipeImageSrc];

const craftingTable = [
    MATERIAL_AIR_ID,
    MATERIAL_AIR_ID,
    MATERIAL_AIR_ID,
    MATERIAL_AIR_ID,
    MATERIAL_AIR_ID,
    MATERIAL_AIR_ID,
    MATERIAL_AIR_ID,
    MATERIAL_AIR_ID,
    MATERIAL_AIR_ID,
];
const craftingTable2 = [];
const inventoryTable = [1, 2, 3];

//Invertory
let actualItem = "";
const inventoryTab = document.querySelector(".inventory-table");
//Matching function
function isMatching() {
    const output = document.querySelector("#output");
    console.log(recipeList[0].join());

    output.firstElementChild.setAttribute("src", MATERIAL_AIR_IMG);
    for (let i = 0; i < recipeList.length; i++) {
        if (craftingTable.join() == recipeList[i].join()) {
            console.log("works");
            output.firstElementChild.setAttribute("src", recipeImageSrcList[i]);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    //Create the elements
    for (let i = 0; i < inventoryTable.length; i++) {
        const $btn = document.createElement("button");
        $btn.classList.add("crafting-btn");
        $btn.classList.add("invBtn");
        inventoryTab.appendChild($btn);

        const $img = document.createElement("img");
        $img.setAttribute("src", materialsImageSrc[i]);

        $btn.appendChild($img);
    }
    //Find id of the element
    const invBtns = document.querySelectorAll(".invBtn");

    for (let j = 0; j < invBtns.length; j++) {
        invBtns[j].addEventListener("click", () => {
            actualItem = materials[j];
            console.log(actualItem);
        });
    }

    //Transfer elements to the crafting table, and check if it's matching to the others reciepes
    const craftBtn = document.querySelectorAll(".craft");
    for (let l = 0; l < craftingTable.length; l++) {
        craftBtn[l].addEventListener("click", () => {
            for (let p = 0; p < materials.length; p++) {
                if (actualItem == materials[p]) {
                    craftBtn[l].firstElementChild.setAttribute(
                        "src",
                        materialsImageSrc[p],
                    );
                }
                craftingTable[l] = actualItem;

                isMatching();
            }
        });
    }
});
