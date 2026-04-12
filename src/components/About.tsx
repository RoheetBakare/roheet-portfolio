import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I build machine learning systems that actually ship. With 7+ years across
          healthcare, finance, and ed-tech, I've led teams from raw data exploration
          through production deployment—designing NLP pipelines, predictive models,
          and cloud-native ML infrastructure. I care about clarity: clean code,
          explainable models, and dashboards that help non-technical stakeholders
          make faster, better calls.
        </p>
      </div>
    </div>
  );
};

export default About;
