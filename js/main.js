var currentImageIndex = 0;
var imagesArray = [];

const modalInfoData = {
    "Letterboxd":{
        title: "Letterboxd Redesign",
        software: "Software: Figma",
        authors: "Authors: Michael Dempsey",
        description: "Description: This was an assignment I worked on for my HCI class. The task was to redesign a pre-existing website, and I ended up choosing Letterboxd. I tried to space out the elements a bit more and brought up the review section to be visible when you first load the site.",
        media: 'https://embed.figma.com/proto/UY99l1LoPMrW7fMK30lW5f/Pixel-Mock?node-id=1-2&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&embed-host=michaeldempsey-portfolio',
        type: "figma"
    },
    "Timeline":{
        title: "Timeline",
        software: "Software: Figma",
        authors: "Authors: Michael Dempsey",
        description: "Description: This was an assignment I worked on for my HCI class. The task was to design a timeline of your life, placing a minimum number of events throughout.",
        media: 'https://embed.figma.com/proto/nU9KdWyrW77SM0N7u68HLJ/Project-1%3A-Interactive-Autobiography?node-id=2-2&starting-point-node-id=2%3A2&embed-host=michaeldempsey-portfolio',
        type: "figma"
    },
    "SpaceGame":{
        title: "Space Game",
        software: "Software: Unity, Blender",
        authors: "Authors: Michael Dempsey",
        description: "Description: This was just a project I worked on for fun. The models were created in Blender, and the game itself was developed in Unity. The game was set on a spaceship, where you are followed by an alien.",
        media: [ 'Space01.PNG', 'Space02.PNG' ],
        type: "image"
    },
    "SwanKing":{
        title: "Swan King",
        software: "Software: Unity, Blender",
        authors: "Authors: Michael Dempsey",
        description: "Description: Swan King is a mobile game where you play as a racooon navigating a dungeon filled with enemies.",
        media: [ 'SK01.PNG', 'SK02.PNG', 'SK03.PNG' ],
        type: "image"
    },
    "WitchGame":{
        title: "Witch Game",
        software: "Software: Unity, Blender",
        authors: "Authors: Michael Dempsey",
        description: "Description: This was a game inspired by Robert Eggers' The Witch.",
        media: [ 'W01.PNG' ],
        type: "image"
    },
    "House":{
        title: "Ring Camera",
        software: "Software: Blender",
        authors: "Authors: Michael Dempsey",
        description: "Description: I modeled this scene in Blender for a video project. The textures came from https://ambientcg.com/ and https://pixabay.com/.",
        media: [ 'House01.png', 'House02.png' ],
        type: "image"
    },
    "Comic":{
        title: "Comic",
        software: "Software: Photoshop",
        authors: "Authors: Michael Dempsey",
        description: "Description: I made this artwork for a comics class. The comic was titled 'Passing Days', and it was about the end of the world.",
        media: [ 'Comic01.JPG', 'Comic02.JPG', 'Comic03.JPG'],
        type: "image"
    },
    "Cave":{
        title: "Drive to Cave",
        software: "Software: Blender",
        authors: "Authors: Michael Dempsey",
        description: "Description: I modeled and animated this scene in Blender for a video project. The textures came from https://ambientcg.com/.",
        media: "https://www.youtube.com/embed/48jYBSJvXPQ",
        type: "video"
    },
    "RedSun":{
        title: "Red Sun",
        software: "Software: Blender",
        authors: "Authors: Michael Dempsey",
        description: "Description: I modeled and animated this scene in Blender for a video project.",
        media: "https://www.youtube.com/embed/3664RQ_G_Ak",
        type: "video"
    },
    "Lion":{
        title: "Lion",
        software: "Software: Adobe Animate",
        authors: "Authors: Michael Dempsey",
        description: "Description: I animated this lion for an animation class.",
        media: "https://www.youtube.com/embed/W08Ox0xXkc0",
        type: "video"
    },
    "CaseFiles":{
        title: "Case Files",
        software: "Software: DaVinci Resolve",
        authors: "Authors: Michael Dempsey",
        description: "Description: I edited this video in DaVinci Resolve, using various animations I made in Blender.",
        media: "https://www.youtube.com/embed/rUIJDiAoWE4",
        type: "video"
    },
    "BiologicalNetworks":{
        title: "Inferring GRNs Paper",
        software: "Coded in: Python and R",
        authors: "Authors: Michael Dempsey",
        description: "Description: For my biological networks class, I did my final project on inferring gene regulatory networks in patients with prostate cancer. The paper was based on 'Prostate Cancer Gene Regulatory Network Inferred from RNA-Seq Data', by Moore et al.",
        media: "BiologicalNetworksPaper.pdf",
        type: "pdf"
    },
    "BioNetPresentation":{
        title: "Inferring GRNs Presentation",
        software: "Coded in: Python and R",
        authors: "Authors: Michael Dempsey",
        description: "Description: This was the presentation attached with my final paper for my biological networks class.",
        media: "BiologicalNetworksPres.pdf",
        type: "pdf"
    },
    "SuperspreadingPaper":{
        title: "Superspreading Paper",
        software: "Coded in: Python",
        authors: "Authors: Michael Dempsey, David Katilius",
        description: "Description: For my infectious disease modeling class, we did our final project on modeling superspreading events. The project was based on 'Superspreading and the effect of individual variation on disease emergence' by Lloyd-Smith et al.",
        media: "InfectiousDiseasePaper.pdf",
        type: "pdf"
    },
    "PhageLab":{
        title: "Phage Lab",
        software: "Tools and Techniques: PCR, Gel Electrophoresis, Incubator, Pipettes, Centrifuge",
        authors: "Authors: Michael Dempsey, Aaron Levy",
        description: "Description: This was a presentation we made for our phage lab. In this lab, we took a dirt sample and isolated a phage.",
        media: "Phage Lab Poster.pdf",
        type: "pdf"
    }

}

function openVideoModal() {
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
    } else if (content.type == "pdf") {
        var pdfViewer = document.getElementById('pdfViewer');
        pdfViewer.src = content.media;  
    }
    
    explainer.innerHTML = `
        <h1>${content.title}</h1>
        <p>${content.software}</p>
        <p>${content.authors}</p>
        <p>${content.description}</p>
    `;
    
    modal.style.display = 'block';
}

function closeModal(modalType) {
    const content = modalInfoData[modalType];
    const modal = document.getElementById(content.type + 'Modal');
    const iframe = document.getElementById(content.type + 'Iframe');
    const img = document.getElementById('modalImage');

    if (content.type == "video" || content.type == "figma") {
        iframe.src = ''; 
    } else if (content.type == "image") {
        img.src = '';
    }

    modal.style.display = 'none';
    modal.querySelector('.modal-content-container').classList.remove('with-sidebar');
}

function openFigmaModal() {
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

function openPdfModal() {
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

function openImageModal() {
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
    modalImage.src = ""; 
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