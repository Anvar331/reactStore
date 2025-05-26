import style from './Header.module.css';


interface links {
    name: string;
    href: string;
}

function Header ({ links }: { links: links[] }) {
    return (
        <header>
            <nav className={style.header}>
                <ul className="">
                    {links.map((link) => (
                        <li className={style.header__links}><a href={link.href}>{link.name}</a></li>
                    ))}
                </ul>
            </nav>
        </header> 
    )
}

export default Header;