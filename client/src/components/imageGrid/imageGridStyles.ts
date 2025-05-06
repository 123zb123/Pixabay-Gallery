import type { CSSProperties } from "react";

export const gridStyle: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
    padding: '20px',
  };
  
  export const imageStyle: CSSProperties = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    cursor: 'pointer',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  };