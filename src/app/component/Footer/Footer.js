// src/app/components/Footer/Footer.jsx

import React from 'react';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube, faPinterestP } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { toggleModal } from '../../store/slice/slice';
import { SCREENS } from '../Utils/CustomModal/Modal';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/assets/images/logo.svg'; // Adjust this path as necessary
import House8 from '../MainSection/House/House8'; // Make sure the path is correct

export const Footer = () => {
  const dispatch = useDispatch();

  const handleSocialIconClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer className="w-full h-auto bg-[#222222] px-[20px] lg:px-0">
      <div className="lg:max-w-[1290px] w-full mx-auto flex flex-col py-[20px]">
        <div className="flex items-center justify-start mb-[20px]">
          <Link href="/">
            <span>
              <Image
                src={logo}
                alt="House Banao Logo"
                width={150}
                height={70}
                className="cursor-pointer"
              />
            </span>
          </Link>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-[20px] lg:gap-[40px] py-[20px]">
          <div className="text-white ml-[40px]">
            <span className="text-[15px] font-semibold">Site Map</span>
            <ul className="flex flex-col gap-[10px] mt-[10px] w-[150px] text-[13px]">
              {siteMapMenus.map((menu, index) => (
                <li key={index}>
                  <Link href={menu.link}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-white ml-[40px]">
            <span className="text-[15px] font-semibold">Information</span>
            <ul className="flex flex-col gap-[10px] mt-[10px] w-[150px] text-[13px]">
              {informationMenus.map((menu, index) => (
                <li key={index}>
                  <Link href={menu.link}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-white ml-[40px]">
            
            <a href="mailto:support@housebanao.com" className="text-[13px]">support@housebanao.com</a>
            <p className="mt-2 text-[13px] w-[200px]">
              746A, 7th floor, JMD Megapolis Sector 48, Gurgaon, Haryana 122018
            </p>
            <div className="flex gap-[20px] mt-4">
              {socialIcons.map(({ icon, url }, index) => (
                <FontAwesomeIcon
                  icon={icon}
                  key={index}
                  className="w-[15px] h-[15px] p-[5px] cursor-pointer rounded-[4px]"
                  style={{ backgroundColor: '#313131', color: '#ffffff' }}
                  onMouseOver={(e) => e.currentTarget.style.color = iconColors[index]}
                  onMouseOut={(e) => e.currentTarget.style.color = '#ffffff'}
                  onClick={() => handleSocialIconClick(url)}
                />
              ))}
            </div>
          </div>
          <div className="text-white ml-[40px]">
            <House8 />  {/* Map component in the fourth column */}
          </div>
        </div>
        <div className="text-center text-white text-sm py-[10px]">
          © 2024 Vive HouseBanao Technologies Pvt. Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const siteMapMenus = [
  { name: 'About Us', link: '/aboutus' },
  { name: 'Services', link: '/service' },
  { name: 'Our Projects', link: '/ourprojects' },
  { name: 'How It Works', link: '/howitwork' },
  { name: 'Contact Us', link: '/contactus' },
];

const informationMenus = [
  { name: 'Terms & Conditions', link: '/terms' },
  { name: 'Privacy Policy', link: '/privacy' },
  { name: 'FAQs', link: '/faqss' },
  
];

const socialIcons = [
  { icon: faFacebookF, url: 'https://www.facebook.com/profile.php?id=61557081024259' },
  { icon: faInstagram, url: 'https://www.instagram.com/house_banao' },
  { icon: faLinkedinIn, url: 'https://www.linkedin.com/company/housebanao/' },
  { icon: faYoutube, url: 'https://www.youtube.com/@HouseBanaoo' },
  { icon: faPinterestP, url: 'https://in.pinterest.com/house_banao/' },
];

const iconColors = [
  '#1877F2', // Facebook
  '#E1306C', // Instagram
  '#0077B5', // LinkedIn
  '#FF0000', // YouTube
  '#E60023', // Pinterest
];

export default Footer;
