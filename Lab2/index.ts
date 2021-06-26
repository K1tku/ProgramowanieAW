let hihatSound: HTMLAudioElement;
let clapSound: HTMLAudioElement;
let boomSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let openhatSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;

let kanal1: KeyPressedEvent[] = [];
let kanal1nagrywanie: boolean = false;
let kanal1nagrywanieStart: number;

let kanal2: KeyPressedEvent[] = [];
let kanal2nagrywanie: boolean = false;
let kanal2nagrywanieStart: number;

let kanal3: KeyPressedEvent[] = [];
let kanal3nagrywanie: boolean = false;
let kanal3nagrywanieStart: number;

let kanal4: KeyPressedEvent[] = [];
let kanal4nagrywanie: boolean = false;
let kanal4nagrywanieStart: number;


appStart();

function appStart(): void {
    Kanal1();
    getSounds();
}


function Kanal1(): void{
    document.body.addEventListener('keypress', onKeyDown);
    const btnKanal1Play = document.querySelector('#Kanal1')
    btnKanal1Play.addEventListener('click', onPlayKanal1)
}

function onPlayKanal1(): void{
    kanal1.forEach(keyPressedEvent => {
        setTimeout(() => playSound(keyPressedEvent.key), keyPressedEvent.timestamp)
    });
}


function startRecording(e): void {
    kanal1 = [];
    kanal1nagrywanie = true;
    kanal1nagrywanieStart= e.timeStamp;

}

function stopRecording(): void {
    kanal1nagrywanie = false;
}

function play(): void {
    for (let ch1 of this.channel1){
        playSound(ch1);
    }
}

function getSounds(): void {
    hihatSound = document.querySelector('[data-sound="hihat"]')
    clapSound = document.querySelector('[data-sound="clap"]')
    boomSound = document.querySelector('[data-sound="boom"]')
    kickSound = document.querySelector('[data-sound="kick"]')
    openhatSound = document.querySelector('[data-sound="openhat"]')
    rideSound = document.querySelector('[data-sound="ride"]')
    snareSound = document.querySelector('[data-sound="snare"]')
    tinkSound = document.querySelector('[data-sound="tink"]')
    tomSound = document.querySelector('[data-sound="tom"]')
}

function onKeyDown(ev: KeyboardEvent): void {
    console.log(ev);
    const key = ev.key;
    const time = ev.timeStamp;
    if (kanal1nagrywanie) {
        kanal1.push(new KeyPressedEvent(key, time-kanal1nagrywanieStart));
    }
    if (kanal2nagrywanie) {
        kanal2.push(new KeyPressedEvent(key, time-kanal2nagrywanieStart));
    }
    if (kanal3nagrywanie) {
        kanal3.push(new KeyPressedEvent(key, time-kanal3nagrywanieStart));
    }
    if (kanal4nagrywanie) {
        kanal4.push(new KeyPressedEvent(key, time-kanal4nagrywanieStart));
    }
    playSound(key);
    console.log(kanal1);

}

function playRecording(): void {

    this.kanal1.forEach(keyPressedEvent => {
        setTimeout(() => playSound(keyPressedEvent.key), keyPressedEvent.timestamp)
    });

}

//muzyka gra na wcisniety klawisz

function playSound(key: string): void {
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

class KeyPressedEvent{
    key: string;
    timestamp: number;

    constructor(key: string, timestamp: number) {
        this.key = key;
        this.timestamp = timestamp;
    }
}