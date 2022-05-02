const dropzone = document.querySelector('main'); 

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
        console.log(event.dataTransfer.files)

        reader.addEventListener('loadend', () => {
            const img = document.createElement('img');
            img.src = reader.result;
            dropzone.append(img);

        });   

    };
    for(var i = 0; i < list.length; i++) {
        var x = Math.random()*screen.width;
        var y = Math.random()*screen.height;
        var img = document.createElement('div');
        img.className = 'img';
        img.style.left = x + 'px';
        img.style.top= y + 'px';
        document.body.appendChild(img);
    }
    
});






