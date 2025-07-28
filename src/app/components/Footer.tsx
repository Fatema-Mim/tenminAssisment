import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700">
      <div className="container w-full mx-auto px-0 md:px-9 ">
        <div className="flex flex-col  md:flex-row border-b border-[#E4E4E4] md:border-0">

         
          <div className="flex flex-col items-center w-full mb-7 md:mb-0 md:items-start md:mr-6">
            <img
              src="https://10minuteschool.com/images/logo.svg"
              alt="Instructor"
              width={116}
              height={32}
              loading="lazy"
              style={{ objectFit: "contain" }}
              className="mb-4"
            />
            <h3 className="mb-[14px] text-base font-semibold md:font-medium">
              ডাউনলোড করুন আমাদের মোবাইল অ্যাপ
            </h3>
            <div className="flex">
              <img
                src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png"
                alt="Google Play"
                width={156}
                height={49}
                loading="lazy"
                className="mr-4"
              />
              <img
                src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png"
                alt="iOS Download"
                width={156}
                height={49}
                loading="lazy"
              />
            </div>
          </div>

          
          <div className="flex w-full justify-center border-b border-[#E4E4E4] pb-8 md:border-none md:mx-14">

            <div className="w-1/2 mr-4 max-w-xs">
              <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">কোম্পানি</h3>
              <ul className="flex flex-col gap-2 text-gray-600 md:text-base">
                <li className="font-medium">ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি</li>
                <li className="font-medium">শিক্ষক হিসাবে যোগ দিন</li>
                <li className="font-medium">অ্যাফিলিয়েট হিসাবে যোগ দিন</li>
                <li className="font-medium">প্রাইভেসি পলিসি</li>
                <li className="font-medium">রিফান্ড পলিসি</li>
                <li className="font-medium">ব্যবহারকারীর শর্তাবলি</li>
              </ul>
            </div>

            <div className="w-1/2 max-w-xs">
              <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">অন্যান্য</h3>
              <ul className="flex flex-col gap-2 text-gray-600 md:text-base">
                <li className="font-medium">ব্লগ</li>
                <li className="font-medium">বুক স্টোর</li>
                <li className="font-medium">ফ্রি নোটস ও গাইড</li>
                <li className="font-medium">চাকরি প্রস্তুতি কোর্সসমূহ</li>
                <li className="font-medium">সার্টিফিকেট ভেরিফাই করুন</li>
                <li className="font-medium">ফ্রি ডাউনলোড</li>
              </ul>
            </div>
          </div>

          
          <div className="flex flex-col w-full md:w-auto md:ml-4 mt-8 md:mt-0">

            <div className="hidden md:block">
              <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">
                আমাদের যোগাযোগ মাধ্যম
              </h3>
              <p className="mb-4 text-base font-normal">
                কল করুন: <span className="text-green-600">16910 (24x7)</span>
              </p>
              <p className="mb-4 text-base font-normal">
                হোয়াটসঅ্যাপ: <span className="text-green-600">+8801896016252 (24x7)</span>
              </p>
              <p className="mb-4 text-base font-normal">
                দেশের বাহির থেকে: <span className="text-green-600">+880 9610916910</span>
              </p>
              <p className="mb-2 text-base font-normal">
                ইমেইল: <span className="text-green-600">support@10minuteschool.com</span>
              </p>
            </div>

            
            <div className="mx-auto mt-5 flex w-full max-w-[256px] gap-6 md:gap-2.5 md:mx-0">
              <img
                src="https://cdn.10minuteschool.com/images/facebook_1695730910971.png"
                alt="facebook"
                width={32}
                height={32}
                loading="lazy"
              />
              <img
                src="https://cdn.10minuteschool.com/images/instagram_1695731442397.png"
                alt="instagram"
                width={32}
                height={32}
                loading="lazy"
              />
              <img
                src="https://cdn.10minuteschool.com/images/linkedin_1695731507042.png"
                alt="linkedin"
                width={32}
                height={32}
                loading="lazy"
              />
              <img
                src="https://cdn.10minuteschool.com/images/youtube_1695731538726.png"
                alt="youtube"
                width={32}
                height={32}
                loading="lazy"
              />
              <img
                src="https://cdn.10minuteschool.com/images/Tiktok_1695731564895.png"
                alt="tiktok"
                width={32}
                height={32}
                loading="lazy"
              />
            </div>
          </div>
        </div>

        
        <div className="pt-6 pb-5 text-center">
          <p className="text-xs font-normal text-gray-600 md:text-sm">
            স্বত্ব © ২০১৫ - ২০২৫ টেন মিনিট স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত
          </p>
        </div>
      </div>

    </footer>
  );
}
