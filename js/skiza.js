// 'use strict'

// function showMemes() {
//     renderMeme()
//     console.log("func called")
// }

// function renderMeme() {
//     const elCanvas = document.querySelector('.canvas-container')
//     elCanvas.classList.remove('hide')
//     gMemes = loadFromStorage(KEY)
//     gMemes.map(meme => {
//         const strHtml = `<h3>Generate a meme</h3>
//         <canvas id="my-canvas" height="400" width="400">
//         </canvas>`
//         gElCanvas = document.querySelector('#my-canvas')
//         gElCanvas.innerHTML = strHtml
//         gCtx = gElCanvas.getContext('2d')

//         const elImg = new Image()
//         elImg.src = `img/square/${meme.selectedImgId}.jpg`
//         elImg.onload = () => {
//             gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
//         }
//     })
// }

// const elCanvas = document.querySelector('.canvas-container')
// elCanvas.classList.remove('hide')
// const strHtml = `<h3>Generate a meme</h3>
// <canvas id="my-canvas" height="400" width="400">
// </canvas>`
// elCanvas.innerHTML = strHtml
// gElCanvas = document.querySelector('#my-canvas')
// gCtx = gElCanvas.getContext('2d')

// function renderImg(imgId) {
//     showControlBox()
//     const elCanvas = document.querySelector('.canvas-container')
//     elCanvas.classList.remove('hide')
//     const strHtml = `<h3>Generate a meme</h3>
//     <canvas id="my-canvas" height="400" width="400">
//     </canvas>`
//     elCanvas.innerHTML = strHtml
//     gElCanvas = document.querySelector('#my-canvas')
//     gCtx = gElCanvas.getContext('2d')

//     const elImg = new Image()
//     elImg.src = `img/square/${imgId}.jpg`
//     elImg.onload = () => {
//         gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
//     }
// }