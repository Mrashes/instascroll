function addImg(imgArray) {
    // Get id
    var imgDiv = document.getElementById('newimg');
    for (i=0; i<imgArray.length; i++){
        // create div
        var img = document.createElement('img');
        img.src = imgArray[i];
        //styling for control
        img.style = "height: 300px;"
        // appending div in
        imgDiv.appendChild(img);
    }
}