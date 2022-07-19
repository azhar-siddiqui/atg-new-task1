import { BsThreeDots } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { CgShare } from "react-icons/cg";
import { GoLocation } from "react-icons/go";
import PostImg from "../assets/PostImg.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/Profile2.png";
import RectangleImg from "../assets/Rectangle-2.png";
import car from "../assets/car.png";
import RonalJones from "../assets/RonalJones.png";
import JosephGray from "../assets/JosephGray.png";

export const data = [
  {
    postImg: PostImg,
    icon: "✍",
    postTitle: "Article",
    postMassage: "What if famous brands had regular fonts? Meet RegulaBrands!",
    postDetailIcons: BsThreeDots,
    postDetailsMassage:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    profileIcon: profile2,
    profileName: "Sarthak Kamra",
    EyeIcon: AiOutlineEye,
    postViews: "1.4 k views",
    shairBtn: CgShare,
  },
  {
    postImg: RectangleImg,
    icon: "🔬",
    postTitle: "Education",
    postMassage: "Tax Benefits for Investment under National Pension Scheme",
    postDetailIcons: BsThreeDots,
    postDetailsMassage:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    profileIcon: profile1,
    profileName: "Sarah West",
    EyeIcon: AiOutlineEye,
    postViews: "1.4 k views",
    shairBtn: CgShare,
  },
  {
    postImg: car,
    icon: "🗓️",
    postTitle: " Meetup",
    postMassage: "Finance & Investment Elite Social Mixer @Lujiazui",
    postDetailIcons: BsThreeDots,
    postIcon: "📅",
    postDate: "Fri, 12 Oct, 2018",
    postLocationIcon: GoLocation,
    postLocation: "Ahmedabad, India",
    postDetailsMassage:
      "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
    profileIcon: RonalJones,
    profileName: "Ronal Jones",
    EyeIcon: AiOutlineEye,
    postViews: "1.4 k views",
    shairBtn: CgShare,
    visit: {
      visitBtn: "Visit Website",
      color: "red",
    },
  },
  {
    icon: "💼️",
    postTitle: " Job",
    postMassage: "Software Developer",
    postDetailIcons: BsThreeDots,
    postIcon: "📅",
    postDate: "Innovaccer Analytics Private Ltd.",
    postLocationIcon: GoLocation,
    postLocation: "Noida, India",
    profileIcon: JosephGray,
    profileName: "Joseph Gray",
    EyeIcon: AiOutlineEye,
    postViews: "1.4 k views",
    shairBtn: CgShare,
    visit: {
      visitBtn: "Visit Website",
      color: "green",
    },
  },
];
