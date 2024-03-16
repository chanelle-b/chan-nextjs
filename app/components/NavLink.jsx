import Link from 'next/link';
const NavLink = ({href, title, number}) => {
    return(
        <Link
         href={href}
          className='nav-link mobile-menu font-mono block py-2 pl-3 pr-4 text-[#ffffff] sm:text-1xl rounded md:p-2'>
            <span className='nav-number'>{number}</span>
            {title}
            </Link>
    )
}
export default NavLink