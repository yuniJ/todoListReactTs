// export const dataList: Array<object> = [];

function loadItems() {
  // console.log(JSON.parse(localStorage.getItem("key")));
  const data: any = localStorage.getItem("key");
  return JSON.parse(data);
  // return localStorage.getItem("key");
}

function saveItems(dataList: any) {
  return localStorage.setItem("key", JSON.stringify(dataList));
}

export { loadItems, saveItems };
