const quickAccessItems = [
  {
    label: 'Schedule',
    desc: 'Full program',
    img: '/images/div.png',
  },
  {
    label: 'My Agenda',
    desc: 'Personal schedule',
    img: '/images/div (1).png',
    Link: '/'
  },
  {
    label: 'Speakers',
    desc: 'Expert profiles',
    img: '/images/div (2).png',
  },
  {
    label: 'Sponsors',
    desc: 'Partners & exhibits',
    img: '/images/div (3).png',
  },
  {
    label: 'Networking',
    desc: 'Connect & chat',
    img: '/images/div (4).png',
  },
  {
    label: 'Forums',
    desc: 'Discussions',
    img: '/images/div (5).png',
  },
];

export default function QuickAccess() {
  return (
    <section className="bg-white p-10 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-6 text-black">Quick Access</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {quickAccessItems.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center text-center bg-white border border-gray-300 rounded-xl p-6 hover:shadow-md transition"
          >
            <img src={item.img} alt={item.label} className="w-10 h-10 mb-2" />
            <p className="font-semibold text-black">{item.label}</p>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
