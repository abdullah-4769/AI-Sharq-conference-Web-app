import {
  FaQrcode,
  FaMapMarkedAlt,
  FaQuestionCircle,
} from 'react-icons/fa';

const toolsSupport = [
  {
    title: 'QR Code Pass',
    desc: 'Entry & check-in',
    icon: <FaQrcode className="text-xl text-gray-500" />,
  },
  {
    title: 'Venue Maps',
    desc: 'Navigation & locations',
    icon: <FaMapMarkedAlt className="text-xl text-pink-500" />,
  },
  {
    title: 'FAQ & Support',
    desc: 'Help & guidance',
    icon: <FaQuestionCircle className="text-xl text-yellow-500" />,
  },
];

const suggestedConnections = [
  {
    name: 'Ahmed Al-Rashid',
    title: 'Tech Solutions Inc.',
    avatar: '/images/Ahmed.png',
  },
  {
    name: 'Sarah Mitchell',
    title: 'Innovation Labs',
    avatar: '/images/Sara.png',
  },
  {
    name: 'Daniel Chen',
    title: 'Creative Minds Co.',
    avatar: '/images/Daniel.png',
  },
  {
    name: 'Emily Torres',
    title: 'Design Gurus',
    avatar: '/images/Emily.png',
  },
  {
    name: 'Jarren Smith',
    title: 'XenTech Technologies',
    avatar: '/images/jerrin.png',
  },
];

export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row gap-10">
<section className="bg-white rounded-lg shadow p-10 w-[621px] h-[450px] flex flex-col justify-start">
  <h2 className="text-base font-semibold text-black mb-4">Tools & Support</h2>

  <div className="flex flex-col gap-5">
    {toolsSupport.map((tool, index) => (
      <div
        key={index}
        className="flex items-center justify-between bg-white border border-gray-200 rounded-md px-8 py-7 hover:bg-gray-50 transition"
      >
        <div className="flex items-center gap-3">
          {tool.icon}
          <div>
            <p className="text-sm font-medium text-black">{tool.title}</p>
            <p className="text-xs text-gray-500">{tool.desc}</p>
          </div>
        </div>
        <span className="text-red-500 text-lg font-bold"><svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.3722 11.4704C30.2093 12.3164 30.2093 13.6904 29.3722 14.5364L18.6573 25.3655C17.8202 26.2115 16.4607 26.2115 15.6236 25.3655C14.7865 24.5195 14.7865 23.1455 15.6236 22.2995L22.6888 15.1658H2.14298C0.957642 15.1658 0 14.198 0 13C0 11.802 0.957642 10.8342 2.14298 10.8342H22.6821L15.6303 3.70051C14.7932 2.85448 14.7932 1.48054 15.6303 0.634518C16.4674 -0.211506 17.8269 -0.211506 18.664 0.634518L29.3789 11.4636L29.3722 11.4704Z" fill="#9B2033"/>
</svg>
</span>
      </div>
    ))}
  </div>
</section>

<section className="bg-white rounded-lg shadow p-5 w-[621px] h-[450px] flex flex-col justify-start">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-base font-semibold text-black">Suggested Connections</h2>
    <a href="#" className="text-xs text-gray-500 hover:underline">View All</a>
  </div>

  <div className="flex flex-col gap-4">
    {suggestedConnections.map((person, index) => (
      <div key={index} className="flex items-center justify-between  bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition">
        <div className="flex items-center gap-3">
          <img
            src={person.avatar}
            alt={person.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-black">{person.name}</p>
            <p className="text-xs text-gray-500">{person.title}</p>
          </div>
        </div>
        <button className="text-red-500 text-sm font-semibold hover:underline">
          Connect
        </button>
      </div>
    ))}
  </div>
</section>


      </div>
    </div>
  );
}
