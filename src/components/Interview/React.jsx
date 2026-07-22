import { reactInterviewQnAs } from "../../mockData/reactInterviewQAndA";

const React = () => {
  return (
    <div className="lg:w-7/12 w-full mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-bold text-white">React Q&As [45]</h1>
          {reactInterviewQnAs?.map((reactInterviewQnA) => (
            <div key={reactInterviewQnA?.id} className="flex flex-col gap-y-4">
              <h2 className="text-xl font-bold text-white">
                {reactInterviewQnA?.category}
              </h2>
              <div className="flex flex-col gap-y-4">
                {reactInterviewQnA?.questions?.map((qa, index) => (
                  <div
                    key={qa?.id}
                    className="collapse collapse-plus bg-base-200"
                  >
                    <input
                      type="radio"
                      name="interview"
                      defaultChecked={
                        reactInterviewQnA.category === "Asked in Others" &&
                        index === 0
                      }
                    />
                    <div className="collapse-title text-xl font-medium">
                      {qa?.question}
                    </div>
                    <div className="collapse-content overflow-x-auto">
                      {qa?.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React;
