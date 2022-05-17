const dropzone = document.querySelector('main'); 
var animationSelector = 0;

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
        
        console.log(file.type);
        reader.readAsDataURL(file);

        reader.addEventListener('loadend', () => {
            const img = document.createElement('img');
            img.src = reader.result;    
           
            var x = Math.random()*(dropzone.offsetWidth-100);
            var y = Math.random()*(dropzone.offsetHeight-100);
            img.style.left = x + 'px';
            img.style.top= y + 'px';

            dropzone.append(img);
            
            //width: calc((100vw - 35px) / 10);
            //height: calc((100vw - 35px) / 10);

            var width = img.offsetWidth; //5
            var height = img.offsetHeight; //4
            

            if(width > height) { //true
                height = height / width; // 0,8
                width = 1;
            } else if(height > width) {
                width = width / height;
                height = 1;
            } else {
                height = 1;
                width = 1;
            }

            
            
           
         animationSelector = Math.floor(Math.random() * 11);
            
         if (animationSelector == 0) {
           
            img.style.position = "absolute";
            img.style.width = "calc(100px * " + width + ")"
            img.style.height = "calc(100px * " + height + ")";
            img.style.transform = "rotate(0deg) skewY(0deg)";
            img.style.animationName = "transform";
            img.style.animationDuration = Math.floor(Math.random() * 100)+"s";
            img.style.animationIterationCount = "infinite";
            }

        if (animationSelector == 1) {
           
            img.style.position = "absolute";
            img.style.width = "300px" ;
            img.style.height = "300px";
            img.style.animationName = "feGaussianBlur";
            img.style.animationDuration = Math.floor(Math.random() * 200)+"s";
            }

        if (animationSelector == 2) {
           
            img.style.width = "30px" ;
            img.style.height = "30px";
            img.style.animationName = "transform";
            img.style.animationDuration = Math.floor(Math.random() * 100)+"s";
            img.style.animationIterationCount = "infinite";
            }
       
        if (animationSelector == 3) {
           
            img.style.width = "30px" ;
            img.style.height = "30px";
            img.style.animationName = "transform";
            img.style.animationDuration = Math.floor(Math.random() * 100)+"s";
            img.style.animationIterationCount = "infinite";
            }    
        if (animationSelector == 4) {
           
            img.style.width = "30px" ;
            img.style.height = "30px";
            img.style.animationName = "transform";
            img.style.animationDuration = Math.floor(Math.random() * 100)+"s";
            img.style.animationIterationCount = "infinite";
            }
    
        if (animationSelector == 5) {
               
            img.style.width = "30px" ;
            img.style.height = "30px";
            img.style.animationName = "transform";
            img.style.animationDuration = Math.floor(Math.random() * 100)+"s";
            img.style.animationIterationCount = "infinite";
            }
           
        if (animationSelector == 6) {
               
            img.style.width = "30px" ;
            img.style.height = "30px";
            img.style.animationName = "transform";
            img.style.animationDuration = Math.floor(Math.random() * 100)+"s";
            img.style.animationIterationCount = "infinite";
            }

        if (animationSelector == 7) {
           
            img.style.width = "30px" ;
            img.style.height = "30px";
            img.style.animationName = "transform";
            img.style.animationDuration = Math.floor(Math.random() * 100)+"s";
            img.style.animationIterationCount = "infinite";
            }
    
        if (animationSelector == 8) {
               
            img.style.width = "30px" ;
            img.style.height = "30px";
            img.style.animationName = "transform";
            img.style.animationDuration = Math.floor(Math.random() * 100)+"s";
            img.style.animationIterationCount = "infinite";
            }
           
        if (animationSelector == 9) {
               
            img.style.width = "30px" ;
            img.style.height = "30px";
            img.style.animationName = "transform";
            img.style.animationDuration = Math.floor(Math.random() * 100)+"s";
            img.style.animationIterationCount = "infinite";
            }    
            
        if (animationSelector == 10) {
               
                img.style.width = "30px" ;
                img.style.height = "30px";
                img.style.animationName = "transform";
                img.style.animationDuration = Math.floor(Math.random() * 100)+"s";
                img.style.animationIterationCount = "infinite";
                }
        
        if (animationSelector == 11) {
                   
                img.style.width = "30px" ;
                img.style.height = "30px";
                img.style.animationName = "transform";
                img.style.animationDuration = Math.floor(Math.random() * 100)+"s";
                img.style.animationIterationCount = "infinite";
                }
            
        });   
    };
});






