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
              <div className="collapse-content">
                <div className="flex flex-col gap-y-2">
                  <div>
                    <p>
                      A. Thank you for this opportunity to introduce myself. I'm
                      currently working as a React Developer at Capital Numbers
                      Infotech Pvt. Ltd., where I have been an integral part of
                      the React engineering team. I've had the privilege of
                      leading 2 out of 3 major React projects, including:
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
                  </div>
                  <p>
                    All these projects were developed using technologies like
                    React, Redux, JavaScript, TailwindCSS, MaterialUI, and SCSS,
                    ensuring modern and efficient web applications.
                  </p>
                  <div>
                    <p>
                      On the personal side, I also built Netflix-GPT, a
                      Netflix-like React app that demonstrates my ability to
                      innovate and optimize performance. Key features include:
                    </p>
                    <ol className="list-[lower-roman] pl-8 flex flex-col gap-y-2">
                      <li>
                        A GPT-powered search delivering five related movies for
                        any genre query.
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
                    team.
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
              <div className="collapse-content">
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
                    And now let's say we've updated the state variable by
                    passing the fetched api data as an argument to setState
                    method within componentDidMount function of 1st child class
                    component then react will start updating phase of 1st child
                    class component where render will be called within render
                    phase & then react start the commit phase where it will
                    update the DOM in a single phase & then componentDidUpdate
                    will be called. So this is how the updating phase of the
                    react lifecycle methods works.
                  </p>
                  <p>
                    And now let's say we've left the page and go to another page
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
              <div className="collapse-content">
                <p>
                  A. React hooks are normal javascript function which are given
                  to us by react and they're pre-build and the only thing is
                  that those functions comes with some super powers. Those
                  functions had some return logic written behind the scenes
                  inside react. Those functions are the utility functions given
                  to us by react. So there are multiple utility functions that
                  are known as react hooks. For example: useState, useEffect,
                  useSelector, useDispatch, etc.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                4. Define useState() hook?
              </div>
              <div className="collapse-content">
                <p>
                  A. The useState() hook basically generates super powerful
                  state variables in react.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                5. What is an useEffect hook? Describe it?
              </div>
              <div className="collapse-content">
                <p>
                  A. An useEffect hook has its own specific function. So first
                  of all, it needed to be imported as named import from react
                  library. So useEffect hook is again a function so we’ll call
                  it like a function which takes two arguments so the first
                  argument is an arrow function which is a callback function and
                  the second argument is a dependency array.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                6. Define virtual DOM?
              </div>
              <div className="collapse-content">
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
              <div className="collapse-content">
                <p>
                  A. Diff algorithm basically finds out the difference between
                  two virtual DOMs that are updated virtual DOM and previous
                  virtual DOM.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                8. What is a Reconciliation Algorithm?
              </div>
              <div className="collapse-content">
                <p>
                  A. Reconciliation algorithm is also known as React Fiber since
                  the release of React 16. So let’s say we’ve a UI of top rated
                  restaurant button and restaurants container which contain 10
                  restaurant cards so whenever react render this UI it will
                  create the virtual DOM which is actually the representation of
                  actual dom & then react keep this virtual DOM with it. And
                  then let’s say on click on that top rated restaurant button
                  react filter out top rated restaurants based on some logic &
                  then react will again create the updated virtual DOM & keep it
                  with it. So at this moment diff algorithm comes into picture
                  to find out the difference between two virtual DOMs that is
                  the previous virtual DOM meaning the old virtual DOM before
                  restaurants filtered & updated virtual DOM meaning the new
                  virtual DOM after restaurants filtered & it will then actually
                  update the DOM on every render cycle. So basically, this
                  reconciliation algorithm or react fiber is the new way to find
                  out the difference between two virtual DOMs & update or
                  manipulate the DOM efficiently on every render cycle because
                  this is the core job of react. So this whole algorithm is
                  known as a reconciliation algorithm.
                </p>
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
              <div className="collapse-content">
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
              <div className="collapse-content">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. useState, useEffect, useSelector, useDispatch, etc. are
                    the different types of react hooks.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                3. What is react class based component & react functional
                component?
              </div>
              <div className="collapse-content">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. React class based component is the older way of creating
                    component in react. And it's a normal javascript class.
                  </p>
                  <p>
                    React functional component is just a normal javascript
                    function which return jsx code and not just
                    react element it can return a branch of jsx and
                    that's all is react functional component. So whenever we
                    create any react functional component create with a capital
                    letter otherwise we'll get an error because it's a react way
                    to understand that this is a component.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                4. Where can we use async await in react?
              </div>
              <div className="collapse-content">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. So we can write async keyword before an arrow function
                    let say fetchData to make it async & then we'll write await
                    before fetch() which will await for data to come. And then
                    we'll call this fetchData arrow function inside 1st argument
                    of useEffect which is the callback function because this is
                    best place to make an api call in react.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                5. How can we do code splitting in react?
              </div>
              <div className="collapse-content">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. The ways to do code splitting in react: 1. Using lazy()
                    and Suspense. 2. Code splitting with react router. 3.
                    Dynamic Imports with import(). 4. Webpack import() for
                    Manual Code Splitting. 5. Using a Bundler like Vite or
                    Webpack.
                  </p>
                </div>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="interview" />
              <div className="collapse-title text-xl font-medium">
                6. Define Error Boundary?
              </div>
              <div className="collapse-content">
                <div className="flex flex-col gap-y-2">
                  <p>
                    A. Error Boundary is the special components that catches JavaScript
                    errors anywhere in their child component tree, log those
                    errors and display a fallback UI instead of crashing the
                    entire app.
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
