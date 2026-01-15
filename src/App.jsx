import MainComponent from "./components/MainComponent";

const App = () => {
  return (
    <div className="h-screen relative w-full overflow-hidden">
      <video className="h-full w-full object-cover object-center pointer-events-none" loop muted autoPlay src="mainBg.mp4"></video>
      <MainComponent />
    </div>
  )
}

export default App