import { useMemo } from "react";
import reactInterviewQnAs from "../../mockData/reactInterviewQAndA";

const React = () => {
  const reactInterviewQnANumberedGroups = useMemo(() => {
    let globalIndex = 0;
    return reactInterviewQnAs?.map((reactInterviewQnA) => ({
      ...reactInterviewQnA,
      questions: reactInterviewQnA?.questions?.map((question) => ({
        ...question,
        number: ++globalIndex,
      })),
    }));
  }, []);

  return (
    <div className="lg:w-7/12 w-full mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-bold text-white">
            React Q&As [
            {reactInterviewQnANumberedGroups
              ?.map(
                (reactInterviewQnANumberedGroup) =>
                  reactInterviewQnANumberedGroup?.questions?.length,
              )
              ?.reduce((acc, curr) => (acc += curr), 0)}
            ]
          </h1>
          {reactInterviewQnANumberedGroups?.map((groupItem, index) => (
            <div key={groupItem?.id} className="flex flex-col gap-y-4">
              <div className="collapse collapse-plus bg-base-200">
                <input
                  type="radio"
                  name="interviewCategory"
                  defaultChecked={
                    groupItem?.category.includes("Asked in Others") &&
                    index === 0
                  }
                />
                <div className="collapse-title text-xl font-medium">
                  <h2 className="text-xl font-bold text-white">
                    {groupItem?.category} [{groupItem?.questions?.length}]
                  </h2>
                </div>
                <div className="collapse-content overflow-x-auto">
                  <div className="flex flex-col gap-y-4">
                    {groupItem?.questions?.map((qa, index) => (
                      <div
                        key={qa?.id}
                        className="collapse collapse-plus bg-base-100"
                      >
                        <input
                          type="radio"
                          name="interview"
                          defaultChecked={
                            groupItem.category === "Asked in Others" &&
                            index === 0
                          }
                        />
                        <div className="collapse-title text-xl font-medium">
                          {qa?.number + ". " + qa?.question}
                        </div>
                        <div className="collapse-content overflow-x-auto">
                          {qa?.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default React;
