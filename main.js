function speak1() {
    setTimeout(function() 
{
    imgId = 'selfie1';
    takeSelfie();
    speakData = 'Tirando sua selfie em 5 segundos';
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);

 }, 5000)
}

function speak2() {
    setTimeout(function() 
{
    imgId = 'selfie2';
    takeSelfie();
    speakData = 'Tirando sua segunda selfie em 10 segundos';
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);

 }, 10000)
}

function speak3() {
    setTimeout(function() 
{
    imgId = 'selfie3';
    takeSelfie();
    speakData = 'Tirando sua selfie em 15 segundos';
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);

 }, 15000)
}

function takeSelfie() {
    console.log("Imagem nº" + imgId)

    Webcam.snap(function(data_uri) {
        if (imgId == 'selfie1') {
            document.getElementById('result1').innerHTML = '<img id="selfie1" src"'+data_uri+'"/>';
        }
        if (imgId == 'selfie2') {
            document.getElementById('result2').innerHTML = '<img id="selfie2" src"'+data_uri+'"/>';
        }
        if (imgId == 'selfie3') {
            document.getElementById('result3').innerHTML = '<img id="selfie3" src"'+data_uri+'"/>';
        }
    })
}

