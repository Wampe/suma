import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'suma-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // @ViewChild(HTMLAudioElement) audioElement: HTMLAudioElement;
  title = 'suma';
  filtered: Array<MediaDeviceInfo>;
  public ngOnInit(): void {
    this.getMediaDevices();
    // this.playAudio();
  }
  
  private async getMediaDevices(): Promise<void> {
    const mediaDeviceInfo: Array<MediaDeviceInfo> = await navigator.mediaDevices.enumerateDevices();
    const filtered: Array<MediaDeviceInfo> = this.filtered = mediaDeviceInfo.filter(info => info.kind === 'audiooutput');
    console.log(filtered);

    return null;
  }

// https://github.com/webrtc/samples/blob/gh-pages/src/content/devices/multi/js/main.js
// https://webrtc.github.io/samples/src/content/devices/multi/

//   deviceId: "53d92b5d04fe37dadf37c3f801842417beba7c25ab265c3aa93f9bb81885ef36"
// groupId: "9b0a48e19a882b475333ad2b2892c5fb7f3b461791f94f49bd58ff1f049aaf55"
// kind: "audiooutput"
// label: "VB-Audio Virutal Cable (VB-Audio Virtual Cable)"
  public playAudio(): void {
    const audioElement = document.querySelector('audio') as any;
    // audioElement.setSinkId('53d92b5d04fe37dadf37c3f801842417beba7c25ab265c3aa93f9bb81885ef36')
    // const audio = new Audio();
    // audioElement = new Audio() as HTMLMediaElement;
    audioElement.src = 'assets/Pipu-AmArsch.mp3';
    // ToDO: Important: Devices do have different ids regarding the environment (Electron or web) 
    audioElement.setSinkId('c119635a036e6250500d52b80254308a5cbf2d7a15635f6ebfa771ed74c678cd');
    audioElement.play();

    // var ac = new AudioContext();
    // var audio = new Audio();
    // var o = ac.createOscillator();
    // o.start();
    // var dest = ac.createMediaStreamDestination();
    // o.connect(dest);
    // audio.src = URL.createObjectURL(dest.stream);
    // audio.play();

    // audio.setSink
  }
}
