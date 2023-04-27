'use strict'

let gCtx, gElCanvas, gCurrImgId

function onSelectTemplate(imgId) {
    gCurrImgId = imgId
    setSelectedImgId(imgId)
    showControlBox()
    initCanvas()
    renderImg(imgId)
}

function onFillColorChange(color) {
    setFillColor(color)
    renderImg(gCurrImgId)
}

function onStrokeColorChange(color) {
    setStrokeColor(color)
    renderImg(gCurrImgId)
}

function onFontSizeChange(button) {
    setFontSize(button)
    renderImg(gCurrImgId)
}

function onFontChange(chosenFont) {
    setFont(chosenFont)
    renderImg(gCurrImgId)
}

function onUpdateText(text) {
    updateText(text)
    renderImg(gCurrImgId)
}

function initCanvas() {
    const elCanvasContainer = document.querySelector('.canvas-container')
    elCanvasContainer.classList.remove('hide')
    const strHtml = `<h3 class="canvas-title">Generate a meme</h3>
    <canvas id="my-canvas" height="400" width="400">
    </canvas>`
    elCanvasContainer.innerHTML = strHtml
}

function renderImg(imgId) {
    gElCanvas = document.querySelector('#my-canvas')
    gCtx = gElCanvas.getContext('2d')

    const elImg = new Image()
    elImg.src = `img/square/${imgId}.jpg`
    elImg.onload = () => {
        gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
        gMeme.lines.forEach((line, idx) => {
            drawText(gMeme.lines[idx].txt, idx, line.pos.x, line.pos.y)
        })
    }
}

function drawText(text, line = 0, x = 200, y = 50) {
    // function drawText(text, line = 0) {
    const lineTxt = text
    gCtx.lineWidth = 2
    gCtx.strokeStyle = gMeme.lines[line].strokeColor
    gCtx.fillStyle = gMeme.lines[line].color
    gCtx.font = `${gMeme.lines[line].size}px ${gMeme.lines[line].font}`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(lineTxt, x, y)
    gCtx.strokeText(lineTxt, x, y)
}

function downloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')
    elLink.href = imgContent
}

function onSaveMeme(element) {
    console.log("element", element)
    saveMeme()
}

function onAddLine() {
    addLine(gCurrImgId)
    document.querySelector('.punchline').value = ''
    // ! This line below might be useless.
    renderImg(gCurrImgId)
}

// * Routing pages functions/ DOM manipulation

function showGallery() {
    const elGallery = document.querySelector('.gallery-container')
    elGallery.classList.remove('hide')

    const elBoxArea = document.querySelector('.control-box-area')
    elBoxArea.classList.add('hide')

    const elCanvas = document.querySelector('.canvas-container')
    elCanvas.classList.add('hide')

    resetMeme()
}

function onToggleLine() {
    toggleLine()
}

function showControlBox() {
    const elBoxArea = document.querySelector('.control-box-area')
    elBoxArea.classList.remove('hide')
    const strHtml = `<button onclick="onAddLine()">Add Line</button>
    <button onclick="onToggleLine()">Toggle line</button>
    <div class="control-box-wrapper grid">
        <select class="font-selection" name="font" id="font-selection" onchange="onFontChange(this.value)">
            <option value="impact">Impact</option>                
            <option value="tahoma">Tahoma</option>                
        </select>
        <input type="text" placeholder="Punchline goes here" class="punchline" oninput="onUpdateText(this)">
        <div class="font-scale grid">
            <button class="a-upscale" onclick="onFontSizeChange(this)">A+</button>
            <button class="a-downscale" onclick="onFontSizeChange(this)">A-</button>
        </div>
        <div class="align-btns grid">
            <button class="btn-svg" title="Align-left">
                <svg width="1rem" height="1rem" focusable="false">
                    <path
                        d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                        fill-rule="evenodd">
                    </path>
                </svg>
            </button>
            <button class="btn-svg" title="Align-center">
                <svg width="1rem" height="1rem" focusable="false">
                    <path
                        d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2zm0 4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                        fill-rule="evenodd">
                    </path>
                </svg>
            </button>
            <button class="btn-svg" title="Align-right">
                <svg width="1rem" height="1rem" focusable="false">
                    <path
                        d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 110-2zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 110-2zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 010-2zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 010-2z"
                        fill-rule="evenodd">
                    </path>
                </svg>
            </button>
        </div>
        <div class="color-selection grid">
            <div class="stroke-clr">Stroke Color:
                <input type="color" class="stroke-color-picker" value="#ffffff" onchange="onStrokeColorChange(this.value)"/>
            </div>
            <div class="fill-clr">Fill Color:
                <input type="color" class="fill-color-picker" value="#ffffff" onchange="onFillColorChange(this.value)"/>
            </div>
        </div>
        <button onclick="saveMeme(this)">Save</button>
        <a href="#" class="btn" onclick="downloadImg(this)" download="my-meme.jpg">Download</a>
    </div>`
    elBoxArea.innerHTML = strHtml
    const elGallery = document.querySelector('.gallery-container')
    elGallery.classList.add('hide')
}