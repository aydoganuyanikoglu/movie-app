import FilterBar from "./components/FilterBar";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";
import MovieSlider from "./components/MovieSlider"
import Footer from "./components/Footer";
import StarRating from "./components/StarRating";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
import LikedMovies from "./components/LikedMovies";

const footerLinks = [
    {
        title: 'neoflemaTV',
        links: [
            {name: 'Documentation'},
            {name: 'FAQ'},
            {name: 'Application'},
            {name: 'Get in Touch'}
        ]
    },
    {
        title: 'How to Reach Us?',
        links: [
            {name: 'neoflematv@email.com',logo: '/mail-icon.svg'},
            {name: '+1 508-203-9070',logo:'/phone-icon.svg'}
        ]
    },
    {
        title: 'social media',
        links: [
            {logo: '/instagram.svg'},
            {logo: '/facebook.svg'},
            {logo: 'twitter.svg'},
            {logo: 'tv.svg'}
        ]
    }
]

const countryList = [
    "Argentina",
    "Australia",
    "Austria",
    "Belgium",
    "Brazil",
    "Canada",
    "China",
    "Colombia",
    "Denmark",
    "Egypt",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "India",
    "Indonesia",
    "Iran",
    "Ireland",
    "Israel",
    "Italy",
    "Japan",
    "Kenya",
    "Malaysia",
    "Mexico",
    "Netherlands",
    "New Zealand",
    "Nigeria",
    "Norway",
    "Pakistan",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Russia",
    "Saudi Arabia",
    "Singapore",
    "South Africa",
    "South Korea",
    "Spain",
    "Sweden",
    "Switzerland",
    "Thailand",
    "Turkey",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Vietnam"
  ];
  
export {
    FilterBar,
    MovieList,
    Navbar,
    MovieSlider,
    Footer,
    footerLinks,
    StarRating,
    Register,
    Login,
    countryList,
    LikedMovies,
    Profile
}