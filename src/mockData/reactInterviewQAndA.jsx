export const reactInterviewQnAs = [
  {
    id: "asked-in-others",
    category: "Asked in Others",
    questions: [
      {
        id: "asked-in-others-1",
        question: "1. Introduce yourself?",
        answer: (
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <p>
                A. Thank you for this opportunity to introduce myself. I worked
                as a React Developer at capital numbers infotech pvt ltd where I
                have been part of the React engineering team and have led 2 out
                of 3 major React projects like:
              </p>
              <ol className="list-[lower-roman] pl-8 flex flex-col gap-y-2">
                <li>
                  Arkos - The Global Advisors: A platform offering comprehensive
                  wealth management solutions.
                </li>
                <li>
                  Gymdash: A cost-effective member management system tailored
                  for independent gyms.
                </li>
                <li>
                  Rize.gg: A community-focused platform that empowers passionate
                  gamers.
                </li>
              </ol>
              <p>
                So across these projects, I’ve worked extensively with React,
                Redux, JavaScript, Tailwind CSS, Material UI, and SCSS, focusing
                on performance, clean architecture, and scalable UI components.
              </p>
              <p>
                So in addition to my professional work, I developed a personal
                project called Netflix-GPT, a Netflix-like application featuring
                GPT-powered movie search, Redux-based data flow using the TMDB
                API, and Firebase authentication. So this project reflects my
                interest in combining modern UI with performance optimization
                and emerging technologies.
              </p>
              <p>
                So overall, I enjoy developing fast, user-friendly React
                applications, and I’m excited about the opportunity to bring my
                experience and problem-solving mindset to your team as well. So,
                thank you so much for hearing me out so far.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "asked-in-others-2",
        question:
          "2. How do react lifecycle methods of class based components work?",
        answer: (
          <div className="flex flex-col">
            <div className="flex flex-col gap-y-2">
              <p>A. 💡 Quick Recall (10–15 sec)</p>
              <p>
                React class components have three lifecycle phases like
                Mounting, Updating, and Unmounting. So:
              </p>
              <p>
                During mounting, React renders the component tree and then
                commits changes to the DOM.
              </p>
              <p>
                During updating, React re-renders the component when props or
                state change.
              </p>
              <p>
                During unmounting, cleanup happens before the component is
                removed from the DOM.
              </p>
            </div>
            <div className="my-5 text-center">OR</div>
            <div className="flex flex-col gap-y-2">
              <p>
                Let's assume there is a parent class component which is
                rendering 2 similar child class components so now let me tell
                you how react lifecycle methods work in this scenario. So, as I
                already said early that in react lifecycle methods, there are
                mainly 3 phases like mounting phase, updating phase and
                unmounting phase. And all of these phases have render phase and
                commit phase. So first of all, react starts with the lifecycle
                methods of parent class component where it starts with the
                render phase and then react batches the render phase of both
                parent and child class components. And then parent class
                component constructor is called and then parent class component
                render is called and then when react finds that parent class
                component is rendering 2 similar child class components then
                first child class component constructor is called and then first
                child class component render is called and then 2nd child class
                component constructor is called and then 2nd child class
                component render is called. So this is how the render phase is
                completed for both parent and child class components behind the
                scene.
              </p>
              <p>
                And then react starts the commit phase where it batches the
                commit phase of both child class components and parent class
                component and then react updates the DOM in a single phase for
                both child class components and parent class component and then
                1st child class componentDidMount is called and then 2nd child
                class componentDidMount is called and then parent class
                componentDidMount is called. So this is how the mounting phase
                of the react lifecycle methods works behind the scene.
              </p>
              <p>
                And now let's say I've updated the state variable by passing the
                fetched api data as an argument to setState method within
                componentDidMount function of 1st child class component then
                react will start updating phase of 1st child class component
                where render is called within render phase & then react start
                the commit phase where it update the DOM in a single phase and
                then componentDidUpdate is called. So this is how the updating
                phase of the react lifecycle methods works behind the scene.
              </p>
              <p>
                And now let's say I've left the page and go to another page then
                react start the unmounting lifecycle where componentWillUnmount
                is called before we go to another page.
              </p>
              <p>
                So this is how the whole react lifecycle methods of class based
                components works behind the scene.
              </p>
            </div>
          </div>
        ),
      },
      {
        id: "asked-in-others-3",
        question: "3. What are react hooks?",
        answer: (
          <p>
            A. React hooks are normal javascript functions which are given to us
            by react and they're pre-build and the only thing is that those
            functions comes with some super powers. Those functions had some
            return logic written behind the scenes inside react. Those functions
            are the utility functions given to us by react. So there are
            multiple utility functions that are known as react hooks. For
            example: useState, useEffect, useContext, useReducer, useMemo,
            useCallback, useRef etc.
          </p>
        ),
      },
      {
        id: "asked-in-others-4",
        question: "4. Define useState() hook? Describe it?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>
              A. useState() hook basically generates super powerful state
              variable and state updating function in react. So to use it first
              of all, it needed to be named import from react. And then as
              useState hook is again a function so I'll call it like a function
              and pass any argument as initial value of state variable.
            </p>
            <p>
              And then this useState hook return an array from which I'll
              destructure two elements like state variable and state updating
              function.
            </p>
            <p>And there are some use case of it like:</p>
            <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
              <li>
                if I want to update state variable then I just need to call
                state updating function and then pass the update value as an
                argument to it. And whenever the state variable changed react
                will rerender the component and then react will quickly remove
                the component and update it properly with the updated value.
              </li>
              <li>
                I can't call useState hook outside of react functional component
                because react expect it to be call inside react functional
                component instead of outside. But if I do so then react will
                throw an error like "Invalid hook call".
              </li>
              <li>
                And I always use useState hook on the top level of react
                functional component body so that I don't have lots of
                inconsistency in the code because javascript is synchronous
                single-threaded language so it will run the code line by line
                and also react understand it properly and it doesn't create
                inconsistency when it run the code.
              </li>
              <li>
                I never use useState hook inside if/else block or for loop block
                or nested function block inside react functional component as
                they're perfectly valid code because javascript allows us to do
                it but I don't have to do it because this can create
                inconsistency in the program. So it's like if I mesh up with
                react then react will mesh up my codebase. So that's why I
                always have to use react like how react tell us to use it like
                as per it's documentation.
              </li>
            </ol>
          </div>
        ),
      },
      {
        id: "asked-in-others-5",
        question: "5. What is an useEffect hook? Describe it?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>
              A. useEffect hook has its own specific arrow function and
              dependency array. So to use it first of all, it needed to be named
              import from react. And then as useEffect hook is again a function
              so I’ll call it like a function which takes two arguments so the
              first argument is an arrow function which is a callback function
              and the second argument is a dependency array.
            </p>
            <p>There're some use cases of useEffect hook like:</p>
            <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
              <li>
                I can't call useEffect hook outside of react functional
                component because react expect it to be call inside react
                functional component instead of outside. But if I do so then
                react will throw an error like "Invalid hook call".
              </li>
              <li>
                If I don't pass dependency array then the callback function will
                be call on every component render cycle.
              </li>
              <li>
                If I pass empty dependency array then the callback function will
                be call once only after initial component render and not after
                on every component render cycle.
              </li>
              <li>
                If I pass any state variable inside dependency array then the
                callback function will be call once only after initial component
                render and not after on every component render cycle but it will
                only be call whenever the state variable is updated.
              </li>
              <li>
                And I always use useState hook on the top level of react
                functional component body so that I don't have lots of
                inconsistency in the code because javascript is synchronous
                single-threaded language so it will run the code line by line
                and also react understand it properly so it doesn't create
                inconsistency when it run the code.
              </li>
              <li>
                I never use useState hook inside if/else block or for loop block
                or nested function block inside react functional component as
                they're perfectly valid code because javascript allows us to do
                it but I don't have to do it because this can create
                inconsistency in the program. So it's like if I mesh up with
                react then react will mesh up my codebase. So that's why I
                always have to use react like how react tell us to use it as per
                it's documentation.
              </li>
            </ol>
          </div>
        ),
      },
      {
        id: "asked-in-others-6",
        question: "6. Define virtual DOM?",
        answer: (
          <p>
            A. Virtual DOM isn't an actual DOM as it is the representation of
            actual DOM. So virtual DOM is basically those react elements which
            is an object so similarly whenever we have a big jsx structure it is
            all an object so this object is basically known as react virtual
            DOM.
          </p>
        ),
      },
      {
        id: "asked-in-others-7",
        question: "7. What is the diff algorithm?",
        answer: (
          <p>
            A. Diff algorithm basically finds out the difference between two
            virtual DOMs that are previous virtual DOM and updated virtual DOM.
          </p>
        ),
      },
      {
        id: "asked-in-others-8",
        question:
          "8. What is a React Reconciliation Algorithm? or Can you tell me how does React's reconciliation algorithm work?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec)</p>
            <p>
              React's reconciliation is the process where React uses a diffing
              algorithm to compare the previous Virtual DOM with the updated
              Virtual DOM and efficiently updates only the parts of the real DOM
              that changed. Since React 16, this process is implemented using
              React Fiber which is a new internal architecture that breaks
              rendering work into small units and it doesn't block the main
              thread while rendering.
            </p>
            <p>
              So together, this whole process is called the React Reconciliation
              Algorithm.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-others-9",
        question: "9. What is dot env file?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec)</p>
            <p>
              .env file is a configuration file used to store environment
              variables like API URLs, keys, and feature flags. So these
              variables help to manage environment-specific settings without
              hardcoding them into the codebase.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-others-10",
        question: "10. Why we need to do css in js?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>
              A. CSS-in-JS lets us write scoped, component-based, and dynamic
              styles inside JavaScript. It helps to avoid global CSS conflicts,
              improves maintainability, and allows styling based on props or
              state. Therefore, we need to do CSS-in-JS.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-others-11",
        question: "11. Define mockData api?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>
              A. A mockData API simulates the behavior of a real API by
              providing fake data responses during development or testing.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-others-12",
        question: "12. Difference between react and react-dom?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec)</p>
            <p>
              react is the core library that defines how components work and
              manages state, hooks, and reconciliation.
            </p>
            <p>
              react-dom is the renderer that connects React to the browser DOM
              and handles actual DOM updates.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    id: "asked-in-tcs",
    category: "Asked in TCS",
    questions: [
      {
        id: "asked-in-tcs-1",
        question:
          "1. In case of complex data management what shall we use useContext or Redux?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. So we shall use Redux in case of complex data management.</p>
          </div>
        ),
      },
      {
        id: "asked-in-tcs-2",
        question: "2. Name the different types of react hooks?",
        answer: (
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
              <p>A. 💡 Quick Recall (10–15 sec)</p>
              <p>React provides two types of hooks like:</p>
              <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
                <li>
                  Built-in hooks are like useState, useEffect, useContext,
                  useReducer, useMemo, useCallback, useRef, etc.
                </li>
                <li>
                  Custom hooks are like any hook I build starting with use
                  prefix to reuse logic.
                </li>
              </ol>
            </div>
          </div>
        ),
      },
      {
        id: "asked-in-tcs-3",
        question:
          "3. What is react class based component and react functional component?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>
              A. React class based component is the older way of creating
              component in react. And it's just a normal javascript class.
            </p>
            <p>
              React functional component is the newer way of creating component
              in react. So it's just a normal javascript function which return
              some piece of jsx code so that's all is known as react functional
              component. So whenever I create any react functional component I
              create with a capital letter otherwise I'll get an error because
              it's a react way to understand that this is a react functional
              component.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-tcs-4",
        question: "4. Where can you use async/await in react?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec)</p>
            <p>
              I use async/await inside functions in React like event handlers,
              helper functions and functions called inside callback function of
              useEffect hook. I don’t make the useEffect hook callback function
              async instead I define an async function inside it and then I call
              that function.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-tcs-5",
        question: "5. How can we do code splitting in react?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec)</p>
            <p>
              Code splitting in React means breaking the large scale app bundle
              into smaller bundles that are loaded on demand. This reduces the
              initial bundle size and improves page load performance. And it’s
              commonly done using React.lazy function, dynamic import() function
              and Suspense component.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-tcs-6",
        question: "6. Define Error Boundary?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>
              A. Error Boundary is the special react component that catches
              JavaScript errors anywhere in their child component tree, log
              those errors and display a fallback UI instead of crashing the
              entire app.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-tcs-7",
        question: "7. Define props drilling?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec)</p>
            <p>
              Props drilling is a situation in React where data is passed from a
              parent component to deeply nested child components through
              multiple intermediate components, even though those intermediate
              components don’t need the data themselves.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-tcs-8",
        question:
          " 8. Let say we've component a, component b and component c then if we want to pass props from component a to component c so can we do it instead of using props drilling?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>
              A. Yeah, absolutely! We can use React Context API or a state
              management library like Redux instead of using props drilling if
              we want to pass props from Component A to Component C without
              going through Component B.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-tcs-9",
        question: "9. Define Redux?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>💡 Quick Recall (15 sec)</p>
            <p>
              A. Redux is a predictable state container for JavaScript
              applications like React that helps to manage and centralize
              application state in a consistent and predictable way.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-tcs-10",
        question:
          "10. Describe briefly how the whole flow of redux architecture works?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>
              A. Let's assume there is food ordering app where there is a cart
              on header and there is food card on which it have add button so
              now let me tell you how the whole flow of redux architecture works
              behind the scene.
            </p>
            <p>
              So when I click on that add button it dispatches an action which
              calls the reducer function which modifies the slices of the redux
              store and because the header component is subscribed to this store
              using a selector then cart data on the header component will
              automatically be updated.
            </p>
            <p>
              So this is how the whole flows of redux architecture works behind
              the scene.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-tcs-11",
        question: "11. Define key prop in React?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>
              A. In React, the key prop is a special reserved prop which is used
              to help React to identify which items in a list have changed,
              added and removed. It helps in optimizing rendering performance
              when working with dynamic lists.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-tcs-12",
        question:
          "12. Why defining a key prop to a list items is important in React?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec)</p>
            <p>
              The key prop helps react to identify which items in a list have
              changed, added and removed. Without unique keys, react may
              re-render more items than necessary which leads to inefficient
              updates and potential UI bugs. Therefore, defining a key prop to a
              list items is important in react.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    id: "asked-in-lti-mind-tree",
    category: "Asked in LTIMindTree",
    questions: [
      {
        id: "asked-in-lti-mind-tree-1",
        question:
          "1. Can you explain the key differences between react class component and react functional component with hook? When would you choose one over the other?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>
              A. React class component is the older way of creating component in
              react. And it's a normal javascript class.
            </p>
            <p>
              React functional component is the newer way of creating component
              in react. So it's just a normal javascript function which return
              some piece of jsx code so that's all is known as react functional
              component. So whenever I create any react functional component I
              create with a capital letter otherwise I'll get an error because
              it's a react way to understand that this is a react functional
              component.
            </p>
            <p>
              For new development, I prefer react functional components because
              they are cleaner, easier to maintain, and allow logic reuse
              through custom hooks. However, react class components are still
              used in legacy codebases.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-lti-mind-tree-2",
        question:
          "2. Walk me through the process of implementing state management using redux into react application? What are some best practice you follow?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>
              A. Let's assume there is food ordering app where there is a cart
              on header and there is food card on which it have add button so
              now let me walk you through the process of implementing redux into
              react application and that are like:
            </p>
            <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
              <li>
                First of all, I've to install two libraries like
                @reduxjs/toolkit and react-redux so that I can work with redux.
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
        ),
      },
      {
        id: "asked-in-lti-mind-tree-3",
        question:
          "3. How do you approach unit testing into react component? Can you give an example of test you've written and explain your testing strategy?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec):</p>
            <p>
              For React unit testing, I usually use @testing-library/react. And
              then let say I render the contact component in a test DOM and then
              query element like heading, and then assert it's presence with
              expect function for checking if the contact page heading render or
              not.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-lti-mind-tree-4",
        question:
          "4. Explain how you could use material UI in a react project? What are some advantages and potential challenges of using this UI library?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec):</p>
            <p>
              I use Material UI by installing it via npm, importing ready-made
              components like Button and Card, and customizing the design using
              ThemeProvider. It helps to build professional UIs quickly, but
              styling overrides and bundle size can be challenges if not managed
              properly.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-lti-mind-tree-5",
        question:
          "5. Can you describe a situation where you've used github copilot to assist in writing unit tests? What was your experience, and how did it impact your workload?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec)</p>
            <p>
              Yeah! I’ve used GitHub Copilot to speed up writing unit tests by
              generating repetitive test cases. After writing the first test
              manually, Copilot suggested similar tests, which reduced
              boilerplate work and helped me focus more on edge cases and logic
              validation.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-lti-mind-tree-6",
        question:
          "6. Describe your experience with performance optimization in react? What techniques have you used to improve the performance of a react application? or How do you optimize the performance of a React application?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec):</p>
            <p>
              I optimize React performance by reducing unnecessary re-renders
              and minimizing bundle size. I use code splitting with React.lazy
              and Suspense, memoization with React.memo, useMemo, useCallback,
              proper key usage in lists, debouncing API calls and bundler
              optimizations with Vite or Webpack.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-lti-mind-tree-7",
        question:
          "7. How do you handle API integration in the react application? Can you walk me through your approach to fetching and managing data for a mapping service?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec):</p>
            <p>
              I prefer rendering the UI first, then making an API call in
              useEffect hook and then updating the state with the fetched data.
              This way, users see the layout instantly and I avoid blocking the
              initial render.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-lti-mind-tree-8",
        question:
          "8. Can you explain the concept of React hooks, an example of how we use this concept to solve specific problem in a project?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>
              A. React hooks are normal javascript functions which are given to
              us by react and they're pre-build and the only thing is that those
              functions comes with some super powers. Those functions had some
              return logic written behind the scenes inside react. Those
              functions are the utility functions given to us by react. So there
              are multiple utility functions that are known as react hooks. For
              example: useState, useEffect, useContext, useMemo, useCallback,
              useReducer, useRef etc.
            </p>
            <p>
              So, I use React Hooks to solve specific problems by separating
              state and side effects. For example, I use useState to store API
              data and useEffect to fetch that data when a component mounts so
              keeping the logic clean and predictable.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-lti-mind-tree-9",
        question:
          "9. How does React Hook help in improving the performance of functional components?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec)</p>
            <p>
              React Hooks improve performance by giving us fine-grained control
              over state, effects, and memoization. Hooks like useRef,
              useEffect, useMemo, and useCallback help to avoid unnecessary
              re-renders and expensive recomputation.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-lti-mind-tree-10",
        question:
          "10. What is the role of state management in optimizing performance?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec):</p>
            <p>
              State management helps to ensure that it only re-render the parts
              of the UI that actually need to change. By structuring state
              properly and keeping it as local as possible, it reduce
              unnecessary renders and improve app performance.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-lti-mind-tree-11",
        question:
          "11. Describe a useCases so let say I have an input text box. Now, you know, anything related to calling an API is an expensive operation, right? And I want to minimize it as much as possible. So you are putting in your input in text box and after you have completed putting the input in text box, then I want to call the API, right? So I want there to be some delay after you complete, you know completing your input text in the search text box. What is the technique of implementing that in React and how do you do it?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec):</p>
            <p>
              So in such case, I think I can use a technique like debouncing
              with useEffect and setTimeout. So debouncing delays an API call
              until the user stops typing for a set time, so that I avoid
              sending a request for every keystroke.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-lti-mind-tree-12",
        question: "12. Define debounce and throttling?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec):</p>
            <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
              <li>
                <p>
                  Debouncing delays a function's execution until there's a pause
                  after the last event. For example, instead of calling a API on
                  every keystroke, I wait 200ms after the user stops typing
                  before making the API call.
                </p>
                <p>
                  In React, I usually implement this using useState and
                  useEffect. I bound the search input to a state variable and
                  then I include that state variable in the useEffect hook
                  dependency array. So, every time the user types then the state
                  updates and then react quickly trigger it reconciliation
                  algorithm process and then it re-renders the component and
                  then because the dependency changed React first executes the
                  previous useEffect cleanup function where I call
                  clearTimeout() function to cancel the previous timer and then
                  it runs the useEffect callback again which starts a new
                  setTimeout() function and then if the user doesn't type any
                  key strokes until 200ms then I actually make a API call and
                  all the other API calls before 200ms are just got decline.
                </p>
                <p>So this whole concept is knowns as Debouncing in react.</p>
              </li>
              <li>
                <p>
                  Throttle ensures execution happens at most once in a set
                  interval. For example, let say only call a function every 1s,
                  even if the event fires continuously.
                </p>
              </li>
            </ol>
          </div>
        ),
      },
      {
        id: "asked-in-lti-mind-tree-13",
        question:
          "13. Describe your experience with typescript in react project? How do you typically setup typescript with react? [IGNORE THIS FOR NOW]",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>
              A. I have worked with TypeScript in React projects to add strong
              typing, which helps in catching errors early and makes the
              codebase easier to maintain and collaborate on.
            </p>
            <p>
              For setting up TypeScript in a React project, nowadays I prefer
              using Vite or Next.js, as Create React App is deprecated.
            </p>
            <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
              <li>
                With Vite, I can create a TypeScript React project using: npm
                create vite@latest and select React + TypeScript template.
              </li>
              <li>
                For Next.js, I initialize the project with npx
                create-next-app@latest, and if I select TypeScript, Next.js
                automatically sets up the tsconfig.json and type dependencies.
              </li>
            </ol>
            <p>
              After setup, I rename .js files to .tsx for components and .ts for
              utility files. Then, I define interfaces or types for component
              props, API responses, and application state.
            </p>
            <p>
              I also configure strict TypeScript rules in tsconfig.json to
              enforce better type safety. Throughout the project, I make use of
              TypeScript features like optional types, generics, and union types
              for better code predictability.
            </p>
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
        question: "1. How do you optimize files using webpack?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec):</p>
            <p>
              I optimize files in Webpack by building in production mode,
              enabling minification and tree-shaking, splitting code into
              smaller chunks, using content-hashing for caching, optimizing
              assets like images and CSS, and analyzing bundles to remove unused
              code.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-cognizant-2",
        question: "2. Difference between mapStateToProps and StateMapToProps?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec)</p>
            <p>
              There is no function called StateMapToProps in Redux. The correct
              and official function is mapStateToProps, which maps Redux store
              state to a React component’s props.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-cognizant-3",
        question:
          "3. Suppose I want to log api responses how to write test cases for it?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec):</p>
            <p>
              Mock the API call using jest, spy on the logger like console.log,
              trigger the component, wait for the async response, and assert
              that the logger was called with the expected data. Wherever
              possible, also verify the UI or state update instead of relying
              only on logs.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-cognizant-4",
        question: "4. Define useMemo, useCallback & useRef?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec):</p>
            <p>
              useMemo is a React Hook that lets you cache the result of a
              calculation between re-renders.
            </p>
            <p>
              useCallback is a React Hook that lets you cache a function
              definition between re-renders.
            </p>
            <p>
              useRef is a React Hook that lets you reference a value that’s not
              needed for rendering.
            </p>
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
        id: "asked-in-accenture-1",
        question: "1. Define higher order component?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec):</p>
            <p>
              A Higher Order Component (HOC) is a function that takes a
              component as input and returns a new enhanced component. It’s used
              to reuse component logic like authentication, logging, or data
              fetching across multiple components.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-accenture-2",
        question: "2. Define fragment?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec)</p>
            <p>
              A Fragment in React lets us group multiple elements without adding
              an extra DOM node. It helps to keep the DOM clean while returning
              multiple elements from a component.
            </p>
          </div>
        ),
      },
      {
        id: "asked-in-accenture-3",
        question: "3. When you'll use react context and redux?",
        answer: (
          <div className="flex flex-col gap-y-2">
            <p>A. 💡 Quick Recall (15 sec)</p>
            <p>
              I use React Context for small to medium shared state like themes
              or user info, and Redux for large, complex, or frequently updated
              global state where predictability, debugging, and scalability
              matter.
            </p>
          </div>
        ),
      },
    ],
  },
];
