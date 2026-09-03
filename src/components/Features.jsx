const Features = ({ title, category, description }) => {
  return (
    <div className="course-card">
      <span>{category}</span>

      <h3>{title}</h3>

      <p>{description}</p>

      <button className="learn-button">Learn More</button>
    </div>
  );
};

export default Features;