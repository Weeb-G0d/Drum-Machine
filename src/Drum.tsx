import {AudioClip} from './types'
import './App.css'
interface DrumProps {
    audioClip: AudioClip;
    onPlay: (description: string) => void ;
    change: boolean;
}
const Drum = ({audioClip,onPlay,change}:DrumProps) => {
   const playSound = (clip: AudioClip) =>{
        if(change){
            (document.getElementById(clip.keyTrigger) as HTMLAudioElement)?.play().catch(console.error);
        onPlay(clip.description);}
       
    }

  return (<>
  
   <button className='drump-pad' 
   id= {`dum-${audioClip.keyTrigger}`} 
   onClick={()=> {playSound(audioClip)}} >
    <audio src={audioClip.url} id={audioClip.keyTrigger} className='clip'/>
    {audioClip.keyTrigger}
   </button>
 
   </>
  )
}

export default Drum;