import Link from 'next/link';
const NavLink = ({href, title, number}) => {
    return(
        <Link
         href={href}
          className='nav-link block py-2 pl-3 pr-4 text-[#ffffff] sm:text-1xl rounded md:p-0 hover:text-white'>
            <span className='nav-number'>{number}</span>
            {title}
            </Link>
    )
}
export default NavLink