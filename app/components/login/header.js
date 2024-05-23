import Head from 'next/head';

const Header = ({ children }) => {
  return (
    <div className="font-roboto bg-white min-h-screen flex flex-col justify-between">
      <Head>
        <title>Your Page Title</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" />
      </Head>
      {children}
      <footer className="flex justify-center flex-col m-auto mb-16 text-center text-lg dark:text-slate-200">
        <p className="font-bold mb-1">Built by <a href="#" className="underline dark:text-white">Frank Esteban</a></p>
        <p>Contact me on the different platforms and social networks</p>
        {/* Your social links here */}
      </footer>
    </div>
  );
};

export default Header;
