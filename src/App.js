import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="grid grid-cols-4 h-screen font-nunito ">
      {/* nav start */}
      <nav className="col-span-1">
        <div>
          <h1>
            <a href="/">Food Ninja</a>
          </h1>
        </div>

        <ul>
          <li>
            <a href="#">
              <span>Home</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span>About</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
      {/* nav end */}

      <main className="col-span-3 p-3 bg-gray-100 pl-16">
        <div className="text-center md:text-right">
          <a href="#"
            className="btn"
          >Log in</a>
          <a href="#"
            className="btn"
          >Sign up</a>
        </div>

        <header className="">
          <h2 className="font-bold text-7xl text-gray-700 my-4">Recipes</h2>
          <h3 className="text-3xl font-semibold my-8">For Ninjas</h3>
        </header>

        <div>
          <h4 className="font-bold text-xl text-gray-500 my-8 border-b-2 border-gray-100">Latest Recipes</h4>

          <div className="grid grid-cols-4 gap-8">
            {/* card go here */}
            <div className="card">
              <img className="object-cover w-full" src="img/stew.jpg" alt="" />
              <div className="m-3">
                <span className="block font-bold text-gray-600 text-lg">5 Bean Chi</span>
                <span className="block font-light text-sm">Recipe by Mario</span>
              </div>
            </div>

            <div className="card">
              <img className="object-cover w-full" src="img/stew.jpg" alt="" />
              <div className="m-3">
                <span className="block font-bold text-gray-600 text-lg">5 Bean Chi</span>
                <span className="block font-light text-sm">Recipe by Mario</span>
              </div>
            </div>

            <div className="card">
              <img className="object-cover w-full" src="img/stew.jpg" alt="" />
              <div className="m-3">
                <span className="block font-bold text-gray-600 text-lg">5 Bean Chi</span>
                <span className="block font-light text-sm">Recipe by Mario</span>
              </div>
            </div>
            <div className="card">
              <img className="object-cover w-full" src="img/stew.jpg" alt="" />
              <div className="m-3">
                <span className="block font-bold text-gray-600 text-lg">5 Bean Chi</span>
                <span className="block font-light text-sm">Recipe by Mario</span>
              </div>
            </div>
          </div>

          <h4 className="font-bold text-xl  mt-16 text-gray-500 my-8 border-b-2 border-gray-100">Most Popular</h4>
          <div className="grid grid-cols-4 gap-8">
            {/* card go here */}
            <div className="card">
              <img className="object-cover w-full" src="img/stew.jpg" alt="" />
              <div className="m-3">
                <span className="block font-bold text-gray-600 text-lg">5 Bean Chi</span>
                <span className="block font-light text-sm">Recipe by Mario</span>
              </div>
            </div>

            <div className="card">
              <img className="object-cover w-full" src="img/stew.jpg" alt="" />
              <div className="m-3">
                <span className="block font-bold text-gray-600 text-lg">5 Bean Chi</span>
                <span className="block font-light text-sm">Recipe by Mario</span>
              </div>
            </div>

            <div className="card">
              <img className="object-cover w-full" src="img/stew.jpg" alt="" />
              <div className="m-3">
                <span className="block font-bold text-gray-600 text-lg">5 Bean Chi</span>
                <span className="block font-light text-sm">Recipe by Mario</span>
              </div>
            </div>
          </div>

          <div>
            <div >Load  more</div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
