'use strict'

function onInit() {
    renderGallery()
    getMemes()
}

function renderGallery() {
    let strHtml = ``
    gImgs.map(img => {
        strHtml += `<img src="/img/square/${img.id}.jpg" onclick="onSelectTemplate(${img.id})">`
        // strHtml += `<img src="img/square/${img.id}.jpg" onclick="renderImg(${img.id})">`
    })
    let elGallery = document.querySelector('.gallery-container')
    elGallery.innerHTML = strHtml 
}