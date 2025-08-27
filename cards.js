import { serviceDetailsEn } from "./info/info.js";

const cardParent = document.getElementById("cards");

for (const service of serviceDetailsEn) {
	const cardEl = document.createElement("div");

	cardEl.innerHTML = `<div class="card p-8 bg-white rounded-xl h-full">
							<div class="cardContent flex flex-col justify-between space-y-2 max-md:space-y-4 h-full">
								<div class="cardNav flex justify-between items-center mb-4">
									<div
										class="serviceImage p-[.875rem] bg-[#FFE3E2] rounded-2xl"
									>
										<img class="h-8 w-8" src=${service.imgLink} alt="" />
									</div>
									<i
										class="fa-solid fa-heart text-2xl stroke-white text-red-200 transition-all transform duration-75 hover:scale-110 active:scale-125 active:text-red-600 hover:text-red-400"
									></i>
								</div>
								
									<div class="cardTitle">
										<h3 class="title text-2xl font-bold">
											${service.title}
										</h3>
										<p class="type text-lg text-gray-500">${service.provider}</p>
									</div>
									<div class="serviceNumber">
										<h2 class="text-3xl font-extrabold">
                                        ${service.number}
                                        </h2>
										<button
											disabled
											class="rounded-lg block bg-neutral-100 text-gray-400 px-4 mt-1"
										>
											${service.category}
										</button>
									</div>
									<div class="cardBtn flex flex-col xl:flex-row gap-2">
										<button
											class="w-full rounded-lg py-3 border-1 border-gray-300 cursor-pointer shadow-sm hover:shadow-md active:bg-neutral-100"
										>
											<i class="fa-regular fa-copy"></i> Copy
										</button>
										<button
											class="text-white secondaryGreen w-full rounded-lg py-3 cursor-pointer shadow-sm hover:shadow-md active:!bg-green-700"
										>
											<i class="fa-solid fa-phone"></i> Call
										</button>
									</div>
								
							</div>
						</div>`;

	cardParent.appendChild(cardEl);
}
