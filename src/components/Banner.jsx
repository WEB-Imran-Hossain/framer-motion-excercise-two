import BG from '../assets/images/HeroBG.jpg'; // Import the image

const Banner = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center text-center h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${BG})` }} // Set the background image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-5xl font-bold">Welcome to My Website!</h2>
        <p className="mt-4 text-lg">This is a simple banner description.</p>
      </div>
    </div>
  );
};

export default Banner;