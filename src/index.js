import "./index.scss";
import "bootstrap/js/dist/carousel";
import Collapse from "bootstrap/js/dist/collapse";
import Offcanvas from "bootstrap/js/dist/offcanvas";
import Modal from "bootstrap/js/dist/modal";

function renderProducts() {
  const productList = document.querySelector("#productList");

  for (let i = 0; i < 20; i++) {
    let newEl = document.createElement("div");
    newEl.classList.add("col", "mt-4");
    newEl.innerHTML = `<div class="card">
                      <img
                        src="https://picsum.photos/200/200?random=${i}"
                        class="card-img-top"
                        alt="product image"
                      />
                      <div class="card-body p-2">
                        <h5 class="card-title text-priamry">$2,000</h5>
                        <p class="card-text fs-8">
                          這是一罐沐浴乳這是一罐沐浴乳這是一罐沐浴乳這是一罐沐浴乳這是一罐沐浴乳這是一罐沐浴乳
                        </p>
                        <p class="card-text text-end fs-8">已售出 1,000</p>
                      </div>
                      <span class="badge bg-primary position-absolute top-0 right-0"
                        >優惠中</span
                      >
                    </div>`;
    productList.append(newEl);
  }
}

function collapsePCHandler() {
  const collapseContent = document.querySelector("#collapseContent");
  const collapseBtn = document.querySelector("#collapseBtn");

  const icon = document.querySelector("#filter-icon");
  const text = document.querySelector("#filter-text");

  var bsCollapse = new Collapse(collapseContent, {
    toggle: false
  });

  collapseBtn.addEventListener("click", function () {
    bsCollapse.toggle();
  });

  collapseContent.addEventListener("hide.bs.collapse", function () {
    text.innerText = "更多";
    icon.classList.remove("transform-rotate-180");
  });

  collapseContent.addEventListener("show.bs.collapse", function () {
    text.innerText = "收起";
    icon.classList.add("transform-rotate-180");
  });
}

function collapseMobileHandler() {
  const collapseContent = document.querySelector("#collapseMobileContent");
  const collapseBtn = document.querySelector("#collapseMobileBtn");

  const icon = document.querySelector("#filterMobileIcon");
  const text = document.querySelector("#filterMobileText");

  var bsCollapse = new Collapse(collapseContent, {
    toggle: false
  });

  collapseBtn.addEventListener("click", function () {
    bsCollapse.toggle();
  });

  collapseContent.addEventListener("hide.bs.collapse", function () {
    text.innerText = "更多";
    icon.classList.remove("transform-rotate-180");
  });

  collapseContent.addEventListener("show.bs.collapse", function () {
    text.innerText = "收起";
    icon.classList.add("transform-rotate-180");
  });
}

function offcanvasHandler() {
  const offcanvasElement = document.querySelector("#offcanvasSection");
  const btn = document.querySelector("#mobile-filter-btn");

  const bsOffcanvas = new Offcanvas(offcanvasElement);

  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    bsOffcanvas.toggle();
  });
}

function searchHandler() {
  const searchBtn = document.querySelector("#searchBtn");
  const itemsWrapper = document.querySelector("#itemsWrapper");
  const spinnerWrapper = document.querySelector("#spinnerWrapper");

  searchBtn.addEventListener("click", function () {
    itemsWrapper.classList.add("d-none");
    spinnerWrapper.classList.remove("d-none");

    setTimeout(() => {
      itemsWrapper.classList.remove("d-none");
      spinnerWrapper.classList.add("d-none");
    }, 1500);
  });
}

function modalHandler() {
  const cartBtn = document.querySelector("#cartBtn");
  const cartModal = document.querySelector("#cartModal");
  var bsModal = new Modal(cartModal);
  cartBtn.addEventListener("click", function () {
    bsModal.toggle();
  });
}

renderProducts();
collapsePCHandler();
collapseMobileHandler();
offcanvasHandler();
searchHandler();
modalHandler();
