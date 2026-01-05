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
                      infotech pvt ltd where I have been part of the React
                      engineering team and have led 2 out of 3 major React
                      projects like:
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
                      So across these projects, I’ve worked extensively with
                      React, Redux, JavaScript, Tailwind CSS, Material UI, and
                      SCSS, focusing on performance, clean architecture, and
                      scalable UI components.
                    </p>
                    <p>
                      So in addition to my professional work, I developed a
                      personal project called Netflix-GPT, a Netflix-like
                      application featuring GPT-powered movie search,
                      Redux-based data flow using the TMDB API, and Firebase
                      authentication. So this project reflects my interest in
                      combining modern UI with performance optimization and
                      emerging technologies.
                    </p>
                    <p>
                      So overall, I enjoy developing fast, user-friendly React
                      applications, and I’m excited about the opportunity to
                      bring my experience and problem-solving mindset to your
                      team.
                    </p>
                  </div>
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
                  <p>A. 💡 Quick Recall (10–15 sec)</p>
                  <p>
                    React class components have three lifecycle phases like
                    Mounting, Updating, and Unmounting.
                  </p>
                  <p>
                    During mounting, React renders the component tree and then
                    commits changes to the DOM.
                  </p>
                  <p>
                    During updating, React re-renders the component when props
                    or state change.
                  </p>
                  <p>
                    During unmounting, cleanup happens before the component is
                    removed from the DOM.
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
                    A. useState() hook basically generates super powerful state
                    variable and state updating function in react. So to use it
                    first of all, it needed to be named import from react. And
                    then as useState hook is again a function so I'll can call
                    it like a function & pass any argument as initial value of
                    state variable.
                  </p>
                  <p>
                    And then this useState hook return an array from which I'll
                    destructure two elements like state variable and state
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
                    A. useEffect hook has its own specific arrow function and
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
                  <p>A. 💡 Quick Recall (15 sec)</p>
                  <p>
                    React’s reconciliation algorithm is the process React uses
                    to compare the previous UI with the new UI and efficiently
                    update only the parts of the DOM that changed. Since React
                    16, this process is implemented using React Fiber, which
                    improves performance by breaking rendering work into small,
                    interruptible units.
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
                <p>A. 💡 Quick Recall (15 sec)</p>
                <p>
                  .env file is a configuration file used to store environment
                  variables like API URLs, keys, and feature flags. So these
                  variables help manage environment-specific settings without
                  hardcoding them into the codebase.
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
                    A. CSS-in-JS lets us write scoped, component-based, and
                    dynamic styles inside JavaScript. It helps avoid global CSS
                    conflicts, improves maintainability, and allows styling
                    based on props or state.
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
                <div className="flex flex-col gap-y-2">
                  <p>A. 💡 Quick Recall (15 sec)</p>
                  <p>
                    react is the core library that defines how components work
                    and manages state, hooks, and reconciliation.
                  </p>
                  <p>
                    react-dom is the renderer that connects React to the browser
                    DOM and handles actual DOM updates.
                  </p>
                </div>
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
                  <p>A. 💡 Quick Recall (15 sec)</p>
                  <p>
                    We use async/await inside functions in React—such as event
                    handlers, helper functions, and functions called inside
                    useEffect. We don’t make the useEffect callback async;
                    instead, we define an async function inside it and then call
                    that function.
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
                  <p>A. 💡 Quick Recall (15 sec)</p>
                  <p>
                    Code splitting in React means breaking the app into smaller
                    bundles that are loaded on demand. This reduces the initial
                    bundle size and improves page load performance. It’s
                    commonly done using React.lazy, Suspense, and dynamic
                    import().
                  </p>
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
                    A. Error Boundary is the special react component that
                    catches JavaScript errors anywhere in their child component
                    tree, log those errors and display a fallback UI instead of
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
                  <p>A. 💡 Quick Recall (15 sec)</p>
                  <p>
                    Props drilling is a situation in React where data is passed
                    from a parent component to deeply nested child components
                    through multiple intermediate components, even though those
                    intermediate components don’t need the data themselves.
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
                  <p>💡 Quick Recall (15 sec)</p>
                  <p>
                    A. Redux is a predictable state container for JavaScript
                    applications, commonly used with React, that helps manage
                    and centralize application state in a consistent and
                    predictable way.
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
                  <p>A. 💡 Quick Recall (15 sec)</p>
                  <p>
                    The key prop helps React identify which list items have
                    changed, been added, or removed. Without unique keys, React
                    may re-render more items than necessary, leading to
                    inefficient updates and potential UI bugs.
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
                <div className="flex flex-col gap-y-2">
                  <p>A. 💡 Quick Recall (15 sec):</p>
                  <p>
                    For React unit testing, I usually use
                    @testing-library/react. And then let say I render the
                    contact component in a test DOM and then query element like
                    heading, and then assert it's presence with expect function
                    for checking if the contact page heading render or not.
                  </p>
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
                <div className="flex flex-col gap-y-2">
                  <p>A. 💡 Quick Recall (15 sec):</p>
                  <p>
                    I use Material UI by installing it via npm, importing
                    ready-made components like Button and Card, and customizing
                    the design using ThemeProvider. It helps to build
                    professional UIs quickly, but styling overrides and bundle
                    size can be challenges if not managed properly.
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
                  <p>A. 💡 Quick Recall (15 sec)</p>
                  <p>
                    Yeah! I’ve used GitHub Copilot to speed up writing unit
                    tests by generating repetitive test cases. After writing the
                    first test manually, Copilot suggested similar tests, which
                    reduced boilerplate work and helped me focus more on edge
                    cases and logic validation.
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
                  <p>A. 💡 Quick Recall (15 sec):</p>
                  <p>
                    I optimize React performance by reducing unnecessary
                    re-renders and minimizing bundle size. I use code splitting
                    with React.lazy and Suspense, memoization with React.memo,
                    useMemo, useCallback, proper key usage in lists, debouncing
                    API calls and bundler optimizations with Vite or Webpack.
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
                <div className="flex flex-col gap-y-2">
                  <p>A. 💡 Quick Recall (15 sec):</p>
                  <p>
                    I prefer rendering the UI first, then making an API call in
                    useEffect hook and then updating the state with the fetched
                    data. This way, users see the layout instantly and I avoid
                    blocking the initial render.
                  </p>
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
                    So, I use React Hooks to solve specific problems by
                    separating state and side effects. For example, I use
                    useState to store API data and useEffect to fetch that data
                    when a component mounts so keeping the logic clean and
                    predictable.
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
                  <p>A. 💡 Quick Recall (15 sec)</p>
                  <p>
                    React Hooks improve performance by giving us fine-grained
                    control over state, effects, and memoization. Hooks like
                    useRef, useEffect, useMemo, and useCallback help avoid
                    unnecessary re-renders and expensive recomputations.
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
                <div className="flex flex-col gap-y-2">
                  <p>A. 💡 Quick Recall (15 sec):</p>
                  <p>
                    State management helps to ensure that it only re-render the
                    parts of the UI that actually need to change. By structuring
                    state properly and keeping it as local as possible, it
                    reduce unnecessary renders and improve app performance.
                  </p>
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
                <div className="flex flex-col gap-y-2">
                  <p>A. 💡 Quick Recall (15 sec):</p>
                  <p>
                    So in such case, I think I can use a technique like
                    debouncing with useEffect and setTimeout. So debouncing
                    delays an API call until the user stops typing for a set
                    time, so that I avoid sending a request for every keystroke.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                12. Define debounce and throttling?
              </div>
              <div className="collapse-content overflow-x-auto">
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
                        Throttle ensures execution happens at most once in a set
                        interval. For example, let say only call a function
                        every 1s, even if the event fires continuously.
                      </p>
                    </li>
                  </ol>
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
                <div className="flex flex-col gap-y-2">
                  <p>A. 💡 Quick Recall (15 sec):</p>
                  <p>
                    I optimize files in Webpack by building in production mode,
                    enabling minification and tree-shaking, splitting code into
                    smaller chunks, using content-hashing for caching,
                    optimizing assets like images and CSS, and analyzing bundles
                    to remove unused code.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                2. Difference between mapStateToProps and StateMapToProps?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>A. 💡 Quick Recall (15 sec)</p>
                  <p>
                    There is no function called StateMapToProps in Redux. The
                    correct and official function is mapStateToProps, which maps
                    Redux store state to a React component’s props.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                3. Suppose I want to log api responses how to write test cases
                for it?
              </div>
              <div className="collapse-content overflow-x-auto">
                <div className="flex flex-col gap-y-2">
                  <p>A. 💡 Quick Recall (15 sec):</p>
                  <p>
                    Mock the API call using jest, spy on the logger like
                    console.log, trigger the component, wait for the async
                    response, and assert that the logger was called with the
                    expected data. Wherever possible, also verify the UI or
                    state update instead of relying only on logs.
                  </p>
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
