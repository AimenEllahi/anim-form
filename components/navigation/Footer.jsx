"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <div className='footer'>
      <footer>
        <ul>
          <li>
            <Link
              href='/shop'
              className='text-white hover:text-white focus:text-white hover:bg-transparent'
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href='/faq'
              className='text-white hover:text-white focus:text-white hover:bg-transparent'
            >
              FAQ
            </Link>
          </li>
          <li>
            <a
              href='https://discord.gg/xyfdCn2PnW'
              target='_blank'
              className='text-white hover:text-white focus:text-white hover:bg-transparent'
            >
              Discord
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/dndai_app'
              target='_blank'
              className='text-white hover:text-white focus:text-white hover:bg-transparent'
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href='https://patreon.com/user?u=105890862&utm_medium=clipboard_copy&utm_source=copyLink&utm_campaign=creatorshare_creator&utm_content=join_link'
              target='_blank'
              className='text-white hover:text-white focus:text-white hover:bg-transparent'
            >
              Patreon
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
