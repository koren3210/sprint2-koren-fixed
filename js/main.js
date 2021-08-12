'use strict'

console.log('test');

var gCanvas;
var gCtx;


function onInit() {
  gCanvas = document.getElementById('my-canvas')
  gCtx = gCanvas.getContext('2d')
  renderImgs();
}

function onToggleMenu() {
  document.body.classList.toggle('opened');
}

function renderImgs(key) {
  var strHTML = getImgStr(key)
  document.querySelector('.mems').innerHTML = strHTML
}

function onOpenCanvas(imgIdx) {
  openEditorPage()
  createMeme(imgIdx)
  renderCanvas()

}

function openEditorPage() {
  document.querySelector('.gallery').style.display = 'none'
  document.querySelector('.editor').classList.add('active')
  document.querySelector('.deatiles').style.display = 'none'
}

function renderCanvas() {
  var meme = getMeme()
  var img = new Image()
  var currImg = getImgById(meme.selectedImgId)
  img.src = currImg.url
  img.onload = () => {
    clearCanvas()
    setInputText()
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)

    meme.lines.forEach(line => {

      drawText(line, line.pos.x, line.pos.y)
    });

  }
}

function clearCanvas() {
  gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
}

function setInputText() {
  var meme = getMeme()
  document.querySelector('.input-meme').value = meme.lines[meme.selectedLineIdx].txt
}

function onSetText(txt) {
  setText(txt)
  renderCanvas()
}

function drawText(line, x, y) {
  gCtx.lineWidth = 3;
  gCtx.fillStyle = line.color
  gCtx.font = `${line.size}px ${'impact'}`
  gCtx.textAlign = line.align
  gCtx.fillText(line.txt, x, y)
  gCtx.strokeText(line.txt, x, y)
}

function onAddLine() {
  addLine()
  renderCanvas()
}

function onSwitchLine() {
  switchLine()
  renderCanvas()
}

function onRemoveLine() {
  removeLine()
  renderCanvas()
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')
  gElCanvas.width = elContainer.offsetWidth
  gElCanvas.height = elContainer.offsetHeight
}