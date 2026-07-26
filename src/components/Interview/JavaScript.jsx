import { useMemo } from "react";
import javascriptInterviewQnAs from "../../mockData/javascriptInterviewQAndA";

const JavaScript = () => {
  const javascriptInterviewQnANumberedGroups = useMemo(() => {
    let globalIndex = 0;
    return javascriptInterviewQnAs?.map((javascriptInterviewQnA) => ({
      ...javascriptInterviewQnA,
      questions: javascriptInterviewQnA?.questions?.map((question) => ({
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
            JavaScript Q&As [
            {javascriptInterviewQnANumberedGroups
              ?.map(
                (javascriptInterviewQnANumberedGroup) =>
                  javascriptInterviewQnANumberedGroup?.questions?.length,
              )
              .reduce((acc, curr) => (acc += curr), 0)}
            ]
          </h1>
          {javascriptInterviewQnANumberedGroups?.map(
            (javascriptInterviewQnANumberedGroup, index) => (
              <div
                key={javascriptInterviewQnANumberedGroup?.id}
                className="flex flex-col gap-y-4"
              >
                <div className="collapse collapse-plus bg-base-200">
                  <input
                    type="radio"
                    name="javascriptInterview"
                    defaultChecked={
                      javascriptInterviewQnANumberedGroup?.category.includes(
                        "Asked in Others",
                      ) && index === 0
                    }
                  />
                  <div className="collapse-title text-xl font-medium">
                    <h2 className="text-xl font-bold text-white">
                      {javascriptInterviewQnANumberedGroup?.category} [
                      {javascriptInterviewQnANumberedGroup?.questions?.length}]
                    </h2>
                  </div>
                  <div className="collapse-content overflow-x-auto">
                    <div className="flex flex-col gap-y-4">
                      {javascriptInterviewQnANumberedGroup?.questions?.map(
                        (qa, index) => (
                          <div
                            key={qa?.id}
                            className="collapse collapse-plus bg-base-100"
                          >
                            <input
                              type="radio"
                              name="interview"
                              defaultChecked={
                                javascriptInterviewQnANumberedGroup?.category ===
                                  "Asked in Others" && index === 0
                              }
                            />
                            <div className="collapse-title text-xl font-medium">
                              {qa?.number + ". " + qa?.question}
                            </div>
                            <div className="collapse-content overflow-x-auto">
                              {qa?.answer}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default JavaScript;
