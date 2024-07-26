import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  height: '450px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Carousels = () => (
  <Carousel 
  autoplay
  autoPlayInterval={1000}
  infinite
  >
    <div>
      <h3 style={contentStyle}><img src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_15.jpg" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/2/12_11.jpg" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/9/_/9_15.jpg" alt="" /></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src="https://www.ethnicplus.in/media/mageplaza/bannerslider/banner/image/1/1/11_13.jpg" alt="" /></h3>
    </div>
  </Carousel>
);
export default Carousels;