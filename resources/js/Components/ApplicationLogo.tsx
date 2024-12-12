import { SVGAttributes } from 'react';
import { FaPaw } from 'react-icons/fa';

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
    <div className="text-xl flex items-center gap-1 md:mb-1">
           <FaPaw className="text-orange-400"/> <span className="font-semibold text-white"> Urpuppy </span>
        </div>
    );
}
