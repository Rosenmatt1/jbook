import './resizeable.css';
import { ResizableBox } from 'react-resizable';

interface ResizableProps {
  direction: "horizontal" | "vertical";
  children?: React.ReactNode;
}


const Resizable: React.FC<ResizableProps> = ({ direction, children}) => {
  return <ResizableBox 
    minConstraints={[Infinity, 24]}
    maxConstraints={[Infinity, window.innerHeight * 0.9]} 
    height={direction === 'vertical' ? 300 : Infinity} 
    width={Infinity} 
    resizeHandles={['s']}> {children} 
  </ResizableBox>
}

export default Resizable;


