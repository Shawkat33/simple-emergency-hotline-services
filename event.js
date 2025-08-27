const callNowBtn = document.getElementById("callBtn");

document.addEventListener("click", function (e) {
	if (
		e.target.tagName.toLowerCase() === "button" &&
		e.target.id !== "callRecClr"
	) {
		const serviceDetail = {
			title: "",
			type: "",
			number: 0,
			copyStatus: false,
			favoritedStatus: false,
		};

		const clickedBtn = e.target.closest(".cardContent");

		// console.log(e.target.id);

		const cardTitle = clickedBtn.querySelector(".cardTitle .title").innerText;
		const cardType = clickedBtn.querySelector(".cardTitle .type").innerText;
		const cardNumber = clickedBtn.querySelector(".serviceNumber h2").innerText;
		serviceDetail.title = cardTitle;
		serviceDetail.type = cardType;
		serviceDetail.number = cardNumber;

		// console.log(serviceDetail);

		switch (e.target.id) {
			case "callBtn":
				callBtn(serviceDetail);
				break;

			case "copyBtn":
				copyBtn(serviceDetail);
				break;

			case "favoriteBtn":
				favoriteBtn();
				break;

			default:
				break;
		}
	}

	if (e.target.id === "callRecClr") {
		callRecClr();
	}
});

function callBtn(serviceDetail) {
	const coins = parseInt(document.getElementById("coins").innerText);

	if (coins < 20) {
		alert("Insufficient Coin Balance, Please Recharge!");
	} else {
		// Show alert --> Service and Number

		alert(
			`Calling ${serviceDetail.title} on ${serviceDetail.number} for 20 coins ...`
		);

		// Deduct coins

		const newCoins = coins - 20;
		document.getElementById("coins").innerText = newCoins;

		// Add Call Record

		const record = {};

		record.title = serviceDetail.title;
		record.number = serviceDetail.number;
		record.time = new Date().toLocaleTimeString();

		// console.log(record);

		addRecord(record);
	}
}

function copyBtn(serviceDetail) {
	// Copy to Clipboard
	navigator.clipboard
		.writeText(serviceDetail.number)
		.then(() => {
			alert(
				`Copied to Clipboard ${serviceDetail.title}: ${serviceDetail.number}`
			);
		})
		.catch((err) => console.log("Failed to copy!!! ", err));

	if (serviceDetail.copyStatus === true) {
		return;
	} else {
		serviceDetail.copyStatus = !serviceDetail.copyStatus;

		//copyStat increment

		const copyStat = parseInt(document.getElementById("copyStat").innerText);

		const newCopyStat = copyStat + 1;
		document.getElementById("copyStat").innerText = newCopyStat.toString();
	}
}

function favoriteBtn() {}

function addRecord(record) {
	const historyEl = document.createElement("div");
	historyEl.innerHTML = `<div
										class="mt-4 p-4 bg-[#FAFAFA] rounded-lg w-full flex justify-between"
									>
										<div class="flex flex-col justify-around">
											<h2 class="font-semibold text-lg text-[#111111]">
												${record.title}
											</h2>
											<p class="text-[#818181]">${record.number}</p>
										</div>
										<div class="flex text-center items-center">
											<h3 class="text-[#111111] text-lg">${record.time}</h3>
										</div>
									</div>`;

	const callHistoryParent = document.getElementById("callRecords");
	callHistoryParent.appendChild(historyEl);
}

function callRecClr() {
	const callHistoryParent = document.getElementById("callRecords");
	callHistoryParent.replaceChildren();
}
