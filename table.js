new gridjs.Grid({
  search: true,
  sort: true,
  pagination: {
    limit: 2,
  }, 
  style: {
    table: {
      border: '3px solid #ccc'
    },
    th: {
      'background-color': '#F0FFFF',
      color: '#000',
      'border-bottom': '3px solid #ccc',
      'text-align': 'center'
    },
    td: {
      'text-align': 'center'}},
  columns: ["Name", "Email", "Jabatan", "Phone Number"],
  data: [
    ["Dandy", "dandy@yahoo.com", "Manager", "(353) 01 222 3333"],
    ["Mamat", "mamat@gmail.com", "Staff finance", "(01) 22 888 4444"],
    ["Eriko", "eriko99@gmail.com", "Staff produksi", "0097 22 654 00033"],
    ["Sarah", "sarah123@gmail.com", "Warehouse", "+322 876 1233"],
    ["Andin", "andin1122@mail.com", "Operator", "(353) 22 87 8356"]
  ]
}).render(document.getElementById("app"));