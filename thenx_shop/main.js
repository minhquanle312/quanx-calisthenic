const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const quickViewBtn = $('.btn.btn--primary.product-item__quick-view')

quickViewBtn.onclick = function(e) {
    e.preventDefault()
    console.log(quickViewBtn)
}