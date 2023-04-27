'use strict'

const KEY = 'memesDB'
let gMemes = []
let gMeme

function getMemes() {
    gMeme = _createMeme()
    if (!loadFromStorage(KEY)) {
        console.log("Nothing in storage", loadFromStorage(KEY))
    } else {
        console.log("Loaded from storage:", loadFromStorage(KEY))
        gMemes = loadFromStorage(KEY)
    }
    return gMemes
}

function getMeme() {
    return _createMeme()
}

function _createMeme() {
    return {
        selectedImgId: null,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'Punchline goes here',
                size: 40,
                align: 'left',
                color: 'white',
                strokeColor: 'black',
                font: 'Impact',
                pos: { 
                    x: 200,
                    y: 50
                 }
            }
        ]
    }
}

// function _createLine({ size, font = 40, strokeColor = 'black', color = 'white' }) {
// 	return {
// 		txt: '2nd line txt',
// 		size,
// 		font,
// 		strokeColor,
// 		color,
// 		pos: { x: 50, y: 50 },
// 	};
// }

function setSelectedImgId(imgId) {
    gMeme.selectedImgId = imgId
}

function setFillColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color
}

function setStrokeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = color
}

function setFontSize(fontSize) {
    if (fontSize.className === 'a-downscale') {
        gMeme.lines[gMeme.selectedLineIdx].size--
    } else {
        gMeme.lines[gMeme.selectedLineIdx].size++
    }
}

function setFont(chosenFont) {
    gMeme.lines[gMeme.selectedLineIdx].font = chosenFont
}

function updateText(text) {
    console.log("gMeme", gMeme)
    const lineIdx = gMeme.selectedLineIdx
    gMeme.lines[lineIdx].txt = text.value || 'Please Update Text'
}

function saveMeme() {
    gMemes.push(gMeme)
    saveToStorage(KEY, gMemes)
}

function toggleLine() {
    if (gMeme.selectedLineIdx >= gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0
    } else {
        gMeme.selectedLineIdx++
    }
}

function addLine(currImgId) {
    console.log("gMeme", gMeme)
    gMeme.selectedLineIdx = gMeme.selectedLineIdx + 1
    var newLine = {
        txt: 'Text goes here',
        size: 40,
        align: 'left',
        color: 'white',
        strokeColor: 'black',
        font: 'Impact',
        pos: { 
            x: 200,
            y: 350
         }
    }
    gMeme.lines.push(newLine)
}

function getImgById(imgId) {
    return gImgs.find(meme => meme.id == imgId);
}

function resetMeme() {
    gMeme = _createMeme()
}