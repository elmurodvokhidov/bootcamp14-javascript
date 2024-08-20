const database = [
    {
        id: 1,
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        title: "Basic Tee",
        color: "Black",
        price: 35,
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    },
    {
        id: 2,
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
        title: "Basic Tee",
        color: "Aspen White",
        price: 35,
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    },
    {
        id: 3,
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
        title: "Basic Tee",
        color: "Charcoal",
        price: 35,
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    },
    {
        id: 4,
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
        title: "Artwork Tee",
        color: "Iso Dots",
        price: 35,
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
    }
];

const parent = document.getElementById("parent");
const container = document.getElementById("container");

database.forEach((value, index) => {
    parent.innerHTML += `
        <div class="w-[320px] group relative">
            <div class="w-full h-80 overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                <img src=${value.image}
                    alt=${value.title}
                    class="h-full w-full object-cover object-center lg:h-full lg:w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <div onclick="clickMe(${index})" class="cursor-pointer">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${value.title}
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">${value.color}</p>
                </div>
                <p class="text-sm font-medium text-gray-900">$${value.price}</p>
            </div>
        </div>`;
});

function clickMe(index) {
    const targetElement = database[index];
    container.innerHTML += `
        <div id="modal"
             class="overflow-y-auto flex h-screen overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full backdrop-blur-sm">
            <div class="relative p-4 w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div class="relative bg-white rounded-lg shadow-xl">
                    <!-- Modal header -->
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                        <h3 class="text-xl font-semibold text-gray-900">
                            ${targetElement.title}
                        </h3>
                        <button onclick="closeModal()" type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                 viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <!-- Modal body -->
                    <div class="p-4 md:p-5">
                        <p class="text-base leading-relaxed text-gray-500">
                            ${targetElement.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.remove();
}