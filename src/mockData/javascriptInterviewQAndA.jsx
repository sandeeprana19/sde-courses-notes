const javascriptInterviewQnAs = [
  {
    id: "asked-in-others",
    category: "Asked in Others",
    questions: [
      {
        id: "asked-in-others-1",
        question:
          "Find missing elements like 3 and 9 into this array: let arr = [1,2,4,5,6,7,8,10]?",
        answer: (
          <div className="flex items-start">
            <p>A.</p>
            <pre className="relative bottom-[1.4375rem] right-[10.625rem]">
              <code>
                {`
                      let arr = [1, 2, 4, 5, 6, 7, 8, 10];
                      let missingElements = [];

                      for (let i = 1; i <= 10; i++) {
                        if (!arr.includes(i)) {
                          missingElements.push(i);
                        }
                      }

                      console.log(missingElements); // Output: [3, 9]
                    `}
              </code>
            </pre>
          </div>
        ),
      },
      {
        id: "asked-in-others-2",
        question:
          "Difference between double equals (==) and triple equals (===)?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec)</p>
            <p>
              == is the loose equality operator that compares values after type
              coercion, while === is the strict equality operator that compares
              both value and type without type coercion.
            </p>
            <p>So in practice, === is preferred to avoid unexpected results.</p>
          </div>
        ),
      },
      {
        id: "asked-in-others-3",
        question: "What is a timer in JavaScript?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec)</p>
            <p>
              A timer in JavaScript is used to schedule code execution either
              once after a delay or repeatedly at fixed intervals, using
              setTimeout and setInterval.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-others-4",
        question:
          "Difference between window.onload and document.ready in JavaScript?",
        answer: (
          <div className="overflow-x-auto">
            <p>A. 💡 Quick Recall (15 sec)</p>
            <p>
              window.onload fires after the entire page is fully loaded,
              including images and external resources. While, document.ready
              fires as soon as the DOM is parsed, without waiting for images and
              external resources.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-others-5",
        question: "Define Prototypal Inheritance?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec)</p>
            <p>
              Prototypal inheritance in JavaScript is a mechanism where objects
              inherit properties and methods from another object called a
              prototype. So if a property or method isn’t found on the object
              itself then JavaScript looks up through the prototype chain.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-others-6",
        question:
          "Whats the priority between window.something and document.getElementById?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec)</p>
            <p>
              window.something accesses global properties on the browser’s
              global object, while document.getElementById() explicitly
              retrieves a DOM element by its ID. So they don’t have a priority
              order, but name collisions can occur which is why getElementById()
              is safer and more reliable.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-others-7",
        question: "Difference between undefined and null?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. Let me tell you 2 difference between undefined and null:</p>
            <table className="table text-base">
              <thead>
                <tr>
                  <th className="align-top"></th>
                  <th className="align-top">undefined</th>
                  <th className="align-top">null</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="align-top">1</th>
                  <td className="align-top">
                    undefined is very special keyword in javascript which is
                    assign as a placeholder by javascript to a variable that has
                    been declared but hasn't been assigned a value yet.
                  </td>
                  <td className="align-top">
                    null is an assignment value that represents no value or
                    "nothing" on purpose.
                  </td>
                </tr>
                <tr>
                  <th className="align-top">2</th>
                  <td className="align-top">
                    undefined is primitive data type.
                  </td>
                  <td className="align-top">
                    null is an object or reference data type.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ),
      },
      {
        id: "asked-in-others-7",
        question: "Define this keyword?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>
              A. Let me tell you about this keyword through it's present
              scenario ways like:
            </p>
            <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
              <li>
                this keyword in global space always have the value of
                globalObject and the globalObject is window in case of browser.
                So, globalObject can be different as it depends on where I'm
                running this keyword piece of javascript code.
              </li>
              <li>
                In non-strict mode, the value of this keyword inside a function
                is undefined and because javascript has something known as this
                substitution so the value of this keyword become equal to
                globalObject which is window in case of browser. While in strict
                mode, the value of this keyword inside a function is always
                undefined so if the function is called without any reference
                then the value is undefined but if I call it like window.x()
                function then the value of this keyword inside a x function will
                be globalObject which is window in case of browser.
              </li>
              <li>
                Whenever this keyword is inside an object method then the value
                of this keyword is object itself where this method is present.
              </li>
              <li>
                Lets say there ia an obj object which contain a property and x
                method within which I'm console logging this keyword. So, the
                value of this keyword inside arrow function will not be obj
                object but it will be its enclosing lexical context meaning
                where the obj object is present so the lexical environment of
                obj object is globalObject so thats why the value of this
                keyword will take the value of globalObject which is window in
                case of browser.
              </li>
              <li>
                call, apply and bind methods lets explicitly set this keyword
                value.
              </li>
              <li>
                Lets say there is an obj object which contain a property and x
                method where y arrow function is enclosed inside it and where
                I'm console logging this keyword so the value of this keyword
                will be obj object itself because y arrow function enclosing
                lexical context is x method so thats why it will behave exactly
                similar like how it suppose to behave inside x method.
              </li>
            </ol>
          </div>
        ),
      },
    ],
  },
  {
    id: "asked-in-cognizant",
    category: "Asked in Cognizant",
    questions: [
      {
        id: "asked-in-cognizant-1",
        question: "Define an object literal?",
        answer: (
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <p>A. 💡 Quick Recall (15 sec):</p>
              <p>
                An object literal is the simplest way to create an object in
                JavaScript by defining its keys and values directly inside curly
                braces. And it’s called literal because I'm literally defining
                the object’s content in the code.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "asked-in-cognizant-2",
        question: "Why we need to use prototype?",
        answer: (
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <p>A. 💡 Quick Recall (15 sec):</p>
              <p>
                We use prototype in JavaScript to enable inheritance and code
                reuse. They allow objects to share properties and methods
                without duplicating them, which saves memory and makes code more
                efficient.
              </p>
              <p>Therefore, we need to use prototype in javascript.</p>
            </div>
          </div>
        ),
      },
      {
        id: "asked-in-cognizant-3",
        question: "Define call, apply and bind?",
        answer: (
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <p>A. 💡 Quick Recall (15 sec):</p>
              <p>
                call, apply, and bind are javascript function methods used to
                explicitly set the value of this. So:
              </p>
              <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                <li>
                  call() invoke the function immediately with this set to 1st
                  argument and then arguments are passed individually.
                </li>
                <li>
                  apply() invoke the function immediately with this set to 1st
                  argument and then arguments are passed as an array.
                </li>
                <li>
                  bind() doesn't invoke the function instead it returns a new
                  function with this permanently bound and then arguments are
                  passed individually. And then I can invoke this newly return
                  function whenever I required.
                </li>
              </ol>
            </div>
          </div>
        ),
      },
      {
        id: "asked-in-cognizant-4",
        question: "Define generator function?",
        answer: (
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <p>
                A. Generator function in JavaScript is a special type of
                function that can pause and resume its execution using the yield
                keyword. It’s defined using function* and returns an iterator
                object that can produce a sequence of values over time by
                calling next method onto iterator object instead of returning
                them all at once.
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    id: "asked-in-accenture",
    category: "Asked in Accenture",
    questions: [
      {
        id: "asked-in-accenture-3",
        question: "What are ES6 features?",
        answer: (
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <p>A. 💡 Quick Recall (15 sec):</p>
              <p>
                ES6 introduced modern JavaScript features like let, const, arrow
                function, template literal, destructuring, spread operator, rest
                operator, module, class, promise, and default parameter for
                making code cleaner, more readable, and easier to maintain.
              </p>
            </div>
          </div>
        ),
      },
    ],
  },
];

export default javascriptInterviewQnAs;
