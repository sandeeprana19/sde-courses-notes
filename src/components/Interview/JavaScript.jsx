import { javascriptInterviewQnAs } from "../../mockData/javascriptInterviewQAndA";

const JavaScript = () => {
  return (
    <div className="lg:w-7/12 w-full mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-bold text-white">
            JavaScript Q&As [
            {javascriptInterviewQnAs
              ?.map(
                (javascriptInterviewQnA) =>
                  javascriptInterviewQnA.questions.length,
              )
              .reduce((acc, curr) => (acc += curr), 0)}
            ]
          </h1>
          {javascriptInterviewQnAs?.map((javascriptInterviewQnA) => (
            <div
              key={javascriptInterviewQnA?.id}
              className="flex flex-col gap-y-4"
            >
              <h2 className="text-xl font-bold text-white">
                {javascriptInterviewQnA?.category}
              </h2>
              <div className="flex flex-col gap-y-4">
                {javascriptInterviewQnA?.questions?.map((qa, index) => (
                  <div
                    key={qa?.id}
                    className="collapse collapse-plus bg-base-200"
                  >
                    <input
                      type="radio"
                      name="interview"
                      defaultChecked={
                        javascriptInterviewQnA?.category ===
                          "Asked in Others" && index === 0
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

export default JavaScript;
