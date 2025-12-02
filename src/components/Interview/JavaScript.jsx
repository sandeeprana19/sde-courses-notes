const JavaScript = () => {
  return (
    <div className="lg:w-7/12 w-full mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-bold text-white">JavaScript Q&A</h1>
          <h2 className="text-xl font-bold text-white">Asked in Others</h2>
          <div className="flex flex-col gap-y-4">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                1. Find missing elements like 3 and 9 into this array: let arr =
                [1,2,4,5,6,7,8,10]?
              </div>
              <div className="collapse-content overflow-x-auto">
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
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                2. Difference between double equals (==) and triple equals
                (===)?
              </div>
              <div className="collapse-content overflow-x-auto">
                <p>A.</p>
                <table className="table text-base">
                  <thead>
                    <tr>
                      <th className="align-top"></th>
                      <th className="align-top">Double equals (==)</th>
                      <th className="align-top">Triple equals (===)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="align-top">1</th>
                      <td className="align-top">
                        <div className="flex flex-col gap-y-2">
                          <p>
                            The double equals (==) is known as loose equality
                            operator because it performs type coercion before
                            comparing. This means it tries to convert the
                            operands to the same data type before making the
                            comparison.
                          </p>
                          <p>
                            For example: When I try to compare number data type
                            1 == string data type 1 then javascript will type
                            coerce this string data type 1 to number data type 1
                            for it to return true.
                          </p>
                        </div>
                      </td>
                      <td className="align-top">
                        <div className="flex flex-col gap-y-2">
                          <p>
                            The triple equals (===) is known as strict equality
                            operator because it does not perform type coercion
                            before comparing. This means both the data type and
                            the value must be the same for it to return true.
                          </p>
                          <p>
                            For example: When I try to compare number data type
                            1 === string data type 1 then javascript will not
                            type coerce this string data type 1 to number data
                            type 1 for it to return true. So in this case it
                            always return false.
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th className="align-top">2</th>
                      <td className="align-top">
                        <pre className="relative bottom-[1.4375rem] right-[10.625rem]">
                          <code>
                            {`
                            1 == "1"     // true → "1" (string) is coerced to 1 (number)
                            1 == 1       // true → same type and value
                            0 == false   // true → false is coerced to 0
                            null == undefined // true → special case
                          `}
                          </code>
                        </pre>
                      </td>
                      <td className="align-top">
                        <pre className="relative bottom-[1.4375rem] right-[10.625rem]">
                          <code>
                            {`
                            1 === "1"    // false → different types (number vs string)
                            1 === 1      // true → same type and value
                            0 === false  // false → number vs boolean
                            null === undefined // false → different types
                          `}
                          </code>
                        </pre>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 overflow-x-auto">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                3. What is a timer in JavaScript?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. A timer in JavaScript is used to schedule code execution
                    after a certain amount of time. So there are two main timer
                    functions like:
                  </p>
                  <ol className="list-[lower-roman] pl-8 flex flex-col gap-y-2">
                    <li>
                      setTimeout which takes in two arguments that are callback
                      function & delay respectively & then it will runs the
                      callback function once after the delay.
                    </li>
                    <li>
                      setInterval which also takes in two arguments that are
                      callback function & interval respectively & then it will
                      runs the callback function repeatedly at each interval.
                    </li>
                  </ol>
                  <p className="pl-4">Example:</p>
                  <pre className="relative bottom-[1.4375rem] right-[10.625rem]">
                    <code>
                      {`
                        setTimeout(() => console.log("Runs once after 1 second"), 1000);
                        setInterval(() => console.log("Repeats every 2 seconds"), 2000);
                      `}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200 overflow-x-auto">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                4. Difference between window.onload and document.ready in
                JavaScript?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="overflow-x-auto">
                  <p>A.</p>
                  <table className="table text-base">
                    <thead>
                      <tr>
                        <th className="align-top"></th>
                        <th className="align-top">window.onload</th>
                        <th className="align-top">document.ready</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="align-top">1</th>
                        <td className="align-top">
                          window.onload is a JavaScript event that fires after
                          the entire page is fully loaded including all
                          dependent resources like scripts, stylesheets and
                          images.
                        </td>
                        <td className="align-top">
                          document.ready fires as soon as DOM is fully loaded
                          and parsed even if images and other resources are
                          still loading.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                5. Define Prototypal Inheritance?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. In JavaScript, prototypal inheritance is a feature where
                    object can inherit properties and methods from another
                    object and this object is known as prototype. So every
                    object in javascript has an internal link to a prototype
                    object and if a property or method isn't found on the object
                    itself then javascript will look up in the prototype chain
                    to find it. So this allows for shared behavior among
                    objects, making code more efficient and memory-friendly.
                  </p>
                  <p>For example:</p>
                  <pre className="relative bottom-[1.4375rem] right-[10.625rem]">
                    <code>
                      {`

                      function Person(name, birthYear) {
                        this.name = name;
                        this.birthYear = birthYear;
                      }

                      Person.prototype.calcAge = function () {
                        console.log(2025 - this.birthYear);
                      };

                      const jonas = new Person('Jonas', 1990);
                      jonas.calcAge(); // Works due to prototypal inheritance
                    `}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                6. Whats the priority between window.something and
                document.getElementById?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. They don't directly compete in terms of "priority"
                    because they serve different purposes, but there can be name
                    collisions.
                  </p>
                  <p>
                    So window.something accesses global properties attached to
                    the browser’s global object, whereas
                    document.getElementById() is specifically used to select a
                    DOM element by its ID.
                  </p>
                  <p>
                    So in loose mode, if an element has id="myButton" then the
                    browser exposes it as window.myButton and then let say if a
                    global variable with the same name also exists then that
                    global variable overrides the ID-based reference. So
                    window.myButton refers to the variable not the element.
                  </p>
                  <p>
                    And in strict mode, browsers don't create ID-based global
                    variables, so window.myButton is undefined unless I
                    explicitly define it.
                  </p>
                  <p>
                    So to avoid conflicts I always prefer to use
                    document.getElementById() to select DOM element.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                7. Difference between undefined and null?
              </div>
              <div className="collapse-content overflow-x-auto">
                <p>A.</p>
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
                        assign as a placeholder by javascript to a variable that
                        has been declared but hasn't been assigned a value yet.
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
            </div>
          </div>
          <h2 className="text-xl font-bold text-white">Asked in Cognizant</h2>
          <div className="flex flex-col gap-y-4">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                1. Define an object literal?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <p>A. 💡 Quick Recall (15 sec):</p>
                    <p>
                      An object literal is the simplest way to create an object
                      in JavaScript by defining its keys and values directly
                      inside curly braces {}. And it’s called literal because
                      I'm literally defining the object’s content in the code.
                    </p>
                    <div className="flex flex-col gap-y-1">
                      <p>For example:</p>
                      <p>
                        <code>{`const person = { name: "John", age: 30 };`}</code>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p>🔍 Expandable Version (if they ask for details):</p>
                    <p>
                      In JavaScript, an object literal is a direct and concise
                      way to define an object’s structure — all its properties
                      and values are written inside {} and assigned to a
                      variable.
                    </p>
                    <p>
                      It’s called object literal syntax because we define the
                      object “literally” in one place, without using
                      constructors or classes.
                    </p>
                    <div className="flex flex-col gap-y-1">
                      <p>For example:</p>
                      <p>
                        <code>
                          {`
                              const car = {
                                brand: "Toyota",
                                model: "Corolla",
                                year: 2024,
                                start() { console.log("Car started"); }
                              };
                            `}
                        </code>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                2. Why we need to use prototype?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <p>A. 💡 Quick Recall (15 sec):</p>
                    <p>
                      We use prototype in JavaScript to enable inheritance and
                      code reuse.
                    </p>
                    <p>
                      They allow objects to share properties and methods without
                      duplicating them, which saves memory and makes code more
                      efficient.
                    </p>
                    <div className="flex flex-col gap-y-1">
                      <p>For example:</p>
                      <pre className="relative bottom-[1.4375rem] right-[10.625rem]">
                        <code>{`
                          function Person(name) {
                            this.name = name;
                          }
                          
                          Person.prototype.greet = function() {
                            console.log(Hello, ${"this.name"});
                          }
                        `}</code>
                      </pre>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p>🔍 Expandable Version (if they ask for details):</p>
                    <p>
                      In JavaScript, an object literal is a direct and concise
                      way to define an object’s structure — all its properties
                      and values are written inside {} and assigned to a
                      variable.
                    </p>
                    <p>
                      It’s called object literal syntax because we define the
                      object “literally” in one place, without using
                      constructors or classes.
                    </p>
                    <div className="flex flex-col gap-y-1">
                      <p>For example:</p>
                      <pre className="relative bottom-[1.4375rem] right-[10.625rem]">
                        <code>
                          {`
                              const car = {
                                brand: "Toyota",
                                model: "Corolla",
                                year: 2024,
                                start() { console.log("Car started"); }
                              };
                            `}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                3. Define call, apply & bind?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <p>A. 💡 Quick Recall (15 sec):</p>
                    <p>
                      call, apply, and bind are javascript function methods used
                      to explicitly set the value of this for a function. So:
                    </p>
                    <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                      <li>
                        call() calls the function immediately with this set to
                        1st argument & then arguments passed individually.
                      </li>
                      <li>
                        apply() calls the function immediately with this set to
                        1st argument & then arguments passed as an array.
                      </li>
                      <li>
                        bind() doesn't calls the function instead it returns a
                        new function with this permanently bound.
                      </li>
                    </ol>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p>🔍 Expandable Version (if they ask for details):</p>
                    <p>
                      In JavaScript, an object literal is a direct and concise
                      way to define an object’s structure — all its properties
                      and values are written inside {} and assigned to a
                      variable.
                    </p>
                    <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                      <li>
                        <div className="flex flex-col gap-y-2">
                          <p>call()</p>
                          <p>
                            Calls a function immediately, letting you set the
                            this context and pass arguments one by one.
                          </p>
                          <div className="flex flex-col gap-y-1">
                            <p>For example:</p>
                            <pre className="relative bottom-[1.4375rem] right-[10.625rem]">
                              <code>
                                {`
                                  function greet(greeting) {
                                    console.log(${"greeting"}, ${"this.name"});
                                  }

                                  const user = { name: "Alice" };
                                  greet.call(user, "Hello"); // Hello, Alice
                                `}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-col gap-y-2">
                          <p>apply()</p>
                          <p>
                            Similar to call(), but arguments are passed as an
                            array.
                          </p>
                          <div className="flex flex-col gap-y-1">
                            <p>For example:</p>
                            <pre className="relative bottom-[1.4375rem] right-[10.625rem]">
                              <code>
                                {`
                                  greet.apply(user, ["Hi"]); // Hi, Alice
                                `}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-col gap-y-2">
                          <p>bind()</p>
                          <p>Does not call the function immediately.</p>
                          <p>
                            Instead, it returns a new function with this
                            permanently bound to the given object.
                          </p>
                          <div className="flex flex-col gap-y-1">
                            <p>For example:</p>
                            <pre className="relative bottom-[1.4375rem] right-[10.625rem]">
                              <code>
                                {`
                                  Instead, it returns a new function with this permanently bound to the given object.
                                `}
                              </code>
                            </pre>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                4. Define generator function?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <p>
                      A. A generator function in JavaScript is a special type of
                      function that can pause and resume its execution using the
                      yield keyword. It’s defined using an asterisk and returns
                      an iterator object that can produce a sequence of values
                      over time, instead of returning them all at once.
                    </p>
                    <div className="flex flex-col gap-y-1">
                      <p>For example:</p>
                      <pre className="relative bottom-[1.4375rem] right-[10.625rem]">
                        <code>{`
                          function* numbers() {
                            yield 1;
                            yield 2;
                            yield 3;
                          }
                        `}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JavaScript;
