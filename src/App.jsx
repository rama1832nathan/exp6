import ImageSlider from './components/ImageSlider';

function App() {
  const imageList = [
    'https://picsum.photos/id/1018/600/300',
    'https://picsum.photos/id/1015/600/300',
    'https://picsum.photos/id/1019/600/300'
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Dynamic Image Slider</h1>
      <ImageSlider images={imageList} autoSlide={true}  />
    </div>
  );
}

export default App;
