function deleteRow(r) {
	var i = r.parentNode.parentNode.rowIndex;
	document.getElementById("combatantsTable").deleteRow(i);
}

function addCombatant() {
	var table = document.getElementById("combatantsTable");
	var row = table.insertRow(-1);
	var cell0 = row.insertCell(0);
	var cell1 = row.insertCell(1);
	var cell2 = row.insertCell(2);
	var cell3 = row.insertCell(3);
	cell0.innerHTML = document.getElementById("name").value;
	cell1.innerHTML = document.getElementById("mod").value;
	cell2.innerHTML = parseInt(document.getElementById("mod").value) + d(10);

	var x = document.createElement("button");
	x.onclick = function() {deleteRow(this);};
	var t = document.createTextNode("Remove");
	x.appendChild(t);
	cell3.appendChild(x);
}

function newRound() {
	rollInit();
	sort();
}

function rollInit() {
	for(x=1;x<document.getElementById("combatantsTable").rows.length;x++) {
		document.getElementById("combatantsTable").rows[x].cells[2].innerHTML = parseInt(document.getElementById("combatantsTable").rows[x].cells[1].innerHTML) + d(10);
	}
}

function d(sides) {
	return Math.floor((Math.random() * sides) + 1);
}

// from https://www.w3schools.com/howto/howto_js_sort_table.asp
function sort() {
	var table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById("combatantsTable");
	switching = true;
	/*Make a loop that will continue until
	no switching has been done:*/
	while (switching) {
		//start by saying: no switching is done:
		switching = false;
		rows = table.rows;
		/*Loop through all table rows (except the
		first, which contains table headers):*/
		for (i = 1; i < (rows.length - 1); i++) {
			//start by saying there should be no switching:
			shouldSwitch = false;
			/*Get the two elements you want to compare,
			one from current row and one from the next:*/
			x = rows[i].getElementsByTagName("td")[2];
			y = rows[i + 1].getElementsByTagName("td")[2];
			//check if the two rows should switch place:
			if (parseInt(x.innerHTML) < parseInt(y.innerHTML) ) {
				//if so, mark as a switch and break the loop:
				shouldSwitch = true;
				break;
			}
		}
		if (shouldSwitch) {
		/*If a switch has been marked, make the switch
		and mark that a switch has been done:*/
		rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
		switching = true;
		}
	}
}