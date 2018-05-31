import React from 'react';

function HistoryIcon(props) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 32 32">
      <g fill={props.color || '#000'}>
        <path d="M16 2c-.453 0-.82.367-.82.82 0 .453.367.82.82.82 6.815 0 12.36 5.545 12.36 12.36 0 6.815-5.545 12.36-12.36 12.36-6.815 0-12.36-5.545-12.36-12.36 0-3.3 1.388-6.488 3.775-8.807v1.424c0 .453.367.82.82.82.453 0 .82-.367.82-.82v-3.28c0-.454-.367-.82-.82-.82h-3.31c-.452 0-.82.366-.82.82 0 .452.368.814.82.814H6.13C3.477 8.8 2 12.34 2 16c0 7.697 6.3 14 14 14 7.697 0 14-6.3 14-14 0-7.697-6.3-14-14-14z" />
        <path d="M16 6.977c-4.975 0-9.023 4.05-9.023 9.023 0 4.976 4.05 9.023 9.023 9.023 4.975 0 9.023-4.05 9.023-9.023 0-4.976-4.05-9.023-9.023-9.023zm5.766 13.63l-.546-.547c-.32-.32-.84-.32-1.16 0-.32.32-.32.84 0 1.16l.546.546c-1.063.85-2.364 1.413-3.786 1.57v-.773c0-.454-.367-.82-.82-.82-.453 0-.82.366-.82.82v.774c-1.422-.158-2.723-.72-3.786-1.57l.546-.547c.32-.32.32-.84 0-1.16-.32-.32-.84-.32-1.16 0l-.546.546c-.85-1.063-1.413-2.364-1.57-3.786h.773c.454 0 .82-.367.82-.82 0-.453-.366-.82-.82-.82h-.774c.158-1.422.72-2.723 1.57-3.786l.547.546c.32.32.84.32 1.16 0 .32-.32.32-.84 0-1.16l-.546-.546c1.063-.85 2.364-1.413 3.786-1.57v.773c0 .454.367.82.82.82.453 0 .82-.366.82-.82v-.774c1.422.158 2.723.72 3.786 1.57l-.546.547c-.32.32-.32.84 0 1.16.32.32.84.32 1.16 0l.546-.546c.85 1.063 1.413 2.364 1.57 3.786h-.773c-.454 0-.82.367-.82.82 0 .453.366.815.82.815h.774c-.158 1.422-.72 2.728-1.57 3.79z" />
        <path d="M18.22 17.06l-1.4-1.4v-2.94c0-.454-.367-.822-.82-.822-.453 0-.82.368-.82.82V16c0 .218.086.426.24.58l1.64 1.64c.32.32.84.32 1.16 0 .32-.32.32-.84 0-1.16z" />
      </g>
    </svg>
  );
}

export default HistoryIcon;