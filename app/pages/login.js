import React from "react";
import Form from "../components/login/form";
import Header from "../components/login/header";
import Sidebar from "../components/login/sidebar";

const Login = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="flex flex-1">
          <aside>
            <Sidebar />
          </aside>
          <section className="w-full max-w-md mx-auto">
            <Form />
          </section>
        </div>
      </main>
    </>
  );
};

export default Login;







