const Sidebar = () => {
    return (
      <div className="hidden lg:flex flex-col justify-between bg-yellow-200 lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
        <div className="flex items-center justify-start space-x-3">
          <span className="bg-black rounded-full w-8 h-8"></span>
          <a href="#" className="font-medium text-xl">Brand</a>
        </div>
        <div className="space-y-5">
          <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">Enter your account and discover new experiences</h1>
          <p className="text-lg">You do not have an account?</p>
          <button className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Create account here</button>
        </div>
        <p className="font-medium">© 2022 Company</p>
      </div>
    );
  };
  
  export default Sidebar;
  