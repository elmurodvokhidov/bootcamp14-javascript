const database = [
    {
        id: 1,
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
        title: "Basic Tee",
        color: "Black",
        price: 35
    },
    {
        id: 2,
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
        title: "Basic Tee",
        color: "Aspen White",
        price: 35
    },
    {
        id: 3,
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg",
        title: "Basic Tee",
        color: "Charcoal",
        price: 35
    },
    {
        id: 4,
        image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg",
        title: "Artwork Tee",
        color: "Iso Dots",
        price: 35
    }
];

const parent = document.getElementById("parent");

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
    console.log(database[index].color);
}