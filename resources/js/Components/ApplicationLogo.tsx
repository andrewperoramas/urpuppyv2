import { Link } from '@inertiajs/react';
import { SVGAttributes } from 'react';
import { FaPaw } from 'react-icons/fa';

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <Link prefetch className="navbar-brand py-0 me-0" href="/">
          <img src="/logo.svg" alt="" />
        </Link>
    );
}
