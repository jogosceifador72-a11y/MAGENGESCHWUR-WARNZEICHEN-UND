import React from 'react';

export interface SocialLink {
  name: string;
  url: string;
  iconName: string;
  description: string;
  colorClass: string;
  badge?: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/karinzeit?stkn=NmZiY2VzaW1leXlo',
    iconName: 'instagram',
    description: '@karinzeit',
    colorClass: 'hover:bg-gradient-to-r hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] hover:text-white hover:border-transparent',
  },
  {
    name: 'Facebook Profil',
    url: 'https://www.facebook.com/share/1c8J76URqe/',
    iconName: 'facebook',
    description: 'Persönliches Profil',
    colorClass: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
  },
  {
    name: 'Facebook Seite',
    url: 'https://www.facebook.com/share/1DzZyfFWRL/',
    iconName: 'facebook-page',
    description: 'Offizielle Facebook Seite',
    colorClass: 'hover:bg-[#0E52B5] hover:text-white hover:border-[#0E52B5]',
    badge: 'Seite',
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@karinzeit',
    iconName: 'tiktok',
    description: '@karinzeit',
    colorClass: 'hover:bg-black hover:text-white hover:border-white/30',
  },
  {
    name: 'YouTube',
    url: 'https://youtube.com/@karinzeit?si=prrRmxwtRBUQ0sit',
    iconName: 'youtube',
    description: '@karinzeit Kanal',
    colorClass: 'hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]',
  },
  {
    name: 'Threads',
    url: 'https://www.threads.com/@karinzeit',
    iconName: 'threads',
    description: '@karinzeit',
    colorClass: 'hover:bg-black hover:text-white hover:border-white/30',
  },
  {
    name: 'Kwai',
    url: 'https://k.kwai.com/u/@kariningrid673/NxhDbbCg',
    iconName: 'kwai',
    description: '@kariningrid673',
    colorClass: 'hover:bg-[#FF5000] hover:text-white hover:border-[#FF5000]',
  },
];

export const SocialButtons: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 max-w-5xl mx-auto">
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-3.5 px-4 py-3.5 bg-[#122416]/90 border border-[#234527] text-white rounded-2xl shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl group ${social.colorClass}`}
        >
          {/* Custom SVG Icons */}
          <div className="w-9 h-9 rounded-xl bg-[#19351E] group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors">
            {social.iconName === 'instagram' && (
              <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            )}

            {(social.iconName === 'facebook' || social.iconName === 'facebook-page') && (
              <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            )}

            {social.iconName === 'tiktok' && (
              <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.34V9.05a8.16 8.16 0 0 0 4.91 1.64V7.24a4.85 4.85 0 0 1-1-.55z" />
              </svg>
            )}

            {social.iconName === 'youtube' && (
              <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            )}

            {social.iconName === 'threads' && (
              <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 13.91c-.13 3.04-2.13 5.09-5.82 5.09-3.91 0-6.18-2.61-6.18-6.91 0-4.46 2.45-7.09 6.36-7.09 3.82 0 6.09 2.5 6.09 6.27v.82h-9.9c.1 2.91 1.64 4.55 4.18 4.55 1.73 0 3.09-.64 3.73-1.64l1.54-.09zm-2.5-4.09c-.09-2.09-1.27-3.36-3.41-3.36-2.09 0-3.36 1.36-3.55 3.36h6.96z" />
              </svg>
            )}

            {social.iconName === 'kwai' && (
              <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5v-3.09c2.81-.35 5-2.77 5-5.71 0-3.18-2.58-5.7-5.7-5.7S6.6 4.52 6.6 7.7c0 2.94 2.19 5.36 5 5.71v3.09H9v2h6v-2h-2z" />
              </svg>
            )}
          </div>

          {/* Label */}
          <div className="flex-1 min-w-0 text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold leading-tight truncate text-white">
                {social.name}
              </span>
              {social.badge && (
                <span className="text-[10px] bg-[#1E3E23] text-[#4ADE80] border border-[#2D5832] px-1.5 py-0.2 rounded font-medium">
                  {social.badge}
                </span>
              )}
            </div>
            <span className="text-[11px] text-[#A0C4A3] truncate block">
              {social.description}
            </span>
          </div>

          {/* External Arrow */}
          <svg className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 transition-all shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      ))}
    </div>
  );
};
