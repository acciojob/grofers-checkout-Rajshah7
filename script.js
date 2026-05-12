const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	let prices = document.querySelectorAll(".price");

	let total = Array.from(prices).reduce((acc,price) => {
		return acc + Number(price.textContent);
	},0);

	const oldRow =
        document.getElementById("total-row");

    if (oldRow) {
        oldRow.remove();
    }

	const tr = document.createElement('tr');
	tr.id = "total-row";

	const td = document.createElement("td");

    td.colSpan = 2;

	td.textContent =
        `Total Price: ${total}`;

	tr.appendChild(td);

	document
        .querySelector("table")
        .appendChild(tr);
};

getSumBtn.addEventListener("click", getSum);

