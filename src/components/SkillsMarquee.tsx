import Marquee from "react-fast-marquee";
import "./styles/SkillsMarquee.css";

type Skill = { name: string; icon: string };

const row1: Skill[] = [
  { name: "Python", icon: "🐍" },
  { name: "TensorFlow", icon: "🧠" },
  { name: "PyTorch", icon: "🔥" },
  { name: "scikit-learn", icon: "📊" },
  { name: "Keras", icon: "⚡" },
  { name: "XGBoost", icon: "🚀" },
  { name: "LightGBM", icon: "💡" },
  { name: "Hugging Face", icon: "🤗" },
];

const row2: Skill[] = [
  { name: "AWS", icon: "☁️" },
  { name: "GCP", icon: "🌐" },
  { name: "Docker", icon: "🐳" },
  { name: "Apache Spark", icon: "✨" },
  { name: "Airflow", icon: "🌊" },
  { name: "dbt", icon: "🔧" },
  { name: "PostgreSQL", icon: "🗄️" },
  { name: "Redis", icon: "📦" },
];

const row3: Skill[] = [
  { name: "NLP", icon: "💬" },
  { name: "Deep Learning", icon: "🔬" },
  { name: "Time-Series", icon: "📈" },
  { name: "A/B Testing", icon: "🔀" },
  { name: "Feature Engineering", icon: "⚙️" },
  { name: "MLOps", icon: "🔄" },
  { name: "Statistical Modeling", icon: "📐" },
];

const row4: Skill[] = [
  { name: "Tableau", icon: "📉" },
  { name: "PowerBI", icon: "📋" },
  { name: "Looker", icon: "🔍" },
  { name: "Streamlit", icon: "🎛️" },
  { name: "FastAPI", icon: "⚡" },
  { name: "LangChain", icon: "🔗" },
  { name: "Pandas", icon: "🐼" },
  { name: "NumPy", icon: "🔢" },
];

const SkillPill = ({ skill }: { skill: Skill }) => (
  <div className="skill-pill">
    <span className="skill-name">{skill.name}</span>
  </div>
);

const SkillsMarquee = () => {
  return (
    <div className="skills-section">
      <div className="skills-header">
        <h2>MY TECH STACK</h2>
        <p className="skills-subtitle">7+ years across the full ML lifecycle</p>
      </div>

      <div className="skills-rows">
        <div className="skills-row">
          <Marquee speed={30} gradient gradientColor="#080c14" gradientWidth={80} pauseOnHover>
            {row1.map((s) => <SkillPill key={s.name} skill={s} />)}
          </Marquee>
        </div>

        <div className="skills-row">
          <Marquee speed={40} direction="right" gradient gradientColor="#080c14" gradientWidth={80} pauseOnHover>
            {row2.map((s) => <SkillPill key={s.name} skill={s} />)}
          </Marquee>
        </div>

        <div className="skills-row">
          <Marquee speed={25} gradient gradientColor="#080c14" gradientWidth={80} pauseOnHover>
            {row3.map((s) => <SkillPill key={s.name} skill={s} />)}
          </Marquee>
        </div>

        <div className="skills-row">
          <Marquee speed={35} direction="right" gradient gradientColor="#080c14" gradientWidth={80} pauseOnHover>
            {row4.map((s) => <SkillPill key={s.name} skill={s} />)}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default SkillsMarquee;
