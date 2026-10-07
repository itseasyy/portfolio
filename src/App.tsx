import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="relative flex flex-col select-none overflow-x-hidden">
        <section id="home" className="h-screen">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam aliquid esse similique cumque magni? Reiciendis impedit ratione modi nesciunt odio tempore, corrupti praesentium eos hic magnam quaerat doloremque quidem dolorem.
        </section>
        <section id="about">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus iusto ipsam laboriosam optio porro vel delectus quisquam at iste asperiores odio dolor molestiae magni impedit, nostrum hic. Dolor, tenetur debitis.
        </section>
      </div>
      <div className="sticky inset-0 h-screen w-screen overflow-hidden -z-10">
        <div className="absolute inset-0 lg:-translate-1/4 -translate-1/2 h-full blob-neon-green" />
        <div className="absolute inset-full lg:-translate-3/4 -translate-1/2 h-full blob-neon-pink" />
      </div>
    </>
  )
}

export default App