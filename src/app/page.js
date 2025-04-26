// Next.js imports
import Image from "next/image";

// UI
import { ProgressCircle } from "@/components/ui";

export default function Home() {
  return (
    <div className="grid grid-cols-6 gap-5">
      {/* Account Progress */}
      <section
        aria-labelledby="account-progress"
        className="p-6 space-y-6 col-span-6 lg:col-span-2 bg-white rounded-xl shadow-sm"
      >
        <div className="flex flex-col items-center gap-y-6 border-b pb-4 border-[#E9EFF6]">
          <h2
            id="account-progress"
            className="font-semibold text-center leading-[1rem]"
          >
            Account Progress
          </h2>
          <ProgressCircle percentage={85} />
        </div>
        <div className="p-4 space-y-4 rounded-lg bg-[#F6F7FB] shadow-sm">
          <h3 className="font-semibold text-sm text-[#1C222B]">
            Steps Completed
          </h3>
          {/* Steps completed list */}
          <ul className="space-y-4">
            {["Profile Setup", "Initial training", "Legal Documents"].map(
              (step, index) => (
                <li key={index} className="flex items-center justify-between">
                  <p className="text-sm font-medium leading-6 text-[#455468]">
                    <span className="inline-block rounded-full mr-2 w-2.5 h-2.5 bg-[#D9D9D9]"></span>
                    {step}
                  </p>
                  <Image
                    src={"/check.svg"}
                    alt="Check Circle"
                    width={16}
                    height={16}
                  />
                </li>
              )
            )}
          </ul>
        </div>
        <div className="p-4 space-y-4 rounded-lg bg-[#F6F7FB] shadow-sm">
          <h3 className="font-semibold text-sm leading-6 text-[#1C222B]">
            Steps Remaining
          </h3>
          {/* Steps remaining list */}
          <ul className="space-y-4">
            {["Financial Integration", "Final Review"].map((step, index) => (
              <li key={index} className="flex items-center justify-between">
                <p className="text-sm font-medium leading-6 text-[#455468]">
                  <span className="inline-block rounded-full mr-2 w-2.5 h-2.5 bg-[#D9D9D9]"></span>
                  {step}
                </p>
                <Image
                  src={"/check.svg"}
                  alt="Check Circle"
                  width={16}
                  height={16}
                  className=" opacity-25"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Total Franchisees Onboard & Financial Wellbeing */}
      <div className="grid col-span-6 lg:col-span-4 grid-cols-1 md:grid-cols-2 gap-5 ">
        {/* Total Franchisees Onboard */}
        <section
          aria-labelledby="total-franchisees-onboard"
          className="p-6 space-y-6 rounded-xl space-6 border border-[#EAECF0] shadow-sm bg-[#FFF]"
        >
          <h3
            id="total-franchisees-onboard"
            className="font-semibold text-base leading-6"
          >
            Total Franchisees Onboard
          </h3>
          <div className="flex xl:flex-row lg:flex-col gap-y-2 items-center lg:items-start xl:items-center justify-between">
            {/* Number of Franchisees */}
            <div className="flex items-center gap-4">
              <h4 className="font-semibold text-3xl">14</h4>
              <div className="flex items-center gap-1 py-0.5 px-2 rounded-full border-[1.5px] text-[#067647] text-sm border-[#079455]">
                <Image
                  src={"/trend-up.svg"}
                  alt="Trend-Up"
                  width={12}
                  height={12}
                />
                <span>7.4%</span>
              </div>
            </div>
            {/* People */}
            <div className="flex">
              {[...Array(5)].map((_, index) => (
                <Image
                  key={index}
                  src={`/avatars/${index + 1}.png`}
                  alt={"Image" + (index + 1)}
                  width={24}
                  height={24}
                  className={`relative z-0 top-0`}
                  style={{ right: `${index * 4}px` }}
                />
              ))}

              <span className="font-semibold text-xs relative z-10 top-0 right-10 leading-6 text-center w-6 h-6 bg-[#F2F4F7] border-2 rounded-full border-white text-[#475467]">
                +7
              </span>
            </div>
          </div>
          <Image
            src={"/progress-bar.png"}
            alt="Progress bar"
            width={338}
            height={12}
            className="w-full h-3"
          />
          {/* Stages */}
          <div className="flex items-center justify-between">
            <div className="gap-3 flex items-center">
              <span className="inline-block w-2.5 h-2.5 bg-[#1F7EAA] rounded-sm"></span>
              <p className="text-sm font-medium leading-5 text-[#475467]">
                Stage 1 (Initial Inquiry)
              </p>
            </div>
            <span className="font-semibold text-lg text-[#1C222B]">02</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="gap-3 flex items-center">
              <span className="inline-block w-2.5 h-2.5 bg-[#2FBDFF] rounded-sm"></span>
              <p className="text-sm text-[#475467] font-medium leading-5">
                Stage 2 (Document Submission)
              </p>
            </div>
            <span className="font-semibold text-lg text-[#1C222B]">07</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="gap-3 flex items-center">
              <span className="inline-block w-2.5 h-2.5 bg-[#97DEFF] rounded-sm"></span>
              <p className="text-sm text-[#475467] font-medium leading-5">
                Stage 3 (Training)
              </p>
            </div>
            <span className="font-semibold text-lg text-[#1C222B]">05</span>
          </div>
        </section>

        {/* Key Insights & Feedback */}
        <section
          aria-labelledby="key-insights-feedback"
          className="p-6 space-y-6 border border-[#EAECF0] shadow-xs bg-white rounded-xl"
        >
          <h3 className="text-base font-semibold leading-6">
            Key Insights & Feedback
          </h3>
          <div className="flex justify-between items-center pb-3 border-b border-[#E9EFF6]">
            <div className="space-y-1">
              <h4 className="text-3xl font-semibold leading-9">10%</h4>
              <p className="text-sm text-[#475467] font-medium leading-5">
                Sales Growth
              </p>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <Image
                src={"/logo.png"}
                alt="Top Performer"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="bg-[#D5F2FF80] py-0.5 px-3 border border-[#BAE9FF] font-medium rounded-[20px] text-[#279DD4] leading-5 text-center text-xs">
                Top Performer
              </span>
            </div>
          </div>
          <div className="py-2 px-4 rounded-lg space-y-1.5 bg-[#F6F7FB]">
            <h5 className="text-sm font-semibold leading-6 text-[#1C222B]">
              Feedback
            </h5>
            <p className="text-xs text-[#455468]">
              <span className="bg-[#D9D9D9] w-2.5 h-2.5 inline-block mr-2 font-medium leading-4 rounded-full"></span>
              Franchisees are requesting more detailed training materials.
            </p>
          </div>
        </section>
        {/* Financial Wellbeing */}
        <section
          aria-labelledby="financial-wellbeing"
          className="p-6 space-y-8 rounded-xl shadow-sm bg-white border border-[#EAECF0]"
        >
          <h3
            id="financial-wellbeing"
            className="text-base font-semibold leading-6"
          >
            Financial Wellbeing
          </h3>
          <div className="flex items-center pb-3 border-b border-[#E9EFF6]  justify-between">
            <div className="space-y-0.5">
              <h4 className="text-3xl font-semibold leading-9">20</h4>
              <p className="text-sm text-[#475467] font-medium leading-5">
                Total Franchisees
              </p>
            </div>
            <div className="flex items-center gap-1 py-0.5 px-2 rounded-full border-[1.5px] text-[#067647] text-sm border-[#079455]">
              <Image
                src={"/trend-up.svg"}
                alt="Trend-Up"
                width={12}
                height={12}
              />
              <span className="font-medium leading-5">2.1%</span>
            </div>
          </div>
          <div className="flex xl:flex-row lg:flex-col justify-center items-center gap-4">
            <div className="bg-[#F6F7FB] space-y-2 p-4 rounded-lg">
              <p className="text-[#455468] text-sm text-center">Target</p>
              <h4 className="text-[#1C222B] text-xl font-semibold leading-[38px]">
                $500,000
              </h4>
            </div>
            <div className="bg-[#F6F7FB] space-y-2 p-4 rounded-lg">
              <p className="text-[#455468] text-sm text-center">Current</p>
              <h4 className="text-[#1C222B] text-xl font-semibold leading-[38px]">
                $450,000
              </h4>
            </div>
          </div>
        </section>
        {/* Prospect Leads */}
        <section
          aria-labelledby="prospect-leads"
          className="p-6 space-y-6 border border-[#EAECF0] shadow-xs bg-white rounded-xl"
        >
          <h3 className="text-base font-semibold leading-6" id="prospect-leads">
            Prospect Leads
          </h3>
          <div className="flex flex-col gap-3">
            {["Wade Warren", "Ava Wright", "Cody Fisher"].map((name, index) => (
              <div
                key={index}
                className="bg-[#F6F7FB] flex flex-row lg:flex-col gap-y-1.5 xl:flex-row justify-between items-center px-4 py-2.5 rounded-lg"
              >
                <div className="flex gap-2.5 items-center">
                  <Image
                    src={`/prospect-leads/${index + 1}.png`}
                    alt={name}
                    width={36}
                    height={36}
                  />
                  <h4 className="text-[#101828] font-medium text-sm leading-5">
                    {name}
                  </h4>
                </div>
                <p className="text-sm text-[#1C222BE5] font-medium leading-5">
                  <span className="text-[#1C222BB2]">Stage: </span>Initial
                  Inquiry
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
