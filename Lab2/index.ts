let hihatSound: HTMLAudioElement;
let clapSound: HTMLAudioElement;
let boomSound: HTMLAudioElement;
let kickSound: HTMLAudioElement;
let openhatSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;

let recordChannel1 = document.getElementById("recordChannel1") as HTMLButtonElement;
let stopChannel1 = document.getElementById("stopChannel1") as HTMLButtonElement;
let playChannel1 = document.getElementById("playChannel1") as HTMLButtonElement;

let recordChannel2 = document.getElementById("recordChannel2") as HTMLButtonElement;
let stopChannel2 = document.getElementById("stopChannel2") as HTMLButtonElement;
let playChannel2 = document.getElementById("playChannel2") as HTMLButtonElement;

let recordChannel3 = document.getElementById("recordChannel3") as HTMLButtonElement;
let stopChannel3 = document.getElementById("stopChannel3") as HTMLButtonElement;
let playChannel3 = document.getElementById("playChannel3") as HTMLButtonElement;

let recordChannel4 = document.getElementById("recordChannel4") as HTMLButtonElement;
let stopChannel4 = document.getElementById("stopChannel4") as HTMLButtonElement;
let playChannel4 = document.getElementById("playChannel4") as HTMLButtonElement;

let channel1tmp: KeyPressedEvent[] = [];
let channel1recording: boolean = false;
let channel1recordingStart: number;

let channel1: Channel;
let channel2: Channel;
let channel3: Channel;
let channel4: Channel;

appStart();

function appStart(): void {
    channel1 = new Channel();
    channel2 = new Channel();
    channel3 = new Channel();
    channel4 = new Channel();
    Channel1();
    getSounds();
}


function Channel1(): void {
    document.body.addEventListener('keypress', onKeyDown);
    const btnChannel1Play = document.querySelector('#playChannel1')
    btnChannel1Play.addEventListener('click', onPlayRecording1)
}


/*function onPlayChannel1(): void {
    channel1tmp.forEach(keyPressedEvent => {
        setTimeout(() => playSound(keyPressedEvent.key), keyPressedEvent.timestamp)
    });
}*/
/*
function stopRecording(): void {
    channel1recording = false;
}
*/

function play(): void {
    for (let ch1 of this.channel1) {
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
    if (channel1recording) {
        channel1tmp.push(new KeyPressedEvent(key, time - channel1recordingStart));
    }
    playSound(key);
    console.log(channel1tmp);
}

function playSound(key: string): void {
    switch (key) {
        case 'a':
            hihatSound.currentTime = 0;
            hihatSound.play();
            break;
        case 's':
            clapSound.currentTime = 0;
            clapSound.play();
            break;
        case 'd':
            boomSound.currentTime = 0;
            boomSound.play();
            break;
        case 'f':
            kickSound.currentTime = 0;
            kickSound.play();
            break;
        case 'g':
            openhatSound.currentTime = 0;
            openhatSound.play();
            break;
        case 'h':
            rideSound.currentTime = 0;
            rideSound.play();
            break;
        case 'j':
            snareSound.currentTime = 0;
            snareSound.play();
            break;
        case 'k':
            tinkSound.currentTime = 0;
            tinkSound.play();
            break;
        case 'l':
            tomSound.currentTime = 0;
            tomSound.play();
            break;
    }
}

class KeyPressedEvent {
    key: string;
    timestamp: number;

    constructor(key: string, timestamp: number) {
        this.key = key;
        this.timestamp = timestamp;
    }
}

class Channel {

    keyPressedEvents: KeyPressedEvent[] = [];
    isRecording: boolean = false;
    startRecordingTimeStamp: number;


    constructor() {
    }

    startRecording(e, channelNumber): void {
        this.keyPressedEvents = [];
        this.isRecording = true;
        this.startRecordingTimeStamp = e.timeStamp;

        if (channelNumber === 1) {
            channel1.startRecording(e, 1);
            recordChannel1.disabled = true;
            stopChannel1.disabled = false;
        }
        if (channelNumber === 2) {
            channel2.startRecording(e,2 );
            recordChannel2.disabled = true;
            stopChannel2.disabled = false;
        }
        if (channelNumber === 3) {
            channel3.startRecording(e,3 );
            recordChannel3.disabled = true;
            stopChannel3.disabled = false;
        }
        if (channelNumber === 4) {
            channel4.startRecording(e,4);
            recordChannel4.disabled = true;
            stopChannel4.disabled = false;
        }
    }

    stopRecording(channelNumber): void {
        if(channelNumber === 1){
            this.isRecording = false;
            recordChannel1.disabled = false;
            stopChannel1.disabled = true;
            playChannel1.disabled = false;
        }
        if(channelNumber === 2){
            this.isRecording = false;
            recordChannel2.disabled = false;
            stopChannel2.disabled = true;
            playChannel2.disabled = false;
        }
        if(channelNumber === 3){
            this.isRecording = false;
            recordChannel3.disabled = false;
            stopChannel3.disabled = true;
            playChannel3.disabled = false;
        }
        if(channelNumber === 4){
            this.isRecording = false;
            recordChannel4.disabled = false;
            stopChannel4.disabled = true;
            playChannel4.disabled = false;
        }


    }

    playRecording(channelNumber): void {


        if(channelNumber === 1){
            this.keyPressedEvents.forEach(keyPressedEvent => {
                setTimeout(() => playSound(keyPressedEvent.key), keyPressedEvent.timestamp)
            });
        }
        if(channelNumber === 2){
            this.keyPressedEvents.forEach(keyPressedEvent => {
                setTimeout(() => playSound(keyPressedEvent.key), keyPressedEvent.timestamp)
            });
        }
        if(channelNumber === 3){
            this.keyPressedEvents.forEach(keyPressedEvent => {
                setTimeout(() => playSound(keyPressedEvent.key), keyPressedEvent.timestamp)
            });
        }
        if(channelNumber === 4){
            this.keyPressedEvents.forEach(keyPressedEvent => {
                setTimeout(() => playSound(keyPressedEvent.key), keyPressedEvent.timestamp)
            });
        }
    }

    onKeyDown(ev: KeyboardEvent, channelNumber): void {

        console.log(ev);
        const key = ev.key;
        const time = ev.timeStamp;

        if(channelNumber === 1){
            if (this.isRecording) {
                this.keyPressedEvents.push(new KeyPressedEvent(key, time - this.startRecordingTimeStamp));
            }
        }
        if(channelNumber === 2){
            if (this.isRecording) {
                this.keyPressedEvents.push(new KeyPressedEvent(key, time - this.startRecordingTimeStamp));
            }
        }
        if(channelNumber === 3){
            if (this.isRecording) {
                this.keyPressedEvents.push(new KeyPressedEvent(key, time - this.startRecordingTimeStamp));
            }
        }
        if(channelNumber === 4){
            if (this.isRecording) {
                this.keyPressedEvents.push(new KeyPressedEvent(key, time - this.startRecordingTimeStamp));
            }
        }

        playSound(key);
        console.log(this.keyPressedEvents);
    }


}