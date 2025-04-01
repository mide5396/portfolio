var currentImageIndex = 0;
var imagesArray = [];

const modalInfoData = {
    "Letterboxd":{
        title: "Letterboxd Redesign",
        description: "For my HCI class, I redesigned the Letterboxd website.",
        media: 'https://embed.figma.com/proto/UY99l1LoPMrW7fMK30lW5f/Pixel-Mock?node-id=1-2&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&embed-host=michaeldempsey-portfolio',
        type: "figma"
    },
    "Timeline":{
        title: "Timeline",
        description: "For my HCI class, I built a timeline of my life.",
        media: 'https://embed.figma.com/proto/nU9KdWyrW77SM0N7u68HLJ/Project-1%3A-Interactive-Autobiography?node-id=2-2&starting-point-node-id=2%3A2&embed-host=michaeldempsey-portfolio',
        type: "figma"
    },
    "SpaceGame":{
        title: "Space Game",
        description: "Developed a game set in space in Unity.",
        media: [ 'Space01.PNG', 'Space02.PNG' ],
        type: "image"
    },
    "SwanKing":{
        title: "Swan King",
        description: "Developed in Unity.",
        media: [ 'SK01.PNG', 'SK02.PNG', 'SK03.PNG' ],
        type: "image"
    },
    "WitchGame":{
        title: "Witch Game",
        description: "Developed in Unity.",
        media: [ 'W01.PNG' ],
        type: "image"
    },
    "House":{
        title: "Ring Camera",
        description: "Developed for a video in Blender",
        media: [ 'House01.png', 'House02.png' ],
        type: "image"
    },
    "Comic":{
        title: "Comic",
        description: "Created for my comics class",
        media: [ 'Comic01.JPG', 'Comic02.JPG', 'Comic03.JPG'],
        type: "image"
    },
    "Cave":{
        title: "Drive to Cave",
        description: "Animated in Blender",
        media: "https://www.youtube.com/embed/48jYBSJvXPQ",
        type: "video"
    },
    "RedSun":{
        title: "Red Sun",
        description: "Animated in Blender",
        media: "https://www.youtube.com/embed/3664RQ_G_Ak",
        type: "video"
    },
    "Lion":{
        title: "Lion",
        description: "Animated in Adobe Animate",
        media: "https://www.youtube.com/embed/W08Ox0xXkc0",
        type: "video"
    },
    "CaseFiles":{
        title: "Case Files",
        description: "Edited in DaVinci Resolve",
        media: "https://www.youtube.com/embed/rUIJDiAoWE4",
        type: "video"
    },
    "BiologicalNetworks":{
        title: "Inferring GRNs Paper",
        description: "For my biological networks class",
        media: "BiologicalNetworksPaper.pdf",
        type: "pdf"
    },
    "BioNetPresentation":{
        title: "Inferring GRNs Presentation",
        description: "For my Biological Networks class",
        media: "BiologicalNetworksPres.pdf",
        type: "pdf"
    },
    "SuperspreadingPaper":{
        title: "Superspreading Paper",
        description: "For my Infectious Diseases class",
        media: "InfectiousDiseasePaper.pdf",
        type: "pdf"
    },
    "PhageLab":{
        title: "Phage Lab",
        description: "For my Phage Lab",
        media: "Phage Lab Poster.pdf",
        type: "pdf"
    }

}

function openVideoModal(modalInfo) {
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

function openModal(modalType) {
    const content = modalInfoData[modalType];
    if (!content) {
        console.error("Modal content not found!");
        return;
    }

    const modal = document.getElementById(content.type + 'Modal');
    const iframe = document.getElementById(content.type + 'Iframe');
    const img = document.getElementById('modalImage');
    const explainer = document.getElementById(content.type + 'ModalExplainer');

    if (content.type == "video" || content.type == "figma") {
        iframe.src = content.media;
        modal.querySelector('.modal-content-container').classList.add('with-sidebar');
    } else if (content.type == "image") {
        img.src = content.media[0];
        imagesArray = content.media;
        currentImageIndex = 0; 
        modal.querySelector('.modal-content-container').classList.add('with-sidebar');
    } else if (content.type == "pdf")
    {
        var pdfViewer = document.getElementById('pdfViewer');
        pdfViewer.src = content.media;  
    }


    explainer.innerHTML = `
        <h1>${content.title}</h1>
        <p>${content.description}</p>
    `;
    
    modal.style.display = 'block';
}

function closeModal(modalType) {
    const content = modalInfoData[modalType];
    if (!content) {
        console.error("Modal content not found!");
        return;
    }
    const modal = document.getElementById(content.type + 'Modal');
    const iframe = document.getElementById(content.type + 'Iframe');
    const img = document.getElementById('modalImage');
    const pdfViewer = document.getElementById('pdfViewer');

    if (content.type == "video" || content.type == "figma") {
        iframe.src = ''; 
    } else if (content.type == "image") {
        img.src = '';
    }

    modal.style.display = 'none';
    modal.querySelector('.modal-content-container').classList.remove('with-sidebar');
}

function openFigmaModal(modalInfo) {
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

function openPdfModal(modalInfo) {
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

function openImageModal(modalInfo) {
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