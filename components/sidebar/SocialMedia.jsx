import {
  RiFacebookLine,
  RiYoutubeLine,
  RiInstagramLine,
  RiTwitterLine,
} from "react-icons/ri";

const SocialMedia = () => {
  return (
    <div>
      <ul className="flex items-center justify-center gap-14">
        <li>
          <a href="" target="_blank" className="text-2xl">
            <RiFacebookLine />
          </a>
        </li>
        <li>
          <a href="" target="_blank" className="text-2xl">
            <RiYoutubeLine />
          </a>
        </li>
        <li>
          <a href="" target="_blank" className="text-2xl">
            <RiInstagramLine />
          </a>
        </li>
        <li>
          <a href="" target="_blank" className="text-2xl">
            <RiTwitterLine />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
