// Next.js
import Image from "next/image";

const QuestionItem = ({
  fullName,
  username,
  time,
  question,
  isActive = false,
  profileSrc,
  profileBgColor = "white",
}) => {
  return (
    <div className="p-4 border-b border-[#EAECF0] space-y-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-block bg-[#2FBDFF] w-2 h-2 rounded-md self-center"></span>
          <div
            className={`w-10 h-10 ${
              isActive &&
              "relative after:content-[''] after:w-2.5 after:h-2.5 after:border-[1.5px] after:border-white after:bg-[#17B26A] z-10 after:absolute after:bottom-0 after:right-0 after:rounded-full"
            }`}
          >
            <Image
              src={profileSrc}
              alt={"User Profile " + fullName}
              width={40}
              height={40}
              className={`rounded-full object-cover `}
              style={{ backgroundColor: profileBgColor }}
            />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-[#344054] leading-5">
              {fullName}
            </h3>
            <span className="text-[#475467] text-sm font-normal">
              {username}
            </span>
          </div>
        </div>
        <time className="text-sm font-normal leading-5 text-[#475467]">
          {time}
        </time>
      </div>
      <p className="text-sm pl-5 leading-5 font-normal text-[#475467]">
        {question}
      </p>
    </div>
  );
};

export default QuestionItem;
