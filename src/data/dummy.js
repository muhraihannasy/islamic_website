import { IoNewspaper, IoLibrarySharp } from "react-icons/io";
import { MdSchool } from "react-icons/md";
import { BsCalendar2EventFill } from "react-icons/bs";
import { RiHandCoinFill,RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import { AiTwotoneShop,AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

const linksNavbar = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "About Us",
    to: "/about",
  },
  {
    name: "News",
    to: "/news",
  },
  {
    name: "Event",
    to: "/event",
  },
  {
    name: "Online Store",
    to: "/store",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];

const titlesec1 = {
  title1: "Al Qur'an & Sunnah",
  title2: "A reliable Islamic Center to Follow the Qur'an & Sunnah",
  description:
    "The Salat is the time when the meeting with Allah and the ascension (Mi'raj) of the believer takes place.",
};

const titlesec2 = {
  title: "Daily Prayers Time",
  description:
    "The Salat is the time when the meeting with Allah and the ascension (Mi'raj) of the believer takes place. We all know the importance of this obligatory act, and thus, we do not wish to delve into that area.",
};

const titlesec4 = {
  title: "Different Progams of Taqwa.id",
  description:
    "The Salat is the time when the meeting with Allah and the ascension (Mi'raj) of the believer takes place. We all know the importance of this obligatory act, and thus, we do not wish to delve into that area.",
};

const progams = [
  {
    name: "News/Blogs",
    icon: <IoNewspaper />,
  },
  {
    name: "Education",
    icon: <MdSchool />,
  },
  {
    name: "Event",
    icon: <BsCalendar2EventFill />,
  },
  {
    name: "Donation",
    icon: <RiHandCoinFill />,
  },
  {
    name: "Online Shop",
    icon: <AiTwotoneShop />,
  },
  {
    name: "Islamic Library",
    icon: <IoLibrarySharp />,
  },
];

const titlesec5 = {
  title: "Extend Your Hand of Charity. Earn Rewards for the Hereafter
};

const cartZakat = [
    {
        title: "Rebuild Mosques Fund",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, minus. Voluptatum dolorem nam adipisci ab neque quisquam labore illum molestias eum velit, illo porro quam esse modi tenetur optio deserunt.",
        donatePersen: 57,
    },
    {
        title: "Zakat Fund",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, minus. Voluptatum dolorem nam adipisci ab neque quisquam labore illum molestias eum velit, illo porro quam esse modi tenetur optio deserunt.",
        donatePersen: 29,
    },
    {
        title: "Sadaqah Jariyah Fund",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, minus. Voluptatum dolorem nam adipisci ab neque quisquam labore illum molestias eum velit, illo porro quam esse modi tenetur optio deserunt.",
        donatePersen: 21,
    },
]

const titlesec6 = {
    title: "Upcoming Event"  
};

const event = [
    {
        month: "Sep",
        dey: "Sat",
        date: 18,
        time: "7.00 PM",
        name: "Marrige Preparation",
        ustadz: "D. Manjure Ilahi",

    },
    {
        month: "Sep",
        dey: "Tue",
        date: 21,
        time: "8.00 PM",
        name: "Islamic Halaqah",
        ustadz: "Abdullah Bin Abdur Razzak",
    },
    {
        month: "Sep",
        dey: "Wed",
        date: 22,
        time: "4.30 PM",
        name: "Islamic Halaqah",
        ustadz: "Eng, Enamul Haque",
    },
]

const titlesec7 = {
    title: "Be a Monthly Donation Member of Our Community",
    desc: "Regiter for membership. You can donate monthly whatever you want. No fixed rate here. Our monthly donation start from $5 to limitless"  
};

const footer = {
    quote: "Islamic resource center & foundation.",
    phone: "(135) 555 0923",
    email: "sunnah@gmail.com",
    location: "Indonesia, Bekasi",
    sosmed: [
        {
            icon: <FaFacebookF />,
            to: "",
        },
        {
            icon: <AiOutlineTwitter />,
            to: "",
        },
        {
            icon: <RiInstagramFill />,
            to: "",
        },
        {
            icon: <RiYoutubeFill />,
            to: "",
        },
    ]
}