import "./Avatar.css";

export const Avatar = ({src, width,height, variant}) => <img src={src} alt="pic" width={width} height={height} className={variant}/>