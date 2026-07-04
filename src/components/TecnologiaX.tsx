import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent, SyntheticEvent } from 'react';
import { useDiagnosticoModal } from '../context/DiagnosticoModalContext';

// COPY.md — 4ª Sessão (Produto/X). PRD §6.5: X como central de comando da
// operação. Layout em duas colunas — copy à esquerda, vídeo do produto à
// direita — replicando a referência de design aprovada.
//
// Só os primeiros TRIM_END_SECONDS do arquivo devem aparecer — o resto não
// deve ficar acessível. Controles nativos do <video> sempre exibem a duração
// real do arquivo e permitem seek até o fim, então os controles são custom
// aqui: playback e barra de progresso são travados nesse limite (pausa e
// trava em TRIM_END_SECONDS ao chegar lá; duração exibida nunca passa disso).
const TRIM_END_SECONDS = 13;

function formatTime(seconds: number): string {
  const total = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(total / 60);
  const secs = total % 60;
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M4 2.5v11l10-5.5-10-5.5Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M3.5 2.5h3v11h-3v-11ZM9.5 2.5h3v11h-3v-11Z" />
    </svg>
  );
}

function VolumeIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M2 6h2.5l3.5-3v10l-3.5-3H2V6Z" />
      <path d="M10.5 5.2a3.3 3.3 0 0 1 0 5.6" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function MuteIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M2 6h2.5l3.5-3v10l-3.5-3H2V6Z" />
      <path d="M10.3 5.7 13.5 8.9M13.5 5.7l-3.2 3.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function FullscreenIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <path d="M2 5.5V2h3.5M10.5 2H14v3.5M14 10.5V14h-3.5M5.5 14H2v-3.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TecnologiaX() {
  const { openModal } = useDiagnosticoModal();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [durationCap, setDurationCap] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= TRIM_END_SECONDS) {
        video.pause();
        video.currentTime = TRIM_END_SECONDS;
        setCurrentTime(TRIM_END_SECONDS);
        return;
      }
      setCurrentTime(video.currentTime);
    };
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handlePause);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handlePause);
    };
  }, []);

  const handleLoadedMetadata = (event: SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    setDurationCap(Math.min(video.duration, TRIM_END_SECONDS));
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      if (video.currentTime >= TRIM_END_SECONDS) {
        video.currentTime = 0;
        setCurrentTime(0);
      }
      void video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    void videoRef.current?.requestFullscreen();
  };

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;
    const time = Math.min(Number(event.target.value), TRIM_END_SECONDS);
    video.currentTime = time;
    setCurrentTime(time);
  };

  return (
    <section className="section tecnologia-x" id="tecnologia-x">
      <div className="section-grafismo" aria-hidden="true">
        <ltx-grafismo variant="01" motion="flow" opacity="0.05" speed="10600" />
      </div>
      <div className="container tecnologia-x-inner">
        <div className="tecnologia-x-copy">
          <h2 className="h2 tecnologia-x-heading">
            <span className="tecnologia-x-heading-x">X</span>: uma central de comando para sua operação comercial.
          </h2>

          <p className="text-body tecnologia-x-text">
            Ele ajuda a transformar conversas, atividades e movimentações do funil em uma visão mais clara sobre o
            que está acontecendo.
          </p>

          <p className="tecnologia-x-highlight">
            Menos ruído. Menos decisão baseada em impressão. Mais clareza para vender melhor.
          </p>

          <div className="tecnologia-x-cta">
            <button type="button" className="btn btn-primary btn-lg" onClick={() => openModal('tecnologia-x')}>
              Quero ver na prática
            </button>
          </div>
        </div>

        <div className="tecnologia-x-media-wrap">
          <div className="tecnologia-x-media-glow" aria-hidden="true">
            <ltx-grafismo variant="02" motion="wave" opacity="0.4" mono speed="7800" />
          </div>
          <div className="tecnologia-x-media">
            <div className="tecnologia-x-media-chrome" aria-hidden="true">
              <span className="tecnologia-x-media-dot" />
              <span className="tecnologia-x-media-dot" />
              <span className="tecnologia-x-media-dot" />
            </div>
            <div className="tecnologia-x-video-wrap">
              <video
                ref={videoRef}
                className="tecnologia-x-media-video"
                src="/videos/video-dash.mov"
                playsInline
                preload="metadata"
                onLoadedMetadata={handleLoadedMetadata}
                onClick={togglePlay}
              >
                Seu navegador não suporta a exibição deste vídeo.
              </video>

              <div className="tecnologia-x-video-controls">
                <button
                  type="button"
                  className="tecnologia-x-video-btn"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
                >
                  {isPlaying ? <PauseIcon /> : <PlayIcon />}
                </button>

                <span className="tecnologia-x-video-time">
                  {formatTime(currentTime)} / {formatTime(durationCap)}
                </span>

                <input
                  type="range"
                  className="tecnologia-x-video-seek"
                  min={0}
                  max={durationCap}
                  step={0.1}
                  value={currentTime}
                  onChange={handleSeek}
                  aria-label="Progresso do vídeo"
                />

                <button
                  type="button"
                  className="tecnologia-x-video-btn"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Ativar som' : 'Silenciar vídeo'}
                >
                  {isMuted ? <MuteIcon /> : <VolumeIcon />}
                </button>

                <button
                  type="button"
                  className="tecnologia-x-video-btn"
                  onClick={toggleFullscreen}
                  aria-label="Tela cheia"
                >
                  <FullscreenIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
