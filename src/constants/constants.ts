const CONSTANTS = {
  API: {
    BASE_URL: "https://dummyjson.com/",
    PRODUCTS_PATH: "products/",
  },
  ROUTES: {
    MAIN_PATH: "/",
    DETAILS_PATH: "/details/", //:id
    NOT_FOUND_PATH: "*",
  },
  NAME_PROJECT: "tptHub test",
  TITLE_BUTTON: {
    backBtn: "BACK",
  },
  TABLE_HEADERS: [
    "Title",
    "Description",
    "Price",
    "Rating",
    "Stock",
    "Brand",
    "Category",
  ],
  CARD_LABELS: ["Price", "Rating", "Stock", "Brand", "Category"],
  COUNT_ITEMS_ON_PAGE: [10, 20, 30],
  COUNT_ON_PAGE: "Count on page:",
};
export default CONSTANTS;
