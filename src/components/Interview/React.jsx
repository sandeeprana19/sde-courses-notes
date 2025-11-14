const React = () => {
  return (
    <div className="lg:w-7/12 w-full mx-auto px-5 lg:px-0">
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-bold text-white">React Q&A</h1>
          <h2 className="text-xl font-bold text-white">Asked in Others</h2>
          <div className="flex flex-col gap-y-4">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                1. Introduce yourself?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <p>
                      A. Thank you for this opportunity to introduce myself. I'm
                      currently working as a React Developer at capital numbers
                      infotech pvt ltd where I have been an integral part of the
                      React engineering team. I've had the privilege of leading
                      2 out of 3 major React projects like:
                    </p>
                    <ol className="list-[lower-roman] pl-8 flex flex-col gap-y-2">
                      <li>
                        Arkos - The Global Advisors: A platform offering
                        comprehensive wealth management solutions.
                      </li>
                      <li>
                        Gymdash: A cost-effective member management system
                        tailored for independent gyms.
                      </li>
                      <li>
                        Rize.gg: A community-focused platform that empowers
                        passionate gamers.
                      </li>
                    </ol>
                    <p>
                      All these projects were developed using technologies like
                      React, Redux, JavaScript, TailwindCSS, MaterialUI, and
                      SCSS, ensuring modern and efficient web applications.
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p>
                      On the personal side, I also built Netflix-GPT, a
                      Netflix-like React app that demonstrates my ability to
                      innovate and optimize performance. This project includes
                      several Key features like:
                    </p>
                    <ol className="list-[lower-roman] pl-8 flex flex-col gap-y-2">
                      <li>
                        A GPT-powered search that delivers five related movies
                        for any genre query.
                      </li>
                      <li>
                        Efficient data flow using Redux to display categorized
                        movie lists via the TMDB API.
                      </li>
                      <li>
                        Firebase authentication for secure user management.
                      </li>
                    </ol>
                  </div>
                  <p>
                    These projects reflect my passion for creating fast and
                    user-friendly applications with cutting-edge technologies.
                    I'm excited to bring this experience and enthusiasm to your
                    team. Thank you so much for hearing me out so far.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                2. How do react lifecycle methods of class based components
                work?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. Let's assume there is a parent class component which is
                    rendering 2 similar child class components so now let me
                    tell you how react lifecycle methods work in this scenario.
                    In react lifecycle methods, there are mainly 3 phases that
                    are mounting phase, updating phase & unmounting phase. And
                    all of these phases have render phase & commit phase. So
                    first of all, react starts with the lifecycle methods of
                    parent class component so it starts with the render phase
                    first where parent class component constructor is called &
                    then parent class component render is called & then when
                    react finds that parent class component is rendering 2
                    similar child class components then react batches the render
                    phase of both child class components. So now react start the
                    lifecycle methods of 1st & 2nd child class components
                    respectively where first child class component constructor
                    will be called & then first child class component render
                    will be called & then 2nd child class component constructor
                    will be called & then 2nd child class component render will
                    be called. So this is how the render phase will be completed
                    for both parent & child class components.
                  </p>
                  <p>
                    And then react starts the commit phase where it batches the
                    commit phase of both child class components & then react
                    updates the DOM in a single phase for both child class
                    components & then 1st child class componentDidMount will be
                    called & then 2nd child class componentDidMount will be
                    called & then parent class componentDidMount will be called.
                    So this is how the mounting phase of the react lifecycle
                    methods works.
                  </p>
                  <p>
                    And now let's say I've updated the state variable by passing
                    the fetched api data as an argument to setState method
                    within componentDidMount function of 1st child class
                    component then react will start updating phase of 1st child
                    class component where render will be called within render
                    phase & then react start the commit phase where it will
                    update the DOM in a single phase & then componentDidUpdate
                    will be called. So this is how the updating phase of the
                    react lifecycle methods works.
                  </p>
                  <p>
                    And now let's say I've left the page and go to another page
                    then react will start the unmounting lifecycle where
                    componentWillUnmount will be called before we go to another
                    page.
                  </p>
                  <p>
                    So this is how the react lifecycle methods of class based
                    components works.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                3. What are react hooks?
              </div>
              <div className="collapse-content overflow-x-auto">
                <p>
                  A. React hooks are normal javascript functions which are given
                  to us by react and they're pre-build and the only thing is
                  that those functions comes with some super powers. Those
                  functions had some return logic written behind the scenes
                  inside react. Those functions are the utility functions given
                  to us by react. So there are multiple utility functions that
                  are known as react hooks. For example: useState, useEffect,
                  useContext, useReducer, useRef etc.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                4. Define useState() hook? Describe it?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. An useState() hook basically generates super powerful
                    state variable and state updating function in react. So to
                    use it first of all, it needed to be named import from
                    react. And then as useState hook is again a function so I'll
                    can call it like a function & pass any argument as initial
                    value of state variable.
                  </p>
                  <p>
                    And then this useState hook return an array from which I'll
                    destructure two element like state variable and state
                    updating function.
                  </p>
                  <p>
                    And then there is some use case of it like if I want to
                    update state variable then I just need to call state
                    updating function & then pass the update value as an
                    argument to it.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                5. What is an useEffect hook? Describe it?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. An useEffect hook has its own specific arrow function and
                    dependency array. So to use it first of all, it needed to be
                    named import from react. And then as useEffect hook is again
                    a function so I’ll call it like a function which takes two
                    arguments so the first argument is an arrow function which
                    is a callback function and the second argument is a
                    dependency array.
                  </p>
                  <p>There're some use cases of useEffect hook like:</p>
                  <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                    <li>
                      I can't call useEffect hook outside of react functional
                      component because react expect it to be call inside react
                      functional component instead of outside. But if I do so
                      then react will throw an error like "Invalid hook call".
                    </li>
                    <li>
                      If I don't pass dependency array then the callback
                      function will be call on every component render cycle.
                    </li>
                    <li>
                      If I pass empty dependency array then the callback
                      function will be call once only after initial component
                      render & not after on every component render cycle.
                    </li>
                    <li>
                      If I pass any state variable inside dependency array then
                      the callback function will be call once only after initial
                      component render & not after on every component render
                      cycle but it will only be call whenever the state variable
                      is updated.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                6. Define virtual DOM?
              </div>
              <div className="collapse-content overflow-x-auto">
                <p>
                  A. Virtual DOM isn't an actual DOM as it is the representation
                  of actual DOM. So virtual DOM is basically those react
                  elements which is an object so similarly whenever we have a
                  big jsx structure it is all an object so this object is
                  basically known as react virtual DOM.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                7. What is the diff algorithm?
              </div>
              <div className="collapse-content overflow-x-auto">
                <p>
                  A. Diff algorithm basically finds out the difference between
                  two virtual DOMs that are previous virtual DOM and updated
                  virtual DOM.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                8. What is a Reconciliation Algorithm? or Can you tell me how
                does React's reconciliation algorithm work?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. Reconciliation algorithm is also known as React Fiber
                    since the release of React 16. So let’s say I’ve a UI of top
                    rated restaurant button and restaurants container which
                    contain 10 restaurant cards so whenever react render this UI
                    it will create the virtual DOM which is actually the
                    representation of actual dom & then react keep this virtual
                    DOM with it.
                  </p>
                  <p>
                    And then let’s say on click on that top rated restaurant
                    button react filter out top rated restaurants based on some
                    logic & then react will again create the updated virtual DOM
                    & keep it with it.
                  </p>
                  <p>
                    So at this moment diff algorithm comes into picture to find
                    out the difference between two virtual DOMs that is the
                    previous virtual DOM meaning the old virtual DOM before
                    restaurants filtered & updated virtual DOM meaning the new
                    virtual DOM after restaurants filtered & it will then
                    actually update the DOM on every render cycle.
                  </p>
                  <p>
                    So basically, this reconciliation algorithm or react fiber
                    is the new way to find out the difference between two
                    virtual DOMs & update or manipulate the DOM efficiently on
                    every render cycle because this is the core job of react. So
                    this whole algorithm is known as a reconciliation algorithm.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                9. What is dot env file?
              </div>
              <div className="collapse-content overflow-x-auto">
                <p>
                  A. A .env file is the short form for "environment file" which
                  is a simple text file and which is used to store environment
                  variables for react application. These environment variables
                  typically contain configuration settings such as API keys,
                  database connection strings, ports, or other sensitive or
                  environment-specific data.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                10. Why we need to do css in js?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. CSS-in-JS allows us to write scoped, dynamic, and
                    component-based styles directly inside JavaScript for
                    improving maintainability, avoiding global conflicts, and
                    enabling conditional styling based on props or state.
                    Therefore, we need to do css in js.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                11. Define mockData api?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. A mockData API simulates the behavior of a real API by
                    providing fake data responses during development or testing.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                12. Difference between react and react-dom?
              </div>
              <div className="collapse-content overflow-x-auto">
                <table className="table text-base">
                  <thead>
                    <tr>
                      <th className="align-top"></th>
                      <th className="align-top">react</th>
                      <th className="align-top">react-dom</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="align-top">1</th>
                      <td className="align-top">
                        <div className="flex flex-col gap-y-2">
                          react is the core library that provides the ability to
                          create and define React components. So it includes
                          several things like:
                          <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                            <li>React.createElement()</li>
                            <li>
                              Hooks like useState, useEffect, useContext,
                              useReducer, useRef, etc.
                            </li>
                            <li>JSX transformation logic.</li>
                            <li>
                              Both react functional component and react class
                              based component.
                            </li>
                          </ol>
                          So it is framework-agnostic which doesn't care where
                          or how components are rendered.
                        </div>
                      </td>
                      <td className="align-top">
                        <div className="flex flex-col gap-y-2">
                          react-dom is the library that provides DOM-specific
                          rendering methods to render React components in the
                          browser. So it includes several things like:
                          <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                            <li>ReactDOM.render()</li>
                            <li>
                              ReactDOM.createRoot() (from React 18 onwards)
                            </li>
                            <li>ReactDOM.hydrate() for SSR.</li>
                          </ol>
                          So basically it connects react to the browser’s DOM.
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-bold text-white">Asked in TCS</h2>
          <div className="flex flex-col gap-y-4">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                1. In case of complex data management what shall we use
                useContext or Redux?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. So we shall use Redux in case of complex data management.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                2. Name the different types of react hooks?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <p>A. 💡 Quick Recall (10–15 sec)</p>
                    <p>React provides two types of hooks like:</p>
                    <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                      <li>
                        Built-in hooks are like useState, useEffect, useContext,
                        useReducer, useRef, etc.
                      </li>
                      <li>
                        Custom hooks are like any hook I build starting with use
                        prefix to reuse logic.
                      </li>
                    </ol>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p>🔍 Expanded Version (if interviewer asks follow-up)</p>
                    <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                      <li>
                        State & Lifecycle hooks are like useState, useEffect &
                        useLayoutEffect.
                      </li>
                      <li>Context hook is like useContext.</li>
                      <li>Performance hooks are like useMemo & useCallback.</li>
                      <li>
                        Ref & DOM hooks are like useRef & useImperativeHandle.
                      </li>
                      <li>Reducer hook is like useReducer.</li>
                      <li>
                        Custom hooks are like any hook I build starting with use
                        prefix to reuse logic.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                3. What is react class based component & react functional
                component?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. React class based component is the older way of creating
                    component in react. And it's just a normal javascript class.
                  </p>
                  <p>
                    React functional component is the newer way of creating
                    component in react. So it's just a normal javascript
                    function which return some piece of jsx code so that's all
                    is known as react functional component. So whenever I create
                    any react functional component I create with a capital
                    letter otherwise I'll get an error because it's a react way
                    to understand that this is a react functional component.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                4. Where can we use async await in react?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. So we can write async keyword before an arrow function
                    let say fetchData to make it async & then we'll write await
                    before fetch() which will await for data to come. And then
                    we'll call this fetchData arrow function inside the 1st
                    argument of useEffect hook which is the callback function
                    because this is best place to make an api call in react.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                5. How can we do code splitting in react?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. There're several ways to do code splitting in react like:
                  </p>
                  <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                    <li>Using React.lazy() and Suspense component.</li>
                    <li>Using bundlers like Vite or Webpack.</li>
                    <li>
                      Using React Router with React.lazy() and Suspense
                      component.
                    </li>
                    <li>Using dynamic import() statements.</li>
                    <li>
                      Using third-party libraries like @loadable/component, etc.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                6. Define Error Boundary?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. Error Boundary is the special components that catches
                    JavaScript errors anywhere in their child component tree,
                    log those errors and display a fallback UI instead of
                    crashing the entire app.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                7. Define props drilling?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. Props drilling is a situation in React where I pass props
                    from a parent component down to deeply nested child
                    components even if some intermediate components don’t need
                    that data themselves so just to get it to the final child.
                  </p>
                  <p>For example:</p>
                  <pre className="relative bottom-[1.4375rem] right-[10.625rem]">
                    <code>
                      {`
                        <App>
                          └── <Parent>
                                └── <Child>
                                      └── <GrandChild />
                    `}
                    </code>
                  </pre>
                  <p>
                    Let say I've define deeply nested component like{" "}
                    <code>{`<App />`}</code> component and then inside that{" "}
                    <code>{`<App />`}</code> I've <code>{`<Parent />`}</code>{" "}
                    component and then inside that <code>{`<Parent />`}</code>{" "}
                    I've <code>{`<Child />`}</code> component & then inside that{" "}
                    <code>{`<Child />`}</code> I've{" "}
                    <code>{`<GrandChild />`}</code> component. So if{" "}
                    <code>{`<GrandChild />`}</code> needs some data from{" "}
                    <code>{`<App />`}</code> then I've to pass it through{" "}
                    <code>{`<Parent />`}</code> and <code>{`<Child />`}</code>{" "}
                    as props even if those components don’t use that data. So
                    that’s what I call it as props drilling in react.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                8. Let say we've component a, component b and component c then
                if we want to pass props from component a to component c so can
                we do it instead of using props drilling?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. Yeah, absolutely! We can use React Context API or a state
                    management library like Redux instead of using props
                    drilling if we want to pass props from Component A to
                    Component C without going through Component B.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                9. Define Redux?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. Redux is a predictable state container for js app like
                    React.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                10. Describe briefly how the whole flow of redux architecture
                works?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. Let's assume there is food ordering app where there is a
                    cart on header & there is food card on which it have add
                    button so now let me tell how the whole flow of redux
                    architecture works behind the scene.
                  </p>
                  <p>
                    So when I click on that add button it dispatches an action
                    which calls the reducer function which modifies the slices
                    of the redux store and because the header component is
                    subscribed to this store using a selector then cart data on
                    the header component will automatically be updated.
                  </p>
                  <p>
                    So this is how the whole flows of redux architecture works
                    behind the scene.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                11. Define key prop in React?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. In React, the key prop is a special reserved prop which
                    is used to help React to identify which items in a list have
                    changed, added and removed. It helps in optimizing rendering
                    performance when working with dynamic lists.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                13. Why defining a key prop to the list items is important in
                React?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. Without a unique key, react re-render all items even if
                    most haven't changed. So with a key, react can efficiently
                    reuse existing elements and only update what's necessary.
                    Therefore, defining a key prop to the list items is
                    important in react.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-bold text-white">Asked in LTIMindTree</h2>
          <div className="flex flex-col gap-y-4">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                1. Can you explain the key differences between react class
                component and react functional component with hook? When would
                you choose one over the other?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. React class component is the older way of creating
                    component in react. And it's a normal javascript class.
                  </p>
                  <p>
                    React functional component is the newer way of creating
                    component in react. So it's just a normal javascript
                    function which return some piece of jsx code so that's all
                    is known as react functional component. So whenever I create
                    any react functional component I create with a capital
                    letter otherwise I'll get an error because it's a react way
                    to understand that this is a react functional component.
                  </p>
                  <p>
                    For new development, I prefer react functional components
                    because they are cleaner, easier to maintain, and allow
                    logic reuse through custom hooks. However, react class
                    components are still used in legacy codebases.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                2. Walk me through the process of implementing state management
                using redux into react application? What are some best practice
                you follow?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. Let's assume there is food ordering app where there is a
                    cart on header & there is food card on which it have add
                    button so now let me walk you through the process of
                    implementing redux toolkit into react application and that
                    are like:
                  </p>
                  <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                    <li>
                      First of all, I've to install two libraries like
                      @reduxjs/toolkit and react-redux so that I can work with
                      redux.
                    </li>
                    <li>Then I'll an build app store.</li>
                    <li>Then I'll provide an app store to the react app.</li>
                    <li>Then I'll create a slice to add item to the cart.</li>
                    <li>
                      Then I'll basically dispatch an action when I click on add
                      button.
                    </li>
                    <li>Then I'll read the data using selector.</li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                3. How do you approach unit testing into react component? Can
                you give an example of test you've written and explain your
                testing strategy?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <p>A. 💡 Quick Recall (15 sec):</p>
                    <p>
                      For React unit testing, I usually use
                      @testing-library/react. And then let say I render the
                      contact component in a test DOM and then query element
                      like heading, and then assert it's presence with expect
                      function for checking if the contact page heading render
                      or not.
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p>🔍 Expandable Version (if they ask for details):</p>
                    <p>
                      Let’s say I’m testing a Contact component. Then I'll
                      create a file like Contact.test.js and then import render
                      and screen from @testing-library/react and then render the
                      contact component with render(
                      <code>{"<Contact />"}</code>
                      ). And then I'll use screen.getByRole("heading") to find
                      the heading and then store it in a heading variable and
                      then use an assertion like
                      expect(heading).toBeInTheDocument() to confirm it
                      rendered. This strategy focuses on testing components from
                      the user’s perspective, rather than their internal
                      implementation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                4. Explain how you could use material UI in a react project?
                What are some advantages and potential challenges of using this
                UI library?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <p>A. 💡 Quick Recall (15 sec):</p>
                    <p>
                      I usually install MUI via npm install @mui/material
                      @emotion/react @emotion/styled & then import components
                      like Button or Card and then use them directly. For
                      branding, I wrap my app in ThemeProvider to customize
                      colors, typography, etc. It’s great for fast and
                      professional-looking UIs. But sometimes style overrides
                      can be tricky and the bundle size can grow if not
                      optimized.
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p>🔍 Expandable Version (if they ask for details):</p>
                    <div className="flex flex-col gap-y-1">
                      <p>
                        Once installed, I can import components — for example:
                      </p>
                      <p className="flex flex-col">
                        <code>
                          {`
                          import { Button } from '@mui/material';
                        `}
                        </code>
                        <code>
                          {`
                          <Button variant="contained">Click Me</Button>
                        `}
                        </code>
                      </p>
                    </div>
                    <p>
                      If I need a custom theme, I use ThemeProvider to set
                      primary colors, typography, and other styles across the
                      app.
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p>Advantages are like:</p>
                    <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                      <li>
                        Pre-built, responsive components that look polished out
                        of the box.
                      </li>
                      <li>Easy theming and customization via ThemeProvider.</li>
                      <li>Well-documented component API.</li>
                    </ol>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p>Challenges are like:</p>
                    <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                      <li>
                        Overriding default styles can get tricky with nested
                        components.
                      </li>
                      <li>Bundle size can grow if not tree-shaken.</li>
                      <li>Very custom UIs may require extra CSS overrides.</li>
                    </ol>
                  </div>
                  <p>
                    Overall, I use MUI when I want speed and consistency without
                    reinventing the UI from scratch.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                5. Can you describe a situation where you've used github copilot
                to assist in writing unit tests? What was your experience, and
                how did it impact your workload?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. Yeah, I used Copilot for writing unit tests in a form
                    validation component. Initially, I wrote one test manually,
                    and then Copilot started suggesting similar test cases which
                    really saved my time on boilerplate. Of course, I had to
                    review and tweak them for accuracy, but overall it speed up
                    my work and let me focus more on edge cases rather than
                    repetitive typing.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                6. Describe your experience with performance optimization in
                react? What techniques have you used to improve the performance
                of a react application? or How do you optimize the performance
                of a React application?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. One of the key techniques I used is code splitting with
                    React.lazy() and Suspense component to lazy-load heavy
                    components and I also leveraged bundlers like Vite/Webpack.
                  </p>
                  <p>
                    Apart from that, I always make sure to use a proper key prop
                    for a list items so that it helps in optimizing rendering
                    performance when working with dynamic lists. And I also look
                    at things like memoization for example React.memo, useMemo
                    and useCallback which helps to avoid unnecessary re-renders.
                    And I also look at things like debounce api calls in search
                    boxes.
                  </p>
                  <p>
                    So all these together helps in performance optimization in
                    react.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                7. How do you handle API integration in the react application?
                Can you walk me through your approach to fetching and managing
                data for a mapping service?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <p>A. 💡 Quick Recall (15 sec):</p>
                    <p>
                      I prefer rendering the UI first, then making an API call
                      in useEffect hook and then updating the state with the
                      fetched data. This way, users see the layout instantly and
                      I avoid blocking the initial render.
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p>🔍 Expandable Version (if they ask for details):</p>
                    <p>There are generally two approaches:</p>
                    <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                      <li>
                        Fetching before rendering, which blocks the UI until the
                        data arrives — slower perceived load.
                      </li>
                      <li>
                        Rendering immediately, then fetching data
                        asynchronously, which improves user experience. In
                        React, I use the second approach with useEffect for
                        fetching and a loading state to indicate progress.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                8. Can you explain the concept of React hooks, an example of how
                we use this concept to solve specific problem in a project?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. React hooks are normal javascript functions which are
                    given to us by react and they're pre-build and the only
                    thing is that those functions comes with some super powers.
                    Those functions had some return logic written behind the
                    scenes inside react. Those functions are the utility
                    functions given to us by react. So there are multiple
                    utility functions that are known as react hooks. For
                    example: useState, useEffect, useContext, useReducer, useRef
                    etc.
                  </p>
                  <p>
                    Now, let give you an example of this react hooks concept
                    which help me to solve specific problem in a project. So,
                    let say in one project I had to fetch API data when the
                    component mounted. So, I'll used useState hook to store the
                    fetched data and then useEffect hook to handled the side
                    effect of fetching it on mount.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                9. How does React Hook help in improving the performance of
                functional components?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. Hooks like useState, useEffect, and useRef help by
                    reducing unnecessary work. For example, useRef stores values
                    without triggering re-renders, and useEffect ensures
                    expensive code runs only when dependencies changes. On top
                    of that, useMemo and useCallback can be used to memoize
                    values and functions for preventing unnecessary re-renders.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                10. What is the role of state management in optimizing
                performance?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <p>A. 💡 Quick Recall (15 sec):</p>
                    <p>
                      State management helps to ensure that it only re-render
                      the parts of the UI that actually need to change. By
                      structuring state properly and keeping it as local as
                      possible, it reduce unnecessary renders and improve app
                      performance.
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p>🔍 Expandable Version (if they want details):</p>
                    <p>
                      State management plays a big role in performance because
                      every state change can trigger a re-render. If we store
                      too much state at a high level or share it unnecessarily,
                      it can cause many components to re-render, even if they
                      don’t need to.
                    </p>
                    <p>Strategies I follow include:</p>
                    <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                      <li>Keeping state local when possible.</li>
                      <li>
                        Splitting large state objects into smaller, more focused
                        pieces.
                      </li>
                      <li>
                        In larger apps, using dedicated state management tools
                        like Redux Toolkit or Zustand to centralize and optimize
                        updates.
                      </li>
                    </ol>
                    <p>
                      For example, in one dashboard project, moving a frequently
                      changing counter from global state into a single small
                      component cut the re-renders across the app by half.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                11. Describe a useCases so let say I have an input text box.
                Now, you know, anything related to calling an API is an
                expensive operation, right? And I want to minimize it as much as
                possible. So you are putting in your input in text box and after
                you have completed putting the input in text box, then I want to
                call the API, right? So I want there to be some delay after you
                complete, you know completing your input text in the search text
                box. What is the technique of implementing that in React and how
                do you do it?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <p>A. 💡 Quick Recall (15 sec):</p>
                    <p>
                      So in such case, I think I can use a technique like
                      debouncing with useEffect and setTimeout. So debouncing
                      delays an API call until the user stops typing for a set
                      time, so that I avoid sending a request for every
                      keystroke.
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p>🔍 Expandable Version (if they ask for details):</p>
                    <p>
                      In React, frequent API calls on every keystroke can be
                      expensive. To optimize, so I can use debouncing — meaning,
                      wait until the user has stopped typing for a short delay
                      (e.g., 500ms) before triggering the API.
                    </p>
                    <p>
                      Example: I can store the input in state with useState,
                      then use useEffect to watch that value. Inside, I'll start
                      a setTimeout to call the API after 500ms. If the user
                      types again before that delay ends, I’ll clear the timeout
                      with clearTimeout.
                    </p>
                    <p>
                      This way, we only call the API once after the user pauses
                      typing, which reduces unnecessary network calls and
                      improves performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                12. Define debounce and throttling?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <p>A. 💡 Quick Recall (15 sec):</p>
                    <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                      <li>
                        <p>
                          Debounce delays execution until there’s a pause in
                          events. For example, let say wait 500ms after the last
                          keystroke before firing an API call.
                        </p>
                      </li>
                      <li>
                        <p>
                          Throttle ensures execution happens at most once in a
                          set interval. For example, let say only call a
                          function every 1s, even if the event fires
                          continuously.
                        </p>
                      </li>
                    </ol>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p>🔍 Expandable Version (if they ask for details):</p>
                    <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                      <li>
                        <p>
                          Debounce: Groups rapid events into a single action by
                          delaying the execution until no new events occur
                          during a specified wait time.
                        </p>
                        <p>
                          Use case: Search input → wait until user stops typing
                          before making an API call.
                        </p>
                      </li>
                      <li>
                        <p>
                          Throttle: Limits the rate at which a function can run,
                          executing it at fixed intervals no matter how many
                          times the event occurs.
                        </p>
                        <p>
                          Use case: Window resize or scroll events → update UI
                          at most once per 200ms.
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                14. Describe your experience with typescript in react project?
                How do you typically setup typescript with react? [IGNORE THIS
                FOR NOW]
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. I have worked with TypeScript in React projects to add
                    strong typing, which helps in catching errors early and
                    makes the codebase easier to maintain and collaborate on.
                  </p>
                  <p>
                    For setting up TypeScript in a React project, nowadays I
                    prefer using Vite or Next.js, as Create React App is
                    deprecated.
                  </p>
                  <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                    <li>
                      With Vite, I can create a TypeScript React project using:
                      npm create vite@latest and select React + TypeScript
                      template.
                    </li>
                    <li>
                      For Next.js, I initialize the project with npx
                      create-next-app@latest, and if I select TypeScript,
                      Next.js automatically sets up the tsconfig.json and type
                      dependencies.
                    </li>
                  </ol>
                  <p>
                    After setup, I rename .js files to .tsx for components and
                    .ts for utility files. Then, I define interfaces or types
                    for component props, API responses, and application state.
                  </p>
                  <p>
                    I also configure strict TypeScript rules in tsconfig.json to
                    enforce better type safety. Throughout the project, I make
                    use of TypeScript features like optional types, generics,
                    and union types for better code predictability.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-xl font-bold text-white">Asked in Cognizant</h2>
          <div className="flex flex-col gap-y-4">
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                1. How do you optimize files using webpack?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <p>
                      A. To optimize files with webpack it uses strategies like:
                    </p>
                    <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                      <li>
                        Production mode: Enables minification, scope hoisting,
                        and other built-in optimizations.
                      </li>
                      <li>
                        Tree-shaking: Removes unused imports via ES modules and
                        "sideEffects": false.
                      </li>
                      <li>
                        Code-splitting / Lazy loading: Load chunks on demand to
                        reduce initial bundle size.
                      </li>
                      <li>
                        Long-term caching: Use [contenthash] in filenames for
                        browser cache efficiency.
                      </li>
                      <li>
                        CSS extraction & minification: Use MiniCssExtractPlugin
                        + CssMinimizerPlugin.
                      </li>
                      <li>
                        Asset optimization: Compress and optimize images, fonts,
                        and other static files.
                      </li>
                      <li>
                        Compression: Generate .gz or .br files using
                        CompressionPlugin.
                      </li>
                      <li>
                        Build performance: Use caching and parallel loaders.
                      </li>
                      <li>
                        Bundle analysis: Use webpack-bundle-analyzer to detect
                        large dependencies.
                      </li>
                      <li>
                        Runtime & HTTP best practices: Use runtimeChunk:
                        'single', caching headers, and HTTP/2.
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                2. Difference between mapStatesToProps and StateMapToProps?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <p>
                      A. There’s actually no function called StateMapToProps in
                      Redux — the correct term is mapStateToProps. It’s a
                      function used in React-Redux to map the Redux store state
                      to a component’s props, so the component can access data
                      from the store.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                3. Suppose I want to log api responses How to write test cases
                for it?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-4">
                  <div className="flex flex-col gap-y-2">
                    <p>A. 💡 Quick Recall (15 sec):</p>
                    <p>
                      Mock the network and spy on the logger. Trigger the code
                      (call the function or render the component), wait for
                      async work to finish, then assert the logger (e.g.,
                      console.log or your telemetry function) was called with
                      the expected payload. Prefer asserting UI/state changes
                      where possible.
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <p>🔍 Expandable Version (if they ask for details):</p>
                    <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                      <li>
                        Isolate logging — abstract logging into a small
                        function/module like logApiResponse(response) or
                        analytics.report(response) so tests can spy or mock it.
                      </li>
                      <li>
                        Tree-shaking: Removes unused imports via ES modules and
                        "sideEffects": false.
                      </li>
                      <li>
                        Mock the network — mock fetch, axios, or use MSW
                        (recommended) to return controlled responses.
                      </li>
                      <li>
                        Spy on logger — jest.spyOn(console, 'log') or mock your
                        telemetry module to assert calls and payloads.
                      </li>
                      <li>
                        Trigger the behavior — call the utility or render the
                        component that fetches on mount.
                      </li>
                      <li>
                        Await async — use await waitFor(...), findBy..., or
                        await act(...) to ensure promises resolve before
                        asserting.
                      </li>
                      <li>
                        Assert — check the logger was called with expected data
                        and (preferably) verify visible UI/state update.
                      </li>
                      <li>
                        Cleanup — restore mocks with mockRestore() or
                        jest.restoreAllMocks().
                      </li>
                    </ol>
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

export default React;
