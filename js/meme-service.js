'use strict'

var gKeywords = {
  'happy': 12,
  'animals': 1,
}

var gImgs = [
  { id: 1, url: 'img/1.jpg', keywords: ['animals'] },
  { id: 2, url: 'img/2.jpg', keywords: ['animals'] },
  { id: 3, url: 'img/3.jpg', keywords: ['animals'] },
  { id: 4, url: 'img/4.jpg', keywords: ['animals'] },
  { id: 5, url: 'img/5.jpg', keywords: ['animals'] },
  { id: 6, url: 'img/6.jpg', keywords: ['animals'] },
  { id: 7, url: 'img/7.jpg', keywords: ['animals'] },
  { id: 8, url: 'img/8.jpg', keywords: ['animals'] },
  { id: 9, url: 'img/9.jpg', keywords: ['animals'] }


];

var gMeme;

function getImgStr() {
  var imgs = gImgs
  var strHTML = imgs.map(img => {
    return `<img onclick="onOpenCanvas(${img.id})" src="${img.url}"></img>`
  })
  return strHTML.join('')
}

function createMeme(imgId) {
  gMeme = {
    selectedImgId: imgId,
    selectedLineIdx: 0,
    isPrint: false,
    lines: [
      {
        txt: 'input text Place holder',
        size: 40,
        align: 'left',
        pos: { x: 50, y: 50 },

        color: 'white',
      }
    ]
  }
  return gMeme
}

function getMeme() {
  return gMeme
}


function getImgById(imgId) {
  return gImgs.find(img => img.id === imgId)
}


function setText(txt) {
  gMeme.lines[gMeme.selectedLineIdx].txt = txt
}


function addLine() {
  gMeme.selectedLineIdx++
  var newLine = {
    txt: 'input text Place Holder',
    size: 40,
    align: 'left',
    color: 'white',
    pos: getNewLinePos(gMeme.lines.length),
  }
  gMeme.lines.push(newLine)
}

function switchLine() {
  if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
    gMeme.selectedLineIdx = 0
  } else {
    gMeme.selectedLineIdx++
  }
}

function removeLine() {
  var currLineIdx = gMeme.selectedLineIdx
  if (gMeme.lines.length === 1) return
  gMeme.lines.splice(currLineIdx, 1)
  gMeme.selectedLineIdx = 0
}



function getNewLinePos(idx) {
  switch (idx) {
    case 0:
      return { x: 50, y: 50 }
    case 1:
      return { x: 50, y: 150 }
    case 2:
      return { x: 50, y: 250 }
    case 3:
      return { x: 50, y: 300 }
    case 4:
      return { x: 50, y: 400 }
    default:
      return { x: 50, y: 50 }
  }
}
