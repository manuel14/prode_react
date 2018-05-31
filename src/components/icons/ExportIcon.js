import React from 'react';

function ExportIcon(props) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 32 32">
      <path
        d="M12.692 3.647H7.038c-1.335 0-2.423 1.109-2.423 2.47v19.765c0 1.362 1.088 2.47 2.423 2.47h12.924c1.335 0 2.423-1.108 2.423-2.47V23H24v2.882C24 28.152 22.19 30 19.962 30H7.038C4.811 30 3 28.152 3 25.882V6.118C3 3.848 4.81 2 7.038 2h5.793c.637 0 1.262.264 1.713.723l8.747 8.919A2.48 2.48 0 0 1 24 13.388V17h-1.615v-3.47H16.73c-2.228 0-4.039-1.849-4.039-4.118V3.647zm1.616 1.165v4.6c0 1.362 1.087 2.47 2.423 2.47h4.512l-6.935-7.07zm11.599 12.19c0-.256.08-.512.24-.708.32-.392.84-.392 1.161 0l2.452 2.99c.16.196.24.452.24.724 0 .256-.08.512-.24.708l-2.452 2.99c-.32.392-.84.392-1.16 0a1.12 1.12 0 0 1-.241-.708c0-.256.08-.512.24-.708l1.084-1.322H13.367c-.453 0-.82-.448-.82-1.002 0-.553.367-1.001.82-1.001h13.808l-1.028-1.255a1.12 1.12 0 0 1-.24-.708z"
        fill={props.color || '#000'}
      />
    </svg>
  );
}

export default ExportIcon;