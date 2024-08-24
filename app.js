// Ma'lumotlar ombori (vaqtinchalik)
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
    },
];

// Documentdan elementlarni chaqirib olish
const parent = document.getElementById("parent"),
    container = document.getElementById("container"),
    formModal = document.getElementById("formModal"),
    addButton = document.getElementById("addButton"),
    formElements = document.querySelectorAll(".formElement");

// Database arrayidagi har bir ma'lumotga asoslanib, ularni (ma'lumotlarini) documentga yozish
function renderFunction() {
    // Funksiya qayta chaqirilganida ma'lumotlar oshib ketishini oldini olish
    parent.innerHTML = "";
    // Arraydagi har bir ma'lumotni iteratsiya qilish (elementlarni har biri bo'ylab yurib chiqish)
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
}

// Elementlarni kamida bir marotaba documentda ko'rsatish maqsadida funksiya chaqirilishi kerak
renderFunction();

// Har bir element (mahsulot) ustiga bosilganida ko'rsatiladigan modal oyna
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

// Modal oynani ochish uchun maxsusu funksiya
function openForm() {
    formModal.style.display = "flex"
}

// Modal oynani yopish uchun maxsusu funksiya
function closeForm() {
    formModal.style.display = "none"
}

// Modal oynani yopish uchun maxsusu funksiya
function closeModal() {
    const modal = document.getElementById("modal");
    modal.remove();
}

// Inputdan olingan ma'lumotlarni yagona obyektda saqlash
let newProductValue = {
    id: "",
    image: "",
    title: "",
    color: "",
    price: "",
    description: "",
};

// Har bir inputdan qiymat olish
formElements.forEach(element => {
    element.addEventListener("input", (e) => {
        newProductValue = {
            ...newProductValue,
            [e.target.name]: e.target.value
        };
    });
})

// Yangi ma'lumotlarni mavjud arrayga qo'shish
addButton.addEventListener("click", () => {
    // Avval input bo'sh emasligi tekshiriladi so'ng yangi ma'lumot arrayga qo'shiladi
    if (formElements[0].value !== "" && formElements[1].value !== "" && formElements[2].value !== "" && formElements[3].value !== "") {
        database.push({ ...newProductValue, id: database.length + 1, image: "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" });
        // Ma'lumot qo'shilganidan so'ng inputlarni yana bo'sh holatga qaytarish (tozalash)
        formElements.forEach(element => {
            element.value = "";
        });
        // Ma'lumotlarni documentda qayta ko'rsatish
        renderFunction();
        // Modal oynani yopish
        closeForm();
    }
    else {
        // Agar inputlardan biri bo'sh bo'lsa...
        alert("Please fill in the all blanks");
    }
});