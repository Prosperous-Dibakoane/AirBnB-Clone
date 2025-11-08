import './App.css';
import Navbar from './Navbar';
import Card from './EventCard';
import data from './data';
import homeData from './homedata';
import servicesData from './servicesdata';

function App() {
  const experienceCards = data.map((item) => (
    <Card
      key={`exp-${item.id}`}
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
      title={item.title}
      price={item.price}
      openSpots={item.openSpots}
    />
  ));

  const homeCards = homeData.map((home) => (
    <Card
      key={`home-${home.id}`}
      img={home.coverImg}
      rating={home.stats.rating}
      reviewCount={home.stats.reviewCount}
      country={home.location}
      title={home.title}
      price={home.price}
    />
  ));

  const serviceCards = servicesData.map((service) => (
    <Card
      key={`service-${service.id}`}
      img={service.coverImg}
      rating={service.stats.rating}
      reviewCount={service.stats.reviewCount}
      country={service.location}
      title={service.title}
      price={service.price}
    />
  ));

  return (
    <div className="container">
      <Navbar />

      <div className="welcome-banner">
        <h1 className="welcome-text">Welcome to Airbnb</h1>
        <img src="/images/welcome.png" alt="Welcome to Airbnb" />
      </div>

      {/* 🏠 Homes Section */}
      <section id="homes" className="homes-section">
        <h2 className="section-title">Homes you’ll love</h2>
        <div className="scroll-container">{homeCards}</div>
      </section>

      {/* 🎟️ Experiences Section */}
      <section id="experiences" className="experiences-section">
        <h2 className="section-title">Events near you</h2>
        <div className="scroll-container">{experienceCards}</div>
      </section>

      {/* 🧺 Services Section */}
      <section id="services" className="services-section">
        <h2 className="section-title">Services for your stay</h2>
        <div className="scroll-container">{serviceCards}</div>
      </section>
    </div>
  );
}

export default App;
