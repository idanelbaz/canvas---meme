'use strict'

let gKeyWords = {};
let gMemes;
let gId = 0;
let gLines = [];
let gCurrTextArr = [];
let gTopKeyWords;





function saveText(txt, id, y, color, size, fontFamily, x) {
    let line = {
        txt: txt,
        color: color,
        size: size,
        fontFamily: fontFamily,
        lineNumber: id,
        y: y,
        x: x
    }

    gCurrTextArr.push(line);
}

function getKeyWords() {
    let keyWords = loadFromStorage('keyWords');
    let topKey = [];
    let TopFive = [];
    let topEx = [
        ['president', 1],
        ['cute', 3],
        ['man', 1],
        ['hero', 2],
        ['baby', 3]
    ];

    for (var key in keyWords) {
        topEx.push([key, keyWords[key]])
    }

    topEx.sort(function(a, b) {
        return b[1] - a[1];
    });

    for (let i = 0; i < 5; i++) {
        TopFive.push(topEx[i])
    }

    let num = TopFive[0];
    TopFive.splice(0, 1);
    TopFive.splice(2, 0, num)
    gTopKeyWords = TopFive;
    return TopFive;

}


function filterMemesBySearch(txt) {
    if (!txt) return;
    let match = gMemes.filter(function(meme) {
        return (!meme.keyWords.search(txt))
    })

    return match;
}

function findMemeByKey(elTop) {
    let topKey = gTopKeyWords[elTop];
    let memeByKey = filterMemesBySearch(topKey[0]);
    renderFilterMemes(memeByKey);
}

function addKeyWord(word) {
    if (!word) return;
    gKeyWords = loadFromStorage('keyWords');
    if (!gKeyWords) gKeyWords = {};
    if (gKeyWords[word]) gKeyWords[word] += 1;
    else gKeyWords[word] = 1;
    saveToStorage('keyWords', gKeyWords);
}

function setKeyWordsTop() {
    let keyWords = loadFromStorage('keyWords');

}



function addMeme(img, text) {

}

function createMeme(url, keyWords) {
    return {
        url: url,
        id: ++gId,
        keyWords: keyWords,
    }
}

function createMemes() {
    if (!loadFromStorage('gMemes')) {
        gMemes = [createMeme('meme-imgs/2.jpg', 'mountain woman alps'), createMeme('meme-imgs/003.jpg', 'president trump usa'), createMeme('meme-imgs/004.jpg', 'dogs couple'), createMeme('meme-imgs/005.jpg', 'baby dogs family'), createMeme('meme-imgs/5.jpg', 'baby yes'), createMeme('meme-imgs/006.jpg', 'cats animels'), createMeme('meme-imgs/8.jpg', 'clowen man funny'), createMeme('meme-imgs/9.jpg', 'baby cute'), createMeme('meme-imgs/12.jpg', 'man haim true'), createMeme('meme-imgs/19.jpg', 'man crazy crown'), createMeme('meme-imgs/ancient-aliens.jpg', 'man aliens new'), createMeme('meme-imgs/drevil.jpg', 'dr movie evil'), createMeme('meme-imgs/img2.jpg', 'kids africa happy'), createMeme('meme-imgs/img4.jpg', 'president trump usa angry'), createMeme('meme-imgs/img5.jpg', 'baby cute'), createMeme('meme-imgs/img6.jpg', 'dogs cute crazy'), createMeme('meme-imgs/img11.jpg', 'president obama happy'), createMeme('meme-imgs/img12.jpg', 'man sport basketball happy'), createMeme('meme-imgs/leo.jpg', 'movies actor leonardo man'), createMeme('meme-imgs/meme1.jpg', 'matrix man glasses angry'), createMeme('meme-imgs/patrick.jpg', 'man movies aliens space'), createMeme('meme-imgs/putin.jpg', 'president putin rusia leader')];
    } else {
        gMemes = loadFromStorage('gMemes');
    }

}

function addNewMeme(img, txt) {
    gMemes.unshift(createMeme(img, txt));
    saveToStorage('gMemes', gMemes);
}

function getYforNewLine(currLine) {
    var line = gLines.find(function(liner) {
        return liner.lineNumber === (currLine - 1);
    });

    var newLine = line.y + 25

    return newLine;
}

function getLastY(currLine) {
    var lastLine = gLines.find(function(liner) {
        return liner.lineNumber === currLine;
    });
    var last = lastLine.y
    return last;

}

function getLines() {
    return gLines;
}

function addLine(txt, id, y, color, size, fontFamily, x) {
    var line = {
        txt: txt,
        color: color,
        size: size,
        fontFamily: fontFamily,
        lineNumber: id,
        y: y,
        x: x
    }

    gLines.push(line);
}

function getMemes() {
    return gMemes;
}

// on submit call to this function
function uploadImg(elForm, ev) {
    ev.preventDefault();

    document.getElementsByClassName('.img').value = gCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        console.log('uploadedImgUrl', uploadedImgUrl);

        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}`);
    }

    doUploadImg(elForm, onSuccess);
}

function doUploadImg(elForm, onSuccess) {
    var formData = new FormData(elForm);

    fetch('http://ca-upload.com/here/upload.php', {
            method: 'POST',
            body: formData
        })
        .then(function(response) {
            return response.text()
        })
        .then(onSuccess)
        .catch(function(error) {
            console.error(error)
        })
}


function createEmailLink(subject, msg) {
    return 'https://mail.google.com/mail/?view=cm&fs=1&to=' + 'idanelbaz@gmail.com' + '&su=' + subject + '&body=' + msg;
}



// facebook api
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/he_IL/sdk.js#xfbml=1&version=v3.0&appId=807866106076694&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));