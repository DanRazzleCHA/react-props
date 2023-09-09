import './Button.css';

export const Button = ({ color, children }) => <button className={`button ${color}-button`}>{children}</button>

