const dropzone = document.querySelector('main');

dropzone.addEventListener('dragenter', event => { 
    event.preventDefault();
    dropzone.classList.add('active');
});

dropzone.addEventListener('dragleave', event  => {
    event.preventDefault();
    dropzone.classList.remove('active');
})

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
    
});




