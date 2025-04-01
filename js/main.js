var currentImageIndex = 0;
var imagesArray = [];

function openVideoModal(videoUrl) {
    var modal = document.getElementById('videoModal');
    var iframe = document.getElementById('videoIframe');
    iframe.src = videoUrl; 
    modal.style.display = "block";
}

function closeVideoModal() {
    var modal = document.getElementById('videoModal');
    var iframe = document.getElementById('videoIframe');
    iframe.src = ""; 
    modal.style.display = "none";
}

function openFigmaModal(figmaUrl) {
    var modal = document.getElementById('figmaModal');
    var iframe = document.getElementById('figmaIframe');
    iframe.src = figmaUrl; 
    modal.style.display = "block";
}

function closeFigmaModal() {
    var modal = document.getElementById('figmaModal');
    var iframe = document.getElementById('figmaIframe');
    iframe.src = ""; 
    modal.style.display = "none";
}

function openPdfModal(pdfUrl) {
    var modal = document.getElementById('pdfModal');
    var pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.src = pdfUrl;  
    modal.style.display = "block";
}

function closePdfModal() {
    var modal = document.getElementById('pdfModal');
    var pdfViewer = document.getElementById('pdfViewer');
    pdfViewer.src = ""; 
    modal.style.display = "none";
}

function openImageModal(images) {
    imagesArray = images;
    currentImageIndex = 0; 
    var modal = document.getElementById('imageModal');
    var modalImage = document.getElementById('modalImage');
    modalImage.src = imagesArray[currentImageIndex]; 
    modal.style.display = "block";
}

function closeImageModal() {
    var modal = document.getElementById('imageModal');
    var modalImage = document.getElementById('modalImage');
    modalImage.src = ""; // Clear the image source
    modal.style.display = "none";
}

function changeImage(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = imagesArray.length - 1;
    if (currentImageIndex >= imagesArray.length) currentImageIndex = 0;
    var modalImage = document.getElementById('modalImage');
    modalImage.src = imagesArray[currentImageIndex];
}

var closeBtn = document.getElementsByClassName("close");
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        closeVideoModal();
        closeFigmaModal();
        closeImageModal();
        closePdfModal();
    }
}

function showTab(tabName) {
    var contents = document.querySelectorAll('.tab-content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    document.getElementById(tabName).classList.add('active');
    var activeTab = document.querySelector(`.tab[data-tab="${tabName}"]`);
    activeTab.classList.add('active');
}

window.onclick = function(event) {
    var modals = document.querySelectorAll('.modal'); 
    modals.forEach(function(modal) {
        if (event.target === modal) {
            closeModal(modal);  
        }
    });
};

function closeModal(modal) {
    var modalContent = modal.querySelector('.modal-content');  
    if (modalContent) {
        modal.style.display = "none"; 
    }
    if (modal.id === 'pdfModal') {
        var pdfViewer = document.getElementById('pdfViewer');
        pdfViewer.src = "";  
    } else if (modal.id === 'videoModal') {
        var iframe = document.getElementById('videoIframe');
        iframe.src = ""; 
    } else if (modal.id === 'figmaModal') {
        var iframe = document.getElementById('figmaIframe');
        iframe.src = "";  
    } else if (modal.id === 'imageModal') {
        var modalImage = document.getElementById('modalImage');
        modalImage.src = ""; 
    }
}