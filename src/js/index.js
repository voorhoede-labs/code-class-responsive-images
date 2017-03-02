(function() {
    var outputElement = document.querySelector('output');
    var imageElement = document.querySelector('img');

    showCurrentImgSource();

    window.addEventListener('resize', function(e) {
        showCurrentImgSource();
    });

    function showCurrentImgSource() {
        var currentSource = imageElement.currentSrc;
        return outputElement.innerText = currentSource.substring(currentSource.lastIndexOf('/') + 1)
    }
})();


