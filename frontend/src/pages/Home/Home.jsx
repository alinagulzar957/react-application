import Button from "../../components/common/Button";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 to-indigo-300 text-center">
      <h1 className="text-4xl font-bold text-indigo-700 mb-4">🏠 Welcome to the Home Page</h1>
      <p className="text-lg text-gray-700 mb-6">I am Alina Gulzar, this is my first React Application!</p>
      <Button>Click Me</Button>
    </div>
  );
};

export default Home;
