import React from 'react';

function FileIcon(props) {
  return (
    <svg width={props.size || 24} height={props.size || 24} viewBox="0 0 32 32">
      <g fill={props.color || '#000'}>
        <path d="M10.038 3.647c-1.335 0-2.423 1.11-2.423 2.47v19.765c0 1.362 1.088 2.47 2.423 2.47h12.924c1.335 0 2.423-1.108 2.423-2.47V13.388c0-.216-.088-.428-.236-.582L16.4 3.888c-.147-.154-.356-.24-.57-.24H10.04zM22.962 30H10.038C7.81 30 6 28.152 6 25.882V6.118C6 3.848 7.81 2 10.038 2h5.793c.638 0 1.263.264 1.714.723l8.747 8.92c.458.465.71 1.086.71 1.745v12.494C27 28.152 25.19 30 22.962 30z" />
        <path d="M17.308 2.824v6.588c0 1.362 1.087 2.47 2.423 2.47h6.462v1.647h-6.46c-2.23 0-4.04-1.85-4.04-4.118V2.824h1.616M21.346 25.882h-9.692c-.446 0-.808-.37-.808-.823 0-.456.362-.825.808-.825h9.692c.446 0 .808.37.808.824 0 .453-.362.822-.808.822M21.346 21.765h-9.692c-.446 0-.808-.37-.808-.824 0-.453.362-.822.808-.822h9.692c.446 0 .808.37.808.823 0 .456-.362.825-.808.825M21.346 17.647h-9.692c-.446 0-.808-.37-.808-.823 0-.455.362-.824.808-.824h9.692c.446 0 .808.37.808.824 0 .454-.362.823-.808.823" />
      </g>
    </svg>
  );
}

export default FileIcon;
