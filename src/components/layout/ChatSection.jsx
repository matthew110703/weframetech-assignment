// Next.js
import Image from "next/image";

// UI
import { QuestionItem } from "../ui";

export default function ChatSection() {
  return (
    <div className="flex lg:flex-row flex-col-reverse mt-4 justify-between border-t border-[#D7DFE9] bg-[#F9FAFB]">
      {/* Pending Questions */}
      <section aria-labelledby="pending-questions" className="min-w-[22.5rem]">
        <div className="flex justify-between border-b border-[#D7DFE9] items-center py-3 px-6">
          <h2
            id="pending-question"
            className="font-semibold text-lg text-[#101828] leading-7"
          >
            Pending Questions
          </h2>
          <span className="shadow-xs bg-[#2FBDFF] px-1.5 py-0.5 rounded-sm text-xs leading-[18px] text-center text-white">
            02
          </span>
        </div>
        <div>
          <QuestionItem
            fullName="Phoenix Baker"
            username="@phoenix"
            profileSrc={"/chat-users/1.png"}
            profileBgColor="#D6CFB7"
            question={"What are the requirements for opening a new store?"}
            isActive
          />
          <QuestionItem
            fullName="Koray okumus"
            username="@koray"
            profileSrc={"/chat-users/2.png"}
            profileBgColor="#E5CFE7"
            question={"How do I manage inventory effectively?"}
            isActive
          />
        </div>
      </section>

      {/* AI Chat Assistant */}
      <section
        aria-labelledby="chat-assistant"
        className="relative py-10 px-16 w-full flex flex-col justify-center items-center"
      >
        <button
          type="button"
          className="absolute top-6 right-8 p-1.5 rounded-[30px] bg-[#E9EFF6]"
        >
          <Image src={"/arrow.png"} alt="Arrow Up" width={16} height={16} />
        </button>
        <div className="flex w-full flex-col items-center gap-8">
          <Image
            src={"/assistant.png"}
            alt="AI Assistant"
            width={64}
            height={36}
          />
          <h2
            id="chat-assistant"
            className="text-3xl text-center font-semibold leading-[38px] text-[#212121]"
          >
            Welcome to the AI Chat Assistant
          </h2>
          <form className="focus-within:border-black w-full md:w-[80%] py-2.5 px-3.5 bg-white shadow-[#1018280D] shadow-xs border border-[#D7DFE9] flex items-center gap-1.5 rounded-lg">
            <input
              type="text"
              className="w-full text-base leading-6 outline-none font-normal"
              placeholder="Ask your question here.."
            />
            <button type="submit" className="cursor-pointer">
              <Image src={"/send.png"} alt="Send" width={20} height={20} />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
