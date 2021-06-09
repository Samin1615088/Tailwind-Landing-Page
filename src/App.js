import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import allData from './fakeData/fakeData';

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 h-screen font-nunito ">
      {/* nav start */}
      <nav className="col-span-1 mr-3 md:mr-0">
        <div className="mt-8">
          <h1 className="text-2xl font-bold text-gray-600 text-right ">
            <a href="/">Food Ninja</a>
          </h1>
        </div>

        <ul className="text-right my-8">
          <li className="my-1 py-1 border-r-4 border-primary">
            <a href="#" className="mr-2 flex flex-row justify-end ">
              <span className="align-text-bottom">Home</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </a>
          </li>

          <li className="my-1 py-1 border-r-4 border-transparent">
            <a href="#" className="mr-2 flex flex-row justify-end ">
              <span>About</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </li>

          <li className="my-1 py-1 border-r-4 border-transparent">
            <a href="#" className="mr-2 flex flex-row justify-end ">
              <span>Contact </span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 ml-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      {/* nav end */}

      <main className="col-span-3 p-3 bg-gray-100 md:pl-16">
        <div className="text-center md:text-right m-3">
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
          <h4 className="font-bold text-xl text-gray-500 my-8 border-b-2 border-gray-200">Latest Recipes</h4>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* card go here */}
            {
              allData?.latestRecipes.map(singleData => {
                return <Card singleData={singleData} key={singleData.id} />
              })
            }

          </div>

          <h4 className="font-bold text-xl  mt-16 text-gray-500 my-8 border-b-2 border-gray-200">Most Popular</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* card go here */}
            {
              allData?.mostPopularRecipes.map(singleData => {
                return <Card singleData={singleData} key={singleData.id} />
              })
            }
          </div>

          <div className="text-center my-16">
            <div className="btn">Load  more</div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
