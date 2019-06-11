'use strict'
let ctx;
let gCanvas;
let gSize = 30;
let gColor;
let gFontfamily;
let gText;
let gCurrLine = 1;
let gCurrText;
let gNewMeme;
let x = 20;
let y = 25;





function init() {
    createMemes();
    renderMemes();
    renderKeyWords();
}

function initEditor() {
    gCanvas = document.querySelector('.canvas');
    ctx = gCanvas.getContext('2d');
    renderCanvasDraw();
    document.querySelector('.chosenSize').innerText = gSize;
}

function renderMemes() {
    let strHtml = '';
    const elGrid = document.querySelector('.meme-img');
    let memes = getMemes();

    memes.forEach(function(meme) {
        strHtml += ` <div style="background-image: url( ${meme.url})" " onclick ="onMemeClick(${meme.id})" class="box"></div>`
    });


    elGrid.innerHTML = strHtml;
}

function search() {
    let inputTxt = document.querySelector('.search').value;
    if (!inputTxt) {
        renderMemes();
        return;
    }
    let toShow = filterMemesBySearch(inputTxt);
    console.log(inputTxt)
    console.log(toShow)
    if (toShow < 1) return;
    else renderFilterMemes(toShow);


}

function renderFilterMemes(memes) {
    let strHtml = '';
    const elGrid = document.querySelector('.meme-img');


    memes.forEach(function(meme) {
        strHtml += ` <div style="background-image: url( ${meme.url})" " onclick ="onMemeClick(${meme.id})" class="box"></div>`
    });


    elGrid.innerHTML = strHtml;
}



function draw(ev) {

    if (gCurrLine === 1) {
        let color = document.querySelector('.color').value;
        let fontFamily = document.querySelector('.font-family').value;
        let Text = document.querySelector('.text-input').value;
        gSize = document.querySelector('.chosenSize').innerText;

        ctx.font = gSize + "px " + fontFamily;
        ctx.fillStyle = color;
        if (ev.code === 'Backspace') {
            onClearCanvas();
            Text.slice(0, -1);
            gCurrText = {
                text: Text,
                color: color,
                fontFamily: fontFamily,
                size: gSize
            };
            renderCanvasDraw();
        } else if (ev.code === 'ArrowUp') {
            y--;
            onClearCanvas();
            renderCanvasDraw();
            gCurrText = {
                text: Text,
                color: color,
                fontFamily: fontFamily,
                size: gSize
            };
        } else if (ev.code === 'ArrowDown') {
            y++;
            onClearCanvas();
            renderCanvasDraw();
            gCurrText = {
                text: Text,
                color: color,
                fontFamily: fontFamily,
                size: gSize
            };
        } else if (ev.code === 'ArrowLeft') {
            x--;
            onClearCanvas();
            renderCanvasDraw();
            gCurrText = {
                text: Text,
                color: color,
                fontFamily: fontFamily,
                size: gSize
            };
        } else if (ev.code === 'ArrowRight') {
            x++;
            onClearCanvas();
            renderCanvasDraw();
            gCurrText = {
                text: Text,
                color: color,
                fontFamily: fontFamily,
                size: gSize
            };
        }

        ctx.fillText(Text, x, y);
        gColor = color;
        gFontfamily = fontFamily;
        gText = Text;
        saveCurrText(gText, gCurrLine, y, gColor, gSize, gFontfamily, x);
    }
    if (gCurrLine === 2) {
        y = 145;
        let color = document.querySelector('.color').value;
        let fontFamily = document.querySelector('.font-family').value;
        let Text = document.querySelector('.text-input').value;
        gSize = document.querySelector('.chosenSize').innerText;

        ctx.font = gSize + "px " + fontFamily;
        ctx.fillStyle = color;

        if (ev.code === 'Backspace') {
            Text.slice(0, -1);
            gCurrText = {
                text: Text,
                color: color,
                fontFamily: fontFamily,
                size: gSize
            };
            onClearCanvas();
            renderCanvasDraw();
            renderCanvasLines();
        } else if (ev.code === 'ArrowUp') {
            y--;
            gCurrText = {
                text: Text,
                color: color,
                fontFamily: fontFamily,
                size: gSize
            };
            onClearCanvas();
            renderCanvasDraw();
            renderCanvasLines();
        } else if (ev.code === 'ArrowDown') {
            y++;
            gCurrText = {
                text: Text,
                color: color,
                fontFamily: fontFamily,
                size: gSize
            };
            onClearCanvas();
            renderCanvasDraw();
            renderCanvasLines();
        } else if (ev.code === 'ArrowLeft') {
            x--;
            gCurrText = {
                text: Text,
                color: color,
                fontFamily: fontFamily,
                size: gSize
            };
            onClearCanvas();
            renderCanvasDraw();
            renderCanvasLines();
        } else if (ev.code === 'ArrowRight') {
            x++;
            gCurrText = {
                text: Text,
                color: color,
                fontFamily: fontFamily,
                size: gSize
            };
            onClearCanvas();
            renderCanvasDraw();
            renderCanvasLines();
        }

        ctx.fillText(Text, x, y);
        gColor = color;
        gFontfamily = fontFamily;
        gText = Text;
    } else if (gCurrLine === 3) {
        y = 50;
        let color = document.querySelector('.color').value;
        let fontFamily = document.querySelector('.font-family').value;
        let Text = document.querySelector('.text-input').value;
        gSize = document.querySelector('.chosenSize').innerText;

        ctx.font = gSize + "px " + fontFamily;
        ctx.fillStyle = color;

        if (ev.code === 'Backspace') {
            Text.slice(0, -1);
            gCurrText = {
                text: Text,
                color: color,
                fontFamily: fontFamily,
                size: gSize
            };
            onClearCanvas();
            renderCanvasDraw();
            renderCanvasLines();
        } else if (ev.code === 'ArrowUp') {
            y--;
            gCurrText = {
                text: Text,
                color: color,
                fontFamily: fontFamily,
                size: gSize
            };
            onClearCanvas();
            renderCanvasDraw();
            renderCanvasLines();
        } else if (ev.code === 'ArrowDown') {
            y++;
            gCurrText = {
                text: Text,
                color: color,
                fontFamily: fontFamily,
                size: gSize
            };
            onClearCanvas();
            renderCanvasDraw();
            renderCanvasLines();
        } else if (ev.code === 'ArrowLeft') {
            x--;
            gCurrText = {
                text: Text,
                color: color,
                fontFamily: fontFamily,
                size: gSize
            };
            onClearCanvas();
            renderCanvasDraw();
            renderCanvasLines();
        } else if (ev.code === 'ArrowRight') {
            x++;
            onClearCanvas();
            renderCanvasLines();
        }

        ctx.fillText(Text, x, y);
        gColor = color;
        gFontfamily = fontFamily;
        gText = Text;
    } else {
        y = getYforNewLine(gCurrLine);
        let color = document.querySelector('.color').value;
        let fontFamily = document.querySelector('.font-family').value;
        let Text = document.querySelector('.text-input').value;
        gSize = document.querySelector('.chosenSize').innerText;

        ctx.font = gSize + "px " + fontFamily;
        ctx.fillStyle = color;

        if (ev.code === 'Backspace') {
            Text.slice(0, -1);
            gCurrText = {
                text: Text,
                color: color,
                fontFamily: fontFamily,
                size: gSize
            };
            onClearCanvas();
            renderCanvasDraw();
            renderCanvasLines();
        } else if (ev.code === 'ArrowUp') {
            y--;
            gCurrText = {
                text: Text,
                color: color,
                fontFamily: fontFamily,
                size: gSize
            };
            onClearCanvas();
            renderCanvasDraw();
            renderCanvasLines();
        } else if (ev.code === 'ArrowDown') {
            y++;
            gCurrText = {
                text: Text,
                color: color,
                fontFamily: fontFamily,
                size: gSize
            };
            onClearCanvas();
            renderCanvasDraw();
            renderCanvasLines();
        } else if (ev.code === 'ArrowLeft') {
            x--;
            gCurrText = {
                text: Text,
                color: color,
                fontFamily: fontFamily,
                size: gSize
            };
            onClearCanvas();
            renderCanvasDraw();
            renderCanvasLines();
        } else if (ev.code === 'ArrowRight') {
            x++;
            gCurrText = {
                text: Text,
                color: color,
                fontFamily: fontFamily,
                size: gSize
            };
            onClearCanvas();
            renderCanvasDraw();
            renderCanvasLines();
        }

        ctx.fillText(Text, x, y);
        gColor = color;
        gFontfamily = fontFamily;
        gText = Text;
    }


}

function onAddLine() {
    addLine(gText, gCurrLine, y, gColor, gSize, gFontfamily, x);
    gCurrLine++;
    document.querySelector('.color').value = '#000000';
    document.querySelector('.font-family').options[0].selected = "selected";
    document.querySelector('.text-input').value = ' ';
    document.querySelector('.chosenSize').innerText = 30;
    gSize = 30;
}

function saveCurrText(gText, gCurrLine, y, gColor, gSize, gFontfamily, x) {
    saveText(gText, gCurrLine, y, gColor, gSize, gFontfamily, x);
}


function onClearCanvas() {
    ctx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function onPlusSize() {
    gSize++;
    document.querySelector('.chosenSize').innerText = gSize;
}

function onMinusSize() {
    gSize--;
    document.querySelector('.chosenSize').innerText = gSize;
}


function renderKeyWords() {
    let elKeyBoard = document.querySelector('.key-words');
    let strHtml = '';
    let keyWords = getKeyWords();

    console.log(keyWords)

    for (let i = 0; i < 5; i++) {
        strHtml += ` <div id="${i}"  style="font-size: ${keyWords[i][1]*20}px " onclick ="renderFilterTopMemes(this)" class="keyWords">${keyWords[i][0]}</div>`
    }



    elKeyBoard.innerHTML = strHtml;
}


function renderFilterTopMemes(el) {
    var elTop = el.id;
    findMemeByKey(elTop);
}

function onMemeClick(memeId) {
    let input = document.querySelector('.search').value;
    addKeyWord(input);
    let meme = findMemeById(memeId);
    saveToStorage('currMeme', meme);
    window.open('edit-meme.html');


}

function onAddMeme(ev) {
    addMemeNew(ev, uploadMeme)
}

function uploadMeme(img) {
    let imgConatainer = document.querySelector('.box-moadl');
    imgConatainer.style.backgroundImage = `url(${img.src})`;
    gNewMeme = img.src;
}

function closeModal() {
    document.querySelector('.addMeme-modal').style.display = 'none';
}

function openModalNewMeme() {
    document.querySelector('.addMeme-modal').style.display = 'block';
}

function openContactModal() {
    document.querySelector('.modal-contact').style.display = 'block';
}



function addMemeToArr() {
    let newMemeKeyWord = document.querySelector('.input-modal').value;
    addNewMeme(gNewMeme, newMemeKeyWord);
    closeModal();
    renderMemes();

}

function addMemeNew(ev, onImageReady) {
    document.querySelector('.share-containe').innerHTML = '';
    var reader = new FileReader();

    reader.onload = function(event) {
        var img = new Image();
        img.onload = onImageReady.bind(null, img)
        addMeme(img);
        img.src = event.target.result;
    }
    reader.readAsDataURL(ev.target.files[0]); /// 

}

function renderCanvasBackGround(img) {
    console.log(img);
    let meme = loadFromStorage('currMeme');
    if (!img) {
        gCanvas.style.backgroundImage = "url(" + meme.url + ")";
    } else {
        gCanvas.style.backgroundImage = "url(" + img.src + ")";
    }

}


function renderCanvasLines() {
    var lines = getLines();
    lines.forEach(function(line) {
        ctx.font = line.size + "px " + line.fontFamily;
        ctx.fillStyle = line.color;
        ctx.fillText(line.txt, line.x, line.y);
    });

}


function renderCanvasDraw(img) {
    let meme = loadFromStorage('currMeme');
    if (!img) {
        img = document.querySelector('.img');
        img.onload = () => {
            ctx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
            var lines = getLines();
            ctx.font = gCurrText.size + "px " + gCurrText.fontFamily;
            ctx.fillStyle = gCurrText.color;
            ctx.fillText(gCurrText.text, x, y);
            lines.forEach(function(line) {
                ctx.font = line.size + "px " + line.fontFamily;
                ctx.fillStyle = line.color;
                ctx.fillText(line.txt, line.x, line.y);
            });


        }
        img.src = meme.url;
    } else {
        ctx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
        var lines = getLines();
        lines.forEach(function(line) {
            ctx.font = line.size + "px " + line.fontFamily;
            ctx.fillStyle = line.color;
            ctx.fillText(line.txt, line.x, line.y);
        });

    }

}

function onSaveCanvas(elLink) {
    const data = gCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-img.jpg';
}

function onFileInputChange(ev) {
    handleImageFromInput(ev, renderCanvasDraw)
}


function handleImageFromInput(ev, onImageReady) {
    document.querySelector('.share-container').innerHTML = '';
    var reader = new FileReader();

    reader.onload = function(event) {
        var img = new Image();
        img.onload = onImageReady.bind(null, img)
        addMeme(img);
        img.src = event.target.result;
    }
    reader.readAsDataURL(ev.target.files[0]); ///
}

function closeModalContact() {
    document.querySelector('.modal-contact').style.display = 'none';
}

function sendMail() {

    var email = document.querySelector('.email').value;
    var subject = document.querySelector('.subject').value;
    var msg = document.querySelector('.message').value;

    var emailLink = createEmailLink(subject, msg);
    window.open(emailLink)
}