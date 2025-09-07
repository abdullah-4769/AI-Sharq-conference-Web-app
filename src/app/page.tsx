import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#9B2033] min-h-screen w-full flex justify-center items-center relative">
      <div className="flex flex-col justify-center items-center">
        <Image src="/images/logo.png" alt="Logo" width={638} height={224} />
      <Image src="/images/line.png" alt="Logo" width={1729} height={127} className="absolute top-[610px] " />

      </div>
      
    </div>
  );
}
