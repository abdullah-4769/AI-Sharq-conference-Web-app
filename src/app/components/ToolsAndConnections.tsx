import Link from 'next/link';
import {
  FaQrcode,
  FaMapMarkedAlt,
  FaQuestionCircle,
  FaArrowRight,
} from 'react-icons/fa';

const toolsSupport = [
  {
    title: 'QR Code Pass',
    desc: 'Entry & check-in',
    icon: <FaQrcode className="text-xl text-gray-500" />,
    Link:'',
  },
  {
    title: 'Venue Maps',
    desc: 'Navigation & locations',
    icon: <FaMapMarkedAlt className="text-xl text-pink-500" />,
   Link:'/participants/VeneueMaps',

  },
  {
    title: 'FAQ & Support',
    desc: 'Help & guidance',
    icon: <FaQuestionCircle className="text-xl text-yellow-500" />,
        Link:'/participants/Faqs&Support',

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

      {/* Arrow with individual link */}
      <Link href={tool.Link}>
        <FaArrowRight className="text-[#9B2033] text-2xl ml-auto" />
      </Link>
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
