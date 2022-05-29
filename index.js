const dropzone = document.querySelector('main'); 
var animationSelector = 0;

//Array that will contain
let pixels = new Array(10).fill(new Array(180000));
const SECTORSIZE = 10;
const DIMENSIONS = 4;

class Kastl {
    /*
    [
        [ ... ],
        [ ... ],
        [ ... ],
        [ ... ],
        [ ... ]
    ]
    */

    constructor() {
        this.pointer = 0;
        this.data = new Array(SECTORSIZE * DIMENSIONS);
    }

    update(line) {
        data[pointer] = line;
        pointer++;
    }

    update(line, num) {
        data[num] = line;
    }

}


dropzone.addEventListener('dragenter', event => { 
    event.preventDefault();
    dropzone.classList.add('active');
});

dropzone.addEventListener('dragleave', event  => {
    event.preventDefault();
    dropzone.classList.remove('active');
});

dropzone.addEventListener('dragover', event => {
    event.preventDefault();
});

dropzone.addEventListener('drop', event => {
    event.preventDefault();
    dropzone.classList.remove('active');

    const list = event.dataTransfer.files;

    for(let step = 0; step < list.length; step++) {
    
        const file = event.dataTransfer.files[step];
        const reader = new FileReader(); // File reader= class, reader= object 
    
        reader.readAsDataURL(file);

        reader.addEventListener('loadend', () => {
            const img = document.createElement('img');
            img.src = reader.result;    
           
            const x = Math.random()*(dropzone.offsetWidth-100);
            const y = Math.random()*(dropzone.offsetHeight-100);
            img.style.left = x + 'px';
            img.style.top= y + 'px';

            //width: calc((100vw - 35px) / 10);
            //height: calc((100vw - 35px) / 10);

            var width = img.offsetWidth;
            var height = img.offsetHeight;
            

            if(width > height) {
                height = height / width;
                width = 1;
            } else if(height > width) {
                width = width / height;
                height = 1;
            } else {
                height = 1;
                width = 1;
            }
            
            animationSelector = Math.floor(Math.random() * 11);
         
            img.style.position = "absolute";
            img.style.width = "calc(100px * " + width + ")"
            img.style.height = "calc(100px * " + height + ")";
         
            if (animationSelector == 0) {
                console.log(animationSelector)
                setImageAnimation(img, "calc(100px * " + width + ")", "calc(100px * " + height + ")", "transform1", Math.floor(Math.random() * 500)+"s", "infinite");
                img.style.transform = "rotate(0deg) skewY(0deg)";
                img.style.animationIterationCount = "infinite";
                dropzone.append(img);
            }else if (animationSelector == 1) {
                console.log(animationSelector)
                img.style.position = "absolute";
                setImageAnimation(img, "400px", "300px", "feGaussianBlur", Math.floor(Math.random() * 200)+"s", "auto");
                img.style.filter = "blur(1.5rem)"
                dropzone.append(img);
            }else if (animationSelector == 2) {
                console.log(animationSelector)
                setImageAnimation(img, "600px", "300px", "invert", Math.floor(Math.random() * 200)+"s", "auto");
                img.style.position = "absolute";
                img.style.filter = "invert(1)"
                dropzone.append(img);
            } else if (animationSelector == 3) {
                console.log(animationSelector)
                setImageAnimation(img, "30px", "30px", "opacity", Math.floor(Math.random() * 100)+"s", "1");
                img.style.filter = "opacity(0)"
                dropzone.append(img);
            } else if (animationSelector == 4) {
                console.log(animationSelector)
                setImageAnimation(img, "50px", "400px", "transform2", Math.floor(Math.random() * 5000)+"s", "1");
                img.style.transform = "scale(1000, 0.5)";
                dropzone.append(img);
            } else if (animationSelector == 5) {
                console.log(animationSelector)
                setImageAnimation(img, "400px", "60px", "transform3", Math.floor(Math.random() * 5000)+"s", "1");
                img.style.transform = "scale(1000, 0.5)";
                dropzone.append(img);
            } else if (animationSelector >= 6 && animationSelector <= 12) {
                let image = new Image();
                image.src = img.src;
                image.onload = function() {
                    const canvas = document.getElementById('canvas');
                    const virtCanvas = document.getElementById('virt-canvas');
                    
                    const imageWidth = makeDevidableByTen(Math.random() * canvas.width);
                    const imageHeight = makeDevidableByTen(Math.random() * canvas.height);

                    const leftPos = makeDevidableByTen(Math.random() * (canvas.width - imageWidth));
                    const topPos = makeDevidableByTen(Math.random() * (canvas.height - imageHeight));
                    
                    var ctx = canvas.getContext('2d'); 
                    var virtCtx = virtCanvas.getContext('2d');

                    virtCtx.drawImage(image, leftPos, topPos, imageWidth, imageHeight);

                    var virtImageData = virtCtx.getImageData(leftPos, topPos, imageWidth, imageHeight);
                    var imageData = ctx.getImageData(leftPos, topPos, imageWidth, imageHeight);

                    manipulatePixels(virtImageData, imageData)
                    
                    ctx.putImageData(imageData, leftPos, topPos)
                }
            }
        });   
    };
});

//function that takes a image as a parameter with all of the different properties, assigns them to the image
//made to compact code and reduce repeated code
function setImageAnimation(img, width, height, animationName, animationDuration, animationIterationCount) {
    img.style.width = width;
    img.style.height = height;
    img.style.animationName = animationName;
    img.style.animationDuration = animationDuration;
    img.style.animationIterationCount = animationIterationCount;
    img.style.opacity = Math.random()
}

//data: is the array of channels for all of the pixels of a single image
//width and height: size of the image in pixels not in channels
function manipulatePixels(newImage, targetData) {
    const width = newImage.width;
    const height = newImage.height;
    const deletes = new Array(height / SECTORSIZE);

    for(let i = 0; i < deletes.length; i++) {
        deletes[i] = new Array(width / SECTORSIZE);
        for(let j = 0; j < deletes[i].length; j++) {
            deletes[i][j] = Math.random() > 0.5;
        }
    }
    
    /*
        [
            [new Kastl, new Kastl, new Kastl, new Kastl, new Kastl],
            [],
            [],
            [],
            []
        ]
    */
    
    let currentX = 0, currentY = 0;
    const newArray = new Array(newImage.data.length);
    for(
        let i = 0;
        i < (height / SECTORSIZE) * (width * DIMENSIONS * SECTORSIZE);
        i += (width * DIMENSIONS * SECTORSIZE)
    ) {
        for(
            let h = i; 
            h < width * DIMENSIONS * SECTORSIZE + i;
            h += width * DIMENSIONS
        ) {
            for(
                let k = h;
                k < (width * DIMENSIONS) + h;
                k += SECTORSIZE * DIMENSIONS
            ) {
                if(deletes[currentY][currentX]) {
                    for(let l = k; l < k + (SECTORSIZE * DIMENSIONS); l++) {
                        targetData.data[l] = newImage.data[l];
                    }
                }
                currentX++;
            }
            currentX = 0;
        }
        currentY++;
        currentX = 0;
    }
}


function makeDevidableByTen(number) {
    if(number % 10 == 0) {
        return number
    }
    const final = number - number % 10
    if(final < 0) {
        return 0;
    }
    return final;
}
/*
const interval = setInterval(function() {
    console.log("hello");
}, 5000);*/

