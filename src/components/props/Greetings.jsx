const Greetings = ({ name }) => {
  return (
    <section className="hero" id="home">
      <div>
        <p className="small-title">WELCOME TO STUDENT HUB</p>

        <h2>Halo, {name}!</h2>

        <p className="hero-text">
          Temukan berbagai materi untuk membantu kegiatan belajar kamu.
        </p>

        <button>Explore Courses</button>
      </div>
    </section>
  );
};

export default Greetings;