import Header from "./components/Header";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import ProfileCard from "./components/ProfileCard";

function App() {
  // Bonus Challenge: Array of user profiles rendered with .map()
  const profiles = [
    {
      id: 1,
      name: "Arjun Kumar",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 2,
      name: "Sneha Verma",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 3,
      name: "Rahul Sharma",
      role: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];

  return (
    <div style={{ fontFamily: "Arial, sans-serif", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Task 1: Header */}
      <Header />

      <main style={{ padding: "20px", flex: 1, textAlign: "center" }}>
        <h2>Welcome to My React App!</h2>
        <p>This is my first modular React layout.</p>

        <hr style={{ margin: "25px auto", maxWidth: "600px", borderColor: "#eee" }} />

        {/* Task 2: Pass Data as Props (Greeting) */}
        <section>
          <h2>Task 2: Dynamic Greetings with Props</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
            <Greeting name="Priya" topic="React Components" />
            <Greeting name="Rohan" topic="JSX & Props" />
          </div>
        </section>

        <hr style={{ margin: "25px auto", maxWidth: "600px", borderColor: "#eee" }} />

        {/* Task 3 & Bonus Challenge: Profile Cards using .map() */}
        <section>
          <h2>Task 3 & Bonus: Team Profiles (.map())</h2>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px" }}>
            {profiles.map((user) => (
              <ProfileCard
                key={user.id}
                name={user.name}
                role={user.role}
                image={user.image}
              />
            ))}
          </div>
        </section>
      </main>

      {/* Task 1: Footer */}
      <Footer />
    </div>
  );
}

export default App;
