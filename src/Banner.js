import React from 'react';
// import aGremlin from './img/a gremlin.jpg';

export default function Banner() {
  // const [text, setText] = useState('D U K E');
  // const [imageHeight, setImageHeight] = useState(300);

  // function handleScroll(e) {
  //   const newScrollPos = e.target.scrollTop;
  //   const newImageHeight = Math.max(100, 300 - newScrollPos);
  //   setImageHeight(newImageHeight);
  //   if (e.target.scrollTop > 100) {
  //     setText('Ouch');
  //   }
  // }

  // const textStyle = {
  //   color: 'white',
  //   width: '100%',
  //   textAlign: 'center',
  //   verticalAlign: 'center',
  //   position: 'absolute',
  //   top: '0',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   fontSize: '70px',
  // };

  // const imageStyle = {
  //   width: '100%',
  //   height: `${imageHeight}px`,
  //   position: 'fixed',
  //   top: '0',
  //   left: '0',
  // };

  // const containerStyle = {
  //   height: '300px',
  //   overflow: 'scroll',
  // };

  return (
    // <div style={containerStyle} onScroll={handleScroll}>
    //   <div style={{ height: '1000px' }}>
    //     <img src={aGremlin} alt="Duke" style={imageStyle} />
    //     <p style={textStyle}>{text}</p>
    //   </div>
    // </div>
    <div className='banner'>
      <h1>Duke Norsworthy</h1>
    </div>
  );
}
