import { createGlobalState } from "react-hooks-global-state";
import testIMG from "../img/bed.png";

const initialState = {
  createProduct: {
    list_categories: [
      { id: 1, text: "Категория" },
      { id: 2, text: "Категория" },
      { id: 3, text: "Категория" },
    ],
    subcategory: [
      { id: 1, text: "Подкатегория" },
      { id: 2, text: "Подкатегория" },
      { id: 3, text: "Подкатегория" },
    ],
    countProduct: "-",
    vendorCode: "-",
    nameInfo: "-",
    price: "-",
    img: testIMG,
    options_categories: [
      { value: "Категория", label: "Категория" },
      { value: "Категория", label: "Категория" },
      { value: "Категория", label: "Категория" },
    ],
    options_subcategory: [
      { value: "Подкатегория", label: "Подкатегория" },
      { value: "Подкатегория", label: "Подкатегория" },
      { value: "Подкатегория", label: "Подкатегория" },
    ],
  },
};
export const { useGlobalState } = createGlobalState(initialState);
