const Header = () => {
    return (
      <div>
        <header className="flex items-center p-4 justify-between bg-gradient-to-r from-orange-500 to-yellow-400 flex-col sm:flex-row">
          <h1 className="font-semibold text-xl sm:text-2xl lg:text-4xl text-white">
            🍕 فست فود آنلاین
          </h1>
          <p className="font-semibold text-lg sm:text-xl lg:text-2xl text-white mt-2 sm:mt-0">
            بهترین غذاها در سریع ترین زمان
          </p>
        </header>
      </div>
    );
  };
  
  export default Header;
  