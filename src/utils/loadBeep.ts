import gratationalBeep from '../assets/Audios/src_assets_audios_gravitational_beep.mp3';

export function loadBeep() {
  const audio = new Audio(gratationalBeep);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play().catch(error => console.log('Erro ao tocar áudio', error));
  };
}