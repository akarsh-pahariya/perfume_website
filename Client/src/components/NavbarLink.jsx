import { NavLink } from 'react-router-dom';

const NavbarLink = ({ redirectTo, text }) => {
  return (
    <NavLink
      to={redirectTo}
      className={({ isActive }) =>
        `relative text-gray-300 font-medium py-2 px-3 transition duration-300 ${
          isActive
            ? 'text-white after:w-full'
            : 'hover:text-white hover:after:w-full'
        } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300`
      }
    >
      {text}
    </NavLink>
  );
};

export default NavbarLink;
