// Ma'lumotlar ombori (vaqtinchalik)
let database = [
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
    formElements = document.querySelectorAll(".formElement"),
    modalContent = document.querySelector("#modalContent"),
    imgInput = document.getElementById("file-upload"),
    reviewImg = document.getElementById("reviewImg"),
    form = document.getElementById("form");

// Database arrayidagi har bir ma'lumotga asoslanib, ularni (ma'lumotlarini) documentga yozish
function renderFunction() {
    // Funksiya qayta chaqirilganida ma'lumotlar oshib ketishini oldini olish
    parent.innerHTML = "";
    // Arraydagi har bir ma'lumotni iteratsiya qilish (elementlarni har biri bo'ylab yurib chiqish)
    database.forEach((value, index) => {
        parent.innerHTML += `
            <div class="w-[320px] group relative">
                <div onclick="clickMe(${index})" class="w-full h-80 overflow-hidden rounded-md bg-gray-200 hover:opacity-75 hover:cursor-pointer">
                    <img src=${value.image}
                        alt=${value.title}
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <div>
                        <h3 class="text-sm text-gray-700">
                            ${value.title}
                        </h3>
                        <p class="mt-1 text-sm text-gray-500">${value.color}</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">$${value.price}</p>
                </div>

                <div class="flex items-center justify-between mt-4">
                    <button onclick="openFormForUpdate(${index})" class="px-4 py-1 rounded-lg text-white bg-blue-500">Yangilash</button>
                    <button onclick="handleDelete(${index})" class="px-4 py-1 rounded-lg text-white bg-red-500">O'chirish</button>
                </div>
            </div>`;
    });
}

// Elementlarni kamida bir marotaba documentda ko'rsatish maqsadida funksiya chaqirilishi kerak
renderFunction();

// Har bir element (mahsulot) ustiga bosilganida ko'rsatiladigan modal oyna
function clickMe(index) {
    console.log("clicked");
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
    formModal.style.display = "flex";
    addButton.textContent = "Qo'shish";
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

// closeModal() funksiyasi form oynaning contetiga ta'sirini to'xtatish
modalContent.addEventListener("click", (e) => {
    e.stopPropagation();
})

// Inputdan olingan ma'lumotlarni yagona obyektda saqlash
let newProductValue = {
    id: "",
    image: "",
    title: "",
    color: "",
    price: "",
    description: "",
}

// Har bir inputdan qiymat olish
formElements.forEach(element => {
    element.addEventListener("input", (e) => {
        newProductValue = {
            ...newProductValue,
            [e.target.name]: e.target.value
        };
    });
})

// Inputdan rasm olish
imgInput.addEventListener("input", (e) => {
    newProductValue = {
        ...newProductValue,
        image: URL.createObjectURL(e.target.files[0])
    };
    reviewImg.innerHTML = `<img class='size-32 object-cover' src=${newProductValue.image} />`;
})

function clearInputValues() {
    formElements.forEach(element => element.value = "");
    reviewImg.innerHTML = `<svg class="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" /></svg>`
}

function openFormForUpdate(index) {
    newProductValue = database[index];
    openForm();
    // formElements[0].value = newProductValue.title;
    formElements.forEach(input => {
        input.value = database[index][input.name];
    });
    reviewImg.innerHTML = `<img class='size-32 object-cover' src=${newProductValue.image} />`;
    addButton.textContent = "Saqlash";
}

// Yangi ma'lumotlarni mavjud arrayga qo'shish va yangilash
form.addEventListener("submit", (e) => {
    // Yangilanishlarni oldini oladi
    e.preventDefault();
    // Avval input bo'sh emasligi tekshiriladi so'ng yangi ma'lumot arrayga qo'shiladi
    // Bu yerda ixtiyoriy regular expression amallari ham bajarilishi mumkin...
    if (formElements[0].value !== "" && formElements[1].value !== "" && formElements[2].value !== "" && formElements[3].value !== "") {
        if (newProductValue.id === "") {
            // Yangi mahsulot qo'shish
            database.push({ ...newProductValue, id: database.length + 1 });
        }
        else {
            // Mavjud mahsulotni yangilash
            const foundIndex = database.findIndex(product => product.id === newProductValue.id);
            database[foundIndex] = newProductValue;
        }
        // Ma'lumot qo'shilganidan so'ng inputlarni yana bo'sh holatga qaytarish (tozalash)
        clearInputValues();
        // Ma'lumotlarni documentda qayta ko'rsatish
        renderFunction();
        // Modal oynani yopish
        closeForm();
    }
    else {
        // Agar inputlardan biri bo'sh bo'lsa...
        alert("Please fill in the all blanks");
    }
})

// Mahsulotlarni o'chirish funksiyasi
function handleDelete(index) {
    const isConfirm = confirm("O'chirishga ishonchingiz komilmi?");
    if (isConfirm) {
        database = database.filter((_, productIndex) => productIndex !== index);
        renderFunction();
    }
}