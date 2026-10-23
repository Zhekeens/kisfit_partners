import { useEffect, useId, useRef, useState } from 'react';
import { assetUrl } from '../lib/assetUrl';

const VIDEO_SRC = assetUrl('assets/motivation.mp4');

export default function MotivationToggle() {
  const inputId = useId();
  const videoRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [needsTap, setNeedsTap] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!enabled) {
      video.pause();
      setNeedsTap(false);
      return;
    }

    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => setNeedsTap(true));
    }
  }, [enabled]);

  const onToggle = () => {
    setEnabled((prev) => !prev);
  };

  const retryPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video
      .play()
      .then(() => setNeedsTap(false))
      .catch(() => setNeedsTap(true));
  };

  return (
    <>
      <aside className="motivation-help" aria-label="Справка">
        <div className="motivation-help__head">
          <span className="motivation-help__icon" aria-hidden="true">
            ?
          </span>
          <span className="motivation-help__title">Справка</span>
        </div>

        <label className="motivation-switch" htmlFor={inputId}>
          <span className="motivation-switch__text">Включить мотивацию</span>
          <span className="motivation-switch__control">
            <input id={inputId} type="checkbox" checked={enabled} onChange={onToggle} />
            <span className="motivation-switch__track" aria-hidden="true">
              <span className="motivation-switch__thumb" />
            </span>
          </span>
        </label>
      </aside>

      {enabled && (
        <div className="motivation-player" role="dialog" aria-label="Мотивация">
          <div className="motivation-player__frame">
            <video
              ref={videoRef}
              className="motivation-player__video"
              src={VIDEO_SRC}
              playsInline
              loop
              controls={needsTap}
            />
            {needsTap && (
              <button type="button" className="motivation-player__tap" onClick={retryPlay}>
                Нажми для звука
              </button>
            )}
          </div>
          <button
            type="button"
            className="motivation-player__close"
            onClick={() => setEnabled(false)}
            aria-label="Выключить мотивацию"
          >
            ×
          </button>
          <p className="motivation-player__caption">Режим максимальной мотивации активен</p>
        </div>
      )}
    </>
  );
}
