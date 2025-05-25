const NextJs = () => {
  return (
    <div className="lg:w-7/12 w-full mx-auto flex flex-wrap gap-y-4 px-4 lg:px-0">
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="namaste-javascript" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          1. How to create new project?
        </div>
        <div className="collapse-content flex flex-col gap-y-2">
          <p>
            We recommend using pnpm as your package manager, as it's faster and
            more efficient than npm or yarn. If you don't have pnpm installed,
            you can install it globally by running:
          </p>
          <p>npm install -g pnpm</p>
          <p>To create a Next.js app run the following command:</p>
          <p>
            npx create-next-app@latest nextjs-dashboard --example
            "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
            --use-pnpm
          </p>
        </div>
      </div>
    </div>
  );
};

export default NextJs;
