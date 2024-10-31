import { useEffect, useState } from 'react'
import { AudioClip } from './types';
import Drum from './Drum';
import './App.css'
const audioClips1 : AudioClip[] = [

  
  {
    keyTrigger: "Q",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    description: "Heater 1",
  },
  {
    keyTrigger: "W",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    description: "Heater 2",
  },
  {
    keyTrigger: "E",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    description: "Heater 3",
  },
  {
    keyTrigger: "A",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    description: "Heater 4",
  },
  {
    keyTrigger: "S",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    description: "Clap",
  },
  {
    keyTrigger: "D",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    description: "Open HH",
  },
  {
    keyTrigger: "Z",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    description: "Kick n' Hat",
  },
  {
    keyTrigger: "X",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    description: "Kick",
  },
  {
    keyTrigger: "C",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    description: "Closed HH",
  },
];
const audioClips2: AudioClip[] = [
  {
  
    keyTrigger: 'Q',
    description: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  },
  {
    
    keyTrigger: 'W',
    description: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  },
  {
   
    keyTrigger: 'E',
    description: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  },
  {
    
    keyTrigger: 'A',
    description: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  },
  {
    
    keyTrigger: 'S',
    description: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  },
  {
    
    keyTrigger: 'D',
    description: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  },
  {
    
    keyTrigger: 'Z',
    description: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  },
  {
    
    keyTrigger: 'X',
    description: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  },
  {
   
    keyTrigger: 'C',
    description: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

function App() {
const[audioClips,setAudioClip]= useState<AudioClip[]>(audioClips1);
const [hnnp,set] = useState<boolean>(true);
const hnp = ()=>{
  set(!hnnp);
  if(hnnp){
    setAudioClip(audioClips2);
  }
  else if(!hnnp)
    setAudioClip(audioClips1);

}
const [onoroff,changer]=useState<boolean>(true);

const change= ()=>{
  changer(!onoroff);
  setCount("");
}


const [count, setCount] = useState<string>("");


    const playBySound = (key: string)=> {
      const clip = audioClips.find((e)=> e.keyTrigger === key.toUpperCase());
      if(clip && onoroff){
        
        const play = document.getElementById(clip.keyTrigger) as HTMLAudioElement;
        
        document.getElementById("drum-" + clip.keyTrigger)?.focus();
        play?.play().catch(console.error);
        setCount(clip.description);
        }
    }
    useEffect(()=>{
      const handleEffect = (e: KeyboardEvent) => playBySound(e.key);
        
      
      document.addEventListener("keydown",handleEffect);
        
       return () => {
        document.removeEventListener("keydown", handleEffect);
      };

    },[onoroff,audioClips]);
    
  
  return (
    <div className="container" id="drum-machine">
      <p style={{fontSize:10 }}><i><b>(Use your keyboard or mouse to play)</b></i></p>
      <button onClick={change} className='topright'>{onoroff? "Switch off":"Switch on"}</button>
      <h1>Drum Machine</h1>
      <div className="HnP">
      <p>You are on:</p><button onClick={hnp}>{hnnp ? <i>Heather Kit (tap to change)</i>:<i>Smooth Piano Kit (tap to change)</i>}</button>
      </div>
      
      
     
      <div id="display"> {onoroff? count : ""}</div>
      <div className="whole-drum">
       
       { audioClips.map((clips)=>(
        <Drum audioClip={clips} key={clips.keyTrigger} onPlay={setCount} change={onoroff}/>
       ))}
      </div>
    </div>
  )
}


export default App
