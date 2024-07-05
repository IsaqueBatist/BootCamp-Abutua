var products = [
  {
    id: 1,
    name: "Computador M1-TX",
    description: "Intel I7, 16GB, SSD 256, HD 1T",
    price: 4900,
    category: 1,
    promotion: true,
    new: true
  },
  {
    id: 2,
    name: "Computador M2-TX",
    description: "Intel I7, 32GB, SSD 512, HD 1T",
    price: 5900,
    category: 2,
    promotion: false,
    new: true
  },
  {
    id: 3,
    name: "Computador M1-T",
    description: "Intel I5, 16GB, HD 1T",
    price: 2900,
    category: 3,
    promotion: false,
    new: false
  },
];

var categories = [
  { id: 1, name: "Produção Própria" },
  { id: 2, name: "Nacional" },
  { id: 3, name: "Importado" }
];

const addNewRow = (prodct) => {
  let table = document.getElementById('table')
  let {name} = categories[prodct.category-1]
  table.innerHTML += `
    <tr>
      <th scope="row">${prodct.id}</th>
      <td>${prodct.name}</td>
      <td>${prodct.description}</td>
      <td>${Intl.NumberFormat({style: 'decimal', currency: 'BRL'}).format(prodct.price)}</td>
      <td>${name}</td>
      <td>
        ${prodct.promotion? `<span class="badge text-bg-success me-1">P</span>` : ``}
        ${prodct.new? `<span class="badge text-bg-primary">L</span>`: ``}
      </td>
    </tr>
  `
}

loadProducts()

function loadProducts() {
  products.map((product) => addNewRow(product))
}


