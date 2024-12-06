function openWindow(max_windows) {
    let counter = 0;

    const x = Math.random() * window.screen.width;
    const y = Math.random() * window.screen.height;

    const newWindow = window.open(
        "",
        `AnnoyingWindow${counter}`,
        `width=400,height=300,left=${x},top=${y}`
    );

    fetch('https://raw.githubusercontent.com/lopeklol/theannoyingsite/main/open.html')
    .then(response => response.text())
    .then(data => {
        newWindow.document.write(data);
    })

    if (newWindow) {
        const images = [
            "https://i.ibb.co/qgY7bhr/image.png",
            "https://i.ibb.co/DpW5PT3/XDDD.gif",
            "https://i.ibb.co/xftY2xp/Linek.webp",
            "https://i.ibb.co/mXwk1bY/linek2.webp",
        ];

        const videos = [
            "https://www.youtube.com/watch?v=xvFZjo5PgG0",
            "https://www.w3schools.com/html/movie.mp4"
        ];

        const contentType = Math.random() < 0.5 ? 'image' : 'video';
        let content;
        if (contentType === 'image') {
            content = `<img src="${images[Math.floor(Math.random() * images.length)]}" alt="Random Image" style="width:100%; height:auto;">`;
        } else {
            content = `<video controls style="width:100%; height:auto;">
                        <source src="${videos[Math.floor(Math.random() * videos.length)]}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>`;
        }

        newWindow.document.addEventListener("DOMContentLoaded", function() {
            newWindow.document.querySelector("#content").innerHTML = content;
        });

        counter++;
    }

    if (counter < max_windows) {
        setTimeout(openWindow, 500);
    }
};

document.body.addEventListener("click", function () {
    openWindow(3);
});