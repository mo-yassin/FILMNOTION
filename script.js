var xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.open('GET', 'movies.json');

xhr.onload = function () {
  var data = xhr.response;
  const tbody = document.querySelector("tbody");
    for (let xhr of data) {
        let ul = document.createElement('ul');
        for (const fes of xhr.Festivals) {
            let li = document.createElement('li');
            li.append(fes)
            ul.append(li);
        }
        tbody.innerHTML += `
            <tr>
                <th> <img src='${xhr.Poster}' width=120px> </th>
                <td class="align-middle text-left">${xhr.Titre}</td>
                <td class="align-middle text-left">${xhr.Réalisateur}</td>
                <td class="align-middle">${xhr.Durée}</td>
                <td class="align-middle">${xhr.Production}</td>
                <td class="align-middle text-left">${ul.innerHTML}</td>
                <td class="align-middle text-left">
                    ${xhr.Acteurs[0].Nom}<br>
                    ${xhr.Acteurs[0].prénom}<br>
                    ${xhr.Acteurs[0].Nationalité}
                </td>
            </tr>
        `;
    }
}

xhr.send()

var searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', searchbox);
function searchbox() {
  var searchInputValue = searchInput.value.toUpperCase();
  if (searchInputValue === "") {
    document.getElementById('search').style.visibility = "visible";
    document.getElementById('delete').style.visibility = "hidden";
  } else {
    document.getElementById('search').style.visibility = "hidden";
    document.getElementById('delete').style.visibility = "visible";
  }
console.log(searchInputValue)

var tr = document.querySelectorAll("tbody tr");
for (i = 0; i < tr.length; i++) {
  var td = tr[i].getElementsByTagName("td")[0];
// FILTRER
  if (td) {
    var txtValue = td.textContent || td.innerText;
    if (txtValue.toUpperCase().indexOf(searchInputValue) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
}
}
// CLEAR THE VALUE OF SEARCH INPUT
function clearInput() {
  searchInput.value = "";
  searchbox();
}

var table, rows, switching, i, x, y, shouldSwitch;
table = document.querySelector("tbody");
// SORT TITRE IN ASCENDING ORDER
function AZsortTitre() {
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 0; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
// SORT TITRE IN DESCENDING ORDERD
function ZAsortTitre() {
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 0; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];

      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
// SORT REALISATEUR IN ASCENDING ORDERD
function AZsortRealisateur() {
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 0; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[1];
      y = rows[i + 1].getElementsByTagName("td")[1];

      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
// SORT REALISATEUR IN DESCENDING ORDERD
function ZAsortRealisateur() {
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 0; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[1];
      y = rows[i + 1].getElementsByTagName("td")[1];

      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

// SORT NUMBER IN ASCENDING ORDERD
function mNumberSort() {
let rows = table.rows;

let sortedRows = [...rows].sort(function(row1, row2) {
  let cell1 = row1.getElementsByTagName("td")[2];
  let cell2 = row2.getElementsByTagName("td")[2];
  let value1 = parseInt(cell1.textContent);
  let value2 = parseInt(cell2.textContent);
  return value1 - value2;
});

for (let row of sortedRows) {
  table.appendChild(row);
}
}
// SORT NUMBER IN DESCENDING ORDERD
function pNumberSort() {
  let rows = table.rows;
  
  let sortedRows = [...rows].sort(function(row1, row2) {
    let cell1 = row1.getElementsByTagName("td")[2];
    let cell2 = row2.getElementsByTagName("td")[2];
    let value1 = parseInt(cell1.textContent);
    let value2 = parseInt(cell2.textContent);
    return value2 - value1;
  });
  
  for (let row of sortedRows) {
    table.appendChild(row);
  }
}