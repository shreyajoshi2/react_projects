import { useEffect, useState } from "react";
import "./style.css";
const data = [
  {
    id: 1,
    image: "https://wallpapers.com/images/featured/beautiful-scenery-wnxju2647uqrcccv.jpg",
  },
  {
    id: 2,
    image: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703980800&semt=ais",
  },
  {
    id: 3,
    image: "https://t3.ftcdn.net/jpg/05/68/52/52/360_F_568525285_CrGJ8Yh1noTyqu6QsocfVeGQGY91E0Jb.jpg",
  },
  {
    id: 4,
    image: "https://w0.peakpx.com/wallpaper/42/267/HD-wallpaper-nature-scenery-scenery-nature.jpg",
  },
];
function ImageSlider() {
  const [activeimage, setActiveimage] = useState(0);
  const [sliderpause, settimerpause] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      sliderpause ? clearTimeout(timer) : activeimage >= 3 ? setActiveimage(0) : setActiveimage(activeimage + 1);
      console.log(activeimage);
    }, 4000);
  });
  function hangleimghover() {
    settimerpause(true);
  }
  function handleimghoverout() {
    settimerpause(false);
  }

  function handleimgslide(itemid) {
    console.log("cliked");
    setActiveimage(itemid);
  }
  return (
    <div className="App text-center justify-content-center">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <h1 className="appheading mb-5">Image Slider 🌃</h1>
          <hr></hr>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="slidershow">
              <img src={data[activeimage].image} alt="" className="sliderimg" onMouseEnter={hangleimghover} onMouseOut={handleimghoverout} />
              <div className="thumbnails">
                {data.map((item, index) => (
                  <img src={item.image} alt={item.id} className={activeimage === index ? "active" : ""} onClick={() => handleimgslide(index)} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
