export class SoundManager {



    constructor() {
        this.audio = new (window.AudioContext || window.webkitAudioContext)();
        this.alienSoundToggle = false;
        this.tune = [55, 50, 46, 65];
        this.currentNote = 0;
    }

    soundAlien(frequency) {
        const osc = this.audio.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.value = frequency;

        this.alienSoundToggle = !this.alienSoundToggle;
    
        const vol = this.audio.createGain();
    
        vol.gain.value = 0.5;
        osc.connect(vol);
    
        vol.connect(this.audio.destination)
    
        osc.start();
        osc.stop(this.audio.currentTime + 0.1);
    }

    playNote() {
        this.soundAlien(this.tune[this.currentNote]);
        this.currentNote++;
        if(this.currentNote > this.tune.length - 1) {
            this.currentNote = 0;
        }
    }



}