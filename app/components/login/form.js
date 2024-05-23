import React from "react";

function form() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
      <div className="flex lg:hidden justify-between items-center w-full py-4">
        <div className="flex items-center justify-start space-x-3">
          <span className="bg-black rounded-full w-6 h-6"></span>
          <a href="#" className="font-medium text-lg">
            Brand
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <span>Not a member? </span>
          <a href="#" className="underline font-medium text-blue-600">
            Sign up now
          </a>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
        <form>
          <label htmlFor="username">Usuário:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default form;
