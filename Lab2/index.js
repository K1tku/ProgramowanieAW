var hihatSound;
var clapSound;
var boomSound;
var kickSound;
var openhatSound;
var rideSound;
var snareSound;
var tinkSound;
var tomSound;
var kanal1 = [];
var kanal1nagrywanie = false;
var kanal1nagrywanieStart;
var kanal2 = [];
var kanal2nagrywanie = false;
var kanal2nagrywanieStart;
var kanal3 = [];
var kanal3nagrywanie = false;
var kanal3nagrywanieStart;
var kanal4 = [];
var kanal4nagrywanie = false;
var kanal4nagrywanieStart;
appStart();
function appStart() {
    Kanal1();
    getSounds();
}
function Kanal1() {
    document.body.addEventListener('keypress', onKeyDown);
    var btnKanal1Play = document.querySelector('#Kanal1');
    btnKanal1Play.addEventListener('click', onPlayKanal1);
}
function onPlayKanal1() {
    kanal1.forEach(function (keyPressedEvent) {
        setTimeout(function () { return playSound(keyPressedEvent.key); }, keyPressedEvent.timestamp);
    });
}
function startRecording(e) {
    kanal1 = [];
    kanal1nagrywanie = true;
    kanal1nagrywanieStart = e.timeStamp;
}
function stopRecording() {
    kanal1nagrywanie = false;
}
function play() {
    for (var _i = 0, _a = this.channel1; _i < _a.length; _i++) {
        var ch1 = _a[_i];
        playSound(ch1);
    }
}
function getSounds() {
    hihatSound = document.querySelector('[data-sound="hihat"]');
    clapSound = document.querySelector('[data-sound="clap"]');
    boomSound = document.querySelector('[data-sound="boom"]');
    kickSound = document.querySelector('[data-sound="kick"]');
    openhatSound = document.querySelector('[data-sound="openhat"]');
    rideSound = document.querySelector('[data-sound="ride"]');
    snareSound = document.querySelector('[data-sound="snare"]');
    tinkSound = document.querySelector('[data-sound="tink"]');
    tomSound = document.querySelector('[data-sound="tom"]');
}
function onKeyDown(ev) {
    console.log(ev);
    var key = ev.key;
    var time = ev.timeStamp;
    if (kanal1nagrywanie) {
        kanal1.push(new KeyPressedEvent(key, time - kanal1nagrywanieStart));
    }
    if (kanal2nagrywanie) {
        kanal2.push(new KeyPressedEvent(key, time - kanal2nagrywanieStart));
    }
    if (kanal3nagrywanie) {
        kanal3.push(new KeyPressedEvent(key, time - kanal3nagrywanieStart));
    }
    if (kanal4nagrywanie) {
        kanal4.push(new KeyPressedEvent(key, time - kanal4nagrywanieStart));
    }
    playSound(key);
    console.log(kanal1);
}
function playRecording() {
    this.kanal1.forEach(function (keyPressedEvent) {
        setTimeout(function () { return playSound(keyPressedEvent.key); }, keyPressedEvent.timestamp);
    });
}
//muzyka gra na wcisniety klawisz
function playSound(key) {
    switch (key) {
        case 'q':
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case 'w':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case 'e':
            boomSound.currentTime = 0;
            boomSound.play();
            break;
        case 'r':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case 't':
            openhatSound.currentTime = 0;
            openhatSound.play();
            break;
        case 'y':
            rideSound.currentTime = 0;
            rideSound.play();
            break;
        case 'u':
            snareSound.currentTime = 0;
            snareSound.play();
            break;
        case 'i':
            tinkSound.currentTime = 0;
            tinkSound.play();
            break;
        case 'o':
            tomSound.currentTime = 0;
            tomSound.play();
            break;
    }
}
//parametr key jako klawisz i timestamp jako czas w ktorym zostal dany klawisz wcisniety
var KeyPressedEvent = /** @class */ (function () {
    function KeyPressedEvent(key, timestamp) {
        this.key = key;
        this.timestamp = timestamp;
    }
    return KeyPressedEvent;
}());
