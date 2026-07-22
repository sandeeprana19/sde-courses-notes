const htmlInterviewQnAs = [
  {
    id: "asked-in-interview",
    category: "Asked in an Interview",
    questions: [
      {
        id: "asked-in-interview-1",
        question: "1. Disadvantages or cons of HTML5?",
        answer: (
          <div className="flex items-start">
            <p>A.</p>
            <ol className="list-[lower-roman] pl-5 flex flex-col gap-y-2">
              <li>Client-side rendering.</li>
              <li>Local storage is less secure.</li>
              <li>Different video supports for different browsers.</li>
              <li>Doesn't support old browsers.</li>
              <li>Media licensing cost.</li>
              <li>Tough to handle responsiveness on the range of devices.</li>
            </ol>
          </div>
        ),
      },
      {
        id: "asked-in-interview-2",
        question: "2. What is a semantic tag?",
        answer: (
          <p>
            A. Semantic HTML tags are tags that define the meaning of the
            content they contain. For example, tags like
            {` <header>, <article>`}, etc.
          </p>
        ),
      },
      {
        id: "asked-in-interview-3",
        question: " 3. Define meta tag? And where do we put meta tags?",
        answer: (
          <p>
            A. The {`<meta>`} tag defines metadata about HTML documents.
            Metadata is data (information) about data. {`<meta>`} tags always go
            inside the {`<head>`} element, and are typically used to specify
            character set, page description, keywords, author of the document,
            and viewport settings.
          </p>
        ),
      },
      {
        id: "asked-in-interview-4",
        question: "4. Difference between div and span?",
        answer: (
          <p>
            A. {`<div>`} is a block-level element and {`<span>`} is an inline
            element.
          </p>
        ),
      },
      {
        id: "asked-in-interview-5",
        question: "5. What do we put inside the div?",
        answer: (
          <p>
            A. The {`<div>`} tag defines a division or a section in an HTML
            document. The {`<div>`} tag is used as a container for HTML elements
            - which is then styled with CSS or manipulated with JavaScript. The{" "}
            {`<div>`} tag is easily styled by using the class or id attribute.
            Any sort of content can be put inside the {`<div>`} tag!
          </p>
        ),
      },
      {
        id: "asked-in-interview-6",
        question: "6. What is the srcset attribute of source tag?",
        answer: (
          <p>
            A. srcset defines the set of images we will allow the browser to
            choose between, and what size each image is.
          </p>
        ),
      },
      {
        id: "asked-in-interview-7",
        question: "7. Difference between rem and px?",
        answer: (
          <p>
            A. Pixels are an absolute unit, so when you set the font size to 24
            pixels, it's going to be 24 pixels. Rems, on the other hand, are
            relative units that are based on the document's font-size
          </p>
        ),
      },
      {
        id: "asked-in-interview-8",
        question: "8. Difference between flex and grid?",
        answer: (
          <p>
            A. Flexbox was designed for layout in one dimension - either a row
            or a column. Grid was designed for two-dimensional layout - rows,
            and columns at the same time.
          </p>
        ),
      },
      {
        id: "asked-in-interview-9",
        question: "9. Difference between opacity and alpha?",
        answer: (
          <p>
            A. Opacity is a property of an object, while alpha is a property of
            colour. Opacity affects the entire object, while alpha affects only
            the transparency of the stroke or fill of the object.
          </p>
        ),
      },
      {
        id: "asked-in-interview-10",
        question: "10. Difference between responsive and adaptive design?",
        answer: (
          <p>
            A. Responsive and adaptive design are both types of web design that
            adapt to different screen sizes. Responsive design uses a single
            layout that adjusts to the screen size. Adaptive design uses
            multiple fixed layouts and chooses the best configuration for the
            available space.
          </p>
        ),
      },
    ],
  },
];

export default htmlInterviewQnAs;
