import Link from 'next/link';
import {FunctionComponent} from 'react';

const Nav: FunctionComponent = () => {
    return (
        <div className={'w-full px-2'}>
            <ul className={'flex'}>
                <li className={'basis-3/6'}><Link href="/">Resume</Link>
                </li>
                <li className={'basis-1/6 text-right'}><Link href="/">About</Link>
                </li>
                <li className={'basis-1/6 text-right'}><Link href="/">Gallery</Link>
                </li>
                <li className={'basis-1/6 text-right'}><Link href="/">Contact</Link>
                </li>

            </ul>
        </div>
    )
}

export default Nav