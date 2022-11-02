import PlantCardListingPage from "../components/PlantCardListingPage";

const SAMPLE_DATA = [
  {
    name: "Monstera lorem ipsum galor white tiger - japanese origin",
    price: "12.95",
    time: "25hr 30m",
    user: "twinkle123",
    img: "https://cdn.pixabay.com/photo/2021/03/30/07/45/monstera-6136183_960_720.jpg",
  },
  {
    name: "Monstera Albo",
    price: "157.95",
    time: "20m",
    user: "jimmybob421",
    img: "https://pottedpixie.com/wp-content/uploads/2021/09/mature-monstera-albo-borsigiana.jpg",
  },
  {
    name: "Goldon Pothos",
    price: "14.95",
    time: "3hr 20m",
    user: "carl363",
    img: "https://cdn.pixabay.com/photo/2017/09/14/17/10/money-plant-2749714_960_720.jpg",
  },
  {
    name: "Goldon Pothos (top cutting)",
    price: "14.95",
    time: "3hr 20m",
    user: "carl363",
    img: "https://cdn.pixabay.com/photo/2017/09/14/17/10/money-plant-2749714_960_720.jpg",
  },
  {
    name: "Monstera ",
    price: "12.95",
    time: "25hr 30m",
    user: "twinkle123",
    img: "https://cdn.pixabay.com/photo/2021/03/30/07/45/monstera-6136183_960_720.jpg",
  },
  {
    name: "Monstera ",
    price: "12.95",
    time: "25hr 30m",
    user: "twinkle123",
    img: "https://cdn.pixabay.com/photo/2021/03/30/07/45/monstera-6136183_960_720.jpg",
  },
  {
    name: "Monstera ",
    price: "12.95",
    time: "25hr 30m",
    user: "twinkle123",
    img: "https://cdn.pixabay.com/photo/2021/03/30/07/45/monstera-6136183_960_720.jpg",
  },
  {
    name: "Monstera ",
    price: "12.95",
    time: "25hr 30m",
    user: "twinkle123",
    img: "https://cdn.pixabay.com/photo/2021/03/30/07/45/monstera-6136183_960_720.jpg",
  },
  {
    name: "Monstera ",
    price: "12.95",
    time: "25hr 30m",
    user: "twinkle123",
    img: "https://cdn.pixabay.com/photo/2021/03/30/07/45/monstera-6136183_960_720.jpg",
  },
  {
    name: "Monstera ",
    price: "12.95",
    time: "25hr 30m",
    user: "twinkle123",
    img: "https://cdn.pixabay.com/photo/2021/03/30/07/45/monstera-6136183_960_720.jpg",
  },
  {
    name: "Monstera ",
    price: "12.95",
    time: "25hr 30m",
    user: "twinkle123",
    img: "https://cdn.pixabay.com/photo/2021/03/30/07/45/monstera-6136183_960_720.jpg",
  },
  {
    name: "Monstera ",
    price: "12.95",
    time: "25hr 30m",
    user: "twinkle123",
    img: "https://cdn.pixabay.com/photo/2021/03/30/07/45/monstera-6136183_960_720.jpg",
  },
  {
    name: "Monstera ",
    price: "12.95",
    time: "25hr 30m",
    user: "twinkle123",
    img: "https://cdn.pixabay.com/photo/2021/03/30/07/45/monstera-6136183_960_720.jpg",
  },
];
const Listings = () => {
  return (
    <div className="listings">
      {/* <h2></h2> */}
      <div className="listing-grid">
        {SAMPLE_DATA.map((element) => (
          <PlantCardListingPage
            name={element.name}
            price={element.price}
            time={element.time}
            img={element.img}
            user={element.user}
          />
        ))}
      </div>
    </div>
  );
};

export default Listings;