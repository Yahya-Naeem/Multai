import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundColor: 'grey',
};
const items = [
  { id: 1, text: "Response 1" },
  { id: 2, text: "Response 2" },
  { id: 3, text: "Response 3" },
  { id: 4, text: "Response 4" }
];
export default function TextComponent(){
    return(
      <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{width:'50%'}}>
        <Carousel arrows={true} autoplay={true} dotPosition="bottom" fade={true} infinite={false}>
          {items.map(item => (
            <div key={item.id} style={contentStyle}>
              <h3 style={contentStyle}>{item.text}</h3>
            </div>
          ))}
      </Carousel>
        </div>
      </div>
    )
}
