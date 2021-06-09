import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="grid grid-cols-4 font-nunito">
      {/* nav start */}
      <nav className="col-span-1">
        <div>
          <h1>
            <a href="/">Food Ninja</a>
            <a href='}'>LinkedIn handle</a>
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

      <main className="col-span-3">
        <div>
          <a href="#"
            className=""
          >Log in</a>
          <a href="#">Sign up</a>
        </div>

        <header>
          <h2 >Recipes</h2>
          <h3>For Ninjas</h3>
        </header>

        <div>
          <h4 className="text-primary ">Latest Recipes</h4>

          <div className="grid grid-cols-3 gap-3">
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

          <h4>Latest Recipes</h4>
          <div>
            {/* cards go here */}
          </div>

          <div>
            <div>Load  more</div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
